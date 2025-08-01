// app/modules/user_profile/native/AddFriendNicknameModal.tsx
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
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot9 = var7;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var7 = {};
    var4 = {'flex': 1, 'backgroundColor': null, 'justifyContent': 'center', 'alignItems': 'center'};
    var10 = 8;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BG_BACKDROP;
    var4['backgroundColor'] = var10;
    var10 = 'center';
    var7['container'] = var4;
    var4 = {};
    var4['textAlign'] = var10;
    var7['title'] = var4;
    var4 = 18;
    var10 = {'marginTop': 8, 'marginBottom': 16, 'textAlign': 'center', 'lineHeight': 18};
    var7['description'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot11 = var7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/AddFriendNicknameModal.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function AddFriendNicknameModal(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var3 = var2.userId;
            var _closure2_slot0 = var3;
            var2 = var2.showUserProfile;
            var _closure2_slot1 = var2;
            var4 = undefined;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var3 = _closure1_slot11;
            var20 = var3.bind(var4)();
            var8 = _closure1_slot5;
            var5 = var8.useState;
            var3 = false;
            var6 = var5.bind(var8)(var3);
            var5 = _closure1_slot4;
            var3 = 2;
            var5 = var5.bind(var4)(var6, var3);
            var3 = 0;
            var3 = var5[var3];
            var _closure2_slot2 = var3;
            var3 = 1;
            var3 = var5[var3];
            var _closure2_slot3 = var3;
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var7 = 9;
            var3 = var3[var7];
            var9 = var5.bind(var4)(var3);
            var6 = var9.useStateFromStores;
            var3 = _closure1_slot7;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getNickname;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var13 = var6.bind(var9)(var5, var3);
            var6 = var8.useRef;
            var3 = null;
            var9 = var3 != var13;
            var5 = null;
            if(!var9) { _fun0001_ip = 164; continue _fun0001 }
 161:
            var5 = var13;
 164:
            var5 = var6.bind(var8)(var5);
            _closure2_slot4 = var5;
            var9 = _closure1_slot5;
            var8 = var9.useCallback;
            var6 = function(arg1) {
                var2 = _closure2_slot4;
                var1 = arg1;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var5 = new Array(0);
            var14 = var8.bind(var9)(var6, var5);
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var7];
            var8 = var6.bind(var4)(var5);
            var7 = var8.useStateFromStores;
            var5 = _closure1_slot8;
            var6 = new Array(1);
            var6[0] = var5;
            var5 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getUser;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var16 = var7.bind(var8)(var6, var5);
            if(!(var3 != var13)) { _fun0001_ip = 307; continue _fun0001 }
 250:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 10;
            var5 = var8[var3];
            var5 = var7.bind(var4)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var3 = var8[var3];
            var3 = var7.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3.8pOYUF;
            var21 = var5.bind(var6)(var3);
            _fun0001_ip = 362; continue _fun0001;
 307:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 10;
            var5 = var8[var3];
            var5 = var7.bind(var4)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var3 = var8[var3];
            var3 = var7.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3.BGYkaG;
            var21 = var5.bind(var6)(var3);
 362:
            var6 = _closure1_slot5;
            var5 = var6.useCallback;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 11;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.pop;
                    var2 = var2.bind(var3)();
                    var4 = _closure2_slot1;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0002_ip = 56; continue _fun0002 }
 48:
                    var2 = _closure2_slot1;
                    var2 = var2.bind(var1)();
 56:
                    return var1;
                }
            };
            var10 = var5.bind(var6)(var2, var3);
            _closure2_slot5 = var10;
            var1 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0003_ip = 168; continue _fun0003 }
 10:
                            var2 = undefined;
                            var8 = undefined;
                            var3 = _closure2_slot2;
                            if(var3) { _fun0003_ip = 165; continue _fun0003 }
 27:
                            var5 = _closure2_slot3;
                            var3 = true;
                            var3 = var5.bind(var2)(var3);
 38: // try_start_0
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var3 = 12;
                            var3 = var6[var3];
                            var7 = var5.bind(var2)(var3);
                            var6 = var7.updateRelationship;
                            var5 = _closure2_slot0;
                            var3 = _closure2_slot4;
                            var9 = var3.current;
                            var8 = var9;
                            var3 = null;
                            var9 = var3 != var9;
                            var3 = '';
                            if(!var9) { _fun0003_ip = 99; continue _fun0003 }
 96:
                            var3 = var8;
 99:
                            var3 = var6.bind(var7)(var5, var3);
                            SaveGenerator(address=109);
 107:
                            return var3;
 109:
                            ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                            if(var5) { _fun0003_ip = 136; continue _fun0003 }
 115:
                            var5 = _closure2_slot5;
                            var5 = var5.bind(var2)();
 123: // try_end0
                            var6 = _closure2_slot3;
                            var5 = false;
                            var5 = var6.bind(var2)(var5);
                            _fun0003_ip = 165; continue _fun0003;
 136:
                            var6 = _closure2_slot3;
                            var5 = false;
                            var5 = var6.bind(var2)(var5);
                            return var3;
 150: // catch_target0
                            CatchBlockStart(arg_register=2);
                            var5 = _closure2_slot3;
                            var4 = false;
                            var4 = var5.bind(var2)(var4);
                            throw var3;
 165:
                            return var2;
 168:
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
            var2 = _closure1_slot6;
            var1 = {};
            var5 = var20.container;
            var1['style'] = var5;
            var15 = _closure1_slot1;
            var17 = _closure1_slot2;
            var5 = 13;
            var5 = var17[var5];
            var6 = var15.bind(var4)(var5);
            var5 = {};
            var9 = _closure1_slot10;
            var7 = 14;
            var7 = var17[var7];
            var8 = var15.bind(var4)(var7);
            var7 = {};
            var12 = _closure1_slot0;
            var19 = 10;
            var18 = var17[var19];
            var18 = var12.bind(var4)(var18);
            var23 = var18.intl;
            var22 = var23.string;
            var18 = var17[var19];
            var18 = var12.bind(var4)(var18);
            var18 = var18.t;
            var18 = var18.R3BPHx;
            var18 = var22.bind(var23)(var18);
            var7['confirmText'] = var18;
            var7['onConfirm'] = var11;
            var11 = var17[var19];
            var11 = var12.bind(var4)(var11);
            var22 = var11.intl;
            var18 = var22.string;
            var11 = var17[var19];
            var11 = var12.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.ETE/oK;
            var11 = var18.bind(var22)(var11);
            var7['cancelText'] = var11;
            var7['onCancel'] = var10;
            var11 = 15;
            var10 = var17[var11];
            var10 = var12.bind(var4)(var10);
            var18 = var10.Text;
            var10 = {'style': null, 'accessibilityRole': 'header', 'variant': 'heading-lg/extrabold', 'color': 'header-primary'};
            var22 = var20.title;
            var10['style'] = var22;
            var10['children'] = var21;
            var18 = var3.bind(var4)(var18, var10);
            var10 = new Array(3);
            var10[0] = var18;
            var11 = var17[var11];
            var11 = var12.bind(var4)(var11);
            var18 = var11.Text;
            var11 = {'style': null, 'variant': 'text-sm/medium', 'color': 'header-secondary'};
            var20 = var20.description;
            var11['style'] = var20;
            var20 = var17[var19];
            var20 = var12.bind(var4)(var20);
            var21 = var20.intl;
            var20 = var21.string;
            var19 = var17[var19];
            var19 = var12.bind(var4)(var19);
            var19 = var19.t;
            var19 = var19.NdQ+lJ;
            var19 = var20.bind(var21)(var19);
            var11['children'] = var19;
            var11 = var3.bind(var4)(var18, var11);
            var10[1] = var11;
            var11 = 16;
            var11 = var17[var11];
            var11 = var12.bind(var4)(var11);
            var12 = var11.TextField;
            var11 = {'onChange': null, 'autoFocus': true, 'placeholder': null, 'defaultValue': null, 'maxLength': 32, 'isClearable': true};
            var11['onChange'] = var14;
            var14 = 17;
            var14 = var17[var14];
            var15 = var15.bind(var4)(var14);
            var14 = var15.getName;
            var14 = var14.bind(var15)(var16);
            var11['placeholder'] = var14;
            var11['defaultValue'] = var13;
            var11 = var3.bind(var4)(var12, var11);
            var10[2] = var11;
            var7['children'] = var10;
            var7 = var9.bind(var4)(var8, var7);
            var5['children'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();