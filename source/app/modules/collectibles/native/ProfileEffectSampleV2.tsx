// app/modules/collectibles/native/ProfileEffectSampleV2.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var11 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var11;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot2 = var7;
    var4 = var4.Image;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot4 = var7;
    var4 = var4.jsxs;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'width': '100%', 'resizeMode': 'cover', 'bottom': 5};
    var4['profileSkeletonBackground'] = var9;
    var9 = {'width': '100%', 'height': '100%', 'resizeMode': 'contain', 'bottom': 0, 'right': 0};
    var4['profileSkeletonBackgroundBundle'] = var9;
    var9 = {'position': 'absolute', 'bottom': 1, 'width': '100%', 'height': '100%', 'overflow': 'hidden'};
    var10 = 3;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.radii;
    var10 = var10.sm;
    var9['borderRadius'] = var10;
    var4['profileEffectContainer'] = var9;
    var9 = {};
    var10 = 0.5;
    var9['opacity'] = var10;
    var4['purchasedProfileEffect'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/ProfileEffectSampleV2.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var9 = var1.item;
            var7 = var1.isPurchased;
            var10 = var1.isDarkTheme;
            var11 = var1.bundle;
            var1 = _closure1_slot6;
            var4 = undefined;
            var12 = var1.bind(var4)();
            var3 = _closure1_slot5;
            var2 = _closure1_slot2;
            var1 = {};
            var8 = var12.profileEffectContainer;
            var5 = new Array(2);
            var5[0] = var8;
            if(!var7) { _fun0001_ip = 72; continue _fun0001 }
 66:
            var7 = var12.purchasedProfileEffect;
 72:
            var5[1] = var7;
            var1['style'] = var5;
            var8 = _closure1_slot4;
            var7 = _closure1_slot3;
            var5 = {};
            if(var11) { _fun0001_ip = 101; continue _fun0001 }
 93:
            var13 = var12.profileSkeletonBackground;
            _fun0001_ip = 107; continue _fun0001;
 101:
            var13 = var12.profileSkeletonBackgroundBundle;
 107:
            var12 = new Array(1);
            var12[0] = var13;
            var5['style'] = var12;
            if(var11) { _fun0001_ip = 156; continue _fun0001 }
 122:
            var11 = _closure1_slot0;
            var13 = _closure1_slot1;
            if(var10) { _fun0001_ip = 142; continue _fun0001 }
 133:
            var10 = 5;
            var10 = var13[var10];
            _fun0001_ip = 149; continue _fun0001;
 142:
            var12 = 4;
            var10 = var13[var12];
 149:
            var10 = var11.bind(var4)(var10);
            _fun0001_ip = 172; continue _fun0001;
 156:
            var11 = {};
            var12 = 'https://cdn.discordapp.com/assets/content/e8398a26cc845c96d8a6863af4a0384e41bf2ed1d028ab3280e24c72eb115a0e.png';
            var11['uri'] = var12;
            var10 = var11;
 172:
            var5['source'] = var10;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot4;
            var7 = _closure1_slot0;
            var10 = _closure1_slot1;
            var6 = 6;
            var6 = var10[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {'profileEffectId': null, 'bannerAdjustment': 0, 'useThumbnail': true};
            var9 = var9.id;
            var6['profileEffectId'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();