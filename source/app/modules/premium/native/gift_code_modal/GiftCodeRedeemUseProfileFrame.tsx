// app/modules/premium/native/gift_code_modal/GiftCodeRedeemUseProfileFrame.tsx
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
    var10 = var10.BACKGROUND_BASE_LOW;
    var4['backgroundColor'] = var10;
    var7['container'] = var4;
    var10 = {};
    var4 = 16;
    var10['paddingHorizontal'] = var4;
    var7['saveButtonContainer'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot10 = var7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/native/gift_code_modal/GiftCodeRedeemUseProfileFrame.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GiftCodeRedeemUseProfileFrame(arg1) {
        var2 = arg1;
        var4 = var2.profileFrame;
        var16 = var2.user;
        var7 = _closure1_slot5;
        var3 = var7.useState;
        var2 = {};
        var4 = var4.skuId;
        var2['skuId'] = var4;
        var14 = _closure1_slot0;
        var15 = _closure1_slot2;
        var4 = 7;
        var5 = var15[var4];
        var4 = undefined;
        var5 = var14.bind(var4)(var5);
        var5 = var5.CollectiblesItemType;
        var5 = var5.PROFILE_FRAME;
        var2['type'] = var5;
        var5 = var3.bind(var7)(var2);
        var3 = _closure1_slot4;
        var2 = 2;
        var3 = var3.bind(var4)(var5, var2);
        var2 = 0;
        var19 = var3[var2];
        var _closure2_slot0 = var19;
        var2 = 1;
        var18 = var3[var2];
        var2 = _closure1_slot10;
        var9 = var2.bind(var4)();
        var3 = _closure1_slot1;
        var2 = 8;
        var2 = var15[var2];
        var2 = var3.bind(var4)(var2);
        var2 = var2.bind(var4)();
        var17 = var2.isFetching;
        var2 = 9;
        var2 = var15[var2];
        var2 = var3.bind(var4)(var2);
        var2 = var2.bind(var4)();
        var3 = var2.handleSubmit;
        var _closure2_slot1 = var3;
        var12 = var2.isSubmitting;
        var2 = var2.pendingProfileFrame;
        var _closure2_slot2 = var2;
        var5 = var7.useEffect;
        var3 = new Array(2);
        var3[0] = var19;
        var3[1] = var2;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = _closure2_slot0;
                var5 = null;
                var2 = var5 == var1;
                var1 = undefined;
                var3 = undefined;
                if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var2 = _closure2_slot0;
                var3 = var2.skuId;
case 2:
                var2 = _closure2_slot2;
                var4 = var5 == var2;
                var2 = undefined;
                if(var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var4 = _closure2_slot2;
                var2 = var4.skuId;
case 4:
                if(!(var3 !== var2)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 10;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.setPendingChanges;
                var2 = {};
                var7 = _closure2_slot0;
                var7 = var5 != var7;
                var5 = null;
                if(!var7) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                var5 = _closure2_slot0;
case 8:
                var2['profileFrame'] = var5;
                var2 = var3.bind(var4)(var2);
case 6:
                return var1;
            }
        };
        var2 = var5.bind(var7)(var2, var3);
        var1 = function() {
            var4 = _closure1_slot3;
            var3 = undefined;
            var2 = function* () {
                var1 = function* anon_0_() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                        var2 = _closure2_slot1;
                        var3 = undefined;
                        var2 = var2.bind(var3)();
                        SaveGenerator(address=24);
case 12:
                        return var2;
case 13:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var4 = 11;
                        var4 = var6[var4];
                        var5 = var5.bind(var3)(var4);
                        var4 = var5.pop;
                        var4 = var4.bind(var5)();
                        return var3;
case 14:
                        return var2;
case 10:
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
        var11 = var1.bind(var4)();
        var3 = _closure1_slot9;
        var1 = 12;
        var1 = var15[var1];
        var1 = var14.bind(var4)(var1);
        var2 = var1.SafeAreaPaddingView;
        var1 = {};
        var5 = true;
        var1['bottom'] = var5;
        var5 = var9.container;
        var1['style'] = var5;
        var8 = _closure1_slot8;
        var7 = _closure1_slot7;
        var5 = {};
        var10 = 13;
        var10 = var15[var10];
        var10 = var14.bind(var4)(var10);
        var13 = var10.EditProfileFrameInner;
        var10 = {};
        var10['selectedProfileFrame'] = var19;
        var10['setSelectedProfileFrame'] = var18;
        var10['isFetching'] = var17;
        var10['user'] = var16;
        var16 = false;
        var10['showTitle'] = var16;
        var10 = var8.bind(var4)(var13, var10);
        var5['children'] = var10;
        var7 = var8.bind(var4)(var7, var5);
        var5 = new Array(2);
        var5[0] = var7;
        var7 = _closure1_slot6;
        var6 = {};
        var9 = var9.saveButtonContainer;
        var6['style'] = var9;
        var9 = 14;
        var9 = var15[var9];
        var9 = var14.bind(var4)(var9);
        var10 = var9.Button;
        var9 = {};
        var9['loading'] = var12;
        var9['onPress'] = var11;
        var11 = 'md';
        var9['size'] = var11;
        var11 = 15;
        var12 = var15[var11];
        var12 = var14.bind(var4)(var12);
        var13 = var12.intl;
        var12 = var13.string;
        var11 = var15[var11];
        var11 = var14.bind(var4)(var11);
        var11 = var11.t;
        var11 = var11.R3BPH+;
        var11 = var12.bind(var13)(var11);
        var9['text'] = var11;
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