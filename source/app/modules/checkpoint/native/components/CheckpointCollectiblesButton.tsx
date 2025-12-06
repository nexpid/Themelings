// app/modules/checkpoint/native/components/CheckpointCollectiblesButton.tsx
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
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 6;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_72;
    var9['marginTop'] = var10;
    var4['claim'] = var9;
    var9 = {'fontWeight': 800, 'fontSize': 16, 'lineHeight': 20, 'textAlign': 'center'};
    var4['buttonCTA'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/checkpoint/native/components/CheckpointCollectiblesButton.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function CheckpointCollectiblesButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var8 = var1.style;
            var5 = undefined;
            var _closure2_slot2 = var5;
            var1 = _closure1_slot8;
            var11 = var1.bind(var5)();
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 7;
            var2 = var6[var1];
            var12 = var3.bind(var5)(var2);
            var10 = var12.useStateFromStores;
            var2 = _closure1_slot4;
            var4 = new Array(1);
            var4[0] = var2;
            var2 = function() {
                var2 = _closure1_slot4;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var4 = var10.bind(var12)(var4, var2);
            var2 = var6[var1];
            var13 = var3.bind(var5)(var2);
            var12 = var13.useStateFromStores;
            var2 = _closure1_slot6;
            var10 = new Array(1);
            var10[0] = var2;
            var2 = function() {
                var2 = _closure1_slot6;
                var1 = var2.getCheckpointData;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = var12.bind(var13)(var10, var2);
            var2 = var2.avatarDecoration;
            var _closure2_slot0 = var2;
            var1 = var6[var1];
            var10 = var3.bind(var5)(var1);
            var6 = var10.useStateFromStoresArray;
            var1 = _closure1_slot5;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    var3 = var1 == var2;
                    var2 = undefined;
                    if(var3) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var3 = _closure2_slot0;
                    var2 = var3.skuId;
case 2:
                    if(!(var1 != var2)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var3 = _closure1_slot5;
                    var2 = var3.getForSku;
                    var6 = _closure2_slot0;
                    var6 = var1 == var6;
                    var4 = undefined;
                    if(var6) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var5 = _closure2_slot0;
                    var4 = var5.skuId;
case 6:
                    var4 = var2.bind(var3)(var4);
                    if(!(var1 == var4)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var1 = new Array(0);
                    _fun0002_ip = 10; continue _fun0002;
case 8:
                    var2 = new Array(0);
                    var7 = 0;
                    var9 = var2;
                    var8 = var4;
                    var3 = arraySpread(var9, var8, var7);
                    var1 = var2;
case 10:
                    return var1;
case 4:
                    var1 = new Array(0);
                    return var1;
                }
            };
            var3 = var6.bind(var10)(var3, var1);
            var1 = 0;
            var3 = var3[var1];
            var1 = null;
            var16 = var1 != var3;
            var _closure2_slot1 = var16;
            var6 = var1 == var4;
            var3 = undefined;
            if(var6) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var4 = var4.avatarDecoration;
            var6 = var1 == var4;
            var3 = undefined;
            if(var6) { _fun0001_ip = 11; continue _fun0001 }
case 13:
            var3 = var4.skuId;
case 11:
            var6 = var1 != var3;
            var4 = null;
            if(!var6) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var4 = var3;
case 14:
            var10 = var1 != var4;
            if(!var10) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var6 = var1 == var2;
            var3 = undefined;
            if(var6) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var3 = var2.skuId;
case 18:
            var10 = var4 === var3;
case 16:
            _closure2_slot2 = var10;
            if(!(var1 != var2)) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var2 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                            var2 = _closure2_slot1;
                            if(!var2) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                            var3 = _closure2_slot2;
                            var2 = !var3;
case 24:
                            if(!var2) { _fun0003_ip = 26; continue _fun0003 }
case 27:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 8;
                            var3 = var3[var2];
                            var2 = undefined;
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.saveAccountChanges;
                            var2 = {};
                            var5 = _closure2_slot0;
                            var2['avatarDecoration'] = var5;
                            var2 = var3.bind(var4)(var2);
                            SaveGenerator(address=78);
case 28:
                            return var2;
case 29:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                            if(var3) { _fun0003_ip = 30; continue _fun0003 }
case 26:
                            var3 = undefined;
                            return var3;
case 30:
                            return var2;
case 22:
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
            var6 = var2.bind(var5)();
            var4 = _closure1_slot7;
            var3 = _closure1_slot1;
            var12 = _closure1_slot2;
            var2 = 9;
            var2 = var12[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2['disabled'] = var10;
            var2['style'] = var8;
            if(var16) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var6 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = _closure2_slot1;
                    if(var1) { _fun0004_ip = 33; continue _fun0004 }
case 34:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 10;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.claimAvatarDecoration;
                    var1 = var1.bind(var2)();
case 33:
                    var1 = undefined;
                    return var1;
                }
            };
case 31:
            var2['onPress'] = var6;
            var8 = _closure1_slot7;
            var7 = _closure1_slot1;
            var12 = _closure1_slot2;
            var6 = 11;
            var6 = var12[var6];
            var7 = var7.bind(var5)(var6);
            var6 = {'variant': 'eyebrow', 'style': null, 'adjustsFontSizeToFit': true, 'lineClamp': 2};
            var11 = var11.buttonCTA;
            var6['style'] = var11;
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var11 = 12;
            var12 = var15[var11];
            var12 = var14.bind(var5)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            if(var16) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var16 = _closure1_slot1;
            var9 = 13;
            var9 = var15[var9];
            var9 = var16.bind(var5)(var9);
            var9 = var9.mDxM7m;
            var9 = var12.bind(var13)(var9);
            _fun0001_ip = 37; continue _fun0001;
case 35:
            var11 = var15[var11];
            var11 = var14.bind(var5)(var11);
            var11 = var11.t;
            if(var10) { _fun0001_ip = 38; continue _fun0001 }
case 39:
            var10 = var11.MAS7uK;
            var10 = var12.bind(var13)(var10);
            _fun0001_ip = 40; continue _fun0001;
case 38:
            var11 = var11.h+WsPb;
            var10 = var12.bind(var13)(var11);
case 40:
            var9 = var10;
case 37:
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 20:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();