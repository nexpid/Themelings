// app/modules/ads/BountyTypes.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var4 = function bountyCtaFromServer(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var1 = {};
            var2 = var4.url;
            var1['url'] = var2;
            var2 = var4.button_label;
            var1['buttonLabel'] = var2;
            var2 = var4.android;
            var5 = null;
            var6 = var5 != var2;
            var3 = undefined;
            if(!var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = {};
            var7 = var4.android;
            var7 = var7.android_app_id;
            var6['androidAppId'] = var7;
            var3 = var6;
case 2:
            var1['android'] = var3;
            var3 = var4.ios;
            var3 = var5 != var3;
            var2 = undefined;
            if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = {};
            var4 = var4.ios;
            var4 = var4.ios_app_id;
            var3['iosAppId'] = var4;
            var2 = var3;
case 4:
            var1['ios'] = var2;
            return var1;
        }
    };
    var _closure1_slot2 = var4;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var7);
    var1 = 1;
    var5 = var5[var1];
    var1 = undefined;
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/ads/BountyTypes.tsx';
    var5 = var6.bind(var7)(var5);
    var3['bountyCtaFromServer'] = var4;
    var2 = function bountyFromServer(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var1 = {};
            var3 = var2.id;
            var1['id'] = var3;
            var3 = var2.advertiser_name;
            var1['advertiserName'] = var3;
            var3 = var2.product_name;
            var1['productName'] = var3;
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var4 = 0;
            var8 = var7[var4];
            var5 = undefined;
            var10 = var6.bind(var5)(var8);
            var9 = var10.resolveOptionalAdCreativeCdnUrl;
            var8 = var2.product_icon;
            var8 = var9.bind(var10)(var8);
            var1['productIcon'] = var8;
            var8 = var7[var4];
            var10 = var6.bind(var5)(var8);
            var9 = var10.resolveOptionalAdCreativeCdnUrl;
            var8 = var2.video_preview;
            var8 = var9.bind(var10)(var8);
            var1['videoPreview'] = var8;
            var8 = var7[var4];
            var10 = var6.bind(var5)(var8);
            var9 = var10.resolveOptionalAdCreativeCdnUrl;
            var8 = var2.image_preview;
            var8 = var9.bind(var10)(var8);
            var1['imagePreview'] = var8;
            var4 = var7[var4];
            var7 = var6.bind(var5)(var4);
            var6 = var7.resolveAdCreativeCdnUrl;
            var4 = var2.video_hls;
            var4 = var6.bind(var7)(var4);
            var1['videoHls'] = var4;
            var4 = _closure1_slot2;
            var3 = var2.cta;
            var3 = var4.bind(var5)(var3);
            var1['cta'] = var3;
            var3 = var2.reward_timer_seconds;
            var2 = null;
            var4 = var2 != var3;
            var2 = 15;
            if(!var4) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var2 = var3;
case 6:
            var1['rewardTimerSeconds'] = var2;
            return var1;
        }
    };
    var3['bountyFromServer'] = var2;
    return var1;
})();