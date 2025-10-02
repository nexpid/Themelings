// app/modules/dismissible_content/DismissibleContentUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var15 = require;
    var18 = metroImportDefault;
    var3 = exports;
    var16 = dependencyMap;
    var _closure1_slot0 = var15;
    var _closure1_slot1 = var18;
    var _closure1_slot2 = var16;
    var13 = function addVersionedDismissedContent(arg1, arg2, arg3) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 11;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.updateRecurringDismissibleContentState;
        var2 = {};
        var1 = arg2;
        var2['lastDismissedVersion'] = var1;
        var1 = global;
        var5 = var1.Date;
        var1 = var5.now;
        var5 = var1.bind(var5)();
        var1 = var5.toString;
        var1 = var1.bind(var5)();
        var2['lastDismissedAtMs'] = var1;
        var1 = '0';
        var2['lastDismissedObjectId'] = var1;
        var1 = arg3;
        var2['numTimesDismissed'] = var1;
        var1 = arg1;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot15 = var13;
    var12 = function addTimeRecurringDismissedContent(arg1, arg2) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 11;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.updateRecurringDismissibleContentState;
        var2 = {'lastDismissedVersion': 0, 'lastDismissedAtMs': null, 'lastDismissedObjectId': '0'};
        var1 = global;
        var5 = var1.Date;
        var1 = var5.now;
        var5 = var1.bind(var5)();
        var1 = var5.toString;
        var1 = var1.bind(var5)();
        var2['lastDismissedAtMs'] = var1;
        var1 = arg2;
        var2['numTimesDismissed'] = var1;
        var1 = arg1;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot16 = var12;
    var11 = function addSnowflakeBoundDismissedContent(arg1, arg2, arg3) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 11;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.updateRecurringDismissibleContentState;
        var2 = {};
        var1 = 0;
        var2['lastDismissedVersion'] = var1;
        var1 = global;
        var5 = var1.Date;
        var1 = var5.now;
        var5 = var1.bind(var5)();
        var1 = var5.toString;
        var1 = var1.bind(var5)();
        var2['lastDismissedAtMs'] = var1;
        var1 = arg2;
        var2['lastDismissedObjectId'] = var1;
        var1 = arg3;
        var2['numTimesDismissed'] = var1;
        var1 = arg1;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot17 = var11;
    var10 = function UNSAFE_isSingleUseGuildDismissibleContentDismissed(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 12;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.disableNewUserDismissibleContent;
            var2 = var2.bind(var4)(var3);
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot5;
            var2 = var4.getGuildDismissedContentState;
            var1 = arg2;
            var2 = var2.bind(var4)(var1);
            var5 = null;
            var1 = var5 != var2;
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = var2[var3];
            var1 = var5 != var4;
case 4:
            if(!var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = var2[var3];
            var3 = var2.dismissed;
            var2 = true;
            var1 = var2 === var3;
case 6:
            return var1;
case 2:
            var1 = true;
            return var1;
        }
    };
    var _closure1_slot18 = var10;
    var9 = function markDismissibleContentAsDismissedPreProcessing(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var5 = arg2;
            var3 = _closure1_slot10;
            var1 = undefined;
            var3 = var3.bind(var1)(var4);
            if(var3) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var3 = var5.forceTrack;
case 8:
            if(!var3) { _fun0002_ip = 3; continue _fun0002 }
case 10:
            var3 = _closure1_slot28;
            var3 = var3.bind(var1)(var4, var5);
case 3:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 17;
            var2 = var5[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.handleDCDismissed;
            var2 = var2.bind(var3)(var4);
            return var1;
        }
    };
    var _closure1_slot19 = var9;
    var8 = function markDismissibleContentAsDismissedPostProcessing(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var6 = arg2;
            var3 = _closure1_slot7;
            var2 = var3.hasUserHitDCCap;
            var2 = var2.bind(var3)();
            var4 = !var2;
            var3 = _closure1_slot9;
            var2 = {};
            var1 = arg1;
            var2['content'] = var1;
            var1 = null;
            var7 = var1 == var6;
            var1 = undefined;
            var5 = undefined;
            if(var7) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var5 = var6.groupName;
case 11:
            var2['groupName'] = var5;
            var2 = var3.bind(var1)(var2, var4);
            return var1;
        }
    };
    var _closure1_slot20 = var8;
    var1 = function _markLatestVersionDismissibleContentAsDismissed() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    var6 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 9;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.getVersionedDismissibleContentCurrentVersion;
                    var5 = var4.bind(var5)(var6);
                    var4 = _closure1_slot24;
                    var2 = arg2;
                    var2 = var4.bind(var3)(var6, var5, var2);
                    SaveGenerator(address=64);
case 15:
                    return var2;
case 16:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                    return var3;
case 17:
                    return var2;
case 13:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot21 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot21 = var1;
    var7 = function getGuildNextNumTimesDismissed(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = _closure1_slot5;
            var2 = var3.getGuildDismissedContentState;
            var1 = arg2;
            var5 = var2.bind(var3)(var1);
            var2 = null;
            var4 = var2 == var5;
            var3 = undefined;
            if(var4) { _fun0005_ip = 19; continue _fun0005 }
case 10:
            var4 = arg1;
            var3 = var5[var4];
case 19:
            var4 = var2 == var3;
            var1 = undefined;
            if(var4) { _fun0005_ip = 20; continue _fun0005 }
case 21:
            var1 = var3.numTimesDismissed;
case 20:
            var3 = var2 != var1;
            var2 = 0;
            if(!var3) { _fun0005_ip = 22; continue _fun0005 }
case 23:
            var2 = var1;
case 22:
            var1 = 1;
            var1 = var2 + var1;
            return var1;
        }
    };
    var _closure1_slot22 = var7;
    var6 = function getNextNumTimesDismissed(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg2;
            var2 = var1.numTimesDismissed;
            var3 = null;
            if(!(var3 == var2)) { _fun0006_ip = 24; continue _fun0006 }
case 25:
            var2 = _closure1_slot5;
            var2 = var2.settings;
            var5 = var2.userContent;
            var6 = var3 == var5;
            var4 = undefined;
            if(var6) { _fun0006_ip = 26; continue _fun0006 }
case 27:
            var6 = var5.recurringDismissibleContentStates;
            var5 = arg1;
            var4 = var6[var5];
case 26:
            var5 = var3 == var4;
            var2 = undefined;
            if(var5) { _fun0006_ip = 28; continue _fun0006 }
case 29:
            var2 = var4.numTimesDismissed;
case 28:
            var4 = var3 != var2;
            var3 = 0;
            if(!var4) { _fun0006_ip = 30; continue _fun0006 }
case 7:
            var3 = var2;
case 30:
            var2 = 1;
            var2 = var3 + var2;
            return var2;
case 24:
            var1 = var1.numTimesDismissed;
            return var1;
        }
    };
    var _closure1_slot23 = var6;
    var5 = function markVersionedDismissibleContentAsDismissed() {
        var1 = undefined;
        var4 = _closure1_slot25;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot24 = var5;
    var1 = function _markVersionedDismissibleContentAsDismissed() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    StartGenerator();
                    var6 = arg1;
                    var5 = arg3;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 31; continue _fun0007 }
case 32:
                    var2 = _closure1_slot23;
                    var3 = undefined;
                    var8 = var2.bind(var3)(var6, var5);
                    var2 = _closure1_slot19;
                    var2 = var2.bind(var3)(var6, var5);
                    var7 = _closure1_slot15;
                    var2 = arg2;
                    var2 = var7.bind(var3)(var6, var2, var8);
                    SaveGenerator(address=56);
case 20:
                    return var2;
case 26:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                    if(var7) { _fun0007_ip = 33; continue _fun0007 }
case 15:
                    var4 = _closure1_slot20;
                    var4 = var4.bind(var3)(var6, var5);
                    return var3;
case 33:
                    return var2;
case 31:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot25 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot25 = var1;
    var1 = function _markSnowflakeBoundDismissibleContentAsDismissed() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    StartGenerator();
                    var6 = arg1;
                    var5 = arg3;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0008_ip = 31; continue _fun0008 }
case 32:
                    var2 = _closure1_slot23;
                    var3 = undefined;
                    var8 = var2.bind(var3)(var6, var5);
                    var2 = _closure1_slot19;
                    var2 = var2.bind(var3)(var6, var5);
                    var7 = _closure1_slot17;
                    var2 = arg2;
                    var2 = var7.bind(var3)(var6, var2, var8);
                    SaveGenerator(address=56);
case 20:
                    return var2;
case 26:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                    if(var7) { _fun0008_ip = 33; continue _fun0008 }
case 15:
                    var4 = _closure1_slot20;
                    var4 = var4.bind(var3)(var6, var5);
                    return var3;
case 33:
                    return var2;
case 31:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot26 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot26 = var1;
    var1 = function _markTimeRecurringDismissibleContentAsDismissed() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    StartGenerator();
                    var6 = arg1;
                    var5 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0009_ip = 34; continue _fun0009 }
case 32:
                    var2 = _closure1_slot23;
                    var3 = undefined;
                    var7 = var2.bind(var3)(var6, var5);
                    var2 = _closure1_slot19;
                    var2 = var2.bind(var3)(var6, var5);
                    var2 = _closure1_slot16;
                    var2 = var2.bind(var3)(var6, var7);
                    SaveGenerator(address=52);
case 35:
                    return var2;
case 36:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                    if(var7) { _fun0009_ip = 28; continue _fun0009 }
case 37:
                    var4 = _closure1_slot20;
                    var4 = var4.bind(var3)(var6, var5);
                    return var3;
case 28:
                    return var2;
case 34:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot27 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot27 = var1;
    var2 = function trackDismissibleContentDismissed(arg1, arg2) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var12 = arg1;
            var8 = arg2;
            var2 = _closure1_slot11;
            var1 = undefined;
            var4 = var2.bind(var1)();
            var3 = _closure1_slot4;
            var2 = 1;
            var3 = var3.bind(var1)(var4, var2);
            var2 = 0;
            var11 = var3[var2];
            var3 = _closure1_slot7;
            var2 = var3.getRenderedAtTimestamp;
            var3 = var2.bind(var3)(var12);
            var2 = global;
            var2 = var2.Date;
            var4 = var2.prototype;
            var4 = Object.create(var4, {constructor: {value: var2}});
            var18 = var4;
            var2 = new var18[var2](var17);
            var4 = var2 instanceof Object ? var2 : var4;
            var7 = null;
            var2 = var7 == var3;
            var9 = null;
            if(var2) { _fun0010_ip = 38; continue _fun0010 }
case 24:
            var2 = var4.getTime;
            var2 = var2.bind(var4)();
            var9 = var2 - var3;
case 38:
            var3 = var7 == var8;
            var2 = undefined;
            if(var3) { _fun0010_ip = 39; continue _fun0010 }
case 40:
            var2 = var8.guildId;
case 39:
            if(!(var7 == var2)) { _fun0010_ip = 41; continue _fun0010 }
case 42:
            var3 = _closure1_slot23;
            var2 = var8;
            if(!(var7 == var2)) { _fun0010_ip = 43; continue _fun0010 }
case 44:
            var2 = {};
case 43:
            var6 = var3.bind(var1)(var12, var2);
            _fun0010_ip = 45; continue _fun0010;
case 41:
            var3 = _closure1_slot22;
            var2 = var8.guildId;
            var6 = var3.bind(var1)(var12, var2);
case 45:
            var3 = _closure1_slot1;
            var15 = _closure1_slot2;
            var2 = 18;
            var2 = var15[var2];
            var5 = var3.bind(var1)(var2);
            var4 = var5.track;
            var2 = _closure1_slot13;
            var3 = var2.DISMISSIBLE_CONTENT_DISMISSED;
            var2 = {};
            var14 = _closure1_slot0;
            var13 = 14;
            var13 = var15[var13];
            var13 = var14.bind(var1)(var13);
            var13 = var13.DismissibleContent;
            var13 = var13[var12];
            var2['type'] = var13;
            var14 = var7 == var8;
            var13 = undefined;
            if(var14) { _fun0010_ip = 46; continue _fun0010 }
case 47:
            var13 = var8.dismissAction;
case 46:
            if(!(var7 == var13)) { _fun0010_ip = 48; continue _fun0010 }
case 49:
            var14 = _closure1_slot12;
            var13 = var14.UNKNOWN;
case 48:
            var2['action'] = var13;
            var2['content_count'] = var11;
            var13 = var7 == var8;
            var11 = undefined;
            if(var13) { _fun0010_ip = 50; continue _fun0010 }
case 51:
            var11 = var8.groupName;
case 50:
            var2['group_name'] = var11;
            var11 = _closure1_slot0;
            var13 = _closure1_slot2;
            var10 = 19;
            var10 = var13[var10];
            var10 = var11.bind(var1)(var10);
            var11 = var10.CONTENT_TYPES_WITH_BYPASS_FATIGUE;
            var10 = var11.has;
            var10 = var10.bind(var11)(var12);
            var2['bypass_fatigue'] = var10;
            var11 = var7 == var8;
            var10 = undefined;
            if(var11) { _fun0010_ip = 52; continue _fun0010 }
case 53:
            var10 = var8.guildId;
case 52:
            var2['guild_id'] = var10;
            var2['shown_duration'] = var9;
            var9 = var7 == var8;
            var7 = undefined;
            if(var9) { _fun0010_ip = 54; continue _fun0010 }
case 55:
            var7 = var8.version;
case 54:
            var2['version'] = var7;
            var2['num_times_dismissed'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var _closure1_slot28 = var2;
    var14 = global;
    var20 = var14.Object;
    var19 = var20.defineProperty;
    var17 = {};
    var1 = true;
    var17['value'] = var1;
    var1 = '__esModule';
    var1 = var19.bind(var20)(var3, var1, var17);
    var1 = 0;
    var17 = var16[var1];
    var1 = undefined;
    var17 = var18.bind(var1)(var17);
    var _closure1_slot3 = var17;
    var17 = 1;
    var17 = var16[var17];
    var17 = var18.bind(var1)(var17);
    var _closure1_slot4 = var17;
    var17 = 2;
    var17 = var16[var17];
    var17 = var18.bind(var1)(var17);
    var _closure1_slot5 = var17;
    var17 = 3;
    var17 = var16[var17];
    var17 = var15.bind(var1)(var17);
    var17 = var17.DCFEventTypes;
    var _closure1_slot6 = var17;
    var17 = 4;
    var17 = var16[var17];
    var17 = var18.bind(var1)(var17);
    var _closure1_slot7 = var17;
    var17 = 5;
    var17 = var16[var17];
    var17 = var15.bind(var1)(var17);
    var18 = var17.addCandidateContent;
    var _closure1_slot8 = var18;
    var18 = var17.removeCandidateContent;
    var _closure1_slot9 = var18;
    var18 = var17.isContentShown;
    var _closure1_slot10 = var18;
    var17 = var17.getCurrentlyShownCounts;
    var _closure1_slot11 = var17;
    var17 = 6;
    var17 = var16[var17];
    var17 = var15.bind(var1)(var17);
    var17 = var17.ContentDismissActionType;
    var _closure1_slot12 = var17;
    var17 = 7;
    var17 = var16[var17];
    var17 = var15.bind(var1)(var17);
    var17 = var17.AnalyticEvents;
    var _closure1_slot13 = var17;
    var18 = var14.Set;
    var17 = 14;
    var14 = var16[var17];
    var14 = var15.bind(var1)(var14);
    var14 = var14.DismissibleContent;
    var19 = var14.ACCOUNT_LINK_INVITE_FRIENDS;
    var14 = new Array(3);
    var14[0] = var19;
    var19 = var16[var17];
    var19 = var15.bind(var1)(var19);
    var19 = var19.DismissibleContent;
    var19 = var19.POST_ACCOUNT_CONNECTION_RTC_POPOVER;
    var14[1] = var19;
    var17 = var16[var17];
    var17 = var15.bind(var1)(var17);
    var17 = var17.DismissibleContent;
    var17 = var17.ACCOUNT_LINK_PROMPT;
    var14[2] = var17;
    var17 = var18.prototype;
    var17 = Object.create(var17, {constructor: {value: var18}});
    var24 = var17;
    var23 = var14;
    var14 = new var24[var18](var23, var22);
    var14 = var14 instanceof Object ? var14 : var17;
    var _closure1_slot14 = var14;
    var14 = 20;
    var14 = var16[var14];
    var16 = var15.bind(var1)(var14);
    var15 = var16.fileFinishedImporting;
    var14 = 'modules/dismissible_content/DismissibleContentUtils.tsx';
    var14 = var15.bind(var16)(var14);
    var14 = 2592000000.0;
    var3['SNOWFLAKE_BOUND_DISMISSIBLE_CONTENT_DURATION_MS'] = var14;
    var14 = function getDismissedRecurringDismissibleContentState(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var10 = arg1;
            var1 = _closure1_slot5;
            var1 = var1.settings;
            var1 = var1.userContent;
            var4 = null;
            var2 = var4 == var1;
            var3 = undefined;
            var5 = undefined;
            if(var2) { _fun0011_ip = 56; continue _fun0011 }
case 57:
            var1 = var1.recurringDismissibleContentStates;
            var5 = var1[var10];
case 56:
            var1 = {};
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var11 = 8;
            var2 = var2[var11];
            var6 = var6.bind(var3)(var2);
            var2 = var6.isVersionedDismissibleContent;
            var7 = var2.bind(var6)(var10);
            var6 = 0;
            if(!var7) { _fun0011_ip = 58; continue _fun0011 }
case 30:
            var9 = _closure1_slot0;
            var12 = _closure1_slot2;
            var7 = 9;
            var7 = var12[var7];
            var9 = var9.bind(var3)(var7);
            var7 = var9.getVersionedDismissibleContentCurrentVersion;
            var6 = var7.bind(var9)(var10);
case 58:
            var1['lastDismissedVersion'] = var6;
            var7 = global;
            var6 = var7.Date;
            var9 = var6.prototype;
            var9 = Object.create(var9, {constructor: {value: var6}});
            var14 = var9;
            var6 = new var14[var6](var13);
            var9 = var6 instanceof Object ? var6 : var9;
            var6 = var9.getTime;
            var9 = var6.bind(var9)();
            var6 = var9.toString;
            var6 = var6.bind(var9)();
            var1['lastDismissedAtMs'] = var6;
            var9 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var11];
            var9 = var9.bind(var3)(var6);
            var6 = var9.isSnowflakeBoundDismissibleContent;
            var9 = var6.bind(var9)(var10);
            var6 = '0';
            if(!var9) { _fun0011_ip = 59; continue _fun0011 }
case 60:
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var8 = 10;
            var8 = var10[var8];
            var9 = var9.bind(var3)(var8);
            var8 = var9.fromTimestamp;
            var10 = var7.Date;
            var7 = var10.now;
            var10 = var7.bind(var10)();
            var7 = 2592000000.0;
            var7 = var10 + var7;
            var6 = var8.bind(var9)(var7);
case 59:
            var1['lastDismissedObjectId'] = var6;
            var6 = var4 == var5;
            var3 = undefined;
            if(var6) { _fun0011_ip = 61; continue _fun0011 }
case 62:
            var3 = var5.numTimesDismissed;
case 61:
            var4 = var4 != var3;
            var2 = 0;
            if(!var4) { _fun0011_ip = 63; continue _fun0011 }
case 64:
            var2 = var3;
case 63:
            var1['numTimesDismissed'] = var2;
            return var1;
        }
    };
    var3['getDismissedRecurringDismissibleContentState'] = var14;
    var3['addVersionedDismissedContent'] = var13;
    var3['addTimeRecurringDismissedContent'] = var12;
    var3['addSnowflakeBoundDismissedContent'] = var11;
    var11 = function UNSAFE_addGuildDismissedContent(arg1, arg2, arg3) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 11;
        var2 = var2[var1];
        var1 = undefined;
        var5 = var3.bind(var1)(var2);
        var4 = var5.updateGuildDismissedContent;
        var3 = {'dismissed': true, 'lastDismissedVersion': 0, 'lastDismissedAtMs': null, 'lastDismissedObjectId': '0'};
        var1 = global;
        var2 = var1.Date;
        var1 = var2.now;
        var2 = var1.bind(var2)();
        var1 = var2.toString;
        var1 = var1.bind(var2)();
        var3['lastDismissedAtMs'] = var1;
        var1 = arg3;
        var3['numTimesDismissed'] = var1;
        var2 = arg1;
        var1 = arg2;
        var1 = var4.bind(var5)(var2, var1, var3);
        return var1;
    };
    var3['UNSAFE_addGuildDismissedContent'] = var11;
    var11 = function UNSAFE_removeGuildDismissedContent(arg1, arg2, arg3) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 11;
        var2 = var2[var1];
        var1 = undefined;
        var5 = var3.bind(var1)(var2);
        var4 = var5.updateGuildDismissedContent;
        var3 = {'dismissed': false, 'lastDismissedVersion': 0, 'lastDismissedAtMs': null, 'lastDismissedObjectId': '0'};
        var1 = global;
        var2 = var1.Date;
        var1 = var2.now;
        var2 = var1.bind(var2)();
        var1 = var2.toString;
        var1 = var1.bind(var2)();
        var3['lastDismissedAtMs'] = var1;
        var1 = arg3;
        var3['numTimesDismissed'] = var1;
        var2 = arg1;
        var1 = arg2;
        var1 = var4.bind(var5)(var2, var1, var3);
        return var1;
    };
    var3['UNSAFE_removeGuildDismissedContent'] = var11;
    var11 = function UNSAFE_addTimeRecurringGuildDismissedContent(arg1, arg2, arg3) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 11;
        var2 = var2[var1];
        var1 = undefined;
        var5 = var3.bind(var1)(var2);
        var4 = var5.updateGuildDismissedContent;
        var3 = {'dismissed': false, 'lastDismissedVersion': 0, 'lastDismissedAtMs': null, 'lastDismissedObjectId': '0'};
        var1 = global;
        var2 = var1.Date;
        var1 = var2.now;
        var2 = var1.bind(var2)();
        var1 = var2.toString;
        var1 = var1.bind(var2)();
        var3['lastDismissedAtMs'] = var1;
        var1 = arg3;
        var3['numTimesDismissed'] = var1;
        var2 = arg1;
        var1 = arg2;
        var1 = var4.bind(var5)(var2, var1, var3);
        return var1;
    };
    var3['UNSAFE_addTimeRecurringGuildDismissedContent'] = var11;
    var11 = function UNSAFE_removeTimeRecurringGuildDismissedContent(arg1, arg2, arg3) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 11;
        var2 = var2[var1];
        var1 = undefined;
        var5 = var3.bind(var1)(var2);
        var4 = var5.updateGuildDismissedContent;
        var3 = {'dismissed': false, 'lastDismissedVersion': 0, 'lastDismissedAtMs': '0', 'lastDismissedObjectId': '0'};
        var1 = arg3;
        var3['numTimesDismissed'] = var1;
        var2 = arg1;
        var1 = arg2;
        var1 = var4.bind(var5)(var2, var1, var3);
        return var1;
    };
    var3['UNSAFE_removeTimeRecurringGuildDismissedContent'] = var11;
    var11 = function isVersionedDismissibleContentDismissed(arg1, arg2) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var6 = arg1;
            var4 = arg2;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 12;
            var2 = var5[var2];
            var7 = undefined;
            var3 = var3.bind(var7)(var2);
            var2 = var3.disableNewUserDismissibleContent;
            var2 = var2.bind(var3)(var6);
            if(var2) { _fun0012_ip = 65; continue _fun0012 }
case 56:
            var2 = _closure1_slot5;
            var2 = var2.settings;
            var5 = var2.userContent;
            var3 = null;
            var8 = var3 == var5;
            var2 = undefined;
            if(var8) { _fun0012_ip = 66; continue _fun0012 }
case 67:
            var5 = var5.recurringDismissibleContentStates;
            var5 = var5[var6];
            var8 = var3 == var5;
            var2 = undefined;
            if(var8) { _fun0012_ip = 66; continue _fun0012 }
case 68:
            var2 = var5.lastDismissedVersion;
case 66:
            if(!(var3 == var4)) { _fun0012_ip = 69; continue _fun0012 }
case 70:
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 9;
            var1 = var8[var1];
            var5 = var5.bind(var7)(var1);
            var1 = var5.getVersionedDismissibleContentCurrentVersion;
            var4 = var1.bind(var5)(var6);
case 69:
            var1 = {};
            var3 = var3 != var2;
            if(!var3) { _fun0012_ip = 41; continue _fun0012 }
case 71:
            var3 = var2 >= var4;
case 41:
            var1['isDismissed'] = var3;
            var1['lastDismissedVersion'] = var2;
            return var1;
case 65:
            var1 = {'isDismissed': true, 'lastDismissedVersion': null};
            return var1;
        }
    };
    var3['isVersionedDismissibleContentDismissed'] = var11;
    var11 = function isTimeRecurringDismissibleContentDismissed(arg1, arg2) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var3 = arg1;
            var8 = arg2;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 12;
            var4 = var4[var2];
            var2 = undefined;
            var5 = var5.bind(var2)(var4);
            var4 = var5.disableNewUserDismissibleContent;
            var4 = var4.bind(var5)(var3);
            if(var4) { _fun0013_ip = 72; continue _fun0013 }
case 21:
            var1 = _closure1_slot5;
            var1 = var1.settings;
            var1 = var1.userContent;
            var7 = null;
            var4 = var7 == var1;
            var5 = undefined;
            if(var4) { _fun0013_ip = 73; continue _fun0013 }
case 33:
            var1 = var1.recurringDismissibleContentStates;
            var1 = var1[var3];
            var3 = var7 == var1;
            var5 = undefined;
            if(var3) { _fun0013_ip = 73; continue _fun0013 }
case 74:
            var5 = var1.lastDismissedAtMs;
case 73:
            var1 = var7 != var5;
            var3 = undefined;
            if(!var1) { _fun0013_ip = 75; continue _fun0013 }
case 76:
            var1 = '0';
            var3 = undefined;
            if(!(var1 !== var5)) { _fun0013_ip = 75; continue _fun0013 }
case 77:
            var4 = global;
            var9 = var4.Number;
            var6 = var9.isNaN;
            var1 = var4.Number;
            var1 = var1.bind(var2)(var5);
            var6 = var6.bind(var9)(var1);
            var1 = undefined;
            if(var6) { _fun0013_ip = 78; continue _fun0013 }
case 79:
            var4 = var4.Number;
            var1 = var4.bind(var2)(var5);
case 78:
            var3 = var1;
case 75:
            if(!(var2 !== var3)) { _fun0013_ip = 80; continue _fun0013 }
case 81:
            var1 = var7 != var8;
            var4 = true;
            if(!var1) { _fun0013_ip = 82; continue _fun0013 }
case 83:
            var1 = var8.cooldownDurationMs;
            var6 = var3 + var1;
            var1 = global;
            var5 = var1.Date;
            var1 = var5.now;
            var1 = var1.bind(var5)();
            var5 = var8.showAfterTimestamp;
            var5 = var7 == var5;
            if(var5) { _fun0013_ip = 84; continue _fun0013 }
case 85:
            var7 = var8.showAfterTimestamp;
            var7 = var1 >= var7;
            if(!var7) { _fun0013_ip = 49; continue _fun0013 }
case 47:
            var8 = var8.showAfterTimestamp;
            var7 = var3 <= var8;
case 49:
            var5 = var7;
case 84:
            var1 = var1 < var6;
            if(var1) { _fun0013_ip = 86; continue _fun0013 }
case 48:
            var1 = !var5;
case 86:
            var4 = var1;
case 82:
            var1 = {};
            var1['isDismissed'] = var4;
            var1['lastDismissedAtMs'] = var3;
            return var1;
case 80:
            var1 = {};
            var3 = false;
            var1['isDismissed'] = var3;
            var1['lastDismissedAtMs'] = var2;
            return var1;
case 72:
            var1 = {'isDismissed': true, 'lastDismissedAtMs': null};
            return var1;
        }
    };
    var3['isTimeRecurringDismissibleContentDismissed'] = var11;
    var11 = function isTimeRecurringSnowflakeBoundDismissibleContentDismissed(arg1, arg2, arg3) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var4 = arg1;
            var10 = arg3;
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 12;
            var1 = var5[var1];
            var5 = undefined;
            var2 = var2.bind(var5)(var1);
            var1 = var2.disableNewUserDismissibleContent;
            var1 = var1.bind(var2)(var4);
            if(var1) { _fun0014_ip = 87; continue _fun0014 }
case 21:
            var1 = _closure1_slot5;
            var1 = var1.settings;
            var1 = var1.userContent;
            var2 = null;
            var7 = var2 == var1;
            var6 = undefined;
            if(var7) { _fun0014_ip = 73; continue _fun0014 }
case 33:
            var1 = var1.recurringDismissibleContentStates;
            var1 = var1[var4];
            var7 = var2 == var1;
            var6 = undefined;
            if(var7) { _fun0014_ip = 73; continue _fun0014 }
case 74:
            var6 = var1.lastDismissedObjectId;
case 73:
            var1 = _closure1_slot5;
            var1 = var1.settings;
            var1 = var1.userContent;
            var8 = var2 == var1;
            var7 = undefined;
            if(var8) { _fun0014_ip = 88; continue _fun0014 }
case 89:
            var1 = var1.recurringDismissibleContentStates;
            var1 = var1[var4];
            var4 = var2 == var1;
            var7 = undefined;
            if(var4) { _fun0014_ip = 88; continue _fun0014 }
case 90:
            var7 = var1.lastDismissedAtMs;
case 88:
            var1 = var2 != var7;
            var11 = undefined;
            if(!var1) { _fun0014_ip = 91; continue _fun0014 }
case 92:
            var1 = '0';
            var11 = undefined;
            if(!(var1 !== var7)) { _fun0014_ip = 91; continue _fun0014 }
case 93:
            var4 = global;
            var9 = var4.Number;
            var8 = var9.isNaN;
            var1 = var4.Number;
            var1 = var1.bind(var5)(var7);
            var8 = var8.bind(var9)(var1);
            var1 = undefined;
            if(var8) { _fun0014_ip = 94; continue _fun0014 }
case 95:
            var4 = var4.Number;
            var1 = var4.bind(var5)(var7);
case 94:
            var11 = var1;
case 91:
            var4 = var2 != var10;
            var1 = false;
            if(!var4) { _fun0014_ip = 96; continue _fun0014 }
case 97:
            var4 = var2 != var11;
            var1 = false;
            if(!var4) { _fun0014_ip = 96; continue _fun0014 }
case 98:
            var4 = var10.cooldownDurationMs;
            var8 = var11 + var4;
            var4 = global;
            var7 = var4.Date;
            var4 = var7.now;
            var4 = var4.bind(var7)();
            var7 = var10.showAfterTimestamp;
            var7 = var2 == var7;
            if(var7) { _fun0014_ip = 99; continue _fun0014 }
case 100:
            var9 = var10.showAfterTimestamp;
            var9 = var4 >= var9;
            if(!var9) { _fun0014_ip = 101; continue _fun0014 }
case 102:
            var10 = var10.showAfterTimestamp;
            var9 = var11 <= var10;
case 101:
            var7 = var9;
case 99:
            var4 = var4 < var8;
            if(var4) { _fun0014_ip = 103; continue _fun0014 }
case 104:
            var4 = !var7;
case 103:
            var1 = var4;
case 96:
            var2 = var2 != var6;
            if(!var2) { _fun0014_ip = 105; continue _fun0014 }
case 106:
            var4 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 10;
            var3 = var7[var3];
            var5 = var4.bind(var5)(var3);
            var4 = var5.compare;
            var3 = arg2;
            var4 = var4.bind(var5)(var3, var6);
            var3 = 1;
            var2 = var3 !== var4;
case 105:
            if(!var1) { _fun0014_ip = 107; continue _fun0014 }
case 108:
            var1 = var2;
case 107:
            return var1;
case 87:
            var1 = true;
            return var1;
        }
    };
    var3['isTimeRecurringSnowflakeBoundDismissibleContentDismissed'] = var11;
    var3['UNSAFE_isSingleUseGuildDismissibleContentDismissed'] = var10;
    var10 = function useIsSingleUseGuildDismissibleContentDismissed(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 13;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useStateFromStores;
        var5 = _closure1_slot5;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var4 = _closure1_slot18;
            var3 = _closure2_slot0;
            var2 = _closure2_slot1;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useIsSingleUseGuildDismissibleContentDismissed'] = var10;
    var10 = function UNSAFE_isTimeRecurringGuildDismissibleContentDismissed(arg1, arg2) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var3 = arg1;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 12;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var5.bind(var2)(var4);
            var2 = var4.disableNewUserDismissibleContent;
            var2 = var2.bind(var4)(var3);
            if(var2) { _fun0015_ip = 109; continue _fun0015 }
case 3:
            var4 = _closure1_slot5;
            var2 = var4.getGuildDismissedContentState;
            var1 = arg2;
            var2 = var2.bind(var4)(var1);
            var5 = null;
            var1 = var5 != var2;
            if(!var1) { _fun0015_ip = 4; continue _fun0015 }
case 5:
            var4 = var2[var3];
            var1 = var5 != var4;
case 4:
            if(!var1) { _fun0015_ip = 74; continue _fun0015 }
case 7:
            var4 = var2[var3];
            var4 = var4.lastDismissedAtMs;
            var1 = var5 != var4;
case 74:
            if(!var1) { _fun0015_ip = 110; continue _fun0015 }
case 66:
            var2 = var2[var3];
            var3 = var2.lastDismissedAtMs;
            var2 = '0';
            var1 = var2 !== var3;
case 110:
            return var1;
case 109:
            var1 = true;
            return var1;
        }
    };
    var3['UNSAFE_isTimeRecurringGuildDismissibleContentDismissed'] = var10;
    var10 = function requestMarkDismissibleContentAsShown(arg1, arg2, arg3, arg4) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var7 = arg1;
            var6 = arg2;
            var3 = arg3;
            var _closure2_slot0 = var7;
            var _closure2_slot1 = var6;
            var5 = _closure1_slot10;
            var1 = undefined;
            var5 = var5.bind(var1)(var7);
            if(var5) { _fun0016_ip = 111; continue _fun0016 }
case 19:
            var10 = _closure1_slot7;
            var9 = var10.hasUserHitDCCap;
            var5 = null;
            var11 = var5 == var6;
            var8 = undefined;
            if(var11) { _fun0016_ip = 29; continue _fun0016 }
case 112:
            var8 = var6.guildId;
case 29:
            var8 = var9.bind(var10)(var7, var8);
            if(var8) { _fun0016_ip = 111; continue _fun0016 }
case 4:
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var8 = 15;
            var8 = var10[var8];
            var10 = var9.bind(var1)(var8);
            var9 = var10.getConfig;
            var8 = {};
            var11 = 'requestMarkDismissibleContentAsShown';
            var8['location'] = var11;
            var8 = var9.bind(var10)(var8);
            var8 = var8.enabled;
            if(!var8) { _fun0016_ip = 113; continue _fun0016 }
case 114:
            var9 = arg4;
            var8 = var5 == var9;
case 113:
            if(!var8) { _fun0016_ip = 88; continue _fun0016 }
case 115:
            var10 = _closure1_slot14;
            var9 = var10.has;
            var8 = var9.bind(var10)(var7);
case 88:
            if(!var3) { _fun0016_ip = 79; continue _fun0016 }
case 116:
            var3 = !var8;
case 79:
            if(var3) { _fun0016_ip = 111; continue _fun0016 }
case 92:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var3 = 16;
            var3 = var9[var3];
            var9 = var8.bind(var1)(var3);
            var8 = var9.dispatch;
            var3 = {};
            var10 = 'DCF_EVENT_LOGGED';
            var3['type'] = var10;
            var10 = _closure1_slot6;
            var10 = var10.DC_SHOW_REQUEST;
            var3['eventType'] = var10;
            var3['dismissibleContent'] = var7;
            var3 = var8.bind(var9)(var3);
            var3 = _closure1_slot8;
            var2 = {};
            var2['content'] = var7;
            var7 = var5 == var6;
            var5 = undefined;
            if(var7) { _fun0016_ip = 117; continue _fun0016 }
case 98:
            var5 = var6.groupName;
case 117:
            var2['groupName'] = var5;
            var4 = function onAdded() {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var2 = _closure1_slot11;
                    var1 = undefined;
                    var4 = var2.bind(var1)();
                    var3 = _closure1_slot4;
                    var2 = 2;
                    var3 = var3.bind(var1)(var4, var2);
                    var2 = 0;
                    var10 = var3[var2];
                    var2 = 1;
                    var9 = var3[var2];
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 17;
                    var2 = var4[var2];
                    var7 = var3.bind(var1)(var2);
                    var6 = var7.handleDCShownToUser;
                    var4 = _closure2_slot0;
                    var3 = _closure2_slot1;
                    var5 = null;
                    var11 = var5 == var3;
                    var3 = undefined;
                    if(var11) { _fun0017_ip = 6; continue _fun0017 }
case 118:
                    var11 = _closure2_slot1;
                    var3 = var11.guildId;
case 6:
                    var3 = var6.bind(var7)(var4, var3);
                    var4 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var3 = 18;
                    var3 = var13[var3];
                    var7 = var4.bind(var1)(var3);
                    var6 = var7.track;
                    var3 = _closure1_slot13;
                    var4 = var3.DISMISSIBLE_CONTENT_SHOWN;
                    var3 = {};
                    var12 = _closure1_slot0;
                    var11 = 14;
                    var11 = var13[var11];
                    var11 = var12.bind(var1)(var11);
                    var12 = var11.DismissibleContent;
                    var11 = _closure2_slot0;
                    var11 = var12[var11];
                    var3['type'] = var11;
                    var3['content_count'] = var10;
                    var3['fatigable_content_count'] = var9;
                    var9 = _closure2_slot1;
                    var10 = var5 == var9;
                    var9 = undefined;
                    if(var10) { _fun0017_ip = 95; continue _fun0017 }
case 119:
                    var10 = _closure2_slot1;
                    var9 = var10.groupName;
case 95:
                    var3['group_name'] = var9;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var8 = 19;
                    var8 = var10[var8];
                    var8 = var9.bind(var1)(var8);
                    var10 = var8.CONTENT_TYPES_WITH_BYPASS_FATIGUE;
                    var9 = var10.has;
                    var8 = _closure2_slot0;
                    var8 = var9.bind(var10)(var8);
                    var3['bypass_fatigue'] = var8;
                    var8 = _closure2_slot1;
                    var9 = var5 == var8;
                    var8 = undefined;
                    if(var9) { _fun0017_ip = 100; continue _fun0017 }
case 120:
                    var9 = _closure2_slot1;
                    var8 = var9.guildId;
case 100:
                    var3['guild_id'] = var8;
                    var8 = _closure2_slot1;
                    var9 = var5 == var8;
                    var8 = undefined;
                    if(var9) { _fun0017_ip = 121; continue _fun0017 }
case 122:
                    var9 = _closure2_slot1;
                    var8 = var9.version;
case 121:
                    var3['version'] = var8;
                    var3 = var6.bind(var7)(var4, var3);
                    var3 = _closure2_slot1;
                    var3 = var5 == var3;
                    if(var3) { _fun0017_ip = 123; continue _fun0017 }
case 124:
                    var4 = _closure2_slot1;
                    var4 = var4.onShown;
                    var3 = var5 == var4;
case 123:
                    if(var3) { _fun0017_ip = 55; continue _fun0017 }
case 125:
                    var3 = _closure2_slot1;
                    var2 = var3.onShown;
                    var2 = var2.bind(var3)();
case 55:
                    return var1;
                }
            };
            var2['onAdded'] = var4;
            var2 = var3.bind(var1)(var2);
case 111:
            return var1;
        }
    };
    var3['requestMarkDismissibleContentAsShown'] = var10;
    var3['markDismissibleContentAsDismissedPreProcessing'] = var9;
    var3['markDismissibleContentAsDismissedPostProcessing'] = var8;
    var8 = function markLatestVersionDismissibleContentAsDismissed() {
        var1 = undefined;
        var4 = _closure1_slot21;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['markLatestVersionDismissibleContentAsDismissed'] = var8;
    var3['getGuildNextNumTimesDismissed'] = var7;
    var3['getNextNumTimesDismissed'] = var6;
    var3['markVersionedDismissibleContentAsDismissed'] = var5;
    var5 = function markSnowflakeBoundDismissibleContentAsDismissed() {
        var1 = undefined;
        var4 = _closure1_slot26;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['markSnowflakeBoundDismissibleContentAsDismissed'] = var5;
    var4 = function markTimeRecurringDismissibleContentAsDismissed() {
        var1 = undefined;
        var4 = _closure1_slot27;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['markTimeRecurringDismissibleContentAsDismissed'] = var4;
    var3['trackDismissibleContentDismissed'] = var2;
    return var1;
})();