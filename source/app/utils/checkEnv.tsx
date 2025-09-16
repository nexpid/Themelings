// app/utils/checkEnv.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var1 = global;
        var2 = global;
        var3 = var2.window;
        var3 = var3.GLOBAL_ENV;
        var5 = null;
        if(!(var5 == var3)) { _fun0001_ip = 37; continue _fun0001 }
 23:
        var4 = var2.window;
        var3 = {};
        var4['GLOBAL_ENV'] = var3;
 37:
        var3 = var2.window;
        var3 = var3.GLOBAL_ENV;
        var3 = var3.API_VERSION;
        var3 = var5 != var3;
        if(var3) { _fun0001_ip = 84; continue _fun0001 }
 62:
        var4 = var2.window;
        var4 = var4.GLOBAL_ENV;
        var4 = var4.API_ENDPOINT;
        var3 = var5 != var4;
 84:
        if(var3) { _fun0001_ip = 109; continue _fun0001 }
 87:
        var4 = var2.window;
        var4 = var4.GLOBAL_ENV;
        var4 = var4.GATEWAY_ENDPOINT;
        var3 = var5 != var4;
 109:
        if(var3) { _fun0001_ip = 134; continue _fun0001 }
 112:
        var4 = var2.window;
        var4 = var4.GLOBAL_ENV;
        var4 = var4.WEBAPP_ENDPOINT;
        var3 = var5 != var4;
 134:
        if(var3) { _fun0001_ip = 159; continue _fun0001 }
 137:
        var4 = var2.window;
        var4 = var4.GLOBAL_ENV;
        var4 = var4.CDN_HOST;
        var3 = var5 != var4;
 159:
        if(var3) { _fun0001_ip = 184; continue _fun0001 }
 162:
        var4 = var2.window;
        var4 = var4.GLOBAL_ENV;
        var4 = var4.ASSET_ENDPOINT;
        var3 = var5 != var4;
 184:
        if(var3) { _fun0001_ip = 209; continue _fun0001 }
 187:
        var4 = var2.window;
        var4 = var4.GLOBAL_ENV;
        var4 = var4.MEDIA_PROXY_ENDPOINT;
        var3 = var5 != var4;
 209:
        if(var3) { _fun0001_ip = 234; continue _fun0001 }
 212:
        var4 = var2.window;
        var4 = var4.GLOBAL_ENV;
        var4 = var4.IMAGE_PROXY_ENDPOINTS;
        var3 = var5 != var4;
 234:
        if(var3) { _fun0001_ip = 259; continue _fun0001 }
 237:
        var4 = var2.window;
        var4 = var4.GLOBAL_ENV;
        var4 = var4.WIDGET_ENDPOINT;
        var3 = var5 != var4;
 259:
        if(var3) { _fun0001_ip = 284; continue _fun0001 }
 262:
        var4 = var2.window;
        var4 = var4.GLOBAL_ENV;
        var4 = var4.INVITE_HOST;
        var3 = var5 != var4;
 284:
        if(var3) { _fun0001_ip = 309; continue _fun0001 }
 287:
        var4 = var2.window;
        var4 = var4.GLOBAL_ENV;
        var4 = var4.GUILD_TEMPLATE_HOST;
        var3 = var5 != var4;
 309:
        if(var3) { _fun0001_ip = 334; continue _fun0001 }
 312:
        var4 = var2.window;
        var4 = var4.GLOBAL_ENV;
        var4 = var4.GIFT_CODE_HOST;
        var3 = var5 != var4;
 334:
        if(var3) { _fun0001_ip = 359; continue _fun0001 }
 337:
        var4 = var2.window;
        var4 = var4.GLOBAL_ENV;
        var4 = var4.RELEASE_CHANNEL;
        var3 = var5 != var4;
 359:
        if(var3) { _fun0001_ip = 384; continue _fun0001 }
 362:
        var4 = var2.window;
        var4 = var4.GLOBAL_ENV;
        var4 = var4.DEVELOPERS_ENDPOINT;
        var3 = var5 != var4;
 384:
        if(var3) { _fun0001_ip = 409; continue _fun0001 }
 387:
        var4 = var2.window;
        var4 = var4.GLOBAL_ENV;
        var4 = var4.MARKETING_ENDPOINT;
        var3 = var5 != var4;
 409:
        if(var3) { _fun0001_ip = 434; continue _fun0001 }
 412:
        var4 = var2.window;
        var4 = var4.GLOBAL_ENV;
        var4 = var4.NETWORKING_ENDPOINT;
        var3 = var5 != var4;
 434:
        if(var3) { _fun0001_ip = 459; continue _fun0001 }
 437:
        var4 = var2.window;
        var4 = var4.GLOBAL_ENV;
        var4 = var4.BRAINTREE_KEY;
        var3 = var5 != var4;
 459:
        if(var3) { _fun0001_ip = 484; continue _fun0001 }
 462:
        var4 = var2.window;
        var4 = var4.GLOBAL_ENV;
        var4 = var4.STRIPE_KEY;
        var3 = var5 != var4;
 484:
        if(var3) { _fun0001_ip = 509; continue _fun0001 }
 487:
        var4 = var2.window;
        var4 = var4.GLOBAL_ENV;
        var4 = var4.ADYEN_KEY;
        var3 = var5 != var4;
 509:
        if(var3) { _fun0001_ip = 534; continue _fun0001 }
 512:
        var4 = var2.window;
        var4 = var4.GLOBAL_ENV;
        var4 = var4.PROJECT_ENV;
        var3 = var5 != var4;
 534:
        if(var3) { _fun0001_ip = 559; continue _fun0001 }
 537:
        var4 = var2.window;
        var4 = var4.GLOBAL_ENV;
        var4 = var4.REMOTE_AUTH_ENDPOINT;
        var3 = var5 != var4;
 559:
        if(var3) { _fun0001_ip = 584; continue _fun0001 }
 562:
        var4 = var2.window;
        var4 = var4.GLOBAL_ENV;
        var4 = var4.RTC_LATENCY_ENDPOINT;
        var3 = var5 != var4;
 584:
        if(var3) { _fun0001_ip = 609; continue _fun0001 }
 587:
        var4 = var2.window;
        var4 = var4.GLOBAL_ENV;
        var4 = var4.ACTIVITY_APPLICATION_HOST;
        var3 = var5 != var4;
 609:
        if(var3) { _fun0001_ip = 634; continue _fun0001 }
 612:
        var4 = var2.window;
        var4 = var4.GLOBAL_ENV;
        var4 = var4.PUBLIC_PATH;
        var3 = var5 != var4;
 634:
        if(var3) { _fun0001_ip = 659; continue _fun0001 }
 637:
        var4 = var2.window;
        var4 = var4.GLOBAL_ENV;
        var4 = var4.SPRIG_API_KEY;
        var3 = var5 != var4;
 659:
        if(var3) { _fun0001_ip = 680; continue _fun0001 }
 662:
        var3 = var2.window;
        var3 = var3.GLOBAL_ENV;
        var3 = var3.MUX_ENV_KEY;
 680:
        var3 = var1.window;
        var4 = var3.GLOBAL_ENV;
        var3 = '//discord.com/api';
        var4['API_ENDPOINT'] = var3;
        var3 = var1.window;
        var4 = var3.GLOBAL_ENV;
        var3 = 9;
        var4['API_VERSION'] = var3;
        var3 = var1.window;
        var4 = var3.GLOBAL_ENV;
        var3 = 'wss://gateway.discord.gg';
        var4['GATEWAY_ENDPOINT'] = var3;
        var3 = var1.window;
        var3 = var3.GLOBAL_ENV;
        var4 = '//discord.com';
        var3['WEBAPP_ENDPOINT'] = var4;
        var3 = var1.window;
        var5 = var3.GLOBAL_ENV;
        var3 = 'cdn.discordapp.com';
        var5['CDN_HOST'] = var3;
        var3 = var1.window;
        var3 = var3.GLOBAL_ENV;
        var3['ASSET_ENDPOINT'] = var4;
        var3 = var1.window;
        var5 = var3.GLOBAL_ENV;
        var3 = '//media.discordapp.net';
        var5['MEDIA_PROXY_ENDPOINT'] = var3;
        var3 = var1.window;
        var5 = var3.GLOBAL_ENV;
        var3 = '//images-ext-1.discordapp.net,//images-ext-2.discordapp.net';
        var5['IMAGE_PROXY_ENDPOINTS'] = var3;
        var3 = var1.window;
        var5 = var3.GLOBAL_ENV;
        var3 = '//discord.com/widget';
        var5['WIDGET_ENDPOINT'] = var3;
        var3 = var1.window;
        var5 = var3.GLOBAL_ENV;
        var3 = 'discord.gg';
        var5['INVITE_HOST'] = var3;
        var3 = var1.window;
        var5 = var3.GLOBAL_ENV;
        var3 = 'discord.new';
        var5['GUILD_TEMPLATE_HOST'] = var3;
        var3 = var1.window;
        var5 = var3.GLOBAL_ENV;
        var3 = 'discord.gift';
        var5['GIFT_CODE_HOST'] = var3;
        var3 = var1.window;
        var5 = var3.GLOBAL_ENV;
        var3 = 'alpha';
        var5['RELEASE_CHANNEL'] = var3;
        var3 = var1.window;
        var3 = var3.GLOBAL_ENV;
        var3['DEVELOPERS_ENDPOINT'] = var4;
        var3 = var1.window;
        var3 = var3.GLOBAL_ENV;
        var3['MARKETING_ENDPOINT'] = var4;
        var3 = var1.window;
        var4 = var3.GLOBAL_ENV;
        var3 = '//router.discordapp.net';
        var4['NETWORKING_ENDPOINT'] = var3;
        var3 = var1.window;
        var4 = var3.GLOBAL_ENV;
        var3 = 'production_ktzp8hfp_49pp2rp4phym7387';
        var4['BRAINTREE_KEY'] = var3;
        var3 = var1.window;
        var4 = var3.GLOBAL_ENV;
        var3 = 'pk_live_CUQtlpQUF0vufWpnpUmQvcdi';
        var4['STRIPE_KEY'] = var3;
        var3 = var1.window;
        var4 = var3.GLOBAL_ENV;
        var3 = 'live_E3OQ33V6GVGTXOVQZEAFQJ6DJIDVG6SY';
        var4['ADYEN_KEY'] = var3;
        var3 = var1.window;
        var4 = var3.GLOBAL_ENV;
        var3 = 'production';
        var4['PROJECT_ENV'] = var3;
        var3 = var1.window;
        var4 = var3.GLOBAL_ENV;
        var3 = '//remote-auth-gateway.discord.gg';
        var4['REMOTE_AUTH_ENDPOINT'] = var3;
        var3 = var1.window;
        var4 = var3.GLOBAL_ENV;
        var3 = {};
        var4['SENTRY_TAGS'] = var3;
        var3 = var1.window;
        var4 = var3.GLOBAL_ENV;
        var3 = 'https://discordapp.com';
        var4['MIGRATION_SOURCE_ORIGIN'] = var3;
        var3 = var1.window;
        var4 = var3.GLOBAL_ENV;
        var3 = 'https://discord.com';
        var4['MIGRATION_DESTINATION_ORIGIN'] = var3;
        var3 = var1.window;
        var4 = var3.GLOBAL_ENV;
        var3 = '//latency.discord.media/rtc';
        var4['RTC_LATENCY_ENDPOINT'] = var3;
        var3 = var1.window;
        var4 = var3.GLOBAL_ENV;
        var3 = 'discordsays.com';
        var4['ACTIVITY_APPLICATION_HOST'] = var3;
        var3 = var1.window;
        var4 = var3.GLOBAL_ENV;
        var3 = '/';
        var4['PUBLIC_PATH'] = var3;
        var3 = var1.window;
        var3 = var3.GLOBAL_ENV;
        var2 = var2.process;
        var2 = var2.env;
        var2 = var2.DEV_SESSION_KEY;
        var3['DEV_SESSION_KEY'] = var2;
        var2 = var1.window;
        var3 = var2.GLOBAL_ENV;
        var2 = 'ZaQ2JuStvc';
        var3['SPRIG_API_KEY'] = var2;
        var1 = var1.window;
        var2 = var1.GLOBAL_ENV;
        var1 = '1qd16mdmdjasipqg3irobln4u';
        var2['MUX_ENV_KEY'] = var1;
        var2 = dependencyMap;
        var1 = 0;
        var3 = var2[var1];
        var2 = require;
        var1 = undefined;
        var4 = var2.bind(var1)(var3);
        var3 = var4.fileFinishedImporting;
        var2 = 'utils/checkEnv.tsx';
        var2 = var3.bind(var4)(var2);
        return var1;
    }
})();