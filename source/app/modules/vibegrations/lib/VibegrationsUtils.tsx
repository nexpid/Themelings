// app/modules/vibegrations/lib/VibegrationsUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var7;
    var4 = function vibegrationsAppIdFromTopic(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var1 = null;
            if(!(var1 != var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.startsWith;
            var3 = _closure1_slot13;
            var3 = var4.bind(var5)(var3);
            if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var4 = var5.slice;
            var3 = 28;
            var3 = var4.bind(var5)(var3);
            var4 = _closure1_slot14;
            var2 = var4.test;
            var4 = var2.bind(var4)(var3);
            var2 = null;
            if(!var4) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var2 = var3;
case 5:
            return var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot15 = var4;
    var1 = function getGuildInstallPermissions(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var6 = var1.integrationTypesConfig;
            var3 = null;
            var4 = var3 == var6;
            var5 = undefined;
            var2 = undefined;
            if(var4) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var4 = 9;
            var4 = var8[var4];
            var4 = var7.bind(var5)(var4);
            var4 = var4.ApplicationIntegrationType;
            var4 = var4.GUILD_INSTALL;
            var4 = var6[var4];
            var6 = var3 == var4;
            var2 = undefined;
            if(var6) { _fun0002_ip = 7; continue _fun0002 }
case 9:
            var2 = var4.oauth2InstallParams;
case 7:
            if(!(var3 == var2)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var2 = var1.installParams;
case 10:
            var4 = var3 == var2;
            var1 = undefined;
            if(var4) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var1 = var2.permissions;
case 12:
            if(!(var3 == var1)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var3 = _closure1_slot2;
            var4 = _closure1_slot3;
            var1 = 10;
            var1 = var4[var1];
            var1 = var3.bind(var5)(var1);
            var1 = var1.EMPTY_FLAG;
            _fun0002_ip = 16; continue _fun0002;
case 14:
            var4 = _closure1_slot2;
            var6 = _closure1_slot3;
            var3 = 10;
            var3 = var6[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.deserialize;
            var2 = var2.permissions;
            var1 = var3.bind(var4)(var2);
case 16:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function _isBotInstalledInGuild() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                    var2 = arg2;
                    var _closure4_slot0 = var2;
                    var5 = undefined;
                    var4 = undefined;
                    var8 = undefined;
                    var6 = arg1;
case 19: // try_start_0
                    var3 = _closure1_slot0;
                    var10 = _closure1_slot3;
                    var2 = 11;
                    var2 = var10[var2];
                    var11 = var3.bind(var5)(var2);
                    var10 = var11.fetchProfile;
                    var3 = var6;
                    var2 = {};
                    var12 = true;
                    var2['withMutualGuilds'] = var12;
                    var2 = var10.bind(var11)(var3, var2);
                    SaveGenerator(address=79);
case 20:
                    return var2;
case 21:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0003_ip = 22; continue _fun0003 }
case 23: // try_end0
                    var10 = _closure1_slot6;
                    var9 = var10.getMutualGuilds;
                    var9 = var9.bind(var10)(var6);
                    var8 = var9;
                    var6 = null;
                    var9 = var6 == var9;
                    var5 = undefined;
                    if(var9) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                    var9 = var8;
                    var8 = var9.some;
                    var7 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.guild;
                        var2 = var1.id;
                        var1 = _closure4_slot0;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var5 = var8.bind(var9)(var7);
case 24:
                    var4 = var5;
                    var5 = var6 != var5;
                    var3 = var5;
                    if(!var5) { _fun0003_ip = 26; continue _fun0003 }
case 27:
                    var3 = var4;
case 26:
                    return var3;
case 22:
                    return var2;
case 28: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var2 = false;
                    return var2;
case 17:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot17 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot17 = var1;
    var1 = function _publishPreviewAndReauthorizeIfPermissionsChanged() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    var7 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 29; continue _fun0004 }
case 30:
                    var4 = undefined;
                    var2 = undefined;
                    var6 = _closure1_slot9;
                    var3 = var6.getProject;
                    var6 = var3.bind(var6)(var7);
                    var3 = null;
                    var9 = var3 == var6;
                    var8 = undefined;
                    if(var9) { _fun0004_ip = 31; continue _fun0004 }
case 32:
                    var8 = var6.preview_guild_id;
case 31:
                    var10 = var3 == var6;
                    var9 = undefined;
                    if(var10) { _fun0004_ip = 33; continue _fun0004 }
case 5:
                    var9 = var6.preview_application_id;
case 33:
                    var10 = var3 != var9;
                    var6 = null;
                    if(!var10) { _fun0004_ip = 34; continue _fun0004 }
case 11:
                    var6 = var9;
case 34:
                    var2 = var6;
                    var6 = var3 != var6;
                    var11 = null;
                    if(!var6) { _fun0004_ip = 35; continue _fun0004 }
case 36:
                    var10 = _closure1_slot5;
                    var9 = var10.getApplication;
                    var6 = var2;
                    var6 = var9.bind(var10)(var6);
                    if(!(var3 != var6)) { _fun0004_ip = 37; continue _fun0004 }
case 38:
                    var10 = _closure1_slot5;
                    var9 = var10.isHydrated;
                    var6 = var2;
                    var6 = var9.bind(var10)(var6);
                    if(var6) { _fun0004_ip = 39; continue _fun0004 }
case 37: // try_start_0
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot3;
                    var6 = 12;
                    var6 = var10[var6];
                    var10 = var9.bind(var4)(var6);
                    var9 = var10.fetchApplication;
                    var6 = var2;
                    var6 = var9.bind(var10)(var6);
                    SaveGenerator(address=179);
case 40:
                    return var6;
case 41:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=8);
                    if(var9) { _fun0004_ip = 42; continue _fun0004 }
case 43: // try_end0
                    _fun0004_ip = 39; continue _fun0004;
case 42:
                    return var6;
case 44: // catch_target0
                    CatchBlockStart(arg_register=5);
case 39:
                    var9 = _closure1_slot5;
                    var6 = var9.getApplication;
                    var6 = var6.bind(var9)(var2);
                    var2 = var3 != var6;
                    var11 = null;
                    if(!var2) { _fun0004_ip = 35; continue _fun0004 }
case 45:
                    var2 = _closure1_slot16;
                    var11 = var2.bind(var4)(var6);
case 35:
                    var6 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var2 = 13;
                    var2 = var9[var2];
                    var6 = var6.bind(var4)(var2);
                    var2 = var6.publishPreviewProject;
                    var2 = var2.bind(var6)(var7);
                    SaveGenerator(address=260);
case 46:
                    return var2;
case 47:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(var6) { _fun0004_ip = 48; continue _fun0004 }
case 49:
                    var6 = var2.ok;
                    if(!var6) { _fun0004_ip = 50; continue _fun0004 }
case 51:
                    var6 = var2.body;
                    var10 = var6.preview_application_id;
                    if(!(var3 != var8)) { _fun0004_ip = 50; continue _fun0004 }
case 52:
                    if(!(var3 != var10)) { _fun0004_ip = 50; continue _fun0004 }
case 53:
                    var7 = _closure1_slot5;
                    var6 = var7.getApplication;
                    var9 = var6.bind(var7)(var10);
                    if(!(var3 != var9)) { _fun0004_ip = 50; continue _fun0004 }
case 54:
                    var7 = _closure1_slot2;
                    var6 = _closure1_slot3;
                    var13 = 10;
                    var6 = var6[var13];
                    var7 = var7.bind(var4)(var6);
                    var6 = var7.equals;
                    if(!(var3 == var11)) { _fun0004_ip = 55; continue _fun0004 }
case 56:
                    var12 = _closure1_slot2;
                    var3 = _closure1_slot3;
                    var3 = var3[var13];
                    var3 = var12.bind(var4)(var3);
                    var11 = var3.EMPTY_FLAG;
case 55:
                    var3 = _closure1_slot16;
                    var3 = var3.bind(var4)(var9);
                    var7 = var6.bind(var7)(var11, var3);
                    var3 = function isBotInstalledInGuild() {
                        var1 = undefined;
                        var4 = _closure1_slot17;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var3 = var3.bind(var4)(var10, var8);
                    SaveGenerator(address=413);
case 57:
                    return var3;
case 58:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0004_ip = 59; continue _fun0004 }
case 60:
                    var6 = var3;
                    if(!var6) { _fun0004_ip = 61; continue _fun0004 }
case 62:
                    var6 = var7;
case 61:
                    if(var6) { _fun0004_ip = 50; continue _fun0004 }
case 63:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var5 = 14;
                    var5 = var7[var5];
                    var7 = var6.bind(var4)(var5);
                    var6 = var7.openVibegrationsAppInstallModal;
                    var5 = {};
                    var5['applicationId'] = var10;
                    var5['application'] = var9;
                    var5['guildId'] = var8;
                    var5 = var6.bind(var7)(var5);
                    SaveGenerator(address=480);
case 64:
                    return var5;
case 65:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(!var6) { _fun0004_ip = 50; continue _fun0004 }
case 66:
                    return var5;
case 50:
                    return var4;
case 59:
                    return var3;
case 48:
                    return var2;
case 29:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot18 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot18 = var1;
    var1 = function isVibegrationsChannelCandidateInternal(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = arg1;
            var3 = arg2;
            var2 = null;
            var1 = var2 != var4;
            if(!var1) { _fun0005_ip = 67; continue _fun0005 }
case 68:
            var6 = var4.type;
            var5 = _closure1_slot11;
            var5 = var5.GUILD_TEXT;
            var1 = var6 === var5;
case 67:
            if(!var1) { _fun0005_ip = 69; continue _fun0005 }
case 70:
            var6 = _closure1_slot15;
            var5 = var4.topic;
            var4 = undefined;
            var4 = var6.bind(var4)(var5);
            var1 = var2 != var4;
case 69:
            if(!var1) { _fun0005_ip = 71; continue _fun0005 }
case 2:
            var2 = var2 != var3;
            if(!var2) { _fun0005_ip = 72; continue _fun0005 }
case 73:
            var5 = var3.features;
            var4 = var5.has;
            var3 = _closure1_slot12;
            var3 = var3.INTERNAL_EMPLOYEE_ONLY;
            var2 = var4.bind(var5)(var3);
case 72:
            var1 = !var2;
case 71:
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot9 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.Permissions;
    var _closure1_slot10 = var8;
    var8 = var5.ChannelTypes;
    var _closure1_slot11 = var8;
    var5 = var5.GuildFeatures;
    var _closure1_slot12 = var5;
    var5 = 'vibegrations_application_id=';
    var _closure1_slot13 = var5;
    var5 = /^\d{17,20}$/;
    var _closure1_slot14 = var5;
    var5 = 15;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/vibegrations/lib/VibegrationsUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['vibegrationsAppIdFromTopic'] = var4;
    var4 = function vibegrationsTopicForApp(arg1) {
        var4 = _closure1_slot13;
        var1 = global;
        var1 = var1.HermesInternal;
        var3 = var1.concat;
        var2 = '';
        var1 = arg1;
        var1 = var3.bind(var2)(var4, var1);
        return var1;
    };
    var3['vibegrationsTopicForApp'] = var4;
    var4 = function canManageVibegrations(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = arg1;
            var5 = _closure1_slot0;
            var4 = _closure1_slot3;
            var1 = 7;
            var4 = var4[var1];
            var1 = undefined;
            var5 = var5.bind(var1)(var4);
            var4 = var5.isVibegrationsGuildEnabled;
            var1 = {};
            var6 = var3.id;
            var1['guildId'] = var6;
            var6 = arg2;
            var1['location'] = var6;
            var1 = var4.bind(var5)(var1);
            if(!var1) { _fun0006_ip = 10; continue _fun0006 }
case 74:
            var6 = _closure1_slot8;
            var5 = var6.can;
            var4 = _closure1_slot10;
            var4 = var4.MANAGE_CHANNELS;
            var1 = var5.bind(var6)(var4, var3);
case 10:
            if(!var1) { _fun0006_ip = 75; continue _fun0006 }
case 76:
            var6 = _closure1_slot8;
            var5 = var6.can;
            var4 = _closure1_slot10;
            var4 = var4.MANAGE_GUILD;
            var1 = var5.bind(var6)(var4, var3);
case 75:
            if(!var1) { _fun0006_ip = 77; continue _fun0006 }
case 78:
            var4 = var3.features;
            var3 = var4.has;
            var2 = _closure1_slot12;
            var2 = var2.INTERNAL_EMPLOYEE_ONLY;
            var2 = var3.bind(var4)(var2);
            var1 = !var2;
case 77:
            return var1;
        }
    };
    var3['canManageVibegrations'] = var4;
    var4 = function useCanManageVibegrations(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var4 = arg1;
            var _closure2_slot0 = var4;
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var3 = 8;
            var3 = var7[var3];
            var5 = undefined;
            var10 = var6.bind(var5)(var3);
            var9 = var10.useStateFromStores;
            var3 = _closure1_slot8;
            var8 = new Array(1);
            var8[0] = var3;
            var3 = new Array(1);
            var3[0] = var4;
            var1 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var6 = _closure1_slot8;
                    var5 = var6.can;
                    var1 = _closure1_slot10;
                    var4 = var1.MANAGE_CHANNELS;
                    var1 = _closure2_slot0;
                    var1 = var5.bind(var6)(var4, var1);
                    if(!var1) { _fun0008_ip = 79; continue _fun0008 }
case 80:
                    var5 = _closure1_slot8;
                    var4 = var5.can;
                    var3 = _closure1_slot10;
                    var3 = var3.MANAGE_GUILD;
                    var2 = _closure2_slot0;
                    var1 = var4.bind(var5)(var3, var2);
case 79:
                    return var1;
                }
            };
            var3 = var9.bind(var10)(var8, var1, var3);
            var1 = 7;
            var1 = var7[var1];
            var6 = var6.bind(var5)(var1);
            var5 = var6.useIsVibegrationsGuildEnabled;
            var1 = {};
            var7 = var4.id;
            var1['guildId'] = var7;
            var7 = arg2;
            var1['location'] = var7;
            var1 = var5.bind(var6)(var1);
            var5 = var4.features;
            var4 = var5.has;
            var2 = _closure1_slot12;
            var2 = var2.INTERNAL_EMPLOYEE_ONLY;
            var2 = var4.bind(var5)(var2);
            if(!var1) { _fun0007_ip = 81; continue _fun0007 }
case 37:
            var1 = var3;
case 81:
            if(!var1) { _fun0007_ip = 82; continue _fun0007 }
case 77:
            var1 = !var2;
case 82:
            return var1;
        }
    };
    var3['useCanManageVibegrations'] = var4;
    var4 = function publishPreviewAndReauthorizeIfPermissionsChanged() {
        var1 = undefined;
        var4 = _closure1_slot18;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['publishPreviewAndReauthorizeIfPermissionsChanged'] = var4;
    var4 = function isVibegrationsChannelCandidate(arg1, arg2) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var6 = arg1;
            var3 = _closure1_slot19;
            var8 = _closure1_slot7;
            var4 = var8.getGuild;
            var7 = null;
            var9 = var7 == var6;
            var5 = undefined;
            var1 = undefined;
            if(var9) { _fun0009_ip = 83; continue _fun0009 }
case 84:
            var1 = var6.guild_id;
case 83:
            var1 = var4.bind(var8)(var1);
            var1 = var3.bind(var5)(var6, var1);
            if(!var1) { _fun0009_ip = 85; continue _fun0009 }
case 86:
            var3 = _closure1_slot0;
            var4 = _closure1_slot3;
            var2 = 7;
            var2 = var4[var2];
            var4 = var3.bind(var5)(var2);
            var3 = var4.isVibegrationsGuildEnabled;
            var2 = {};
            var7 = var7 == var6;
            var5 = undefined;
            if(var7) { _fun0009_ip = 87; continue _fun0009 }
case 76:
            var5 = var6.guild_id;
case 87:
            var2['guildId'] = var5;
            var5 = arg2;
            var2['location'] = var5;
            var1 = var3.bind(var4)(var2);
case 85:
            return var1;
        }
    };
    var3['isVibegrationsChannelCandidate'] = var4;
    var2 = function useIsVibegrationsChannelCandidate(arg1, arg2) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var5 = arg1;
            var _closure2_slot0 = var5;
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var3 = 8;
            var3 = var7[var3];
            var4 = undefined;
            var9 = var6.bind(var4)(var3);
            var8 = var9.useStateFromStores;
            var10 = _closure1_slot7;
            var3 = new Array(1);
            var3[0] = var10;
            var2 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var3 = _closure1_slot7;
                    var2 = var3.getGuild;
                    var5 = _closure2_slot0;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0011_ip = 70; continue _fun0011 }
case 88:
                    var4 = _closure2_slot0;
                    var1 = var4.guild_id;
case 70:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var3 = var8.bind(var9)(var3, var2);
            var2 = 7;
            var2 = var7[var2];
            var7 = var6.bind(var4)(var2);
            var6 = var7.useIsVibegrationsGuildEnabled;
            var2 = {};
            var8 = null;
            var9 = var8 == var5;
            var8 = undefined;
            if(var9) { _fun0010_ip = 36; continue _fun0010 }
case 89:
            var8 = var5.guild_id;
case 36:
            var2['guildId'] = var8;
            var8 = arg2;
            var2['location'] = var8;
            var2 = var6.bind(var7)(var2);
            var1 = _closure1_slot19;
            var1 = var1.bind(var4)(var5, var3);
            if(!var1) { _fun0010_ip = 90; continue _fun0010 }
case 91:
            var1 = var2;
case 90:
            return var1;
        }
    };
    var3['useIsVibegrationsChannelCandidate'] = var2;
    return var1;
})();