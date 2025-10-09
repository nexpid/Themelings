// app/utils/checkEnv.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var1 = global;
        var2 = global;
        var3 = var2.window;
        var3 = var3.GLOBAL_ENV;
        var5 = null;
        if(!(var5 == var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
        var4 = var2.window;
        var3 = {};
        var4['GLOBAL_ENV'] = var3;
case 2:
        var3 = var2.window;
        var3 = var3.GLOBAL_ENV;
        var3 = var3.API_VERSION;
        var3 = var5 != var3;
        if(var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
        var4 = var2.window;
        var4 = var4.GLOBAL_ENV;
        var4 = var4.API_ENDPOINT;
        var3 = var5 != var4;
case 4:
        if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
        var4 = var2.window;
        var4 = var4.GLOBAL_ENV;
        var4 = var4.GATEWAY_ENDPOINT;
        var3 = var5 != var4;
case 6:
        if(var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
        var4 = var2.window;
        var4 = var4.GLOBAL_ENV;
        var4 = var4.WEBAPP_ENDPOINT;
        var3 = var5 != var4;
case 8:
        if(var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
        var4 = var2.window;
        var4 = var4.GLOBAL_ENV;
        var4 = var4.CDN_HOST;
        var3 = var5 != var4;
case 10:
        if(var3) { _fun0001_ip = 12; continue _fun0001 }
case 13:
        var4 = var2.window;
        var4 = var4.GLOBAL_ENV;
        var4 = var4.ASSET_ENDPOINT;
        var3 = var5 != var4;
case 12:
        if(var3) { _fun0001_ip = 14; continue _fun0001 }
case 15:
        var4 = var2.window;
        var4 = var4.GLOBAL_ENV;
        var4 = var4.MEDIA_PROXY_ENDPOINT;
        var3 = var5 != var4;
case 14:
        if(var3) { _fun0001_ip = 16; continue _fun0001 }
case 17:
        var4 = var2.window;
        var4 = var4.GLOBAL_ENV;
        var4 = var4.IMAGE_PROXY_ENDPOINTS;
        var3 = var5 != var4;
case 16:
        if(var3) { _fun0001_ip = 18; continue _fun0001 }
case 19:
        var4 = var2.window;
        var4 = var4.GLOBAL_ENV;
        var4 = var4.WIDGET_ENDPOINT;
        var3 = var5 != var4;
case 18:
        if(var3) { _fun0001_ip = 20; continue _fun0001 }
case 21:
        var4 = var2.window;
        var4 = var4.GLOBAL_ENV;
        var4 = var4.INVITE_HOST;
        var3 = var5 != var4;
case 20:
        if(var3) { _fun0001_ip = 22; continue _fun0001 }
case 23:
        var4 = var2.window;
        var4 = var4.GLOBAL_ENV;
        var4 = var4.GUILD_TEMPLATE_HOST;
        var3 = var5 != var4;
case 22:
        if(var3) { _fun0001_ip = 24; continue _fun0001 }
case 25:
        var4 = var2.window;
        var4 = var4.GLOBAL_ENV;
        var4 = var4.GIFT_CODE_HOST;
        var3 = var5 != var4;
case 24:
        if(var3) { _fun0001_ip = 26; continue _fun0001 }
case 27:
        var4 = var2.window;
        var4 = var4.GLOBAL_ENV;
        var4 = var4.RELEASE_CHANNEL;
        var3 = var5 != var4;
case 26:
        if(var3) { _fun0001_ip = 28; continue _fun0001 }
case 29:
        var4 = var2.window;
        var4 = var4.GLOBAL_ENV;
        var4 = var4.DEVELOPERS_ENDPOINT;
        var3 = var5 != var4;
case 28:
        if(var3) { _fun0001_ip = 30; continue _fun0001 }
case 31:
        var4 = var2.window;
        var4 = var4.GLOBAL_ENV;
        var4 = var4.MARKETING_ENDPOINT;
        var3 = var5 != var4;
case 30:
        if(var3) { _fun0001_ip = 32; continue _fun0001 }
case 33:
        var4 = var2.window;
        var4 = var4.GLOBAL_ENV;
        var4 = var4.NETWORKING_ENDPOINT;
        var3 = var5 != var4;
case 32:
        if(var3) { _fun0001_ip = 34; continue _fun0001 }
case 35:
        var4 = var2.window;
        var4 = var4.GLOBAL_ENV;
        var4 = var4.BRAINTREE_KEY;
        var3 = var5 != var4;
case 34:
        if(var3) { _fun0001_ip = 36; continue _fun0001 }
case 37:
        var4 = var2.window;
        var4 = var4.GLOBAL_ENV;
        var4 = var4.STRIPE_KEY;
        var3 = var5 != var4;
case 36:
        if(var3) { _fun0001_ip = 38; continue _fun0001 }
case 39:
        var4 = var2.window;
        var4 = var4.GLOBAL_ENV;
        var4 = var4.ADYEN_KEY;
        var3 = var5 != var4;
case 38:
        if(var3) { _fun0001_ip = 40; continue _fun0001 }
case 41:
        var4 = var2.window;
        var4 = var4.GLOBAL_ENV;
        var4 = var4.PROJECT_ENV;
        var3 = var5 != var4;
case 40:
        if(var3) { _fun0001_ip = 42; continue _fun0001 }
case 43:
        var4 = var2.window;
        var4 = var4.GLOBAL_ENV;
        var4 = var4.REMOTE_AUTH_ENDPOINT;
        var3 = var5 != var4;
case 42:
        if(var3) { _fun0001_ip = 44; continue _fun0001 }
case 45:
        var4 = var2.window;
        var4 = var4.GLOBAL_ENV;
        var4 = var4.RTC_LATENCY_ENDPOINT;
        var3 = var5 != var4;
case 44:
        if(var3) { _fun0001_ip = 46; continue _fun0001 }
case 47:
        var4 = var2.window;
        var4 = var4.GLOBAL_ENV;
        var4 = var4.ACTIVITY_APPLICATION_HOST;
        var3 = var5 != var4;
case 46:
        if(var3) { _fun0001_ip = 48; continue _fun0001 }
case 49:
        var4 = var2.window;
        var4 = var4.GLOBAL_ENV;
        var4 = var4.PUBLIC_PATH;
        var3 = var5 != var4;
case 48:
        if(var3) { _fun0001_ip = 50; continue _fun0001 }
case 51:
        var4 = var2.window;
        var4 = var4.GLOBAL_ENV;
        var4 = var4.SPRIG_API_KEY;
        var3 = var5 != var4;
case 50:
        if(var3) { _fun0001_ip = 52; continue _fun0001 }
case 53:
        var3 = var2.window;
        var3 = var3.GLOBAL_ENV;
        var3 = var3.MUX_ENV_KEY;
case 52:
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
        var3 = 'wss://remote-auth-gateway.discord.gg';
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