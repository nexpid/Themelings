// app/modules/links/native/handleContentLinking.tsx
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.addPostConnectionCallback;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Routes;
    var _closure1_slot5 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/links/native/handleContentLinking.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function handleContentLinking(arg1) {
        var1 = arg1;
        var3 = var1.guildId;
        var _closure2_slot0 = var3;
        var3 = var1.channelId;
        var _closure2_slot1 = var3;
        var3 = var1.navigationSettings;
        var _closure2_slot2 = var3;
        var3 = var1.messageId;
        var _closure2_slot3 = var3;
        var1 = var1.summaryId;
        var _closure2_slot4 = var1;
        var5 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 3;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var5.bind(var1)(var3);
        var3 = var5.popAll;
        var3 = var3.bind(var5)();
        var3 = _closure1_slot4;
        var4 = _closure1_slot3;
        var2 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var3 = _closure2_slot2;
                    var2 = var3.safe;
                    var5 = var3.navigationReplace;
                    var3 = undefined;
                    var8 = var3 === var5;
                    if(var8) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var8 = var5;
case 4:
                    if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 5;
                    var2 = var7[var2];
                    var9 = var6.bind(var3)(var2);
                    var7 = var9.transitionTo;
                    var12 = _closure1_slot5;
                    var11 = var12.CHANNEL;
                    var10 = _closure2_slot0;
                    var6 = _closure2_slot1;
                    var2 = _closure2_slot3;
                    var6 = var11.bind(var12)(var10, var6, var2);
                    var2 = {};
                    var2['navigationReplace'] = var8;
                    var10 = true;
                    var2['openChannel'] = var10;
                    var2 = var7.bind(var9)(var6, var2);
                    _fun0001_ip = 8; continue _fun0001;
case 6:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var2 = 4;
                    var2 = var7[var2];
                    var7 = var6.bind(var3)(var2);
                    var11 = _closure1_slot5;
                    var10 = var11.CHANNEL;
                    var9 = _closure2_slot0;
                    var6 = _closure2_slot1;
                    var2 = _closure2_slot3;
                    var6 = var10.bind(var11)(var9, var6, var2);
                    var2 = {};
                    var2['navigationReplace'] = var8;
                    var8 = true;
                    var2['openChannel'] = var8;
                    var2 = var7.bind(var3)(var6, var2);
                    SaveGenerator(address=197);
case 9:
                    return var2;
case 10:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(var6) { _fun0001_ip = 11; continue _fun0001 }
case 8:
                    var6 = _closure2_slot1;
                    var8 = null;
                    var6 = var8 != var6;
                    if(!var6) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                    var7 = _closure2_slot4;
                    var6 = var8 != var7;
case 12:
                    if(!var6) { _fun0001_ip = 14; continue _fun0001 }
case 15:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 6;
                    var5 = var7[var5];
                    var7 = var6.bind(var3)(var5);
                    var6 = var7.setSelectedSummary;
                    var5 = _closure2_slot1;
                    var4 = _closure2_slot4;
                    var4 = var6.bind(var7)(var5, var4);
case 14:
                    return var3;
case 11:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var4.bind(var1)(var2);
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();