// app/modules/dismissible_content/DismissibleContentUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var16 = require;
    var19 = metroImportDefault;
    var3 = exports;
    var17 = dependencyMap;
    var _closure1_slot0 = var16;
    var _closure1_slot1 = var19;
    var _closure1_slot2 = var17;
    var14 = function addVersionedDismissedContent(arg1, arg2, arg3) {
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
    var _closure1_slot15 = var14;
    var13 = function addTimeRecurringDismissedContent(arg1, arg2) {
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
    var _closure1_slot16 = var13;
    var12 = function addSnowflakeBoundDismissedContent(arg1, arg2, arg3) {
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
    var _closure1_slot17 = var12;
    var11 = function UNSAFE_isSingleUseGuildDismissibleContentDismissed(arg1, arg2) {
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
    var _closure1_slot18 = var11;
    var10 = function markDismissibleContentAsDismissedPreProcessing(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arg1;
            var2 = arg2;
            var4 = _closure1_slot10;
            var1 = undefined;
            var4 = var4.bind(var1)(var5);
            if(var4) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var4 = var2.forceTrack;
case 8:
            if(!var4) { _fun0002_ip = 3; continue _fun0002 }
case 10:
            var4 = _closure1_slot29;
            var4 = var4.bind(var1)(var5, var2);
case 3:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 16;
            var3 = var6[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.handleDCDismissed;
            var6 = var2.guildId;
            var2 = null;
            var7 = var2 != var6;
            var2 = undefined;
            if(!var7) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var2 = var6;
case 11:
            var2 = var3.bind(var4)(var5, var2);
            return var1;
        }
    };
    var _closure1_slot19 = var10;
    var9 = function markDismissibleContentAsDismissedPostProcessing(arg1, arg2) {
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
            if(var7) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var5 = var6.groupName;
case 13:
            var2['groupName'] = var5;
            var2 = var3.bind(var1)(var2, var4);
            return var1;
        }
    };
    var _closure1_slot20 = var9;
    var1 = function _markLatestVersionDismissibleContentAsDismissed() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    var6 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 15; continue _fun0004 }
case 16:
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
case 17:
                    return var2;
case 18:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                    return var3;
case 19:
                    return var2;
case 15:
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
    var8 = function getGuildNextNumTimesDismissed(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = _closure1_slot5;
            var2 = var3.getGuildDismissedContentState;
            var1 = arg2;
            var5 = var2.bind(var3)(var1);
            var2 = null;
            var4 = var2 == var5;
            var3 = undefined;
            if(var4) { _fun0005_ip = 21; continue _fun0005 }
case 10:
            var4 = arg1;
            var3 = var5[var4];
case 21:
            var4 = var2 == var3;
            var1 = undefined;
            if(var4) { _fun0005_ip = 22; continue _fun0005 }
case 23:
            var1 = var3.numTimesDismissed;
case 22:
            var3 = var2 != var1;
            var2 = 0;
            if(!var3) { _fun0005_ip = 24; continue _fun0005 }
case 25:
            var2 = var1;
case 24:
            var1 = 1;
            var1 = var2 + var1;
            return var1;
        }
    };
    var _closure1_slot22 = var8;
    var7 = function getNextNumTimesDismissed(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg2;
            var2 = var1.numTimesDismissed;
            var3 = null;
            if(!(var3 == var2)) { _fun0006_ip = 26; continue _fun0006 }
case 27:
            var2 = _closure1_slot5;
            var2 = var2.settings;
            var5 = var2.userContent;
            var6 = var3 == var5;
            var4 = undefined;
            if(var6) { _fun0006_ip = 28; continue _fun0006 }
case 29:
            var6 = var5.recurringDismissibleContentStates;
            var5 = arg1;
            var4 = var6[var5];
case 28:
            var5 = var3 == var4;
            var2 = undefined;
            if(var5) { _fun0006_ip = 30; continue _fun0006 }
case 31:
            var2 = var4.numTimesDismissed;
case 30:
            var4 = var3 != var2;
            var3 = 0;
            if(!var4) { _fun0006_ip = 32; continue _fun0006 }
case 7:
            var3 = var2;
case 32:
            var2 = 1;
            var2 = var3 + var2;
            return var2;
case 26:
            var1 = var1.numTimesDismissed;
            return var1;
        }
    };
    var _closure1_slot23 = var7;
    var6 = function markVersionedDismissibleContentAsDismissed() {
        var1 = undefined;
        var4 = _closure1_slot25;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot24 = var6;
    var1 = function _markVersionedDismissibleContentAsDismissed() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    StartGenerator();
                    var6 = arg1;
                    var5 = arg3;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 33; continue _fun0007 }
case 34:
                    var2 = _closure1_slot23;
                    var3 = undefined;
                    var8 = var2.bind(var3)(var6, var5);
                    var2 = _closure1_slot19;
                    var2 = var2.bind(var3)(var6, var5);
                    var7 = _closure1_slot15;
                    var2 = arg2;
                    var2 = var7.bind(var3)(var6, var2, var8);
                    SaveGenerator(address=56);
case 22:
                    return var2;
case 28:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                    if(var7) { _fun0007_ip = 35; continue _fun0007 }
case 17:
                    var4 = _closure1_slot20;
                    var4 = var4.bind(var3)(var6, var5);
                    return var3;
case 35:
                    return var2;
case 33:
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
        var4 = _closure1_slot4;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    StartGenerator();
                    var6 = arg1;
                    var8 = arg2;
                    var5 = arg3;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0008_ip = 36; continue _fun0008 }
case 37:
                    var2 = _closure1_slot23;
                    var3 = undefined;
                    var7 = var2.bind(var3)(var6, var5);
                    var9 = _closure1_slot19;
                    var2 = {};
                    var13 = var2;
                    var12 = var5;
                    var10 = copyDataProperties(var13, var12);
                    var10 = 'snowflakeId';
                    var2[9] = var8;
                    var2 = var9.bind(var3)(var6, var2);
                    var2 = _closure1_slot17;
                    var2 = var2.bind(var3)(var6, var8, var7);
                    SaveGenerator(address=77);
case 35:
                    return var2;
case 4:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                    if(var7) { _fun0008_ip = 6; continue _fun0008 }
case 32:
                    var4 = _closure1_slot20;
                    var4 = var4.bind(var3)(var6, var5);
                    return var3;
case 6:
                    return var2;
case 36:
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
        var4 = _closure1_slot4;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    StartGenerator();
                    var6 = arg1;
                    var5 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0009_ip = 38; continue _fun0009 }
case 34:
                    var2 = _closure1_slot23;
                    var3 = undefined;
                    var7 = var2.bind(var3)(var6, var5);
                    var2 = _closure1_slot19;
                    var2 = var2.bind(var3)(var6, var5);
                    var2 = _closure1_slot16;
                    var2 = var2.bind(var3)(var6, var7);
                    SaveGenerator(address=52);
case 39:
                    return var2;
case 40:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                    if(var7) { _fun0009_ip = 30; continue _fun0009 }
case 41:
                    var4 = _closure1_slot20;
                    var4 = var4.bind(var3)(var6, var5);
                    return var3;
case 30:
                    return var2;
case 38:
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
    var4 = function trackDismissibleContentShown(arg1, arg2) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var10 = arg1;
            var7 = arg2;
            var2 = _closure1_slot11;
            var1 = undefined;
            var4 = var2.bind(var1)();
            var3 = _closure1_slot3;
            var2 = 2;
            var3 = var3.bind(var1)(var4, var2);
            var2 = 0;
            var9 = var3[var2];
            var2 = 1;
            var6 = var3[var2];
            var3 = _closure1_slot1;
            var13 = _closure1_slot2;
            var2 = 17;
            var2 = var13[var2];
            var5 = var3.bind(var1)(var2);
            var4 = var5.track;
            var2 = _closure1_slot13;
            var3 = var2.DISMISSIBLE_CONTENT_SHOWN;
            var2 = {};
            var12 = _closure1_slot0;
            var11 = 14;
            var11 = var13[var11];
            var11 = var12.bind(var1)(var11);
            var11 = var11.DismissibleContent;
            var11 = var11[var10];
            var2['type'] = var11;
            var2['content_count'] = var9;
            var2['fatigable_content_count'] = var6;
            var6 = null;
            var11 = var6 == var7;
            var9 = undefined;
            if(var11) { _fun0010_ip = 42; continue _fun0010 }
case 43:
            var9 = var7.groupName;
case 42:
            var2['group_name'] = var9;
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var8 = 18;
            var8 = var11[var8];
            var8 = var9.bind(var1)(var8);
            var9 = var8.CONTENT_TYPES_WITH_BYPASS_FATIGUE;
            var8 = var9.has;
            var8 = var8.bind(var9)(var10);
            var2['bypass_fatigue'] = var8;
            var9 = var6 == var7;
            var8 = undefined;
            if(var9) { _fun0010_ip = 44; continue _fun0010 }
case 45:
            var8 = var7.guildId;
case 44:
            var2['guild_id'] = var8;
            var9 = var6 == var7;
            var8 = undefined;
            if(var9) { _fun0010_ip = 46; continue _fun0010 }
case 47:
            var8 = var7.version;
case 46:
            var2['version'] = var8;
            var8 = var6 == var7;
            var6 = undefined;
            if(var8) { _fun0010_ip = 48; continue _fun0010 }
case 49:
            var6 = var7.snowflakeId;
case 48:
            var2['snowflake_id'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var _closure1_slot28 = var4;
    var2 = function trackDismissibleContentDismissed(arg1, arg2) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var12 = arg1;
            var7 = arg2;
            var2 = _closure1_slot11;
            var1 = undefined;
            var4 = var2.bind(var1)();
            var3 = _closure1_slot3;
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
            var6 = null;
            var2 = var6 == var3;
            var9 = null;
            if(var2) { _fun0011_ip = 50; continue _fun0011 }
case 51:
            var2 = var4.getTime;
            var2 = var2.bind(var4)();
            var9 = var2 - var3;
case 50:
            var3 = var6 == var7;
            var2 = undefined;
            if(var3) { _fun0011_ip = 52; continue _fun0011 }
case 53:
            var2 = var7.guildId;
case 52:
            if(!(var6 == var2)) { _fun0011_ip = 54; continue _fun0011 }
case 55:
            var3 = _closure1_slot23;
            var2 = var7;
            if(!(var6 == var2)) { _fun0011_ip = 56; continue _fun0011 }
case 57:
            var2 = {};
case 56:
            var8 = var3.bind(var1)(var12, var2);
            _fun0011_ip = 58; continue _fun0011;
case 54:
            var3 = _closure1_slot22;
            var2 = var7.guildId;
            var8 = var3.bind(var1)(var12, var2);
case 58:
            var3 = _closure1_slot1;
            var15 = _closure1_slot2;
            var2 = 17;
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
            var14 = var6 == var7;
            var13 = undefined;
            if(var14) { _fun0011_ip = 59; continue _fun0011 }
case 60:
            var13 = var7.dismissAction;
case 59:
            if(!(var6 == var13)) { _fun0011_ip = 61; continue _fun0011 }
case 62:
            var14 = _closure1_slot12;
            var13 = var14.UNKNOWN;
case 61:
            var2['action'] = var13;
            var2['content_count'] = var11;
            var13 = var6 == var7;
            var11 = undefined;
            if(var13) { _fun0011_ip = 63; continue _fun0011 }
case 64:
            var11 = var7.groupName;
case 63:
            var2['group_name'] = var11;
            var11 = _closure1_slot0;
            var13 = _closure1_slot2;
            var10 = 18;
            var10 = var13[var10];
            var10 = var11.bind(var1)(var10);
            var11 = var10.CONTENT_TYPES_WITH_BYPASS_FATIGUE;
            var10 = var11.has;
            var10 = var10.bind(var11)(var12);
            var2['bypass_fatigue'] = var10;
            var11 = var6 == var7;
            var10 = undefined;
            if(var11) { _fun0011_ip = 65; continue _fun0011 }
case 66:
            var10 = var7.guildId;
case 65:
            var2['guild_id'] = var10;
            var2['shown_duration'] = var9;
            var10 = var6 == var7;
            var9 = undefined;
            if(var10) { _fun0011_ip = 67; continue _fun0011 }
case 68:
            var9 = var7.version;
case 67:
            var2['version'] = var9;
            var2['num_times_dismissed'] = var8;
            var8 = var6 == var7;
            var6 = undefined;
            if(var8) { _fun0011_ip = 69; continue _fun0011 }
case 70:
            var6 = var7.snowflakeId;
case 69:
            var2['snowflake_id'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var _closure1_slot29 = var2;
    var15 = global;
    var21 = var15.Object;
    var20 = var21.defineProperty;
    var18 = {};
    var1 = true;
    var18['value'] = var1;
    var1 = '__esModule';
    var1 = var20.bind(var21)(var3, var1, var18);
    var1 = 0;
    var18 = var17[var1];
    var1 = undefined;
    var18 = var19.bind(var1)(var18);
    var _closure1_slot3 = var18;
    var18 = 1;
    var18 = var17[var18];
    var18 = var19.bind(var1)(var18);
    var _closure1_slot4 = var18;
    var18 = 2;
    var18 = var17[var18];
    var18 = var19.bind(var1)(var18);
    var _closure1_slot5 = var18;
    var18 = 3;
    var18 = var17[var18];
    var18 = var16.bind(var1)(var18);
    var18 = var18.DCFEventTypes;
    var _closure1_slot6 = var18;
    var18 = 4;
    var18 = var17[var18];
    var18 = var19.bind(var1)(var18);
    var _closure1_slot7 = var18;
    var18 = 5;
    var18 = var17[var18];
    var18 = var16.bind(var1)(var18);
    var19 = var18.addCandidateContent;
    var _closure1_slot8 = var19;
    var19 = var18.removeCandidateContent;
    var _closure1_slot9 = var19;
    var19 = var18.isContentShown;
    var _closure1_slot10 = var19;
    var18 = var18.getCurrentlyShownCounts;
    var _closure1_slot11 = var18;
    var18 = 6;
    var18 = var17[var18];
    var18 = var16.bind(var1)(var18);
    var18 = var18.ContentDismissActionType;
    var _closure1_slot12 = var18;
    var18 = 7;
    var18 = var17[var18];
    var18 = var16.bind(var1)(var18);
    var18 = var18.AnalyticEvents;
    var _closure1_slot13 = var18;
    var19 = var15.Set;
    var18 = 14;
    var15 = var17[var18];
    var15 = var16.bind(var1)(var15);
    var15 = var15.DismissibleContent;
    var20 = var15.ACCOUNT_LINK_INVITE_FRIENDS;
    var15 = new Array(3);
    var15[0] = var20;
    var20 = var17[var18];
    var20 = var16.bind(var1)(var20);
    var20 = var20.DismissibleContent;
    var20 = var20.ACCOUNT_LINK_PROMPT;
    var15[1] = var20;
    var18 = var17[var18];
    var18 = var16.bind(var1)(var18);
    var18 = var18.DismissibleContent;
    var18 = var18.AUTOCLIPPING_ACCOUNT_PANEL_COACHMARK;
    var15[2] = var18;
    var18 = var19.prototype;
    var18 = Object.create(var18, {constructor: {value: var19}});
    var25 = var18;
    var24 = var15;
    var15 = new var25[var19](var24, var23);
    var15 = var15 instanceof Object ? var15 : var18;
    var _closure1_slot14 = var15;
    var15 = 19;
    var15 = var17[var15];
    var17 = var16.bind(var1)(var15);
    var16 = var17.fileFinishedImporting;
    var15 = 'modules/dismissible_content/DismissibleContentUtils.tsx';
    var15 = var16.bind(var17)(var15);
    var15 = 2592000000.0;
    var3['SNOWFLAKE_BOUND_DISMISSIBLE_CONTENT_DURATION_MS'] = var15;
    var15 = function getDismissedRecurringDismissibleContentState(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var10 = arg1;
            var1 = _closure1_slot5;
            var1 = var1.settings;
            var1 = var1.userContent;
            var4 = null;
            var2 = var4 == var1;
            var3 = undefined;
            var5 = undefined;
            if(var2) { _fun0012_ip = 71; continue _fun0012 }
case 72:
            var1 = var1.recurringDismissibleContentStates;
            var5 = var1[var10];
case 71:
            var1 = {};
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var11 = 8;
            var2 = var2[var11];
            var6 = var6.bind(var3)(var2);
            var2 = var6.isVersionedDismissibleContent;
            var7 = var2.bind(var6)(var10);
            var6 = 0;
            if(!var7) { _fun0012_ip = 73; continue _fun0012 }
case 32:
            var9 = _closure1_slot0;
            var12 = _closure1_slot2;
            var7 = 9;
            var7 = var12[var7];
            var9 = var9.bind(var3)(var7);
            var7 = var9.getVersionedDismissibleContentCurrentVersion;
            var6 = var7.bind(var9)(var10);
case 73:
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
            if(!var9) { _fun0012_ip = 74; continue _fun0012 }
case 75:
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
case 74:
            var1['lastDismissedObjectId'] = var6;
            var6 = var4 == var5;
            var3 = undefined;
            if(var6) { _fun0012_ip = 76; continue _fun0012 }
case 77:
            var3 = var5.numTimesDismissed;
case 76:
            var4 = var4 != var3;
            var2 = 0;
            if(!var4) { _fun0012_ip = 78; continue _fun0012 }
case 79:
            var2 = var3;
case 78:
            var1['numTimesDismissed'] = var2;
            return var1;
        }
    };
    var3['getDismissedRecurringDismissibleContentState'] = var15;
    var3['addVersionedDismissedContent'] = var14;
    var3['addTimeRecurringDismissedContent'] = var13;
    var3['addSnowflakeBoundDismissedContent'] = var12;
    var12 = function UNSAFE_addGuildDismissedContent(arg1, arg2, arg3) {
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
    var3['UNSAFE_addGuildDismissedContent'] = var12;
    var12 = function UNSAFE_removeGuildDismissedContent(arg1, arg2, arg3) {
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
    var3['UNSAFE_removeGuildDismissedContent'] = var12;
    var12 = function UNSAFE_addTimeRecurringGuildDismissedContent(arg1, arg2, arg3) {
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
    var3['UNSAFE_addTimeRecurringGuildDismissedContent'] = var12;
    var12 = function UNSAFE_removeTimeRecurringGuildDismissedContent(arg1, arg2, arg3) {
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
    var3['UNSAFE_removeTimeRecurringGuildDismissedContent'] = var12;
    var12 = function UNSAFE_addSnowflakeBoundGuildDismissedContent(arg1, arg2, arg3, arg4) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 11;
        var2 = var2[var1];
        var1 = undefined;
        var5 = var3.bind(var1)(var2);
        var4 = var5.updateGuildDismissedContent;
        var3 = {'dismissed': false, 'lastDismissedVersion': 0};
        var1 = global;
        var2 = var1.Date;
        var1 = var2.now;
        var2 = var1.bind(var2)();
        var1 = var2.toString;
        var1 = var1.bind(var2)();
        var3['lastDismissedAtMs'] = var1;
        var1 = arg2;
        var3['lastDismissedObjectId'] = var1;
        var1 = arg4;
        var3['numTimesDismissed'] = var1;
        var2 = arg1;
        var1 = arg3;
        var1 = var4.bind(var5)(var2, var1, var3);
        return var1;
    };
    var3['UNSAFE_addSnowflakeBoundGuildDismissedContent'] = var12;
    var12 = function UNSAFE_removeSnowflakeBoundGuildDismissedContent(arg1, arg2, arg3) {
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
    var3['UNSAFE_removeSnowflakeBoundGuildDismissedContent'] = var12;
    var12 = function isVersionedDismissibleContentDismissed(arg1, arg2) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
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
            if(var2) { _fun0013_ip = 80; continue _fun0013 }
case 71:
            var2 = _closure1_slot5;
            var2 = var2.settings;
            var5 = var2.userContent;
            var3 = null;
            var8 = var3 == var5;
            var2 = undefined;
            if(var8) { _fun0013_ip = 81; continue _fun0013 }
case 82:
            var5 = var5.recurringDismissibleContentStates;
            var5 = var5[var6];
            var8 = var3 == var5;
            var2 = undefined;
            if(var8) { _fun0013_ip = 81; continue _fun0013 }
case 83:
            var2 = var5.lastDismissedVersion;
case 81:
            if(!(var3 == var4)) { _fun0013_ip = 84; continue _fun0013 }
case 85:
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 9;
            var1 = var8[var1];
            var5 = var5.bind(var7)(var1);
            var1 = var5.getVersionedDismissibleContentCurrentVersion;
            var4 = var1.bind(var5)(var6);
case 84:
            var1 = {};
            var3 = var3 != var2;
            if(!var3) { _fun0013_ip = 86; continue _fun0013 }
case 42:
            var3 = var2 >= var4;
case 86:
            var1['isDismissed'] = var3;
            var1['lastDismissedVersion'] = var2;
            return var1;
case 80:
            var1 = {'isDismissed': true, 'lastDismissedVersion': null};
            return var1;
        }
    };
    var3['isVersionedDismissibleContentDismissed'] = var12;
    var12 = function isTimeRecurringDismissibleContentDismissed(arg1, arg2) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
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
            if(var4) { _fun0014_ip = 87; continue _fun0014 }
case 23:
            var1 = _closure1_slot5;
            var1 = var1.settings;
            var1 = var1.userContent;
            var7 = null;
            var4 = var7 == var1;
            var5 = undefined;
            if(var4) { _fun0014_ip = 88; continue _fun0014 }
case 35:
            var1 = var1.recurringDismissibleContentStates;
            var1 = var1[var3];
            var3 = var7 == var1;
            var5 = undefined;
            if(var3) { _fun0014_ip = 88; continue _fun0014 }
case 51:
            var5 = var1.lastDismissedAtMs;
case 88:
            var1 = var7 != var5;
            var3 = undefined;
            if(!var1) { _fun0014_ip = 89; continue _fun0014 }
case 90:
            var1 = '0';
            var3 = undefined;
            if(!(var1 !== var5)) { _fun0014_ip = 89; continue _fun0014 }
case 91:
            var4 = global;
            var9 = var4.Number;
            var6 = var9.isNaN;
            var1 = var4.Number;
            var1 = var1.bind(var2)(var5);
            var6 = var6.bind(var9)(var1);
            var1 = undefined;
            if(var6) { _fun0014_ip = 92; continue _fun0014 }
case 93:
            var4 = var4.Number;
            var1 = var4.bind(var2)(var5);
case 92:
            var3 = var1;
case 89:
            if(!(var2 !== var3)) { _fun0014_ip = 94; continue _fun0014 }
case 95:
            var1 = var7 != var8;
            var4 = true;
            if(!var1) { _fun0014_ip = 96; continue _fun0014 }
case 97:
            var1 = var8.cooldownDurationMs;
            var6 = var3 + var1;
            var1 = global;
            var5 = var1.Date;
            var1 = var5.now;
            var1 = var1.bind(var5)();
            var5 = var8.showAfterTimestamp;
            var5 = var7 == var5;
            if(var5) { _fun0014_ip = 98; continue _fun0014 }
case 99:
            var7 = var8.showAfterTimestamp;
            var7 = var1 >= var7;
            if(!var7) { _fun0014_ip = 100; continue _fun0014 }
case 101:
            var8 = var8.showAfterTimestamp;
            var7 = var3 <= var8;
case 100:
            var5 = var7;
case 98:
            var1 = var1 < var6;
            if(var1) { _fun0014_ip = 102; continue _fun0014 }
case 103:
            var1 = !var5;
case 102:
            var4 = var1;
case 96:
            var1 = {};
            var1['isDismissed'] = var4;
            var1['lastDismissedAtMs'] = var3;
            return var1;
case 94:
            var1 = {};
            var3 = false;
            var1['isDismissed'] = var3;
            var1['lastDismissedAtMs'] = var2;
            return var1;
case 87:
            var1 = {'isDismissed': true, 'lastDismissedAtMs': null};
            return var1;
        }
    };
    var3['isTimeRecurringDismissibleContentDismissed'] = var12;
    var12 = function isTimeRecurringSnowflakeBoundDismissibleContentDismissed(arg1, arg2, arg3) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
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
            if(var1) { _fun0015_ip = 104; continue _fun0015 }
case 23:
            var1 = _closure1_slot5;
            var1 = var1.settings;
            var1 = var1.userContent;
            var2 = null;
            var7 = var2 == var1;
            var6 = undefined;
            if(var7) { _fun0015_ip = 88; continue _fun0015 }
case 35:
            var1 = var1.recurringDismissibleContentStates;
            var1 = var1[var4];
            var7 = var2 == var1;
            var6 = undefined;
            if(var7) { _fun0015_ip = 88; continue _fun0015 }
case 51:
            var6 = var1.lastDismissedObjectId;
case 88:
            var1 = _closure1_slot5;
            var1 = var1.settings;
            var1 = var1.userContent;
            var8 = var2 == var1;
            var7 = undefined;
            if(var8) { _fun0015_ip = 105; continue _fun0015 }
case 106:
            var1 = var1.recurringDismissibleContentStates;
            var1 = var1[var4];
            var4 = var2 == var1;
            var7 = undefined;
            if(var4) { _fun0015_ip = 105; continue _fun0015 }
case 107:
            var7 = var1.lastDismissedAtMs;
case 105:
            var1 = var2 != var7;
            var11 = undefined;
            if(!var1) { _fun0015_ip = 46; continue _fun0015 }
case 108:
            var1 = '0';
            var11 = undefined;
            if(!(var1 !== var7)) { _fun0015_ip = 46; continue _fun0015 }
case 109:
            var4 = global;
            var9 = var4.Number;
            var8 = var9.isNaN;
            var1 = var4.Number;
            var1 = var1.bind(var5)(var7);
            var8 = var8.bind(var9)(var1);
            var1 = undefined;
            if(var8) { _fun0015_ip = 110; continue _fun0015 }
case 111:
            var4 = var4.Number;
            var1 = var4.bind(var5)(var7);
case 110:
            var11 = var1;
case 46:
            var4 = var2 != var10;
            var1 = false;
            if(!var4) { _fun0015_ip = 112; continue _fun0015 }
case 113:
            var4 = var2 != var11;
            var1 = false;
            if(!var4) { _fun0015_ip = 112; continue _fun0015 }
case 60:
            var4 = var10.cooldownDurationMs;
            var8 = var11 + var4;
            var4 = global;
            var7 = var4.Date;
            var4 = var7.now;
            var4 = var4.bind(var7)();
            var7 = var10.showAfterTimestamp;
            var7 = var2 == var7;
            if(var7) { _fun0015_ip = 114; continue _fun0015 }
case 115:
            var9 = var10.showAfterTimestamp;
            var9 = var4 >= var9;
            if(!var9) { _fun0015_ip = 116; continue _fun0015 }
case 117:
            var10 = var10.showAfterTimestamp;
            var9 = var11 <= var10;
case 116:
            var7 = var9;
case 114:
            var4 = var4 < var8;
            if(var4) { _fun0015_ip = 118; continue _fun0015 }
case 119:
            var4 = !var7;
case 118:
            var1 = var4;
case 112:
            var2 = var2 != var6;
            if(!var2) { _fun0015_ip = 120; continue _fun0015 }
case 121:
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
case 120:
            if(!var1) { _fun0015_ip = 122; continue _fun0015 }
case 67:
            var1 = var2;
case 122:
            return var1;
case 104:
            var1 = true;
            return var1;
        }
    };
    var3['isTimeRecurringSnowflakeBoundDismissibleContentDismissed'] = var12;
    var3['UNSAFE_isSingleUseGuildDismissibleContentDismissed'] = var11;
    var11 = function useIsSingleUseGuildDismissibleContentDismissed(arg1, arg2) {
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
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var3 = _closure2_slot0;
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0016_ip = 21; continue _fun0016 }
case 37:
                var5 = _closure1_slot18;
                var4 = _closure2_slot0;
                var3 = _closure2_slot1;
                var2 = undefined;
                var1 = var5.bind(var2)(var4, var3);
case 21:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useIsSingleUseGuildDismissibleContentDismissed'] = var11;
    var11 = function UNSAFE_isTimeRecurringGuildDismissibleContentDismissed(arg1, arg2) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
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
            if(var2) { _fun0017_ip = 123; continue _fun0017 }
case 3:
            var4 = _closure1_slot5;
            var2 = var4.getGuildDismissedContentState;
            var1 = arg2;
            var2 = var2.bind(var4)(var1);
            var5 = null;
            var1 = var5 != var2;
            if(!var1) { _fun0017_ip = 4; continue _fun0017 }
case 5:
            var4 = var2[var3];
            var1 = var5 != var4;
case 4:
            if(!var1) { _fun0017_ip = 51; continue _fun0017 }
case 7:
            var4 = var2[var3];
            var4 = var4.lastDismissedAtMs;
            var1 = var5 != var4;
case 51:
            if(!var1) { _fun0017_ip = 53; continue _fun0017 }
case 81:
            var2 = var2[var3];
            var3 = var2.lastDismissedAtMs;
            var2 = '0';
            var1 = var2 !== var3;
case 53:
            return var1;
case 123:
            var1 = true;
            return var1;
        }
    };
    var3['UNSAFE_isTimeRecurringGuildDismissibleContentDismissed'] = var11;
    var11 = function UNSAFE_isSnowflakeBoundGuildDismissibleContentDismissed(arg1, arg2) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
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
            if(var2) { _fun0018_ip = 123; continue _fun0018 }
case 3:
            var4 = _closure1_slot5;
            var2 = var4.getGuildDismissedContentState;
            var1 = arg2;
            var2 = var2.bind(var4)(var1);
            var5 = null;
            var1 = var5 != var2;
            if(!var1) { _fun0018_ip = 4; continue _fun0018 }
case 5:
            var4 = var2[var3];
            var1 = var5 != var4;
case 4:
            if(!var1) { _fun0018_ip = 51; continue _fun0018 }
case 7:
            var4 = var2[var3];
            var4 = var4.lastDismissedObjectId;
            var1 = var5 != var4;
case 51:
            if(!var1) { _fun0018_ip = 53; continue _fun0018 }
case 81:
            var2 = var2[var3];
            var3 = var2.lastDismissedObjectId;
            var2 = '0';
            var1 = var2 !== var3;
case 53:
            return var1;
case 123:
            var1 = true;
            return var1;
        }
    };
    var3['UNSAFE_isSnowflakeBoundGuildDismissibleContentDismissed'] = var11;
    var11 = function requestMarkDismissibleContentAsShown(arg1, arg2, arg3, arg4) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var7 = arg1;
            var6 = arg2;
            var3 = arg3;
            var _closure2_slot0 = var7;
            var _closure2_slot1 = var6;
            var5 = _closure1_slot10;
            var1 = undefined;
            var5 = var5.bind(var1)(var7);
            if(var5) { _fun0019_ip = 110; continue _fun0019 }
case 21:
            var10 = _closure1_slot7;
            var9 = var10.hasUserHitDCCap;
            var5 = null;
            var11 = var5 == var6;
            var8 = undefined;
            if(var11) { _fun0019_ip = 31; continue _fun0019 }
case 124:
            var8 = var6.guildId;
case 31:
            var8 = var9.bind(var10)(var7, var8);
            if(var8) { _fun0019_ip = 110; continue _fun0019 }
case 4:
            var8 = arg4;
            var8 = var5 == var8;
            if(!var8) { _fun0019_ip = 85; continue _fun0019 }
case 11:
            var10 = _closure1_slot14;
            var9 = var10.has;
            var8 = var9.bind(var10)(var7);
case 85:
            if(!var3) { _fun0019_ip = 125; continue _fun0019 }
case 126:
            var3 = !var8;
case 125:
            if(var3) { _fun0019_ip = 110; continue _fun0019 }
case 127:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var3 = 15;
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
            if(var7) { _fun0019_ip = 128; continue _fun0019 }
case 129:
            var5 = var6.groupName;
case 128:
            var2['groupName'] = var5;
            var4 = function onAdded() {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 16;
                    var2 = var2[var1];
                    var1 = undefined;
                    var8 = var4.bind(var1)(var2);
                    var7 = var8.handleDCShownToUser;
                    var6 = _closure2_slot0;
                    var4 = _closure2_slot1;
                    var5 = null;
                    var9 = var5 == var4;
                    var4 = undefined;
                    if(var9) { _fun0020_ip = 17; continue _fun0020 }
case 130:
                    var9 = _closure2_slot1;
                    var4 = var9.guildId;
case 17:
                    var4 = var7.bind(var8)(var6, var4);
                    var6 = _closure1_slot28;
                    var4 = _closure2_slot0;
                    var3 = _closure2_slot1;
                    var4 = var6.bind(var1)(var4, var3);
                    var3 = var5 == var3;
                    if(var3) { _fun0020_ip = 125; continue _fun0020 }
case 131:
                    var4 = _closure2_slot1;
                    var4 = var4.onShown;
                    var3 = var5 == var4;
case 125:
                    if(var3) { _fun0020_ip = 132; continue _fun0020 }
case 127:
                    var3 = _closure2_slot1;
                    var2 = var3.onShown;
                    var2 = var2.bind(var3)();
case 132:
                    return var1;
                }
            };
            var2['onAdded'] = var4;
            var2 = var3.bind(var1)(var2);
case 110:
            return var1;
        }
    };
    var3['requestMarkDismissibleContentAsShown'] = var11;
    var3['markDismissibleContentAsDismissedPreProcessing'] = var10;
    var3['markDismissibleContentAsDismissedPostProcessing'] = var9;
    var9 = function markLatestVersionDismissibleContentAsDismissed() {
        var1 = undefined;
        var4 = _closure1_slot21;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['markLatestVersionDismissibleContentAsDismissed'] = var9;
    var3['getGuildNextNumTimesDismissed'] = var8;
    var3['getNextNumTimesDismissed'] = var7;
    var3['markVersionedDismissibleContentAsDismissed'] = var6;
    var6 = function markSnowflakeBoundDismissibleContentAsDismissed() {
        var1 = undefined;
        var4 = _closure1_slot26;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['markSnowflakeBoundDismissibleContentAsDismissed'] = var6;
    var5 = function markTimeRecurringDismissibleContentAsDismissed() {
        var1 = undefined;
        var4 = _closure1_slot27;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['markTimeRecurringDismissibleContentAsDismissed'] = var5;
    var3['trackDismissibleContentShown'] = var4;
    var3['trackDismissibleContentDismissed'] = var2;
    return var1;
})();