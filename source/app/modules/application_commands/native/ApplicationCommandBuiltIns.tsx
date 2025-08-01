// app/modules/application_commands/native/ApplicationCommandBuiltIns.tsx
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
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.BuiltInSectionId;
    var4 = {'id': '-15', 'untranslatedName': 'leave', 'displayName': 'leave'};
    var8 = 3;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.ApplicationCommandType;
    var8 = var8.CHAT;
    var4['type'] = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.ApplicationCommandInputType;
    var8 = var8.BUILT_IN;
    var4['inputType'] = var8;
    var7 = var7.BUILT_IN;
    var4['applicationId'] = var7;
    var8 = function get untranslatedDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 5;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.26C4oq;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var7 = 'untranslatedDescription';
    Object.defineProperty(var4, var7, {get: var8, set: var1, enumerable: true});
    var8 = function get displayDescription() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 5;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.26C4oq;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var7 = 'displayDescription';
    Object.defineProperty(var4, var7, {get: var8, set: var1, enumerable: true});
    var7 = function predicate(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var3 = var1.channel;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0001_ip = 27; continue _fun0001 }
 17:
            var2 = var3.isGroupDM;
            var1 = var2.bind(var3)();
 27:
            return var1;
        }
    };
    var4['predicate'] = var7;
    var2 = function execute(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg2;
            var5 = var1.channel;
            var _closure2_slot0 = var5;
            var1 = null;
            if(!(var1 != var5)) { _fun0002_ip = 453; continue _fun0002 }
 23:
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var3 = 6;
            var3 = var1[var3];
            var9 = undefined;
            var10 = var2.bind(var9)(var3);
            var8 = var10.computeChannelName;
            var7 = _closure1_slot4;
            var3 = _closure1_slot3;
            var12 = var8.bind(var10)(var5, var7, var3);
            var10 = 5;
            var3 = var1[var10];
            var3 = var2.bind(var9)(var3);
            var11 = var3.intl;
            var8 = var11.formatToPlainString;
            var3 = var1[var10];
            var3 = var2.bind(var9)(var3);
            var3 = var3.t;
            var7 = var3.hJ5Ap6;
            var3 = {};
            var3['name'] = var12;
            var3 = var8.bind(var11)(var7, var3);
            var7 = var1[var10];
            var7 = var2.bind(var9)(var7);
            var8 = var7.intl;
            var7 = var8.format;
            var1 = var1[var10];
            var1 = var2.bind(var9)(var1);
            var1 = var1.t;
            var2 = var1.SSIVOj;
            var1 = {};
            var1['name'] = var12;
            var7 = var7.bind(var8)(var2, var1);
            var1 = var5.isManaged;
            var1 = var1.bind(var5)();
            var8 = var3;
            if(!var1) { _fun0002_ip = 300; continue _fun0002 }
 190:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var2 = var1[var10];
            var2 = var3.bind(var9)(var2);
            var13 = var2.intl;
            var11 = var13.formatToPlainString;
            var2 = var1[var10];
            var2 = var3.bind(var9)(var2);
            var2 = var2.t;
            var5 = var2.hVGjER;
            var2 = {};
            var2['name'] = var12;
            var8 = var11.bind(var13)(var5, var2);
            var5 = var1[var10];
            var5 = var3.bind(var9)(var5);
            var11 = var5.intl;
            var5 = var11.format;
            var1 = var1[var10];
            var1 = var3.bind(var9)(var1);
            var1 = var1.t;
            var3 = var1.IK1Qvr;
            var1 = {};
            var1['name'] = var12;
            var7 = var5.bind(var11)(var3, var1);
 300:
            var2 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 7;
            var1 = var5[var1];
            var3 = var2.bind(var9)(var1);
            var2 = var3.show;
            var1 = {};
            var1['title'] = var8;
            var1['body'] = var7;
            var8 = _closure1_slot0;
            var6 = var5[var10];
            var6 = var8.bind(var9)(var6);
            var11 = var6.intl;
            var7 = var11.string;
            var6 = var5[var10];
            var6 = var8.bind(var9)(var6);
            var6 = var6.t;
            var6 = var6.26C4oq;
            var6 = var7.bind(var11)(var6);
            var1['confirmText'] = var6;
            var6 = var5[var10];
            var6 = var8.bind(var9)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var5 = var5[var10];
            var5 = var8.bind(var9)(var5);
            var5 = var5.t;
            var5 = var5.ETE/oK;
            var5 = var6.bind(var7)(var5);
            var1['cancelText'] = var5;
            var4 = function onConfirm() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0: // try_start_0
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 8;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.closePrivateChannel;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
 48: // try_end0
                    _fun0003_ip = 154; continue _fun0003;
 50: // catch_target0
                    CatchBlockStart(arg_register=0);
                    var3 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var2 = 9;
                    var2 = var9[var2];
                    var8 = undefined;
                    var4 = var3.bind(var8)(var2);
                    var3 = var4.sendBotMessage;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var7 = _closure1_slot0;
                    var1 = 5;
                    var5 = var9[var1];
                    var5 = var7.bind(var8)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var1 = var9[var1];
                    var1 = var7.bind(var8)(var1);
                    var1 = var1.t;
                    var1 = var1.YOsuT0;
                    var1 = var5.bind(var6)(var1);
                    var1 = var3.bind(var4)(var2, var1);
 154:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['onConfirm'] = var4;
            var1 = var2.bind(var3)(var1);
 453:
            var1 = undefined;
            return var1;
        }
    };
    var4['execute'] = var2;
    var2 = new Array(1);
    var2[0] = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/application_commands/native/ApplicationCommandBuiltIns.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();