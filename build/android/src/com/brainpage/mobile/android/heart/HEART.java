/*
       Licensed to the Apache Software Foundation (ASF) under one
       or more contributor license agreements.  See the NOTICE file
       distributed with this work for additional information
       regarding copyright ownership.  The ASF licenses this file
       to you under the Apache License, Version 2.0 (the
       "License"); you may not use this file except in compliance
       with the License.  You may obtain a copy of the License at

         http://www.apache.org/licenses/LICENSE-2.0

       Unless required by applicable law or agreed to in writing,
       software distributed under the License is distributed on an
       "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
       KIND, either express or implied.  See the License for the
       specific language governing permissions and limitations
       under the License.
 */

package com.brainpage.mobile.android.heart;

import org.apache.cordova.Config;
import org.apache.cordova.DroidGap;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Toast;

import com.arellomobile.android.push.PushManager;

public class HEART extends DroidGap
{
    @Override
    public void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        // Set by <content src="index.html" /> in config.xml

        //initialize the push manager, pushwoosh app ID and GCM sender ID(project num)
        PushManager pushManager = new PushManager(this, /*"F86CD-A3DC5"*/"B7BBF-34717", "535622621184");
        pushManager.onStartup(this);
        checkMessage(getIntent());

        super.loadUrl(Config.getStartUrl());
//        super.loadUrl("file:///android_asset/www/app.html");
    }
    
    @Override
    public void onNewIntent(Intent intent){
    	super.onNewIntent(intent);
        setIntent(intent);
     
        checkMessage(intent);
     
        setIntent(new Intent());
    }

	private void checkMessage(Intent intent) {
		if (null != intent)
	    {/*showMessage("push message is ");*/
	        if (intent.hasExtra(PushManager.PUSH_RECEIVE_EVENT))
	        {
	            showMessage("push message is " + intent.getExtras().getString(PushManager.PUSH_RECEIVE_EVENT));
	        }
	        else if (intent.hasExtra(PushManager.REGISTER_EVENT))
	        {
	            showMessage("register");
	        }
	        else if (intent.hasExtra(PushManager.UNREGISTER_EVENT))
	        {
	            showMessage("unregister");
	        }
	        else if (intent.hasExtra(PushManager.REGISTER_ERROR_EVENT))
	        {
	            showMessage("register error");
	        }
	        else if (intent.hasExtra(PushManager.UNREGISTER_ERROR_EVENT))
	        {
	            showMessage("unregister error");
	        }
	    }
	}

	private void showMessage(String message) {
		Toast.makeText(this, message, Toast.LENGTH_LONG).show();
	}
}
