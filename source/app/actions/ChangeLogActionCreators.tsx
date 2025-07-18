// app/actions/ChangeLogActionCreators.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function cacheBustParam() {
        var1 = global;
        var2 = var1.Date;
        var3 = var2.prototype;
        var3 = Object.create(var3, {constructor: {value: var2}});
        var7 = var3;
        var2 = new var7[var2](var6);
        var3 = var2 instanceof Object ? var2 : var3;
        var2 = var3.getMinutes;
        var5 = var2.bind(var3)();
        var4 = var1.Math;
        var3 = var4.floor;
        var2 = 5;
        var2 = var5 / var2;
        var3 = var3.bind(var4)(var2);
        var1 = var1.HermesInternal;
        var2 = var1.concat;
        var1 = 'x=';
        var1 = var2.bind(var1)(var3);
        return var1;
    };
    var _closure1_slot7 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.Endpoints;
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.ChangelogPlatforms;
    var _closure1_slot6 = var2;
    var2 = {};
    var7 = function lockChangeLog(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'CHANGE_LOG_LOCK';
        var2['type'] = var5;
        var5 = arg1;
        var2['key'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['lockChangeLog'] = var7;
    var7 = function unlockChangeLog(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'CHANGE_LOG_UNLOCK';
        var2['type'] = var5;
        var5 = arg1;
        var2['key'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['unlockChangeLog'] = var7;
    var7 = function markChangelogAsSeen(arg1, arg2) {
        var4 = arg1;
        var6 = _closure1_slot1;
        var5 = _closure1_slot2;
        var1 = 4;
        var3 = var5[var1];
        var1 = undefined;
        var7 = var6.bind(var1)(var3);
        var6 = var7.dispatch;
        var3 = {};
        var8 = 'CHANGE_LOG_MARK_SEEN';
        var3['type'] = var8;
        var3['changelogId'] = var4;
        var8 = arg2;
        var3['changelogDate'] = var8;
        var3 = var6.bind(var7)(var3);
        var3 = _closure1_slot0;
        var2 = 5;
        var2 = var5[var2];
        var2 = var3.bind(var1)(var2);
        var3 = var2.LastReceivedChangelogId;
        var2 = var3.updateSetting;
        var2 = var2.bind(var3)(var4);
        return var1;
    };
    var2['markChangelogAsSeen'] = var7;
    var7 = function setChangelogOverride(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var3 = this;
            var5 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 4;
            var2 = var2[var1];
            var1 = undefined;
            var6 = var5.bind(var1)(var2);
            var5 = var6.dispatch;
            var2 = {};
            var7 = 'CHANGE_LOG_SET_OVERRIDE';
            var2['type'] = var7;
            var2['id'] = var4;
            var2 = var5.bind(var6)(var2);
            var2 = null;
            if(!(var2 != var4)) { _fun0001_ip = 74; continue _fun0001 }
 63:
            var2 = var3.sendChangelogMessage;
            var2 = var2.bind(var3)(var4);
 74:
            return var1;
        }
    };
    var2['setChangelogOverride'] = var7;
    var7 = function sendChangelogMessage(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var4 = var2.HTTP;
        var3 = var4.post;
        var2 = {};
        var5 = _closure1_slot5;
        var5 = var5.CHANGELOG_MESSAGES;
        var2['url'] = var5;
        var5 = {};
        var6 = arg1;
        var5['changelog_id'] = var6;
        var2['body'] = var5;
        var5 = true;
        var2['rejectWithError'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['sendChangelogMessage'] = var7;
    var7 = function fetchChangelogConfig() {
        var1 = _closure1_slot6;
        var8 = var1.MOBILE;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 6;
        var1 = var3[var1];
        var5 = undefined;
        var1 = var2.bind(var5)(var1);
        var3 = var1.HTTP;
        var2 = var3.get;
        var1 = {};
        var4 = _closure1_slot7;
        var7 = var4.bind(var5)();
        var4 = global;
        var4 = var4.HermesInternal;
        var6 = var4.concat;
        var5 = 'https://cdn.discordapp.com/changelogs/config_';
        var4 = '.json?';
        var4 = var6.bind(var5)(var8, var4, var7);
        var1['url'] = var4;
        var4 = true;
        var1['rejectWithError'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['fetchChangelogConfig'] = var7;
    var4 = function fetchChangelog(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arguments[2];
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = arg2;
            var _closure2_slot1 = var2;
            var2 = undefined;
            if(!(var3 === var2)) { _fun0002_ip = 27; continue _fun0002 }
 25:
            var3 = false;
 27:
            var _closure2_slot2 = var3;
            var3 = this;
            var _closure2_slot3 = var3;
            var3 = _closure1_slot3;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0003_ip = 380; continue _fun0003 }
 10:
                        var6 = undefined;
                        var9 = undefined;
                        var8 = _closure1_slot4;
                        var7 = var8.getChangelog;
                        var5 = _closure2_slot0;
                        var2 = _closure2_slot1;
                        var5 = var7.bind(var8)(var5, var2);
                        var2 = null;
                        if(!(var2 == var5)) { _fun0003_ip = 377; continue _fun0003 }
 53:
                        var5 = _closure2_slot2;
                        var7 = _closure1_slot6;
                        if(var5) { _fun0003_ip = 72; continue _fun0003 }
 64:
                        var5 = var7.MOBILE;
                        _fun0003_ip = 78; continue _fun0003;
 72:
                        var5 = var7.DESKTOP;
 78:
                        var9 = var5;
 81: // try_start_0
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var5 = 6;
                        var5 = var8[var5];
                        var5 = var7.bind(var6)(var5);
                        var8 = var5.HTTP;
                        var7 = var8.get;
                        var5 = {};
                        var23 = var9;
                        var21 = _closure2_slot0;
                        var19 = _closure2_slot1;
                        var9 = _closure1_slot7;
                        var17 = var9.bind(var6)();
                        var9 = global;
                        var9 = var9.HermesInternal;
                        var12 = var9.concat;
                        var24 = 'https://cdn.discordapp.com/changelogs/';
                        var10 = '/';
                        var18 = '.json?';
                        var22 = var10;
                        var20 = var10;
                        var9 = var24[var12](var23, var22, var21, var20, var19, var18, var17, var16);
                        var5['url'] = var9;
                        var9 = true;
                        var5['rejectWithError'] = var9;
                        var5 = var7.bind(var8)(var5);
                        SaveGenerator(address=190);
 188:
                        return var5;
 190:
                        ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                        if(var7) { _fun0003_ip = 264; continue _fun0003 }
 196:
                        var8 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var7 = 4;
                        var7 = var9[var7];
                        var9 = var8.bind(var6)(var7);
                        var8 = var9.dispatch;
                        var7 = {};
                        var10 = 'CHANGE_LOG_FETCH_SUCCESS';
                        var7['type'] = var10;
                        var10 = _closure2_slot0;
                        var7['id'] = var10;
                        var10 = var5.body;
                        var7['changelog'] = var10;
                        var7 = var8.bind(var9)(var7);
                        var7 = var5.body;
 261: // try_end0
                        return var7;
 264:
                        return var5;
 267: // catch_target0
                        CatchBlockStart(arg_register=4);
                        var5 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var4 = 4;
                        var4 = var7[var4];
                        var7 = var5.bind(var6)(var4);
                        var6 = var7.dispatch;
                        var4 = {};
                        var5 = 'CHANGE_LOG_FETCH_FAILED';
                        var4['type'] = var5;
                        var5 = _closure2_slot0;
                        var4['id'] = var5;
                        var5 = _closure2_slot1;
                        var4['locale'] = var5;
                        var4 = var6.bind(var7)(var4);
                        var7 = 'en-US';
                        var4 = null;
                        if(!(var7 !== var5)) { _fun0003_ip = 371; continue _fun0003 }
 338:
                        var6 = _closure2_slot3;
                        var5 = var6.fetchChangelog;
                        var3 = _closure2_slot0;
                        var3 = var5.bind(var6)(var3, var7);
                        SaveGenerator(address=362);
 360:
                        return var3;
 362:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                        var4 = var3;
                        if(var5) { _fun0003_ip = 374; continue _fun0003 }
 371:
                        return var4;
 374:
                        return var3;
 377:
                        return var2;
 380:
                        return var1;
                    }
                };
                return var1;
            };
            var1 = var3.bind(var2)(var1);
            var1 = var1.bind(var2)();
            return var1;
        }
    };
    var2['fetchChangelog'] = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'actions/ChangeLogActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();