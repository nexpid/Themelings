// app/modules/user_profile/native/UserProfileEditNote.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ScrollView;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.NOTE_MAX_LENGTH;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var7 = {};
    var4 = 16;
    var10 = {'paddingVertical': 24, 'paddingHorizontal': 16, 'gap': 8};
    var7['contentContainer'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot9 = var7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/UserProfileEditNote.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function UserProfileEditNote(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var14 = var2.userId;
            var _closure2_slot0 = var14;
            var8 = var2.onSave;
            var _closure2_slot1 = var8;
            var7 = var2.onClose;
            var _closure2_slot2 = var7;
            var4 = undefined;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var2 = _closure1_slot9;
            var5 = var2.bind(var4)();
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 6;
            var2 = var6[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useNavigation;
            var15 = var2.bind(var3)();
            var _closure2_slot3 = var15;
            var3 = _closure1_slot1;
            var2 = 7;
            var2 = var6[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.bind(var4)(var14);
            var10 = var2.loading;
            var13 = var2.note;
            var _closure2_slot4 = var13;
            var6 = _closure1_slot4;
            var3 = var6.useState;
            var2 = null;
            var11 = var2 != var13;
            var2 = '';
            if(!var11) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var13;
case 2:
            var6 = var3.bind(var6)(var2);
            var3 = _closure1_slot3;
            var2 = 2;
            var3 = var3.bind(var4)(var6, var2);
            var2 = 0;
            var12 = var3[var2];
            _closure2_slot5 = var12;
            var2 = 1;
            var11 = var3[var2];
            _closure2_slot6 = var11;
            var6 = _closure1_slot4;
            var3 = var6.useLayoutEffect;
            var2 = new Array(6);
            var2[0] = var15;
            var2[1] = var14;
            var2[2] = var13;
            var2[3] = var12;
            var2[4] = var8;
            var2[5] = var7;
            var1 = function() {
                var4 = _closure2_slot3;
                var3 = var4.setOptions;
                var2 = {};
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 8;
                var6 = var6[var1];
                var1 = undefined;
                var8 = var7.bind(var1)(var6);
                var7 = var8.getHeaderConditionalBackButton;
                var6 = function() {
                    var1 = global;
                    var3 = var1.Promise;
                    var1 = var3.prototype;
                    var2 = Object.create(var1, {constructor: {value: var3}});
                    var4 = function(arg1) {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                            var1 = arg1;
                            var _closure5_slot0 = var1;
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 9;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = {};
                            var8 = _closure2_slot4;
                            var7 = null;
                            var8 = var7 != var8;
                            var7 = '';
                            if(!var8) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                            var7 = _closure2_slot4;
case 4:
                            var6 = _closure2_slot5;
                            var6 = var7 !== var6;
                            var2['hasEdits'] = var6;
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var5 = 10;
                            var5 = var7[var5];
                            var5 = var6.bind(var1)(var5);
                            var5 = var5.dismissKeyboard;
                            var2['onHasEdits'] = var5;
                            var5 = function resetPending() {
                                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                                    var3 = _closure2_slot6;
                                    var4 = _closure2_slot4;
                                    var2 = null;
                                    var4 = var2 != var4;
                                    var2 = '';
                                    if(!var4) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                                    var2 = _closure2_slot4;
case 6:
                                    var1 = undefined;
                                    var1 = var3.bind(var1)(var2);
                                    return var1;
                                }
                            };
                            var2['resetPending'] = var5;
                            var4 = function onConfirm() {
                                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                                    var3 = _closure5_slot0;
                                    var1 = undefined;
                                    var2 = true;
                                    var2 = var3.bind(var1)(var2);
                                    var4 = _closure2_slot2;
                                    var3 = null;
                                    if(!(var3 != var4)) { _fun0004_ip = 8; continue _fun0004 }
case 9:
                                    var2 = _closure2_slot2;
                                    var2 = var2.bind(var1)();
case 8:
                                    return var1;
                                }
                            };
                            var2['onConfirm'] = var4;
                            var2 = var3.bind(var1)(var2);
                            return var1;
                        }
                    };
                    var5 = var2;
                    var1 = new var5[var3](var4, var3);
                    var1 = var1 instanceof Object ? var1 : var2;
                    return var1;
                };
                var6 = var7.bind(var8)(var6);
                var2['headerLeft'] = var6;
                var5 = function headerRight(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var4 = _closure1_slot7;
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var1 = 11;
                        var1 = var9[var1];
                        var3 = undefined;
                        var1 = var8.bind(var3)(var1);
                        var2 = var1.HeaderTextButton;
                        var1 = {};
                        var10 = arg1;
                        var11 = var1;
                        var5 = copyDataProperties(var11, var10);
                        var5 = 12;
                        var6 = var9[var5];
                        var6 = var8.bind(var3)(var6);
                        var7 = var6.intl;
                        var6 = var7.string;
                        var5 = var9[var5];
                        var5 = var8.bind(var3)(var5);
                        var5 = var5.t;
                        var5 = var5.R3BPH+;
                        var6 = var6.bind(var7)(var5);
                        var5 = 'label';
                        var1[4] = var6;
                        var7 = _closure2_slot4;
                        var6 = null;
                        var7 = var6 != var7;
                        var6 = '';
                        if(!var7) { _fun0005_ip = 10; continue _fun0005 }
case 11:
                        var6 = _closure2_slot4;
case 10:
                        var5 = _closure2_slot5;
                        var6 = var6 === var5;
                        var5 = 'disabled';
                        var1[4] = var6;
                        var6 = function onPress() {
                            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var1 = 13;
                                var2 = var2[var1];
                                var1 = undefined;
                                var6 = var3.bind(var1)(var2);
                                var5 = var6.updateNote;
                                var4 = _closure2_slot0;
                                var3 = _closure2_slot5;
                                var3 = var5.bind(var6)(var4, var3);
                                var3 = _closure2_slot1;
                                var4 = null;
                                if(!(var4 != var3)) { _fun0006_ip = 12; continue _fun0006 }
case 13:
                                var3 = _closure2_slot1;
                                var3 = var3.bind(var1)();
case 12:
                                var3 = _closure2_slot2;
                                if(!(var4 != var3)) { _fun0006_ip = 14; continue _fun0006 }
case 15:
                                var2 = _closure2_slot2;
                                var2 = var2.bind(var1)();
case 14:
                                return var1;
                            }
                        };
                        var5 = 'onPress';
                        var1[4] = var6;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    }
                };
                var2['headerRight'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = var3.bind(var6)(var1, var2);
            var3 = _closure1_slot8;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = var5.contentContainer;
            var1['contentContainerStyle'] = var5;
            var5 = 'always';
            var1['keyboardShouldPersistTaps'] = var5;
            var8 = _closure1_slot7;
            var7 = _closure1_slot0;
            var14 = _closure1_slot2;
            var5 = 14;
            var5 = var14[var5];
            var5 = var7.bind(var4)(var5);
            var6 = var5.Text;
            var5 = {};
            var13 = 'text-sm/semibold';
            var5['variant'] = var13;
            var13 = 12;
            var15 = var14[var13];
            var15 = var7.bind(var4)(var15);
            var17 = var15.intl;
            var16 = var17.string;
            var15 = var14[var13];
            var15 = var7.bind(var4)(var15);
            var15 = var15.t;
            var15 = var15.mQKv+v;
            var15 = var16.bind(var17)(var15);
            var5['children'] = var15;
            var6 = var8.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var6 = 15;
            var6 = var14[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.TextArea;
            var6 = {'value': null, 'onChange': null, 'maxLength': null, 'autoFocus': true, 'autoCorrect': false, 'autoCapitalize': 'none'};
            var6['value'] = var12;
            var6['onChange'] = var11;
            var11 = _closure1_slot6;
            var6['maxLength'] = var11;
            var15 = _closure1_slot0;
            var11 = _closure1_slot2;
            var12 = var11[var13];
            var12 = var15.bind(var4)(var12);
            var14 = var12.intl;
            var12 = var14.string;
            var11 = var11[var13];
            var11 = var15.bind(var4)(var11);
            var11 = var11.t;
            if(var10) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var10 = var11.tRZR6T;
            var10 = var12.bind(var14)(var10);
            _fun0001_ip = 18; continue _fun0001;
case 16:
            var11 = var11.WLKx/9;
            var10 = var12.bind(var14)(var11);
case 18:
            var6['placeholder'] = var10;
            var12 = _closure1_slot0;
            var9 = _closure1_slot2;
            var10 = var9[var13];
            var10 = var12.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var9[var13];
            var9 = var12.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.mQKv+v;
            var9 = var10.bind(var11)(var9);
            var6['accessibilityLabel'] = var9;
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