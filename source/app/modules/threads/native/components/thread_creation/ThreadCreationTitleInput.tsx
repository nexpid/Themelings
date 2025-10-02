// app/modules/threads/native/components/thread_creation/ThreadCreationTitleInput.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MAX_CHANNEL_NAME_LENGTH;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = var7.forwardRef;
    var2 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var5 = arg2;
            var3 = var4.chatInputRef;
            var _closure2_slot0 = var3;
            var1 = var4.threadSettingsDraft;
            var _closure2_slot1 = var1;
            var12 = var4.threadNameError;
            var _closure2_slot2 = var5;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 4;
            var9 = var8[var4];
            var4 = undefined;
            var11 = var6.bind(var4)(var9);
            var10 = var11.renderError;
            var9 = {};
            var13 = var1.name;
            var9['content'] = var13;
            var12 = var10.bind(var11)(var12, var9);
            var16 = _closure1_slot3;
            var10 = var16.useRef;
            var9 = var1.name;
            var14 = var10.bind(var16)(var9);
            var _closure2_slot3 = var14;
            var11 = var16.useCallback;
            var9 = var1.parentChannelId;
            var10 = new Array(1);
            var10[0] = var9;
            var9 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = arg1;
                    var3 = _closure2_slot1;
                    var4 = var3.parentChannelId;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var8 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var3 = 5;
                    var3 = var10[var3];
                    var9 = undefined;
                    var6 = var8.bind(var9)(var3);
                    var5 = var6.changeThreadSettings;
                    var3 = _closure2_slot1;
                    var4 = var3.parentChannelId;
                    var3 = {};
                    var7 = 6;
                    var7 = var10[var7];
                    var8 = var8.bind(var9)(var7);
                    var7 = false;
                    var7 = var8.bind(var9)(var2, var7);
                    var3['name'] = var7;
                    var3 = var5.bind(var6)(var4, var3);
                    var1 = _closure2_slot3;
                    var1['current'] = var2;
case 2:
                    var1 = undefined;
                    return var1;
                }
            };
            var9 = var11.bind(var16)(var9, var10);
            var13 = var16.useCallback;
            var11 = new Array(1);
            var11[0] = var1;
            var10 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var2 = var2.name;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                    var2 = _closure2_slot1;
                    var2 = var2.parentChannelId;
                    if(!(var3 != var2)) { _fun0003_ip = 4; continue _fun0003 }
case 6:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 6;
                    var3 = var4[var3];
                    var4 = undefined;
                    var7 = var5.bind(var4)(var3);
                    var3 = _closure2_slot1;
                    var6 = var3.name;
                    var5 = true;
                    var5 = var7.bind(var4)(var6, var5);
                    var3 = var3.name;
                    if(!(var5 !== var3)) { _fun0003_ip = 4; continue _fun0003 }
case 7:
                    var3 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 5;
                    var2 = var6[var2];
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.changeThreadSettings;
                    var1 = _closure2_slot1;
                    var2 = var1.parentChannelId;
                    var1 = {};
                    var1['name'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
case 4:
                    var1 = undefined;
                    return var1;
                }
            };
            var10 = var13.bind(var16)(var10, var11);
            var13 = var16.useCallback;
            var11 = new Array(1);
            var11[0] = var3;
            var3 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var2 = var1.current;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0004_ip = 8; continue _fun0004 }
case 5:
                    var1 = var2.focus;
                    var1 = var1.bind(var2)();
case 8:
                    var1 = undefined;
                    return var1;
                }
            };
            var11 = var13.bind(var16)(var3, var11);
            var15 = var16.useEffect;
            var3 = var1.name;
            var13 = new Array(2);
            var13[0] = var3;
            var13[1] = var5;
            var3 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure2_slot3;
                    var3 = var2.current;
                    var2 = _closure2_slot1;
                    var2 = var2.name;
                    var2 = var3 !== var2;
                    if(!var2) { _fun0005_ip = 9; continue _fun0005 }
case 8:
                    var3 = _closure2_slot1;
                    var4 = var3.name;
                    var3 = null;
                    var2 = var3 != var4;
case 9:
                    if(!var2) { _fun0005_ip = 10; continue _fun0005 }
case 11:
                    var2 = _closure2_slot2;
                    var5 = null;
                    var2 = var5 == var2;
                    var3 = undefined;
                    if(var2) { _fun0005_ip = 12; continue _fun0005 }
case 13:
                    var4 = _closure2_slot2;
                    var4 = var4.current;
                    var2 = var5 == var4;
                    var3 = var4;
case 12:
                    if(var2) { _fun0005_ip = 10; continue _fun0005 }
case 14:
                    var2 = var3.setText;
                    var1 = _closure2_slot1;
                    var1 = var1.name;
                    var1 = var2.bind(var3)(var1);
case 10:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var15.bind(var16)(var3, var13);
            var3 = 7;
            var3 = var8[var3];
            var8 = var6.bind(var4)(var3);
            var6 = var8.useStateFromStores;
            var13 = _closure1_slot4;
            var3 = new Array(1);
            var3[0] = var13;
            var2 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getChannel;
                var1 = _closure2_slot1;
                var1 = var1.parentChannelId;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var13 = var6.bind(var8)(var3, var2);
            var2 = null;
            var2 = var2 != var13;
            var8 = '';
            var6 = var8;
            if(!var2) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var3 = _closure1_slot0;
            var15 = _closure1_slot2;
            var2 = 8;
            var2 = var15[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.getDefaultThreadName;
            var1 = var1.parentMessageId;
            var6 = var2.bind(var3)(var13, var1);
case 15:
            var3 = _closure1_slot6;
            var2 = _closure1_slot0;
            var16 = _closure1_slot2;
            var1 = 9;
            var1 = var16[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.TextInput;
            var1 = {};
            var15 = _closure1_slot1;
            var13 = 10;
            var13 = var16[var13];
            var13 = var15.bind(var4)(var13);
            var13 = var13.bind(var4)(var14);
            var1['defaultValue'] = var13;
            var1['errorMessage'] = var12;
            var12 = true;
            var1['isClearable'] = var12;
            var1['autoFocus'] = var12;
            var12 = _closure1_slot5;
            var1['maxLength'] = var12;
            var1['onSubmitEditing'] = var11;
            var1['onBlur'] = var10;
            var1['onChange'] = var9;
            if(!(var8 === var6)) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = 11;
            var8 = var11[var7];
            var8 = var10.bind(var4)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var11[var7];
            var7 = var10.bind(var4)(var7);
            var7 = var7.t;
            var7 = var7.Nb2/RE;
            var6 = var8.bind(var9)(var7);
case 17:
            var1['placeholder'] = var6;
            var1['ref'] = var5;
            var5 = 'next';
            var1['returnKeyType'] = var5;
            var5 = 'none';
            var1['textContentType'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var4.bind(var7)(var2);
    var2 = var7.memo;
    var2 = var2.bind(var7)(var4);
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/threads/native/components/thread_creation/ThreadCreationTitleInput.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();