// app/modules/links/safeTransitionTo.native.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
 0:
                    StartGenerator();
                    var7 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 655; continue _fun0001 }
 13:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 2;
                    var2 = var4[var2];
                    var9 = undefined;
                    var3 = var3.bind(var9)(var2);
                    var2 = var3.tryParseChannelPath;
                    var2 = var2.bind(var3)(var7);
                    var6 = null;
                    if(!(var6 != var2)) { _fun0001_ip = 295; continue _fun0001 }
 58:
                    var4 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var3 = 3;
                    var3 = var8[var3];
                    var3 = var4.bind(var9)(var3);
                    var3 = var3.bind(var9)(var2);
                    SaveGenerator(address=87);
 85:
                    return var3;
 87:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 292; continue _fun0001 }
 96:
                    if(var3) { _fun0001_ip = 295; continue _fun0001 }
 102:
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
                    _fun0001_ip = 462; continue _fun0001;
 292:
                    return var3;
 295:
                    if(!(var6 != var2)) { _fun0001_ip = 370; continue _fun0001 }
 299:
                    var3 = var2.guildId;
                    if(!(var6 != var3)) { _fun0001_ip = 370; continue _fun0001 }
 308:
                    var8 = _closure1_slot4;
                    var4 = var8.getGuild;
                    var3 = var2.guildId;
                    var3 = var4.bind(var8)(var3);
                    var8 = var2.channelId;
                    if(!(var6 != var3)) { _fun0001_ip = 370; continue _fun0001 }
 336:
                    var4 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var3 = 6;
                    var3 = var10[var3];
                    var4 = var4.bind(var9)(var3);
                    var3 = var4.isModeratorReportOrPostChannelId;
                    var3 = var3.bind(var4)(var8);
                    if(var3) { _fun0001_ip = 468; continue _fun0001 }
 370:
                    var4 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var3 = 8;
                    var3 = var8[var3];
                    var4 = var4.bind(var9)(var3);
                    var3 = var4.maybePerformRoleSubscriptionUpsellRedirect;
                    if(!(var6 == var2)) { _fun0001_ip = 409; continue _fun0001 }
 400:
                    var6 = {};
                    var6['guildId'] = var9;
                    var2 = var6;
 409:
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=418);
 416:
                    return var2;
 418:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 465; continue _fun0001 }
 424:
                    if(var2) { _fun0001_ip = 462; continue _fun0001 }
 427:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 9;
                    var3 = var6[var3];
                    var6 = var4.bind(var9)(var3);
                    var4 = var6.transitionTo;
                    var3 = arg2;
                    var3 = var4.bind(var6)(var7, var3);
 462:
                    return var9;
 465:
                    return var2;
 468:
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
 655:
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