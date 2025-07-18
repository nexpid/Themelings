// app/modules/guild_onboarding_home/GuildOnboardingHomeSettingsStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
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
 70: // try_end0
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
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
 0:
            var3 = arg1;
            var1 = _closure1_slot7;
            var4 = var1[var3];
            var1 = null;
            var6 = var1 == var4;
            var5 = undefined;
            if(var6) { _fun0002_ip = 31; continue _fun0002 }
 25:
            var5 = var4.newMemberActions;
 31:
            var4 = var1 == var5;
            var1 = null;
            if(var4) { _fun0002_ip = 56; continue _fun0002 }
 40:
            var4 = _closure1_slot9;
            var4[var3] = var5;
            var2 = _closure1_slot9;
            var1 = var2[var3];
 56:
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var9 = function handleSettingsLoadSuccess(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var4 = var1.homeSettings;
            var3 = var1.guildId;
            var1 = null;
            if(!(var1 != var3)) { _fun0003_ip = 75; continue _fun0003 }
 20:
            if(!(var1 == var4)) { _fun0003_ip = 39; continue _fun0003 }
 24:
            var2 = _closure1_slot7;
            var1 = _closure1_slot5;
            var2[var3] = var1;
 39:
            var2 = _closure1_slot7;
            var2[var3] = var4;
            var4 = _closure1_slot11;
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = _closure1_slot8;
            var1 = var2.delete;
            var1 = var1.bind(var2)(var3);
 75:
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
 0:
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
                if(var1) { _fun0004_ip = 69; continue _fun0004 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0004_ip = 105; continue _fun0004;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot3;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
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
 0:
                var5 = arg1;
                var4 = null;
                var2 = var4 == var5;
                var1 = null;
                if(var2) { _fun0005_ip = 36; continue _fun0005 }
 14:
                var2 = _closure1_slot7;
                var2 = var2[var5];
                if(!(var4 == var2)) { _fun0005_ip = 33; continue _fun0005 }
 29:
                var2 = _closure1_slot5;
 33:
                var1 = var2;
 36:
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
 0:
                var5 = arg1;
                var3 = this;
                var6 = null;
                var2 = var6 == var5;
                var1 = null;
                if(var2) { _fun0006_ip = 91; continue _fun0006 }
 17:
                var2 = var3.getSettings;
                var3 = var2.bind(var3)(var5);
                var7 = var6 == var3;
                var4 = undefined;
                var2 = undefined;
                if(var7) { _fun0006_ip = 45; continue _fun0006 }
 39:
                var2 = var3.newMemberActions;
 45:
                var2 = var6 == var2;
                var1 = null;
                if(var2) { _fun0006_ip = 91; continue _fun0006 }
 54:
                var2 = _closure1_slot9;
                var2 = var2[var5];
                if(!(var6 != var2)) { _fun0006_ip = 79; continue _fun0006 }
 69:
                var2 = _closure1_slot9;
                var2 = var2[var5];
                _fun0006_ip = 88; continue _fun0006;
 79:
                var3 = _closure1_slot11;
                var2 = var3.bind(var4)(var5);
 88:
                var1 = var2;
 91:
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
 0:
                var4 = this;
                var1 = arg2;
                var _closure3_slot0 = var1;
                var3 = var4.getSettings;
                var1 = arg1;
                var4 = var3.bind(var4)(var1);
                var3 = null;
                var5 = var3 == var4;
                var1 = null;
                if(var5) { _fun0007_ip = 66; continue _fun0007 }
 37:
                var4 = var4.newMemberActions;
                if(!(var3 == var4)) { _fun0007_ip = 51; continue _fun0007 }
 47:
                var4 = new Array(0);
 51:
                var3 = var4.find;
                var2 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.channelId;
                    var1 = _closure3_slot0;
                    var1 = var2 === var1;
                    return var1;
                };
                var1 = var3.bind(var4)(var2);
 66:
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
 0:
                var3 = _closure1_slot7;
                var1 = arg1;
                var4 = var3[var1];
                var3 = null;
                var5 = var3 == var4;
                var1 = undefined;
                if(var5) { _fun0008_ip = 31; continue _fun0008 }
 25:
                var1 = var4.resourceChannels;
 31:
                if(!(var3 == var1)) { _fun0008_ip = 39; continue _fun0008 }
 35:
                var1 = _closure1_slot6;
 39:
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
 0:
                var5 = arg1;
                var4 = this;
                var1 = arg2;
                var _closure3_slot0 = var1;
                var1 = null;
                if(!(var1 != var5)) { _fun0009_ip = 62; continue _fun0009 }
 21:
                var2 = var4.getResourceChannels;
                var5 = var2.bind(var4)(var5);
                var4 = _closure1_slot6;
                var2 = null;
                if(!(var5 !== var4)) { _fun0009_ip = 60; continue _fun0009 }
 45:
                var4 = var5.find;
                var3 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.channelId;
                    var1 = _closure3_slot0;
                    var1 = var2 === var1;
                    return var1;
                };
                var2 = var4.bind(var5)(var3);
 60:
                return var2;
 62:
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
 0:
                var4 = arg1;
                var1 = null;
                var1 = var1 != var4;
                if(!var1) { _fun0010_ip = 29; continue _fun0010 }
 12:
                var3 = _closure1_slot8;
                var2 = var3.has;
                var1 = var2.bind(var3)(var4);
 29:
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
 0:
                var3 = arg1;
                var1 = null;
                if(!(var1 == var3)) { _fun0011_ip = 13; continue _fun0011 }
 9:
                var2 = undefined;
                return var2;
 13:
                var2 = _closure1_slot7;
                var2 = var2[var3];
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0011_ip = 39; continue _fun0011 }
 33:
                var1 = var2.welcomeMessage;
 39:
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
 0:
                var4 = arg1;
                var3 = null;
                var1 = var3 != var4;
                if(!var1) { _fun0012_ip = 27; continue _fun0012 }
 12:
                var2 = _closure1_slot7;
                var2 = var2[var4];
                var1 = var3 != var2;
 27:
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
 0:
                var4 = arg1;
                var2 = null;
                var1 = var2 != var4;
                if(!var1) { _fun0013_ip = 50; continue _fun0013 }
 12:
                var3 = _closure1_slot7;
                var4 = var3[var4];
                var5 = var2 == var4;
                var3 = undefined;
                if(var5) { _fun0013_ip = 37; continue _fun0013 }
 32:
                var3 = var4.enabled;
 37:
                var2 = var2 != var3;
                if(!var2) { _fun0013_ip = 47; continue _fun0013 }
 44:
                var2 = var3;
 47:
                var1 = var2;
 50:
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
 0:
                var5 = arg1;
                var3 = arg2;
                var _closure3_slot0 = var3;
                var2 = null;
                var6 = var2 == var5;
                var1 = null;
                if(var6) { _fun0014_ip = 97; continue _fun0014 }
 23:
                var3 = var2 == var3;
                var1 = null;
                if(var3) { _fun0014_ip = 97; continue _fun0014 }
 32:
                var3 = _closure1_slot7;
                var5 = var3[var5];
                var6 = var2 == var5;
                var3 = undefined;
                if(var6) { _fun0014_ip = 82; continue _fun0014 }
 52:
                var6 = var5.newMemberActions;
                var5 = var2 == var6;
                var3 = undefined;
                if(var5) { _fun0014_ip = 82; continue _fun0014 }
 67:
                var5 = var6.find;
                var4 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.channelId;
                    var1 = _closure3_slot0;
                    var1 = var2 === var1;
                    return var1;
                };
                var3 = var5.bind(var6)(var4);
 82:
                var4 = var2 != var3;
                var2 = null;
                if(!var4) { _fun0014_ip = 94; continue _fun0014 }
 91:
                var2 = var3;
 94:
                var1 = var2;
 97:
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
 0:
            var1 = arg1;
            var3 = var1.guildId;
            var2 = var1.enabled;
            var1 = _closure1_slot7;
            var1 = var1[var3];
            var3 = null;
            if(!(var3 != var1)) { _fun0015_ip = 40; continue _fun0015 }
 30:
            var1['enabled'] = var2;
            var1 = undefined;
            return var1;
 40:
            var1 = false;
            return var1;
        }
    };
    var4['GUILD_HOME_SETTINGS_TOGGLE_ENABLED'] = var9;
    var9 = function handleResourceChannelUpdate(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
            var2 = arg1;
            var3 = var2.guildId;
            var5 = var2.resourceChannel;
            var _closure2_slot0 = var5;
            var2 = _closure1_slot7;
            var2 = var2[var3];
            var4 = null;
            if(!(var4 != var2)) { _fun0016_ip = 120; continue _fun0016 }
 39:
            var3 = var2.resourceChannels;
            if(!(var4 == var3)) { _fun0016_ip = 53; continue _fun0016 }
 49:
            var3 = new Array(0);
 53:
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
            if(!var1) { _fun0016_ip = 118; continue _fun0016 }
 94:
            var3 = var2.resourceChannels;
            var2 = {};
            var7 = var2;
            var6 = var5;
            var5 = copyDataProperties(var7, var6);
            var3[var4] = var2;
            var1 = true;
 118:
            return var1;
 120:
            var1 = false;
            return var1;
        }
    };
    var4['GUILD_RESOURCE_CHANNEL_UPDATE_SUCCESS'] = var9;
    var9 = function handleNewMemberActionUpdate(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
            var2 = arg1;
            var3 = var2.guildId;
            var5 = var2.action;
            var _closure2_slot0 = var5;
            var2 = _closure1_slot7;
            var2 = var2[var3];
            var4 = null;
            if(!(var4 != var2)) { _fun0017_ip = 117; continue _fun0017 }
 36:
            var3 = var2.newMemberActions;
            if(!(var4 == var3)) { _fun0017_ip = 50; continue _fun0017 }
 46:
            var3 = new Array(0);
 50:
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
            if(!var1) { _fun0017_ip = 115; continue _fun0017 }
 91:
            var3 = var2.newMemberActions;
            var2 = {};
            var7 = var2;
            var6 = var5;
            var5 = copyDataProperties(var7, var6);
            var3[var4] = var2;
            var1 = true;
 115:
            return var1;
 117:
            var1 = false;
            return var1;
        }
    };
    var4['GUILD_NEW_MEMBER_ACTION_UPDATE_SUCCESS'] = var9;
    var5 = function handleGuildDelete(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
            var1 = arg1;
            var1 = var1.guild;
            var4 = _closure1_slot7;
            var3 = var1.id;
            var4 = var4[var3];
            var3 = null;
            if(!(var3 != var4)) { _fun0018_ip = 60; continue _fun0018 }
 30:
            var4 = _closure1_slot7;
            var3 = var1.id;
            var3 = delete var4[var3];
            var2 = _closure1_slot9;
            var1 = var1.id;
            var1 = delete var2[var1];
            var1 = undefined;
            return var1;
 60:
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
    var5 = native2;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_onboarding_home/GuildOnboardingHomeSettingsStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['NO_SETTINGS'] = var2;
    return var1;
})();