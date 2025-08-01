// app/modules/impersonate/ImpersonateStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var6;
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
            _closure1_slot14 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot14 = var1;
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
    var _closure1_slot4 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.GuildSettingsSections;
    var _closure1_slot11 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.ChannelNotificationSettingsFlags;
    var _closure1_slot12 = var2;
    var2 = {};
    var _closure1_slot13 = var2;
    var2 = 13;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function ImpersonateStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot4;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot7;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot6;
                var1 = _closure1_slot14;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 69; continue _fun0002 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0002_ip = 105; continue _fun0002;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot7;
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
        var5 = _closure1_slot8;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot5;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var4 = this;
            var3 = var4.waitFor;
            var2 = _closure1_slot10;
            var1 = _closure1_slot9;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(16);
        var1[0] = var5;
        var5 = {};
        var7 = 'hasViewingRoles';
        var5['key'] = var7;
        var7 = function value() {
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var2 = 12;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var2 = var3.isPlainObjectEmpty;
            var1 = _closure1_slot13;
            var1 = var2.bind(var3)(var1);
            var1 = !var1;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'isViewingRoles';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var4 = arg1;
                var3 = null;
                var1 = var3 != var4;
                if(!var1) { _fun0003_ip = 27; continue _fun0003 }
 12:
                var2 = _closure1_slot13;
                var2 = var2[var4];
                var1 = var3 != var2;
 27:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getViewingRoles';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var2 = _closure1_slot13;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0004_ip = 31; continue _fun0004 }
 25:
                var1 = var2.roles;
 31:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getViewingRolesTimestamp';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var4 = arg1;
                var2 = null;
                var3 = var2 != var4;
                var1 = null;
                if(!var3) { _fun0005_ip = 43; continue _fun0005 }
 14:
                var3 = _closure1_slot13;
                var3 = var3[var4];
                var4 = var2 == var3;
                var2 = undefined;
                if(var4) { _fun0005_ip = 40; continue _fun0005 }
 34:
                var2 = var3.timestamp;
 40:
                var1 = var2;
 43:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getData';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot13;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'isFullServerPreview';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var3 = _closure1_slot13;
                var2 = arg1;
                var3 = var3[var2];
                var2 = null;
                var5 = var2 == var3;
                var4 = undefined;
                var2 = undefined;
                if(var5) { _fun0006_ip = 32; continue _fun0006 }
 27:
                var2 = var3.type;
 32:
                var3 = _closure1_slot0;
                var5 = _closure1_slot3;
                var1 = 10;
                var1 = var5[var1];
                var1 = var3.bind(var4)(var1);
                var1 = var1.ImpersonateType;
                var1 = var1.NEW_MEMBER;
                var1 = var2 === var1;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'isOptInEnabled';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var2 = _closure1_slot13;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0007_ip = 66; continue _fun0007 }
 23:
                var4 = var2.type;
                var6 = _closure1_slot0;
                var5 = _closure1_slot3;
                var3 = 10;
                var5 = var5[var3];
                var3 = undefined;
                var3 = var6.bind(var3)(var5);
                var3 = var3.ImpersonateType;
                var3 = var3.NEW_MEMBER;
                var1 = var4 === var3;
 66:
                if(!var1) { _fun0007_ip = 75; continue _fun0007 }
 69:
                var1 = var2.optInEnabled;
 75:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'isOnboardingEnabled';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var2 = _closure1_slot13;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0008_ip = 66; continue _fun0008 }
 23:
                var4 = var2.type;
                var6 = _closure1_slot0;
                var5 = _closure1_slot3;
                var3 = 10;
                var5 = var5[var3];
                var3 = undefined;
                var3 = var6.bind(var3)(var5);
                var3 = var3.ImpersonateType;
                var3 = var3.NEW_MEMBER;
                var1 = var4 === var3;
 66:
                if(!var1) { _fun0008_ip = 77; continue _fun0008 }
 69:
                var1 = var2.onboardingEnabled;
 77:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'getViewingChannels';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var2 = _closure1_slot13;
                var1 = arg1;
                var2 = var2[var1];
                var5 = null;
                var4 = var5 == var2;
                var1 = null;
                if(var4) { _fun0009_ip = 76; continue _fun0009 }
 25:
                var4 = var2.type;
                var7 = _closure1_slot0;
                var6 = _closure1_slot3;
                var3 = 10;
                var6 = var6[var3];
                var3 = undefined;
                var3 = var7.bind(var3)(var6);
                var3 = var3.ImpersonateType;
                var3 = var3.NEW_MEMBER;
                var1 = null;
                if(!(var4 === var3)) { _fun0009_ip = 76; continue _fun0009 }
 70:
                var1 = var2.optInChannels;
 76:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'getOnboardingResponses';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var2 = _closure1_slot13;
                var1 = arg1;
                var2 = var2[var1];
                var5 = null;
                var4 = var5 == var2;
                var1 = null;
                if(var4) { _fun0010_ip = 76; continue _fun0010 }
 25:
                var4 = var2.type;
                var7 = _closure1_slot0;
                var6 = _closure1_slot3;
                var3 = 10;
                var6 = var6[var3];
                var3 = undefined;
                var3 = var7.bind(var3)(var6);
                var3 = var3.ImpersonateType;
                var3 = var3.NEW_MEMBER;
                var1 = null;
                if(!(var4 === var3)) { _fun0010_ip = 76; continue _fun0010 }
 70:
                var1 = var2.onboardingResponses;
 76:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'getMemberOptions';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var2 = _closure1_slot13;
                var1 = arg1;
                var2 = var2[var1];
                var5 = null;
                var4 = var5 == var2;
                var1 = null;
                if(var4) { _fun0011_ip = 76; continue _fun0011 }
 25:
                var4 = var2.type;
                var7 = _closure1_slot0;
                var6 = _closure1_slot3;
                var3 = 10;
                var6 = var6[var3];
                var3 = undefined;
                var3 = var7.bind(var3)(var6);
                var3 = var3.ImpersonateType;
                var3 = var3.NEW_MEMBER;
                var1 = null;
                if(!(var4 === var3)) { _fun0011_ip = 76; continue _fun0011 }
 70:
                var1 = var2.memberOptions;
 76:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'isChannelOptedIn';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                var3 = this;
                var2 = var3.getViewingChannels;
                var1 = arg1;
                var4 = var2.bind(var3)(var1);
                var1 = null;
                var1 = var1 != var4;
                if(!var1) { _fun0012_ip = 39; continue _fun0012 }
 26:
                var3 = var4.has;
                var2 = arg2;
                var1 = var3.bind(var4)(var2);
 39:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'isViewingServerShop';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                var5 = arg1;
                var3 = null;
                var1 = var3 != var5;
                if(!var1) { _fun0013_ip = 75; continue _fun0013 }
 12:
                var4 = _closure1_slot13;
                var4 = var4[var5];
                var6 = var3 == var4;
                var5 = undefined;
                var3 = undefined;
                if(var6) { _fun0013_ip = 39; continue _fun0013 }
 34:
                var3 = var4.type;
 39:
                var4 = _closure1_slot0;
                var6 = _closure1_slot3;
                var2 = 10;
                var2 = var6[var2];
                var2 = var4.bind(var5)(var2);
                var2 = var2.ImpersonateType;
                var2 = var2.SERVER_SHOP;
                var1 = var3 === var2;
 75:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'getImpersonateType';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                var3 = arg1;
                var1 = null;
                if(!(var1 != var3)) { _fun0014_ip = 36; continue _fun0014 }
 9:
                var2 = _closure1_slot13;
                var3 = var2[var3];
                var4 = var1 == var3;
                var2 = null;
                if(var4) { _fun0014_ip = 34; continue _fun0014 }
 29:
                var2 = var3.type;
 34:
                return var2;
 36:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'getBackNavigationSection';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                var4 = arg1;
                var3 = null;
                if(!(var3 != var4)) { _fun0015_ip = 185; continue _fun0015 }
 12:
                var2 = _closure1_slot13;
                var2 = var2[var4];
                if(!(var3 != var2)) { _fun0015_ip = 173; continue _fun0015 }
 30:
                var4 = var2.type;
                var5 = _closure1_slot0;
                var3 = _closure1_slot3;
                var7 = 10;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var5.bind(var6)(var3);
                var3 = var3.ImpersonateType;
                var3 = var3.ROLES;
                if(!(var3 !== var4)) { _fun0015_ip = 163; continue _fun0015 }
 73:
                var5 = _closure1_slot0;
                var3 = _closure1_slot3;
                var3 = var3[var7];
                var3 = var5.bind(var6)(var3);
                var3 = var3.ImpersonateType;
                var3 = var3.SERVER_SHOP;
                if(!(var3 !== var4)) { _fun0015_ip = 163; continue _fun0015 }
 106:
                var5 = _closure1_slot0;
                var3 = _closure1_slot3;
                var3 = var3[var7];
                var3 = var5.bind(var6)(var3);
                var3 = var3.ImpersonateType;
                var3 = var3.NEW_MEMBER;
                if(!(var3 !== var4)) { _fun0015_ip = 151; continue _fun0015 }
 139:
                var3 = _closure1_slot11;
                var3 = var3.ROLES;
                return var3;
 151:
                var3 = _closure1_slot11;
                var3 = var3.ONBOARDING;
                return var3;
 163:
                var2 = var2.returnToSection;
                return var2;
 173:
                var1 = _closure1_slot11;
                var1 = var1.ROLES;
                return var1;
 185:
                var1 = _closure1_slot11;
                var1 = var1.ROLES;
                return var1;
            }
        };
        var5['value'] = var6;
        var1[15] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'ImpersonateStore';
    var8['displayName'] = var2;
    var2 = 14;
    var2 = var6[var2];
    var12 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleImpersonateUpdate(arg1) {
        var1 = arg1;
        var4 = var1.guildId;
        var5 = var1.data;
        var6 = var5.roles;
        var7 = _closure1_slot1;
        var3 = _closure1_slot3;
        var1 = 9;
        var3 = var3[var1];
        var1 = undefined;
        var7 = var7.bind(var1)(var3);
        var3 = var7.castGuildIdAsEveryoneGuildRoleId;
        var3 = var3.bind(var7)(var4);
        var3 = delete var6[var3];
        var3 = _closure1_slot13;
        var2 = {};
        var9 = var2;
        var8 = var5;
        var5 = copyDataProperties(var9, var8);
        var5 = global;
        var6 = var5.Date;
        var5 = var6.now;
        var6 = var5.bind(var6)();
        var5 = 'timestamp';
        var2[var5] = var6;
        var3[var4] = var2;
        return var1;
    };
    var2['IMPERSONATE_UPDATE'] = var9;
    var9 = function handleImpersonateStop(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
            var1 = arg1;
            var2 = var1.guildId;
            var3 = _closure1_slot13;
            var4 = var3[var2];
            var3 = null;
            if(!(var3 != var4)) { _fun0016_ip = 37; continue _fun0016 }
 25:
            var1 = _closure1_slot13;
            var1 = delete var1[var2];
            var1 = undefined;
            return var1;
 37:
            var1 = false;
            return var1;
        }
    };
    var2['IMPERSONATE_STOP'] = var9;
    var9 = function handleGuildRoleDelete(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
            var1 = arg1;
            var3 = var1.guildId;
            var2 = var1.roleId;
            var4 = _closure1_slot13;
            var5 = var4[var3];
            var4 = null;
            if(!(var4 != var5)) { _fun0017_ip = 53; continue _fun0017 }
 31:
            var1 = _closure1_slot13;
            var1 = var1[var3];
            var1 = var1.roles;
            var1 = delete var1[var2];
            var1 = undefined;
            return var1;
 53:
            var1 = false;
            return var1;
        }
    };
    var2['GUILD_ROLE_DELETE'] = var9;
    var9 = function handleUserGuildSettingsChannelUpdateBulk(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
            var1 = arg1;
            var2 = var1.guildId;
            var6 = var1.overrides;
            var _closure2_slot0 = var6;
            var7 = undefined;
            var _closure2_slot1 = var7;
            var5 = null;
            if(!(var5 != var2)) { _fun0018_ip = 210; continue _fun0018 }
 35:
            var1 = _closure1_slot13;
            var1 = var1[var2];
            if(!(var5 != var1)) { _fun0018_ip = 210; continue _fun0018 }
 53:
            var1 = _closure1_slot13;
            var2 = var1[var2];
            if(!(var5 != var2)) { _fun0018_ip = 206; continue _fun0018 }
 68:
            var8 = var2.type;
            var9 = _closure1_slot0;
            var10 = _closure1_slot3;
            var1 = 10;
            var1 = var10[var1];
            var1 = var9.bind(var7)(var1);
            var1 = var1.ImpersonateType;
            var1 = var1.NEW_MEMBER;
            if(!(var8 === var1)) { _fun0018_ip = 206; continue _fun0018 }
 109:
            var1 = var2.optInChannels;
            if(!(var5 == var1)) { _fun0018_ip = 147; continue _fun0018 }
 119:
            var5 = global;
            var5 = var5.Set;
            var8 = var5.prototype;
            var8 = Object.create(var8, {constructor: {value: var5}});
            var12 = var8;
            var5 = new var12[var5](var11);
            var1 = var5 instanceof Object ? var5 : var8;
 147:
            _closure2_slot1 = var1;
            var5 = _closure1_slot1;
            var8 = _closure1_slot3;
            var4 = 9;
            var4 = var8[var4];
            var5 = var5.bind(var7)(var4);
            var4 = var5.keys;
            var5 = var4.bind(var5)(var6);
            var4 = var5.forEach;
            var3 = function(arg1) {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                    var4 = arg1;
                    var1 = _closure2_slot0;
                    var5 = var1[var4];
                    var7 = _closure1_slot2;
                    var6 = _closure1_slot3;
                    var1 = 11;
                    var6 = var6[var1];
                    var1 = undefined;
                    var7 = var7.bind(var1)(var6);
                    var6 = var7.hasFlag;
                    var8 = var5.flags;
                    var5 = null;
                    var9 = var5 != var8;
                    var5 = 0;
                    if(!var9) { _fun0019_ip = 64; continue _fun0019 }
 61:
                    var5 = var8;
 64:
                    var2 = _closure1_slot12;
                    var2 = var2.OPT_IN_ENABLED;
                    var2 = var6.bind(var7)(var5, var2);
                    var3 = _closure2_slot1;
                    if(var2) { _fun0019_ip = 99; continue _fun0019 }
 87:
                    var2 = var3.delete;
                    var2 = var2.bind(var3)(var4);
                    _fun0019_ip = 109; continue _fun0019;
 99:
                    var2 = var3.add;
                    var2 = var2.bind(var3)(var4);
 109:
                    return var1;
                }
            };
            var3 = var4.bind(var5)(var3);
            var2['optInChannels'] = var1;
            var1 = true;
            return var1;
 206:
            var1 = false;
            return var1;
 210:
            var1 = false;
            return var1;
        }
    };
    var2['USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK'] = var9;
    var9 = function handleOptionSelect(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
            var1 = arg1;
            var8 = var1.guildId;
            var4 = var1.optionId;
            var3 = var1.selected;
            var7 = var1.removedOptionIds;
            var10 = undefined;
            var _closure2_slot0 = var10;
            var6 = null;
            if(!(var6 != var8)) { _fun0020_ip = 234; continue _fun0020 }
 43:
            var2 = _closure1_slot13;
            var2 = var2[var8];
            if(!(var6 != var2)) { _fun0020_ip = 234; continue _fun0020 }
 61:
            var2 = _closure1_slot13;
            var2 = var2[var8];
            if(!(var6 != var2)) { _fun0020_ip = 230; continue _fun0020 }
 76:
            var8 = var2.type;
            var9 = _closure1_slot0;
            var11 = _closure1_slot3;
            var1 = 10;
            var1 = var11[var1];
            var1 = var9.bind(var10)(var1);
            var1 = var1.ImpersonateType;
            var1 = var1.NEW_MEMBER;
            if(!(var8 === var1)) { _fun0020_ip = 230; continue _fun0020 }
 117:
            var1 = var2.onboardingResponses;
            if(!(var6 == var1)) { _fun0020_ip = 155; continue _fun0020 }
 127:
            var8 = global;
            var8 = var8.Set;
            var9 = var8.prototype;
            var9 = Object.create(var9, {constructor: {value: var8}});
            var13 = var9;
            var8 = new var13[var8](var12);
            var1 = var8 instanceof Object ? var8 : var9;
 155:
            _closure2_slot0 = var1;
            var6 = var6 != var7;
            if(!var6) { _fun0020_ip = 177; continue _fun0020 }
 166:
            var9 = var7.length;
            var8 = 0;
            var6 = var9 > var8;
 177:
            if(!var6) { _fun0020_ip = 195; continue _fun0020 }
 180:
            var6 = var7.forEach;
            var5 = function(arg1) {
                var3 = _closure2_slot0;
                var2 = var3.delete;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5 = var6.bind(var7)(var5);
 195:
            if(var3) { _fun0020_ip = 210; continue _fun0020 }
 198:
            var3 = var1.delete;
            var3 = var3.bind(var1)(var4);
            _fun0020_ip = 220; continue _fun0020;
 210:
            var3 = var1.add;
            var3 = var3.bind(var1)(var4);
 220:
            var2['onboardingResponses'] = var1;
            var1 = true;
            return var1;
 230:
            var1 = false;
            return var1;
 234:
            var1 = false;
            return var1;
        }
    };
    var2['GUILD_ONBOARDING_SELECT_OPTION'] = var9;
    var4 = function handleGuildMemberUpdateLocal(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
            var1 = arg1;
            var3 = var1.guildId;
            var _closure2_slot0 = var3;
            var9 = var1.roles;
            var4 = var1.flags;
            var5 = null;
            if(!(var5 != var3)) { _fun0021_ip = 149; continue _fun0021 }
 31:
            var1 = _closure1_slot13;
            var3 = var1[var3];
            var1 = var5 != var3;
            if(!var1) { _fun0021_ip = 147; continue _fun0021 }
 49:
            if(!(var5 != var9)) { _fun0021_ip = 78; continue _fun0021 }
 53:
            var8 = var9.reduce;
            var7 = function(arg1, arg2) {
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
                    var1 = arg1;
                    var3 = arg2;
                    var5 = _closure1_slot9;
                    var4 = var5.getRole;
                    var2 = _closure2_slot0;
                    var2 = var4.bind(var5)(var2, var3);
                    var4 = null;
                    if(!(var4 != var2)) { _fun0022_ip = 42; continue _fun0022 }
 38:
                    var1[var3] = var2;
 42:
                    return var1;
                }
            };
            var6 = {};
            var6 = var8.bind(var9)(var7, var6);
            var3['roles'] = var6;
 78:
            var5 = var5 != var4;
            if(!var5) { _fun0021_ip = 128; continue _fun0021 }
 85:
            var6 = var3.type;
            var8 = _closure1_slot0;
            var7 = _closure1_slot3;
            var2 = 10;
            var7 = var7[var2];
            var2 = undefined;
            var2 = var8.bind(var2)(var7);
            var2 = var2.ImpersonateType;
            var2 = var2.NEW_MEMBER;
            var5 = var6 === var2;
 128:
            var1 = true;
            if(!var5) { _fun0021_ip = 147; continue _fun0021 }
 133:
            var3 = var3.memberOptions;
            var3['flags'] = var4;
            var1 = true;
 147:
            return var1;
 149:
            var1 = false;
            return var1;
        }
    };
    var2['GUILD_MEMBER_UPDATE_LOCAL'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var13 = var4;
    var11 = var2;
    var2 = new var13[var8](var12, var11, var10);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/impersonate/ImpersonateStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();