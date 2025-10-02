// app/modules/premium/native/gift_code_modal/GiftCodeRedeemUseProfileEffect.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
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
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot6 = var7;
    var4 = var4.ScrollView;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot8 = var7;
    var4 = var4.jsxs;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var7 = {};
    var4 = {'backgroundColor': null, 'justifyContent': 'flex-end', 'flex': 1, 'paddingTop': 24};
    var10 = 6;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_PRIMARY;
    var4['backgroundColor'] = var10;
    var7['container'] = var4;
    var10 = {};
    var4 = 16;
    var10['paddingHorizontal'] = var4;
    var7['saveButtonContainer'] = var10;
    var10 = {};
    var10['fontSize'] = var4;
    var7['saveButtonText'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot10 = var7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/native/gift_code_modal/GiftCodeRedeemUseProfileEffect.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GiftCodeRedeemUseProfileEffect(arg1) {
        var2 = arg1;
        var3 = var2.profileEffect;
        var17 = var2.user;
        var5 = _closure1_slot5;
        var2 = var5.useState;
        var7 = var2.bind(var5)(var3);
        var3 = _closure1_slot4;
        var4 = undefined;
        var2 = 2;
        var3 = var3.bind(var4)(var7, var2);
        var2 = 0;
        var20 = var3[var2];
        var _closure2_slot0 = var20;
        var2 = 1;
        var19 = var3[var2];
        var2 = _closure1_slot10;
        var11 = var2.bind(var4)();
        var10 = _closure1_slot1;
        var16 = _closure1_slot2;
        var2 = 7;
        var2 = var16[var2];
        var2 = var10.bind(var4)(var2);
        var2 = var2.bind(var4)();
        var18 = var2.isFetching;
        var2 = 8;
        var2 = var16[var2];
        var2 = var10.bind(var4)(var2);
        var2 = var2.bind(var4)();
        var3 = var2.handleSubmit;
        var _closure2_slot1 = var3;
        var14 = var2.isSubmitting;
        var2 = var2.pendingProfileEffect;
        var _closure2_slot2 = var2;
        var2 = 9;
        var2 = var16[var2];
        var3 = var10.bind(var4)(var2);
        var2 = var17.id;
        var2 = var3.bind(var4)(var2);
        var _closure2_slot3 = var2;
        var3 = var5.useEffect;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var1 = _closure2_slot0;
                var7 = null;
                var2 = var7 == var1;
                var1 = undefined;
                var3 = undefined;
                if(var2) { _fun0001_ip = 30; continue _fun0001 }
 20:
                var2 = _closure2_slot0;
                var3 = var2.skuId;
 30:
                var2 = _closure2_slot2;
                var4 = var7 == var2;
                var2 = undefined;
                if(var4) { _fun0001_ip = 53; continue _fun0001 }
 43:
                var4 = _closure2_slot2;
                var2 = var4.skuId;
 53:
                if(!(var3 !== var2)) { _fun0001_ip = 132; continue _fun0001 }
 57:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 10;
                var2 = var4[var2];
                var5 = var3.bind(var1)(var2);
                var4 = var5.setNewPendingProfileEffect;
                var2 = _closure2_slot0;
                var2 = var7 != var2;
                var3 = null;
                if(!var2) { _fun0001_ip = 103; continue _fun0001 }
 99:
                var3 = _closure2_slot0;
 103:
                var2 = _closure2_slot3;
                var7 = var7 == var2;
                var2 = undefined;
                if(var7) { _fun0001_ip = 126; continue _fun0001 }
 116:
                var6 = _closure2_slot3;
                var2 = var6.profileEffect;
 126:
                var2 = var4.bind(var5)(var3, var2);
 132:
                return var1;
            }
        };
        var2 = var3.bind(var5)(var2);
        var1 = function() {
            var4 = _closure1_slot3;
            var3 = undefined;
            var2 = function* () {
                var1 = function* anon_0_() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0002_ip = 69; continue _fun0002 }
 7:
                        var2 = _closure2_slot1;
                        var3 = undefined;
                        var2 = var2.bind(var3)();
                        SaveGenerator(address=24);
 22:
                        return var2;
 24:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0002_ip = 66; continue _fun0002 }
 30:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var4 = 11;
                        var4 = var6[var4];
                        var5 = var5.bind(var3)(var4);
                        var4 = var5.pop;
                        var4 = var4.bind(var5)();
                        return var3;
 66:
                        return var2;
 69:
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var4.bind(var3)(var2);
            var _closure3_slot0 = var2;
            var1 = function() {
                var1 = undefined;
                var4 = _closure3_slot0;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            return var1;
        };
        var13 = var1.bind(var4)();
        var3 = _closure1_slot9;
        var15 = _closure1_slot0;
        var1 = 12;
        var1 = var16[var1];
        var1 = var15.bind(var4)(var1);
        var2 = var1.SafeAreaPaddingView;
        var1 = {};
        var5 = true;
        var1['bottom'] = var5;
        var5 = var11.container;
        var1['style'] = var5;
        var8 = _closure1_slot8;
        var7 = _closure1_slot7;
        var5 = {};
        var9 = 13;
        var9 = var16[var9];
        var9 = var15.bind(var4)(var9);
        var12 = var9.EditProfileEffectInner;
        var9 = {};
        var9['selectedProfileEffect'] = var20;
        var9['setSelectedProfileEffect'] = var19;
        var9['isFetching'] = var18;
        var9['user'] = var17;
        var17 = false;
        var9['showTitle'] = var17;
        var9 = var8.bind(var4)(var12, var9);
        var5['children'] = var9;
        var7 = var8.bind(var4)(var7, var5);
        var5 = new Array(2);
        var5[0] = var7;
        var7 = _closure1_slot6;
        var6 = {};
        var9 = var11.saveButtonContainer;
        var6['style'] = var9;
        var12 = 14;
        var9 = var16[var12];
        var10 = var10.bind(var4)(var9);
        var9 = {};
        var9['loading'] = var14;
        var14 = var16[var12];
        var14 = var15.bind(var4)(var14);
        var14 = var14.ButtonColors;
        var14 = var14.BRAND;
        var9['color'] = var14;
        var9['onPress'] = var13;
        var12 = var16[var12];
        var12 = var15.bind(var4)(var12);
        var12 = var12.ButtonSizes;
        var12 = var12.MEDIUM;
        var9['size'] = var12;
        var12 = 15;
        var13 = var16[var12];
        var13 = var15.bind(var4)(var13);
        var14 = var13.intl;
        var13 = var14.string;
        var12 = var16[var12];
        var12 = var15.bind(var4)(var12);
        var12 = var12.t;
        var12 = var12.R3BPHx;
        var12 = var13.bind(var14)(var12);
        var9['text'] = var12;
        var11 = var11.saveButtonText;
        var9['textStyle'] = var11;
        var9 = var8.bind(var4)(var10, var9);
        var6['children'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();