// app/modules/premium/native/gifting/PremiumFeaturesPromotionalLogo.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var7 = var4.Fragment;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/native/gifting/PremiumFeaturesPromotionalLogo.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function PremiumFeaturesPromotionalLogo(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var6 = var2.claimableRewards;
            var5 = var2.darkOverride;
            var24 = var2.avatarSize;
            var22 = var2.promoAvatarStyle;
            var23 = var2.promoSecondaryAvatarStyle;
            var11 = var2.promoRotatingStyle;
            var3 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 4;
            var7 = var9[var2];
            var4 = undefined;
            var13 = var3.bind(var4)(var7);
            var12 = var13.useStateFromStores;
            var7 = _closure1_slot5;
            var10 = new Array(1);
            var10[0] = var7;
            var7 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var17 = var12.bind(var13)(var10, var7);
            var2 = var9[var2];
            var10 = var3.bind(var4)(var2);
            var7 = var10.useStateFromStores;
            var12 = _closure1_slot4;
            var2 = new Array(1);
            var2[0] = var12;
            var1 = function() {
                var1 = _closure1_slot4;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var7 = var7.bind(var10)(var2, var1);
            var1 = 5;
            var1 = var9[var1];
            var2 = var3.bind(var4)(var1);
            var1 = var2.useTheme;
            var1 = var1.bind(var2)();
            var10 = _closure1_slot3;
            var2 = var10.useRef;
            var12 = null;
            var14 = var2.bind(var10)(var12);
            var15 = 6;
            var2 = var9[var15];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useAPNGPlayerControls;
            var3 = var2.bind(var3)(var14);
            var2 = var3.stop;
            var2 = var2.bind(var3)();
            var2 = var3.play;
            var2 = var2.bind(var3)();
            var3 = _closure1_slot1;
            var2 = 7;
            var2 = var9[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var9 = var12 == var2;
            var3 = undefined;
            if(var9) { _fun0001_ip = 251; continue _fun0001 }
 245:
            var3 = var2.planSelection;
 251:
            if(!(var12 == var3)) { _fun0001_ip = 257; continue _fun0001 }
 255:
            return var4;
 257:
            var2 = var12 == var3;
            var13 = undefined;
            if(var2) { _fun0001_ip = 305; continue _fun0001 }
 266:
            var2 = var3.getImageUrl;
            var2 = var12 == var2;
            var13 = undefined;
            if(var2) { _fun0001_ip = 305; continue _fun0001 }
 281:
            var2 = var3.getImageUrl;
            var1 = var1.dark;
            if(var1) { _fun0001_ip = 299; continue _fun0001 }
 296:
            var1 = var5;
 299:
            var13 = var2.bind(var3)(var1, var7);
 305:
            var3 = _closure1_slot8;
            var2 = _closure1_slot7;
            var1 = {};
            var5 = var6.length;
            var26 = 1;
            var9 = var26 === var5;
            if(!var9) { _fun0001_ip = 446; continue _fun0001 }
 330:
            var16 = _closure1_slot6;
            var10 = _closure1_slot1;
            var5 = _closure1_slot2;
            var20 = 8;
            var5 = var5[var20];
            var10 = var10.bind(var4)(var5);
            var5 = {};
            var5['user'] = var17;
            var5['guildId'] = var4;
            var17 = {};
            var18 = 0;
            var18 = var6[var18];
            var18 = var18.assetId;
            var17['asset'] = var18;
            var5['avatarDecoration'] = var17;
            var17 = !var7;
            var5['animate'] = var17;
            var17 = var24;
            if(!(var12 == var24)) { _fun0001_ip = 432; continue _fun0001 }
 403:
            var19 = _closure1_slot0;
            var18 = _closure1_slot2;
            var18 = var18[var20];
            var18 = var19.bind(var4)(var18);
            var18 = var18.AvatarSizes;
            var17 = var18.XLARGE;
 432:
            var5['size'] = var17;
            var5['style'] = var22;
            var9 = var16.bind(var4)(var10, var5);
 446:
            var5 = new Array(3);
            var5[0] = var9;
            var10 = var6.length;
            var9 = 2;
            var10 = var9 === var10;
            if(!var10) { _fun0001_ip = 749; continue _fun0001 }
 472:
            var18 = _closure1_slot8;
            var17 = _closure1_slot7;
            var16 = {};
            var21 = _closure1_slot6;
            var28 = _closure1_slot1;
            var25 = _closure1_slot2;
            var27 = 8;
            var19 = var25[var27];
            var20 = var28.bind(var4)(var19);
            var19 = {};
            var29 = 9;
            var25 = var25[var29];
            var25 = var28.bind(var4)(var25);
            var19['source'] = var25;
            var19['guildId'] = var4;
            var25 = {};
            var28 = 0;
            var28 = var6[var28];
            var28 = var28.assetId;
            var25['asset'] = var28;
            var19['avatarDecoration'] = var25;
            var25 = !var7;
            var19['animate'] = var25;
            var25 = var24;
            if(!(var12 == var24)) { _fun0001_ip = 596; continue _fun0001 }
 567:
            var30 = _closure1_slot0;
            var28 = _closure1_slot2;
            var28 = var28[var27];
            var28 = var30.bind(var4)(var28);
            var28 = var28.AvatarSizes;
            var25 = var28.XLARGE;
 596:
            var19['size'] = var25;
            var19['style'] = var22;
            var20 = var21.bind(var4)(var20, var19);
            var19 = new Array(2);
            var19[0] = var20;
            var22 = _closure1_slot6;
            var28 = _closure1_slot1;
            var25 = _closure1_slot2;
            var20 = var25[var27];
            var21 = var28.bind(var4)(var20);
            var20 = {};
            var25 = var25[var29];
            var25 = var28.bind(var4)(var25);
            var20['source'] = var25;
            var20['guildId'] = var4;
            var25 = {};
            var26 = var6[var26];
            var26 = var26.assetId;
            var25['asset'] = var26;
            var20['avatarDecoration'] = var25;
            var25 = !var7;
            var20['animate'] = var25;
            if(!(var12 == var24)) { _fun0001_ip = 721; continue _fun0001 }
 692:
            var26 = _closure1_slot0;
            var25 = _closure1_slot2;
            var25 = var25[var27];
            var25 = var26.bind(var4)(var25);
            var25 = var25.AvatarSizes;
            var24 = var25.XLARGE;
 721:
            var20['size'] = var24;
            var20['style'] = var23;
            var20 = var22.bind(var4)(var21, var20);
            var19[1] = var20;
            var16['children'] = var19;
            var10 = var18.bind(var4)(var17, var16);
 749:
            var5[1] = var10;
            var6 = var6.length;
            var6 = var6 > var9;
            if(!var6) { _fun0001_ip = 945; continue _fun0001 }
 768:
            var10 = _closure1_slot0;
            var16 = _closure1_slot2;
            var9 = 10;
            var9 = var16[var9];
            var10 = var10.bind(var4)(var9);
            var9 = var10.isAndroid;
            var9 = var9.bind(var10)();
            if(!var9) { _fun0001_ip = 873; continue _fun0001 }
 800:
            if(var7) { _fun0001_ip = 873; continue _fun0001 }
 803:
            var10 = _closure1_slot6;
            var9 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var15];
            var7 = var9.bind(var4)(var7);
            var9 = var7.APNGPlayer;
            var7 = {};
            var7['ref'] = var14;
            var15 = var12 != var13;
            var14 = '';
            if(!var15) { _fun0001_ip = 850; continue _fun0001 }
 847:
            var14 = var13;
 850:
            var7['url'] = var14;
            var14 = true;
            var7['autoplay'] = var14;
            var7['style'] = var11;
            var7 = var10.bind(var4)(var9, var7);
            _fun0001_ip = 942; continue _fun0001;
 873:
            var10 = _closure1_slot6;
            var9 = _closure1_slot1;
            var14 = _closure1_slot2;
            var8 = 11;
            var8 = var14[var8];
            var9 = var9.bind(var4)(var8);
            var8 = {};
            var8['style'] = var11;
            var11 = 'contain';
            var8['resizeMode'] = var11;
            var11 = {};
            var14 = var12 != var13;
            var12 = '';
            if(!var14) { _fun0001_ip = 928; continue _fun0001 }
 925:
            var12 = var13;
 928:
            var11['uri'] = var12;
            var8['source'] = var11;
            var7 = var10.bind(var4)(var9, var8);
 942:
            var6 = var7;
 945:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();