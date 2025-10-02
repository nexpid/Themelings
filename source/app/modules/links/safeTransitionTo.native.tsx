// app/modules/links/safeTransitionTo.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _safeTransitionTo() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var7 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 2;
                    var2 = var4[var2];
                    var9 = undefined;
                    var3 = var3.bind(var9)(var2);
                    var2 = var3.tryParseChannelPath;
                    var2 = var2.bind(var3)(var7);
                    var6 = null;
                    if(!(var6 != var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var4 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var3 = 3;
                    var3 = var8[var3];
                    var3 = var4.bind(var9)(var3);
                    var3 = var3.bind(var9)(var2);
                    SaveGenerator(address=87);
case 6:
                    return var3;
case 7:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    if(var3) { _fun0001_ip = 4; continue _fun0001 }
case 10:
                    var8 = _closure1_slot1;
                    var15 = _closure1_slot2;
                    var4 = 4;
                    var4 = var15[var4];
                    var10 = var8.bind(var9)(var4);
                    var8 = var10.show;
                    var4 = {};
                    var14 = _closure1_slot0;
                    var11 = 5;
                    var12 = var15[var11];
                    var12 = var14.bind(var9)(var12);
                    var16 = var12.intl;
                    var13 = var16.string;
                    var12 = var15[var11];
                    var12 = var14.bind(var9)(var12);
                    var12 = var12.t;
                    var12 = var12.r0DLNj;
                    var12 = var13.bind(var16)(var12);
                    var4['title'] = var12;
                    var12 = var15[var11];
                    var12 = var14.bind(var9)(var12);
                    var16 = var12.intl;
                    var13 = var16.string;
                    var12 = var15[var11];
                    var12 = var14.bind(var9)(var12);
                    var12 = var12.t;
                    var12 = var12.6Y0JlJ;
                    var12 = var13.bind(var16)(var12);
                    var4['body'] = var12;
                    var12 = var15[var11];
                    var12 = var14.bind(var9)(var12);
                    var13 = var12.intl;
                    var12 = var13.string;
                    var11 = var15[var11];
                    var11 = var14.bind(var9)(var11);
                    var11 = var11.t;
                    var11 = var11.BddRzc;
                    var11 = var12.bind(var13)(var11);
                    var4['confirmText'] = var11;
                    var4 = var8.bind(var10)(var4);
                    _fun0001_ip = 11; continue _fun0001;
case 8:
                    return var3;
case 4:
                    if(!(var6 != var2)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                    var3 = var2.guildId;
                    if(!(var6 != var3)) { _fun0001_ip = 12; continue _fun0001 }
case 14:
                    var8 = _closure1_slot4;
                    var4 = var8.getGuild;
                    var3 = var2.guildId;
                    var3 = var4.bind(var8)(var3);
                    var8 = var2.channelId;
                    if(!(var6 != var3)) { _fun0001_ip = 12; continue _fun0001 }
case 15:
                    var4 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var3 = 6;
                    var3 = var10[var3];
                    var4 = var4.bind(var9)(var3);
                    var3 = var4.isModeratorReportOrPostChannelId;
                    var3 = var3.bind(var4)(var8);
                    if(var3) { _fun0001_ip = 16; continue _fun0001 }
case 12:
                    var4 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var3 = 8;
                    var3 = var8[var3];
                    var4 = var4.bind(var9)(var3);
                    var3 = var4.maybePerformRoleSubscriptionUpsellRedirect;
                    if(!(var6 == var2)) { _fun0001_ip = 17; continue _fun0001 }
case 18:
                    var6 = {};
                    var6['guildId'] = var9;
                    var2 = var6;
case 17:
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=418);
case 19:
                    return var2;
case 20:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 21; continue _fun0001 }
case 22:
                    if(var2) { _fun0001_ip = 11; continue _fun0001 }
case 23:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 9;
                    var3 = var6[var3];
                    var6 = var4.bind(var9)(var3);
                    var4 = var6.transitionTo;
                    var3 = arg2;
                    var3 = var4.bind(var6)(var7, var3);
case 11:
                    return var9;
case 21:
                    return var2;
case 16:
                    var12 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var2 = 4;
                    var2 = var10[var2];
                    var4 = var12.bind(var9)(var2);
                    var3 = var4.show;
                    var2 = {};
                    var8 = _closure1_slot0;
                    var5 = 5;
                    var6 = var10[var5];
                    var6 = var8.bind(var9)(var6);
                    var13 = var6.intl;
                    var11 = var13.string;
                    var6 = 7;
                    var7 = var10[var6];
                    var7 = var12.bind(var9)(var7);
                    var7 = var7.iCIEAQ;
                    var7 = var11.bind(var13)(var7);
                    var2['title'] = var7;
                    var7 = var10[var5];
                    var7 = var8.bind(var9)(var7);
                    var11 = var7.intl;
                    var7 = var11.string;
                    var6 = var10[var6];
                    var6 = var12.bind(var9)(var6);
                    var6 = var6.bvzo6u;
                    var6 = var7.bind(var11)(var6);
                    var2['body'] = var6;
                    var6 = var10[var5];
                    var6 = var8.bind(var9)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var5 = var10[var5];
                    var5 = var8.bind(var9)(var5);
                    var5 = var5.t;
                    var5 = var5.BddRzc;
                    var5 = var6.bind(var7)(var5);
                    var2['confirmText'] = var5;
                    var2 = var3.bind(var4)(var2);
                    var2 = undefined;
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot5 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot5 = var1;
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
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/links/safeTransitionTo.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function safeTransitionTo() {
        var1 = undefined;
        var4 = _closure1_slot5;
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