// app/modules/user_profile/native/UserProfileEditNote.tsx
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
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'paddingVertical': 24, 'paddingHorizontal': 16, 'gap': 8};
    var4['contentContainer'] = var9;
    var9 = {};
    var10 = 6;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.INPUT_BACKGROUND;
    var9['backgroundColor'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.radii;
    var10 = var10.lg;
    var9['borderRadius'] = var10;
    var10 = 12;
    var9['padding'] = var10;
    var4['inputContainer'] = var9;
    var9 = {'paddingVertical': 0, 'paddingHorizontal': 0};
    var4['input'] = var9;
    var9 = {'flexGrow': 1, 'lineHeight': 20};
    var4['text'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/UserProfileEditNote.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function UserProfileEditNote(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var13 = var2.userId;
            var _closure2_slot0 = var13;
            var7 = var2.onSave;
            var _closure2_slot1 = var7;
            var6 = var2.onClose;
            var _closure2_slot2 = var6;
            var4 = undefined;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var2 = _closure1_slot9;
            var11 = var2.bind(var4)();
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 7;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useNavigation;
            var15 = var2.bind(var3)();
            var _closure2_slot3 = var15;
            var3 = _closure1_slot1;
            var2 = 8;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.bind(var4)(var13);
            var10 = var2.loading;
            var8 = var2.note;
            var _closure2_slot4 = var8;
            var5 = _closure1_slot4;
            var3 = var5.useState;
            var2 = null;
            var12 = var2 != var8;
            var2 = '';
            if(!var12) { _fun0001_ip = 151; continue _fun0001 }
 148:
            var2 = var8;
 151:
            var5 = var3.bind(var5)(var2);
            var3 = _closure1_slot3;
            var2 = 2;
            var3 = var3.bind(var4)(var5, var2);
            var2 = 0;
            var14 = var3[var2];
            _closure2_slot5 = var14;
            var2 = 1;
            var12 = var3[var2];
            _closure2_slot6 = var12;
            var5 = _closure1_slot4;
            var3 = var5.useLayoutEffect;
            var2 = new Array(6);
            var2[0] = var15;
            var2[1] = var13;
            var2[2] = var8;
            var2[3] = var14;
            var2[4] = var7;
            var2[5] = var6;
            var1 = function() {
                var4 = _closure2_slot3;
                var3 = var4.setOptions;
                var2 = {};
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 9;
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
 0:
                            var1 = arg1;
                            var _closure5_slot0 = var1;
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 10;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = {};
                            var8 = _closure2_slot4;
                            var7 = null;
                            var8 = var7 != var8;
                            var7 = '';
                            if(!var8) { _fun0002_ip = 60; continue _fun0002 }
 56:
                            var7 = _closure2_slot4;
 60:
                            var6 = _closure2_slot5;
                            var6 = var7 !== var6;
                            var2['hasEdits'] = var6;
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var5 = 11;
                            var5 = var7[var5];
                            var5 = var6.bind(var1)(var5);
                            var5 = var5.dismissKeyboard;
                            var2['onHasEdits'] = var5;
                            var5 = function resetPending() {
                                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                                    var3 = _closure2_slot6;
                                    var4 = _closure2_slot4;
                                    var2 = null;
                                    var4 = var2 != var4;
                                    var2 = '';
                                    if(!var4) { _fun0003_ip = 28; continue _fun0003 }
 24:
                                    var2 = _closure2_slot4;
 28:
                                    var1 = undefined;
                                    var1 = var3.bind(var1)(var2);
                                    return var1;
                                }
                            };
                            var2['resetPending'] = var5;
                            var4 = function onConfirm() {
                                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                                    var3 = _closure5_slot0;
                                    var1 = undefined;
                                    var2 = true;
                                    var2 = var3.bind(var1)(var2);
                                    var4 = _closure2_slot2;
                                    var3 = null;
                                    if(!(var3 != var4)) { _fun0004_ip = 37; continue _fun0004 }
 29:
                                    var2 = _closure2_slot2;
                                    var2 = var2.bind(var1)();
 37:
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
 0:
                        var4 = _closure1_slot7;
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var1 = 12;
                        var1 = var9[var1];
                        var3 = undefined;
                        var1 = var8.bind(var3)(var1);
                        var2 = var1.HeaderTextButton;
                        var1 = {};
                        var10 = arg1;
                        var11 = var1;
                        var5 = copyDataProperties(var11, var10);
                        var5 = 13;
                        var6 = var9[var5];
                        var6 = var8.bind(var3)(var6);
                        var7 = var6.intl;
                        var6 = var7.string;
                        var5 = var9[var5];
                        var5 = var8.bind(var3)(var5);
                        var5 = var5.t;
                        var5 = var5.R3BPHx;
                        var6 = var6.bind(var7)(var5);
                        var5 = 'label';
                        var1[var5] = var6;
                        var7 = _closure2_slot4;
                        var6 = null;
                        var7 = var6 != var7;
                        var6 = '';
                        if(!var7) { _fun0005_ip = 127; continue _fun0005 }
 123:
                        var6 = _closure2_slot4;
 127:
                        var5 = _closure2_slot5;
                        var6 = var6 === var5;
                        var5 = 'disabled';
                        var1[var5] = var6;
                        var6 = function onPress() {
                            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var1 = 14;
                                var2 = var2[var1];
                                var1 = undefined;
                                var6 = var3.bind(var1)(var2);
                                var5 = var6.updateNote;
                                var4 = _closure2_slot0;
                                var3 = _closure2_slot5;
                                var3 = var5.bind(var6)(var4, var3);
                                var3 = _closure2_slot1;
                                var4 = null;
                                if(!(var4 != var3)) { _fun0006_ip = 66; continue _fun0006 }
 58:
                                var3 = _closure2_slot1;
                                var3 = var3.bind(var1)();
 66:
                                var3 = _closure2_slot2;
                                if(!(var4 != var3)) { _fun0006_ip = 82; continue _fun0006 }
 74:
                                var2 = _closure2_slot2;
                                var2 = var2.bind(var1)();
 82:
                                return var1;
                            }
                        };
                        var5 = 'onPress';
                        var1[var5] = var6;
                        var1 = var4.bind(var3)(var2, var1);
                        return var1;
                    }
                };
                var2['headerRight'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot8;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = var11.contentContainer;
            var1['contentContainerStyle'] = var5;
            var5 = 'always';
            var1['keyboardShouldPersistTaps'] = var5;
            var8 = _closure1_slot7;
            var18 = _closure1_slot0;
            var15 = _closure1_slot2;
            var5 = 15;
            var5 = var15[var5];
            var5 = var18.bind(var4)(var5);
            var6 = var5.Text;
            var5 = {};
            var7 = 'text-sm/semibold';
            var5['variant'] = var7;
            var13 = 13;
            var7 = var15[var13];
            var7 = var18.bind(var4)(var7);
            var17 = var7.intl;
            var16 = var17.string;
            var7 = var15[var13];
            var7 = var18.bind(var4)(var7);
            var7 = var7.t;
            var7 = var7.mQKv+v;
            var7 = var16.bind(var17)(var7);
            var5['children'] = var7;
            var6 = var8.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var7 = _closure1_slot1;
            var6 = 16;
            var6 = var15[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {'value': null, 'onChange': null, 'multiline': true, 'numberOfLines': 8, 'maxLength': null, 'autoFocus': true, 'autoCorrect': false, 'showBorder': false, 'showTopContainer': false, 'textAlignVertical': 'top', 'autoCapitalize': 'none'};
            var6['value'] = var14;
            var6['onChange'] = var12;
            var12 = _closure1_slot6;
            var6['maxLength'] = var12;
            var12 = var11.input;
            var6['style'] = var12;
            var12 = var11.inputContainer;
            var6['inputContainerStyle'] = var12;
            var11 = var11.text;
            var6['inputTextStyle'] = var11;
            var15 = _closure1_slot0;
            var11 = _closure1_slot2;
            var12 = var11[var13];
            var12 = var15.bind(var4)(var12);
            var14 = var12.intl;
            var12 = var14.string;
            var11 = var11[var13];
            var11 = var15.bind(var4)(var11);
            var11 = var11.t;
            if(var10) { _fun0001_ip = 515; continue _fun0001 }
 500:
            var10 = var11.tRZR6e;
            var10 = var12.bind(var14)(var10);
            _fun0001_ip = 528; continue _fun0001;
 515:
            var11 = var11.WLKx//;
            var10 = var12.bind(var14)(var11);
 528:
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