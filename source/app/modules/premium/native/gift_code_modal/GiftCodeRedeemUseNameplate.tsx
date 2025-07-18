// app/modules/premium/native/gift_code_modal/GiftCodeRedeemUseNameplate.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var11 = native3;
    var3 = native6;
    var6 = native7;
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
    var7 = var6[var4];
    var4 = native4;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot5 = var7;
    var4 = var4.ScrollView;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'backgroundColor': null, 'justifyContent': 'flex-end', 'flex': 1, 'paddingTop': 24};
    var10 = 5;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_PRIMARY;
    var9['backgroundColor'] = var10;
    var4['container'] = var9;
    var9 = {};
    var10 = 16;
    var9['paddingHorizontal'] = var10;
    var4['saveButtonContainer'] = var9;
    var9 = {};
    var9['fontSize'] = var10;
    var4['saveButtonText'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/native/gift_code_modal/GiftCodeRedeemUseNameplate.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GiftCodeRedeemUseNameplate(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var17 = var1.nameplate;
            var _closure2_slot0 = var17;
            var12 = var1.user;
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 6;
            var1 = var5[var1];
            var4 = undefined;
            var6 = var3.bind(var4)(var1);
            var1 = {};
            var7 = 'GiftCodeRedeemUseNameplate';
            var1['location'] = var7;
            var1 = var6.bind(var4)(var1);
            var1 = _closure1_slot9;
            var11 = var1.bind(var4)();
            var8 = _closure1_slot4;
            var7 = var8.useEffect;
            var6 = new Array(1);
            var6[0] = var17;
            var1 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.setNewPendingNameplate;
                var2 = _closure2_slot0;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = var7.bind(var8)(var1, var6);
            var1 = 8;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var3 = var1.handleSubmit;
            var _closure2_slot1 = var3;
            var14 = var1.isSubmitting;
            var1 = var1.pendingNameplate;
            var2 = function() {
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
                            var4 = 9;
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
            var13 = var2.bind(var4)();
            if(!(var4 !== var1)) { _fun0001_ip = 156; continue _fun0001 }
 153:
            var17 = var1;
 156:
            var3 = _closure1_slot8;
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var1 = 10;
            var1 = var16[var1];
            var1 = var15.bind(var4)(var1);
            var2 = var1.SafeAreaPaddingView;
            var1 = {};
            var5 = true;
            var1['bottom'] = var5;
            var5 = var11.container;
            var1['style'] = var5;
            var8 = _closure1_slot7;
            var6 = _closure1_slot6;
            var5 = {};
            var7 = 11;
            var7 = var16[var7];
            var7 = var15.bind(var4)(var7);
            var10 = var7.EditNameplateInner;
            var7 = {};
            var7['selectedNameplate'] = var17;
            var17 = 7;
            var17 = var16[var17];
            var17 = var15.bind(var4)(var17);
            var17 = var17.setNewPendingNameplate;
            var7['setSelectedNameplate'] = var17;
            var7['user'] = var12;
            var12 = false;
            var7['showTitle'] = var12;
            var7 = var8.bind(var4)(var10, var7);
            var5['children'] = var7;
            var6 = var8.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var7 = _closure1_slot5;
            var6 = {};
            var10 = var11.saveButtonContainer;
            var6['style'] = var10;
            var10 = _closure1_slot1;
            var12 = 12;
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
            var12 = 13;
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
        }
    };
    var3['default'] = var2;
    return var1;
})();