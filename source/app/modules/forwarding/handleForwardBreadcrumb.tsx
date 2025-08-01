// app/modules/forwarding/handleForwardBreadcrumb.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _handleForwardBreadcrumb() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    var13 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 478; continue _fun0001 }
 13:
                    var2 = undefined;
                    var4 = undefined;
                    var3 = undefined;
                    var5 = undefined;
                    var6 = var13.messageReference;
                    var14 = null;
                    if(!(var14 != var6)) { _fun0001_ip = 475; continue _fun0001 }
 36:
                    var6 = var13.messageReference;
                    var4 = var6.guild_id;
                    var6 = var13.messageReference;
                    var9 = var6.channel_id;
                    var3 = var9;
                    var6 = var13.messageReference;
                    var10 = var6.message_id;
                    var7 = _closure1_slot4;
                    var6 = var7.getChannel;
                    var6 = var6.bind(var7)(var9);
                    var7 = false;
                    var5 = false;
                    if(!(var14 == var6)) { _fun0001_ip = 278; continue _fun0001 }
 101:
                    var6 = var4;
                    if(!(var14 != var6)) { _fun0001_ip = 278; continue _fun0001 }
 111:
                    var11 = _closure1_slot5;
                    var9 = var11.getGuild;
                    var6 = var4;
                    var6 = var9.bind(var11)(var6);
                    if(!(var14 == var6)) { _fun0001_ip = 278; continue _fun0001 }
 135: // try_start_0
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var6 = 4;
                    var6 = var11[var6];
                    var15 = var9.bind(var2)(var6);
                    var12 = var15.startLurking;
                    var11 = var4;
                    var9 = {};
                    var6 = _closure1_slot7;
                    var6 = var6.FORWARD_BREADCRUMB;
                    var9['object'] = var6;
                    var6 = {};
                    var6['shouldNavigate'] = var7;
                    var6 = var12.bind(var15)(var11, var9, var6);
                    SaveGenerator(address=199);
 197:
                    return var6;
 199:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=8);
                    if(var9) { _fun0001_ip = 273; continue _fun0001 }
 205:
                    var5 = true;
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var9 = 5;
                    var9 = var12[var9];
                    var12 = var11.bind(var2)(var9);
                    var11 = var12.waitForGuild;
                    var9 = var4;
                    var9 = var11.bind(var12)(var9);
                    SaveGenerator(address=245);
 243:
                    return var9;
 245:
                    ResumeGenerator(result_out_reg=8, return_bool_out_reg=10);
                    if(var11) { _fun0001_ip = 270; continue _fun0001 }
 251:
                    var15 = _closure1_slot4;
                    var12 = var15.getChannel;
                    var11 = var3;
                    var11 = var12.bind(var15)(var11);
 268: // try_end0
                    _fun0001_ip = 278; continue _fun0001;
 270:
                    return var9;
 273:
                    return var6;
 276: // catch_target0
                    CatchBlockStart(arg_register=5);
 278:
                    var9 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var6 = 6;
                    var6 = var11[var6];
                    var12 = var9.bind(var2)(var6);
                    var11 = var12.track;
                    var6 = _closure1_slot6;
                    var9 = var6.FORWARD_BREADCRUMB_CLICKED;
                    var6 = {};
                    var17 = _closure1_slot4;
                    var16 = var17.getBasicChannel;
                    var15 = var13.channel_id;
                    var15 = var16.bind(var17)(var15);
                    var16 = var14 == var15;
                    var14 = undefined;
                    if(var16) { _fun0001_ip = 349; continue _fun0001 }
 344:
                    var14 = var15.guild_id;
 349:
                    var6['guild_id'] = var14;
                    var14 = var13.channel_id;
                    var6['channel_id'] = var14;
                    var13 = var13.id;
                    var6['message_id'] = var13;
                    var13 = var4;
                    var6['breadcrumb_guild_id'] = var13;
                    var13 = var3;
                    var6['breadcrumb_channel_id'] = var13;
                    var6['breadcrumb_message_id'] = var10;
                    var6['did_lurk'] = var5;
                    var6 = var11.bind(var12)(var9, var6);
                    var6 = undefined;
                    if(!var5) { _fun0001_ip = 420; continue _fun0001 }
 417:
                    var6 = var3;
 420:
                    var9 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var5 = 7;
                    var5 = var11[var5];
                    var5 = var9.bind(var2)(var5);
                    var9 = _closure1_slot8;
                    var8 = var9.CHANNEL;
                    var4 = var8.bind(var9)(var4, var3, var10);
                    var3 = {};
                    var3['navigationReplace'] = var7;
                    var3['welcomeModalChannelId'] = var6;
                    var3 = var5.bind(var2)(var4, var3);
 475:
                    return var2;
 478:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot9 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot9 = var1;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot6 = var7;
    var7 = var4.AnalyticsObjects;
    var _closure1_slot7 = var7;
    var4 = var4.Routes;
    var _closure1_slot8 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/forwarding/handleForwardBreadcrumb.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function handleForwardBreadcrumb() {
        var1 = undefined;
        var4 = _closure1_slot9;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();