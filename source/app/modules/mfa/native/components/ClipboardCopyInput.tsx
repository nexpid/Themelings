// app/modules/mfa/native/components/ClipboardCopyInput.tsx
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
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AppStates;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flexDirection': 'column', 'alignSelf': 'stretch'};
    var4['inputContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/mfa/native/components/ClipboardCopyInput.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ClipboardCopyInput(arg1) {
        var1 = arg1;
        var13 = var1.label;
        var12 = var1.placeholder;
        var18 = var1.isValidClipboardCode;
        var15 = var1.maxLength;
        var14 = var1.onChangeCode;
        var16 = var1.error;
        var10 = var1.textContentType;
        var9 = var1.autoComplete;
        var8 = var1.keyboardType;
        var7 = var1.isDisabled;
        var3 = _closure1_slot9;
        var4 = undefined;
        var5 = var3.bind(var4)();
        var19 = _closure1_slot4;
        var3 = var19.useRef;
        var6 = null;
        var3 = var3.bind(var19)(var6);
        var _closure2_slot0 = var3;
        var3 = var19.useRef;
        var11 = var3.bind(var19)(var6);
        var _closure2_slot1 = var11;
        var6 = _closure1_slot0;
        var17 = _closure1_slot2;
        var3 = 7;
        var3 = var17[var3];
        var22 = var6.bind(var4)(var3);
        var21 = var22.useStateFromStores;
        var3 = _closure1_slot6;
        var20 = new Array(1);
        var20[0] = var3;
        var3 = function() {
            var2 = _closure1_slot6;
            var1 = var2.getState;
            var1 = var1.bind(var2)();
            return var1;
        };
        var22 = var21.bind(var22)(var20, var3);
        var _closure2_slot2 = var22;
        var21 = _closure1_slot1;
        var3 = 8;
        var20 = var17[var3];
        var20 = var21.bind(var4)(var20);
        var20 = var20.bind(var4)(var14);
        var3 = var17[var3];
        var3 = var21.bind(var4)(var3);
        var21 = var3.bind(var4)(var18);
        var _closure2_slot3 = var21;
        var18 = var19.useEffect;
        var3 = new Array(3);
        var3[0] = var22;
        var3[1] = var21;
        var3[2] = var20;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var2 = function _run() {
                    var4 = undefined;
                    var1 = undefined;
                    var3 = _closure1_slot3;
                    var2 = function* () {
                        var1 = function* anon_0_() {
                            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0002_ip = 237; continue _fun0002 }
 12:
                                var4 = global;
                                var6 = var4.Promise;
                                var2 = var6.prototype;
                                var5 = Object.create(var2, {constructor: {value: var6}});
                                var9 = function(arg1) {
                                    var1 = global;
                                    var4 = var1.setTimeout;
                                    var3 = undefined;
                                    var2 = arg1;
                                    var1 = 50;
                                    var1 = var4.bind(var3)(var2, var1);
                                    return var1;
                                };
                                var10 = var5;
                                var2 = new var10[var6](var9, var8);
                                var2 = var2 instanceof Object ? var2 : var5;
                                SaveGenerator(address=51);
 49:
                                return var2;
 51:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                                if(var5) { _fun0002_ip = 234; continue _fun0002 }
 60:
                                var5 = var4.Promise;
                                var4 = var5.prototype;
                                var4 = Object.create(var4, {constructor: {value: var5}});
                                var9 = function(arg1) {
                                    var3 = _closure1_slot0;
                                    var2 = _closure1_slot2;
                                    var1 = 9;
                                    var2 = var2[var1];
                                    var1 = undefined;
                                    var3 = var3.bind(var1)(var2);
                                    var2 = var3.runAfterInteractions;
                                    var1 = arg1;
                                    var1 = var2.bind(var3)(var1);
                                    return var1;
                                };
                                var10 = var4;
                                var3 = new var10[var5](var9, var8);
                                var3 = var3 instanceof Object ? var3 : var4;
                                SaveGenerator(address=97);
 95:
                                return var3;
 97:
                                ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                                if(var4) { _fun0002_ip = 231; continue _fun0002 }
 106:
                                var6 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var4 = 10;
                                var4 = var5[var4];
                                var5 = undefined;
                                var6 = var6.bind(var5)(var4);
                                var4 = var6.getString;
                                var4 = var4.bind(var6)();
                                SaveGenerator(address=145);
 143:
                                return var4;
 145:
                                ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                                if(var6) { _fun0002_ip = 228; continue _fun0002 }
 151:
                                var6 = var4.trim;
                                var8 = var6.bind(var4)();
                                var7 = _closure2_slot0;
                                var7 = var7.current;
                                if(!(var8 !== var7)) { _fun0002_ip = 225; continue _fun0002 }
 177:
                                var7 = _closure2_slot0;
                                var7['current'] = var8;
                                var7 = _closure2_slot3;
                                var7 = var7.bind(var5)(var8);
                                if(!var7) { _fun0002_ip = 225; continue _fun0002 }
 199:
                                var6 = _closure2_slot1;
                                var7 = var6.current;
                                var6 = null;
                                if(!(var6 != var7)) { _fun0002_ip = 225; continue _fun0002 }
 214:
                                var6 = var7.setText;
                                var6 = var6.bind(var7)(var8);
 225:
                                return var5;
 228:
                                return var4;
 231:
                                return var3;
 234:
                                return var2;
 237:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var4 = var3.bind(var4)(var2);
                    _closure3_slot0 = var4;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                var _closure3_slot0 = var2;
                var3 = _closure2_slot2;
                var2 = _closure1_slot7;
                var2 = var2.ACTIVE;
                if(!(var3 === var2)) { _fun0001_ip = 50; continue _fun0001 }
 37:
                var2 = function run() {
                    var1 = undefined;
                    var4 = _closure3_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                var1 = undefined;
                var1 = var2.bind(var1)();
 50:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var18.bind(var19)(var2, var3);
        var3 = _closure1_slot8;
        var2 = _closure1_slot5;
        var1 = {};
        var5 = var5.inputContainer;
        var1['style'] = var5;
        var5 = 11;
        var5 = var17[var5];
        var5 = var6.bind(var4)(var5);
        var6 = var5.TextInput;
        var5 = {'ref': null, 'autoFocus': true, 'autoCorrect': false, 'autoCapitalize': 'none'};
        var5['ref'] = var11;
        var11 = true;
        var5['errorMessage'] = var16;
        var5['maxLength'] = var15;
        var5['onChange'] = var14;
        var5['label'] = var13;
        var5['accessibilityLabel'] = var13;
        var5['placeholder'] = var12;
        var5['isClearable'] = var11;
        var5['textContentType'] = var10;
        var5['autoComplete'] = var9;
        var5['keyboardType'] = var8;
        var5['isDisabled'] = var7;
        var5 = var3.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();