// app/modules/guild_onboarding_home/GuildOnboardingHomeSettingsStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot10 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function computeNewMemberActionsWithOnboarding(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var1 = _closure1_slot7;
            var4 = var1[var3];
            var1 = null;
            var6 = var1 == var4;
            var5 = undefined;
            if(var6) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var5 = var4.newMemberActions;
case 6:
            var4 = var1 == var5;
            var1 = null;
            if(var4) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var4 = _closure1_slot9;
            var4[var3] = var5;
            var2 = _closure1_slot9;
            var1 = var2[var3];
case 8:
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var9 = function handleSettingsLoadSuccess(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var4 = var1.homeSettings;
            var3 = var1.guildId;
            var1 = null;
            if(!(var1 != var3)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            if(!(var1 == var4)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var2 = _closure1_slot7;
            var1 = _closure1_slot5;
            var2[var3] = var1;
case 12:
            var2 = _closure1_slot7;
            var2[var3] = var4;
            var4 = _closure1_slot11;
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = _closure1_slot8;
            var1 = var2.delete;
            var1 = var1.bind(var2)(var3);
case 10:
            var1 = undefined;
            return var1;
        }
    };
    var4 = global;
    var10 = var4.Object;
    var8 = var10.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var10)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot0 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot1 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = {};
    var8 = false;
    var2['enabled'] = var8;
    var _closure1_slot5 = var2;
    var8 = new Array(0);
    var _closure1_slot6 = var8;
    var8 = {};
    var _closure1_slot7 = var8;
    var4 = var4.Set;
    var8 = var4.prototype;
    var8 = Object.create(var8, {constructor: {value: var4}});
    var14 = var8;
    var4 = new var14[var4](var13);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot8 = var4;
    var4 = {};
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var8 = var4.Store;
    var4 = function(arg1) {
        var4 = function GuildOnboardingHomeSettingsStore() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot0;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot3;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot2;
                var1 = _closure1_slot10;
                var1 = var1.bind(var3)();
                if(var1) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0004_ip = 16; continue _fun0004;
case 14:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot3;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 16:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot4;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot1;
        var5 = {};
        var1 = 'getSettings';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var5 = arg1;
                var4 = null;
                var2 = var4 == var5;
                var1 = null;
                if(var2) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                var2 = _closure1_slot7;
                var2 = var2[var5];
                if(!(var4 == var2)) { _fun0005_ip = 19; continue _fun0005 }
case 20:
                var2 = _closure1_slot5;
case 19:
                var1 = var2;
case 17:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(11);
        var1[0] = var5;
        var5 = {};
        var7 = 'getNewMemberActions';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var5 = arg1;
                var3 = this;
                var6 = null;
                var2 = var6 == var5;
                var1 = null;
                if(var2) { _fun0006_ip = 21; continue _fun0006 }
case 22:
                var2 = var3.getSettings;
                var3 = var2.bind(var3)(var5);
                var7 = var6 == var3;
                var4 = undefined;
                var2 = undefined;
                if(var7) { _fun0006_ip = 23; continue _fun0006 }
case 12:
                var2 = var3.newMemberActions;
case 23:
                var2 = var6 == var2;
                var1 = null;
                if(var2) { _fun0006_ip = 21; continue _fun0006 }
case 24:
                var2 = _closure1_slot9;
                var2 = var2[var5];
                if(!(var6 != var2)) { _fun0006_ip = 25; continue _fun0006 }
case 14:
                var2 = _closure1_slot9;
                var2 = var2[var5];
                _fun0006_ip = 26; continue _fun0006;
case 25:
                var3 = _closure1_slot11;
                var2 = var3.bind(var4)(var5);
case 26:
                var1 = var2;
case 21:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getActionForChannel';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var4 = this;
                var1 = arg2;
                var _closure3_slot0 = var1;
                var3 = var4.getSettings;
                var1 = arg1;
                var4 = var3.bind(var4)(var1);
                var3 = null;
                var5 = var3 == var4;
                var1 = null;
                if(var5) { _fun0007_ip = 27; continue _fun0007 }
case 28:
                var4 = var4.newMemberActions;
                if(!(var3 == var4)) { _fun0007_ip = 15; continue _fun0007 }
case 29:
                var4 = new Array(0);
case 15:
                var3 = var4.find;
                var2 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.channelId;
                    var1 = _closure3_slot0;
                    var1 = var2 === var1;
                    return var1;
                };
                var1 = var3.bind(var4)(var2);
case 27:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'hasMemberAction';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var4 = this;
            var3 = var4.getActionForChannel;
            var2 = arg1;
            var1 = arg2;
            var2 = var3.bind(var4)(var2, var1);
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getResourceChannels';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var3 = _closure1_slot7;
                var1 = arg1;
                var4 = var3[var1];
                var3 = null;
                var5 = var3 == var4;
                var1 = undefined;
                if(var5) { _fun0008_ip = 6; continue _fun0008 }
case 7:
                var1 = var4.resourceChannels;
case 6:
                if(!(var3 == var1)) { _fun0008_ip = 12; continue _fun0008 }
case 30:
                var1 = _closure1_slot6;
case 12:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getResourceForChannel';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = arg2;
                var _closure3_slot0 = var1;
                var1 = null;
                if(!(var1 != var5)) { _fun0009_ip = 31; continue _fun0009 }
case 32:
                var2 = var4.getResourceChannels;
                var5 = var2.bind(var4)(var5);
                var4 = _closure1_slot6;
                var2 = null;
                if(!(var5 !== var4)) { _fun0009_ip = 33; continue _fun0009 }
case 23:
                var4 = var5.find;
                var3 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.channelId;
                    var1 = _closure3_slot0;
                    var1 = var2 === var1;
                    return var1;
                };
                var2 = var4.bind(var5)(var3);
case 33:
                return var2;
case 31:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getIsLoading';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var4 = arg1;
                var1 = null;
                var1 = var1 != var4;
                if(!var1) { _fun0010_ip = 20; continue _fun0010 }
case 34:
                var3 = _closure1_slot8;
                var2 = var3.has;
                var1 = var2.bind(var3)(var4);
case 20:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getWelcomeMessage';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var3 = arg1;
                var1 = null;
                if(!(var1 == var3)) { _fun0011_ip = 35; continue _fun0011 }
case 36:
                var2 = undefined;
                return var2;
case 35:
                var2 = _closure1_slot7;
                var2 = var2[var3];
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0011_ip = 12; continue _fun0011 }
case 19:
                var1 = var2.welcomeMessage;
case 12:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'hasSettings';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var4 = arg1;
                var3 = null;
                var1 = var3 != var4;
                if(!var1) { _fun0012_ip = 37; continue _fun0012 }
case 34:
                var2 = _closure1_slot7;
                var2 = var2[var4];
                var1 = var3 != var2;
case 37:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'getEnabled';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var4 = arg1;
                var2 = null;
                var1 = var2 != var4;
                if(!var1) { _fun0013_ip = 38; continue _fun0013 }
case 34:
                var3 = _closure1_slot7;
                var4 = var3[var4];
                var5 = var2 == var4;
                var3 = undefined;
                if(var5) { _fun0013_ip = 28; continue _fun0013 }
case 39:
                var3 = var4.enabled;
case 28:
                var2 = var2 != var3;
                if(!var2) { _fun0013_ip = 29; continue _fun0013 }
case 40:
                var2 = var3;
case 29:
                var1 = var2;
case 38:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'getNewMemberAction';
        var5['key'] = var7;
        var6 = function value(arg1, arg2) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var5 = arg1;
                var3 = arg2;
                var _closure3_slot0 = var3;
                var2 = null;
                var6 = var2 == var5;
                var1 = null;
                if(var6) { _fun0014_ip = 41; continue _fun0014 }
case 42:
                var3 = var2 == var3;
                var1 = null;
                if(var3) { _fun0014_ip = 41; continue _fun0014 }
case 39:
                var3 = _closure1_slot7;
                var5 = var3[var5];
                var6 = var2 == var5;
                var3 = undefined;
                if(var6) { _fun0014_ip = 43; continue _fun0014 }
case 44:
                var6 = var5.newMemberActions;
                var5 = var2 == var6;
                var3 = undefined;
                if(var5) { _fun0014_ip = 43; continue _fun0014 }
case 27:
                var5 = var6.find;
                var4 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.channelId;
                    var1 = _closure3_slot0;
                    var1 = var2 === var1;
                    return var1;
                };
                var3 = var5.bind(var6)(var4);
case 43:
                var4 = var2 != var3;
                var2 = null;
                if(!var4) { _fun0014_ip = 45; continue _fun0014 }
case 46:
                var2 = var3;
case 45:
                var1 = var2;
case 41:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[10] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var4.bind(var1)(var8);
    var4 = 'GuildOnboardingHomeSettingsStore';
    var8['displayName'] = var4;
    var4 = 6;
    var4 = var6[var4];
    var13 = var7.bind(var1)(var4);
    var4 = {};
    var10 = function handleSettingsFetchStart(arg1) {
        var1 = arg1;
        var3 = var1.guildId;
        var2 = _closure1_slot8;
        var1 = var2.add;
        var1 = var1.bind(var2)(var3);
        var1 = undefined;
        return var1;
    };
    var4['GUILD_HOME_SETTINGS_FETCH_START'] = var10;
    var4['GUILD_HOME_SETTINGS_FETCH_SUCCESS'] = var9;
    var10 = function handleSettingsFetchFail(arg1) {
        var1 = arg1;
        var3 = var1.guildId;
        var2 = _closure1_slot8;
        var1 = var2.delete;
        var1 = var1.bind(var2)(var3);
        var1 = undefined;
        return var1;
    };
    var4['GUILD_HOME_SETTINGS_FETCH_FAIL'] = var10;
    var4['GUILD_HOME_SETTINGS_UPDATE_SUCCESS'] = var9;
    var9 = function handleSettingsToggleEnabled(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var1 = arg1;
            var3 = var1.guildId;
            var2 = var1.enabled;
            var1 = _closure1_slot7;
            var1 = var1[var3];
            var3 = null;
            if(!(var3 != var1)) { _fun0015_ip = 9; continue _fun0015 }
case 47:
            var1['enabled'] = var2;
            var1 = undefined;
            return var1;
case 9:
            var1 = false;
            return var1;
        }
    };
    var4['GUILD_HOME_SETTINGS_TOGGLE_ENABLED'] = var9;
    var9 = function handleResourceChannelUpdate(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var2 = arg1;
            var3 = var2.guildId;
            var5 = var2.resourceChannel;
            var _closure2_slot0 = var5;
            var2 = _closure1_slot7;
            var2 = var2[var3];
            var4 = null;
            if(!(var4 != var2)) { _fun0016_ip = 48; continue _fun0016 }
case 12:
            var3 = var2.resourceChannels;
            if(!(var4 == var3)) { _fun0016_ip = 49; continue _fun0016 }
case 50:
            var3 = new Array(0);
case 49:
            var2['resourceChannels'] = var3;
            var4 = var2.resourceChannels;
            var3 = var4.findIndex;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.channelId;
                var1 = _closure2_slot0;
                var1 = var1.channelId;
                var1 = var2 === var1;
                return var1;
            };
            var4 = var3.bind(var4)(var1);
            var1 = -1;
            var1 = var1 !== var4;
            if(!var1) { _fun0016_ip = 51; continue _fun0016 }
case 52:
            var3 = var2.resourceChannels;
            var2 = {};
            var7 = var2;
            var6 = var5;
            var5 = copyDataProperties(var7, var6);
            var3[var4] = var2;
            var1 = true;
case 51:
            return var1;
case 48:
            var1 = false;
            return var1;
        }
    };
    var4['GUILD_RESOURCE_CHANNEL_UPDATE_SUCCESS'] = var9;
    var9 = function handleNewMemberActionUpdate(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var2 = arg1;
            var3 = var2.guildId;
            var5 = var2.action;
            var _closure2_slot0 = var5;
            var2 = _closure1_slot7;
            var2 = var2[var3];
            var4 = null;
            if(!(var4 != var2)) { _fun0017_ip = 53; continue _fun0017 }
case 17:
            var3 = var2.newMemberActions;
            if(!(var4 == var3)) { _fun0017_ip = 38; continue _fun0017 }
case 54:
            var3 = new Array(0);
case 38:
            var2['newMemberActions'] = var3;
            var4 = var2.newMemberActions;
            var3 = var4.findIndex;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.channelId;
                var1 = _closure2_slot0;
                var1 = var1.channelId;
                var1 = var2 === var1;
                return var1;
            };
            var4 = var3.bind(var4)(var1);
            var1 = -1;
            var1 = var1 !== var4;
            if(!var1) { _fun0017_ip = 55; continue _fun0017 }
case 21:
            var3 = var2.newMemberActions;
            var2 = {};
            var7 = var2;
            var6 = var5;
            var5 = copyDataProperties(var7, var6);
            var3[var4] = var2;
            var1 = true;
case 55:
            return var1;
case 53:
            var1 = false;
            return var1;
        }
    };
    var4['GUILD_NEW_MEMBER_ACTION_UPDATE_SUCCESS'] = var9;
    var5 = function handleGuildDelete(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var1 = arg1;
            var1 = var1.guild;
            var4 = _closure1_slot7;
            var3 = var1.id;
            var4 = var4[var3];
            var3 = null;
            if(!(var3 != var4)) { _fun0018_ip = 56; continue _fun0018 }
case 47:
            var4 = _closure1_slot7;
            var3 = var1.id;
            var3 = delete var4[var3];
            var2 = _closure1_slot9;
            var1 = var1.id;
            var1 = delete var2[var1];
            var1 = undefined;
            return var1;
case 56:
            var1 = false;
            return var1;
        }
    };
    var4['GUILD_DELETE'] = var5;
    var5 = var8.prototype;
    var5 = Object.create(var5, {constructor: {value: var8}});
    var14 = var5;
    var12 = var4;
    var4 = new var14[var8](var13, var12, var11);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 7;
    var6 = var6[var5];
    var5 = require;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_onboarding_home/GuildOnboardingHomeSettingsStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['NO_SETTINGS'] = var2;
    return var1;
})();