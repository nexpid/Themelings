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
                    var9 = arg1;
                    var5 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var8 = 3;
                    var3 = var3[var8];
                    var6 = undefined;
                    var4 = var4.bind(var6)(var3);
                    var3 = var4.tryParseDiceRollLink;
                    var3 = var3.bind(var4)(var9);
                    var10 = null;
                    if(!(var10 == var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var7 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var8];
                    var7 = var7.bind(var6)(var4);
                    var4 = var7.tryParseChannelPath;
                    var4 = var4.bind(var7)(var9);
                    if(!(var10 != var4)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var8 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var7 = 6;
                    var7 = var11[var7];
                    var7 = var8.bind(var6)(var7);
                    var7 = var7.bind(var6)(var4);
                    SaveGenerator(address=125);
case 8:
                    return var7;
case 9:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                    if(var8) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    if(var7) { _fun0001_ip = 6; continue _fun0001 }
case 12:
                    var11 = _closure1_slot1;
                    var17 = _closure1_slot2;
                    var8 = 7;
                    var8 = var17[var8];
                    var12 = var11.bind(var6)(var8);
                    var11 = var12.show;
                    var8 = {};
                    var16 = _closure1_slot0;
                    var13 = 8;
                    var14 = var17[var13];
                    var14 = var16.bind(var6)(var14);
                    var18 = var14.intl;
                    var15 = var18.string;
                    var14 = var17[var13];
                    var14 = var16.bind(var6)(var14);
                    var14 = var14.t;
                    var14 = var14.r0DLNm;
                    var14 = var15.bind(var18)(var14);
                    var8['title'] = var14;
                    var14 = var17[var13];
                    var14 = var16.bind(var6)(var14);
                    var18 = var14.intl;
                    var15 = var18.string;
                    var14 = var17[var13];
                    var14 = var16.bind(var6)(var14);
                    var14 = var14.t;
                    var14 = var14["6Y0JlN"];
                    var14 = var15.bind(var18)(var14);
                    var8['body'] = var14;
                    var14 = var17[var13];
                    var14 = var16.bind(var6)(var14);
                    var15 = var14.intl;
                    var14 = var15.string;
                    var13 = var17[var13];
                    var13 = var16.bind(var6)(var13);
                    var13 = var13.t;
                    var13 = var13.BddRzS;
                    var13 = var14.bind(var15)(var13);
                    var8['confirmText'] = var13;
                    var8 = var11.bind(var12)(var8);
                    _fun0001_ip = 13; continue _fun0001;
case 10:
                    return var7;
case 6:
                    if(!(var10 != var4)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
                    var7 = var4.guildId;
                    if(!(var10 != var7)) { _fun0001_ip = 14; continue _fun0001 }
case 16:
                    var11 = _closure1_slot4;
                    var8 = var11.getGuild;
                    var7 = var4.guildId;
                    var7 = var8.bind(var11)(var7);
                    var11 = var4.channelId;
                    if(!(var10 != var7)) { _fun0001_ip = 14; continue _fun0001 }
case 17:
                    var8 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var7 = 9;
                    var7 = var12[var7];
                    var8 = var8.bind(var6)(var7);
                    var7 = var8.isModeratorReportOrPostChannelId;
                    var7 = var7.bind(var8)(var11);
                    if(var7) { _fun0001_ip = 18; continue _fun0001 }
case 14:
                    var8 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var7 = 11;
                    var7 = var11[var7];
                    var8 = var8.bind(var6)(var7);
                    var7 = var8.maybePerformRoleSubscriptionUpsellRedirect;
                    if(!(var10 == var4)) { _fun0001_ip = 19; continue _fun0001 }
case 20:
                    var10 = {};
                    var10['guildId'] = var6;
                    var4 = var10;
case 19:
                    var4 = var7.bind(var8)(var4);
                    SaveGenerator(address=457);
case 21:
                    return var4;
case 22:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(var7) { _fun0001_ip = 23; continue _fun0001 }
case 24:
                    if(var4) { _fun0001_ip = 13; continue _fun0001 }
case 25:
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var7 = 5;
                    var7 = var10[var7];
                    var8 = var8.bind(var6)(var7);
                    var7 = var8.transitionTo;
                    var7 = var7.bind(var8)(var9, var5);
case 13:
                    return var6;
case 23:
                    return var4;
case 18:
                    var15 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var4 = 7;
                    var4 = var13[var4];
                    var8 = var15.bind(var6)(var4);
                    var7 = var8.show;
                    var4 = {};
                    var12 = _closure1_slot0;
                    var9 = 8;
                    var10 = var13[var9];
                    var10 = var12.bind(var6)(var10);
                    var16 = var10.intl;
                    var14 = var16.string;
                    var10 = 10;
                    var11 = var13[var10];
                    var11 = var15.bind(var6)(var11);
                    var11 = var11.iCIEAV;
                    var11 = var14.bind(var16)(var11);
                    var4['title'] = var11;
                    var11 = var13[var9];
                    var11 = var12.bind(var6)(var11);
                    var14 = var11.intl;
                    var11 = var14.string;
                    var10 = var13[var10];
                    var10 = var15.bind(var6)(var10);
                    var10 = var10.bvzo6p;
                    var10 = var11.bind(var14)(var10);
                    var4['body'] = var10;
                    var10 = var13[var9];
                    var10 = var12.bind(var6)(var10);
                    var11 = var10.intl;
                    var10 = var11.string;
                    var9 = var13[var9];
                    var9 = var12.bind(var6)(var9);
                    var9 = var9.t;
                    var9 = var9.BddRzS;
                    var9 = var10.bind(var11)(var9);
                    var4['confirmText'] = var9;
                    var4 = var7.bind(var8)(var4);
                    var4 = undefined;
                    return var4;
case 4:
                    var8 = var3.guildId;
                    var7 = var3.channelId;
                    var12 = var3.diceCount;
                    var11 = var3.diceSides;
                    var4 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var3 = 4;
                    var3 = var9[var3];
                    var10 = var4.bind(var6)(var3);
                    var3 = var10.startDiceRoll;
                    var3 = var3.bind(var10)(var7, var12, var11);
                    var3 = 5;
                    var3 = var9[var3];
                    var4 = var4.bind(var6)(var3);
                    var3 = var4.transitionTo;
                    var6 = _closure1_slot5;
                    var2 = var6.CHANNEL;
                    var2 = var2.bind(var6)(var8, var7);
                    var2 = var3.bind(var4)(var2, var5);
                    var2 = undefined;
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot6 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot6 = var1;
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
    var4 = var4.Routes;
    var _closure1_slot5 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/links/safeTransitionTo.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function safeTransitionTo() {
        var1 = undefined;
        var4 = _closure1_slot6;
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