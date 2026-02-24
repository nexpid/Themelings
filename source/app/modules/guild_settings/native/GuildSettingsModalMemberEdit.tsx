// app/modules/guild_settings/native/GuildSettingsModalMemberEdit.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var9 = metroImportDefault;
    var8 = metroImportAll;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
    var _closure1_slot3 = var7;
    var1 = function _callSuper(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var6 = arg3;
            var2 = _closure1_slot7;
            var3 = undefined;
            var1 = arg2;
            var9 = var2.bind(var3)(var1);
            var2 = _closure1_slot6;
            var1 = _closure1_slot31;
            var1 = var1.bind(var3)();
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var9.apply;
            var1 = var1.bind(var9)(var4, var6);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var7 = global;
            var8 = var7.Reflect;
            var7 = var8.construct;
            if(var6) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var6 = new Array(0);
case 5:
            var5 = _closure1_slot7;
            var5 = var5.bind(var3)(var4);
            var5 = var5.constructor;
            var1 = var7.bind(var8)(var9, var6, var5);
case 4:
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var _closure1_slot30 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
case 7: // try_start_0
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
case 8: // try_end0
            _fun0002_ip = 9; continue _fun0002;
case 10: // catch_target0
            CatchBlockStart(arg_register=1);
case 9:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot31 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot31 = var1;
    var2 = function GuildSettingsModalMemberEditScene(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var8 = var2.guildId;
            var _closure2_slot0 = var8;
            var9 = var2.userId;
            var _closure2_slot1 = var9;
            var18 = var2.onClose;
            var11 = var2.contentContainerStyle;
            var3 = _closure1_slot0;
            var4 = _closure1_slot3;
            var2 = 41;
            var2 = var4[var2];
            var5 = undefined;
            var6 = var3.bind(var5)(var2);
            var2 = var6.useNavigation;
            var12 = var2.bind(var6)();
            var _closure2_slot2 = var12;
            var2 = 42;
            var6 = var4[var2];
            var14 = var3.bind(var5)(var6);
            var13 = var14.useStateFromStores;
            var6 = _closure1_slot16;
            var10 = new Array(1);
            var10[0] = var6;
            var6 = function() {
                var3 = _closure1_slot16;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var16 = var13.bind(var14)(var10, var6);
            var _closure2_slot3 = var16;
            var6 = var4[var2];
            var14 = var3.bind(var5)(var6);
            var13 = var14.useStateFromStores;
            var6 = _closure1_slot15;
            var10 = new Array(1);
            var10[0] = var6;
            var6 = function() {
                var3 = _closure1_slot15;
                var2 = var3.getSortedRoles;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var15 = var13.bind(var14)(var10, var6);
            var6 = var4[var2];
            var14 = var3.bind(var5)(var6);
            var13 = var14.useStateFromStoresObject;
            var6 = _closure1_slot18;
            var10 = new Array(1);
            var10[0] = var6;
            var6 = function() {
                var2 = _closure1_slot18;
                var1 = var2.getCurrentUser;
                var2 = var1.bind(var2)();
                var4 = _closure1_slot1;
                var5 = _closure1_slot3;
                var1 = 43;
                var1 = var5[var1];
                var6 = undefined;
                var5 = var4.bind(var6)(var1);
                var1 = null;
                var4 = var1 != var2;
                var1 = 'GuildSettingsModalMemberEditScene: current user cannot be undefined';
                var1 = var5.bind(var6)(var4, var1);
                var1 = {};
                var5 = _closure1_slot18;
                var4 = var5.getUser;
                var3 = _closure2_slot1;
                var3 = var4.bind(var5)(var3);
                var1['user'] = var3;
                var1['currentUser'] = var2;
                return var1;
            };
            var6 = var13.bind(var14)(var10, var6);
            var13 = var6.user;
            var _closure2_slot4 = var13;
            var14 = var6.currentUser;
            var19 = _closure1_slot9;
            var17 = var19.useEffect;
            var10 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 26;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.startEditingNickname;
                var1 = var1.bind(var2)();
                var1 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 26;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.stopEditingRoles;
                    var2 = var2.bind(var3)();
                    return var1;
                };
                return var1;
            };
            var6 = new Array(0);
            var6 = var17.bind(var19)(var10, var6);
            var2 = var4[var2];
            var17 = var3.bind(var5)(var2);
            var10 = var17.useStateFromStoresObject;
            var2 = _closure1_slot19;
            var6 = new Array(5);
            var6[0] = var2;
            var2 = _closure1_slot14;
            var6[1] = var2;
            var2 = _closure1_slot17;
            var6[2] = var2;
            var2 = _closure1_slot18;
            var6[3] = var2;
            var2 = _closure1_slot16;
            var6[4] = var2;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = {};
                    var6 = _closure1_slot14;
                    var5 = var6.getMember;
                    var4 = _closure2_slot0;
                    var3 = _closure2_slot1;
                    var3 = var5.bind(var6)(var4, var3);
                    var1['member'] = var3;
                    var3 = _closure1_slot19;
                    var3 = var3.nicknameError;
                    var1['nicknameError'] = var3;
                    var3 = _closure1_slot19;
                    var3 = var3.roles;
                    var1['editRoles'] = var3;
                    var3 = _closure1_slot19;
                    var3 = var3.isEditing;
                    var1['isEditing'] = var3;
                    var3 = _closure1_slot19;
                    var3 = var3.isSubmitting;
                    var1['submitting'] = var3;
                    var3 = _closure2_slot3;
                    var9 = null;
                    var3 = var9 != var3;
                    if(!var3) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                    var4 = _closure2_slot4;
                    var3 = var9 != var4;
case 11:
                    if(!var3) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                    var10 = _closure1_slot17;
                    var8 = var10.canManageUser;
                    var4 = _closure1_slot20;
                    var6 = var4.MANAGE_NICKNAMES;
                    var5 = _closure2_slot4;
                    var4 = _closure2_slot3;
                    var3 = var8.bind(var10)(var6, var5, var4);
case 13:
                    var1['canChangeNick'] = var3;
                    var6 = _closure1_slot17;
                    var5 = var6.can;
                    var3 = _closure1_slot20;
                    var4 = var3.MANAGE_ROLES;
                    var3 = _closure2_slot3;
                    var4 = var5.bind(var6)(var4, var3);
                    var1['canManageRoles'] = var4;
                    var3 = var9 != var3;
                    if(!var3) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                    var4 = _closure2_slot4;
                    var3 = var9 != var4;
case 15:
                    if(!var3) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                    var10 = _closure1_slot17;
                    var8 = var10.canManageUser;
                    var4 = _closure1_slot20;
                    var6 = var4.KICK_MEMBERS;
                    var5 = _closure2_slot4;
                    var4 = _closure2_slot3;
                    var3 = var8.bind(var10)(var6, var5, var4);
case 17:
                    var1['canKick'] = var3;
                    var3 = _closure2_slot3;
                    var3 = var9 != var3;
                    if(!var3) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                    var4 = _closure2_slot4;
                    var3 = var9 != var4;
case 19:
                    if(!var3) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                    var10 = _closure1_slot17;
                    var8 = var10.canManageUser;
                    var4 = _closure1_slot20;
                    var6 = var4.BAN_MEMBERS;
                    var5 = _closure2_slot4;
                    var4 = _closure2_slot3;
                    var3 = var8.bind(var10)(var6, var5, var4);
case 21:
                    var1['canBan'] = var3;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var3 = 44;
                    var4 = var4[var3];
                    var3 = undefined;
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.canToggleCommunicationDisableOnUser;
                    var4 = _closure2_slot3;
                    var8 = var9 == var4;
                    var4 = undefined;
                    if(var8) { _fun0004_ip = 23; continue _fun0004 }
case 24:
                    var8 = _closure2_slot3;
                    var4 = var8.id;
case 23:
                    var8 = _closure2_slot4;
                    var8 = var9 == var8;
                    var3 = undefined;
                    if(var8) { _fun0004_ip = 25; continue _fun0004 }
case 26:
                    var2 = _closure2_slot4;
                    var3 = var2.id;
case 25:
                    var8 = _closure1_slot18;
                    var2 = new Array(3);
                    var2[0] = var8;
                    var8 = _closure1_slot16;
                    var2[1] = var8;
                    var7 = _closure1_slot17;
                    var2[2] = var7;
                    var2 = var5.bind(var6)(var4, var3, var2);
                    var1['canDisableCommunication'] = var2;
                    return var1;
                }
            };
            var10 = var10.bind(var17)(var6, var2);
            var2 = 45;
            var2 = var4[var2];
            var6 = var3.bind(var5)(var2);
            var4 = var6.useSubscribeGuildMembers;
            var3 = {};
            var2 = new Array(1);
            var2[0] = var9;
            var3[var8] = var2;
            var2 = 'GuildSettingsModalMemberEdit';
            var2 = var4.bind(var6)(var3, var2);
            var4 = _closure1_slot9;
            var3 = var4.useCallback;
            var2 = new Array(1);
            var2[0] = var12;
            var1 = function() {
                var3 = _closure2_slot2;
                var2 = var3.pop;
                var1 = 2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var17 = var3.bind(var4)(var1, var2);
            var3 = null;
            var2 = var3 != var14;
            var1 = null;
            if(!var2) { _fun0003_ip = 27; continue _fun0003 }
case 28:
            var2 = var3 != var16;
            var1 = null;
            if(!var2) { _fun0003_ip = 27; continue _fun0003 }
case 29:
            var2 = var3 != var13;
            var1 = null;
            if(!var2) { _fun0003_ip = 27; continue _fun0003 }
case 30:
            var4 = _closure1_slot25;
            var3 = _closure1_slot26;
            var2 = {};
            var9 = _closure1_slot24;
            var8 = _closure1_slot29;
            var6 = {};
            var21 = var6;
            var20 = var10;
            var10 = copyDataProperties(var21, var20);
            var10 = 'onClose';
            var6[var10] = var18;
            var10 = 'handleSuccessfulRemoval';
            var6[var10] = var17;
            var10 = 'guild';
            var6[var10] = var16;
            var10 = 'sortedGuildRoles';
            var6[var10] = var15;
            var10 = 'currentUser';
            var6[var10] = var14;
            var10 = 'user';
            var6[var10] = var13;
            var10 = 'navigation';
            var6[var10] = var12;
            var10 = 'contentContainerStyle';
            var6[var10] = var11;
            var8 = var9.bind(var5)(var8, var6);
            var6 = new Array(2);
            var6[0] = var8;
            var9 = _closure1_slot24;
            var8 = _closure1_slot0;
            var10 = _closure1_slot3;
            var7 = 46;
            var7 = var10[var7];
            var7 = var8.bind(var5)(var7);
            var8 = var7.NavScrim;
            var7 = {};
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 27:
            return var1;
        }
    };
    var _closure1_slot32 = var2;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var9.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var13 = 1;
    var5 = var7[var13];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 5;
    var5 = var7[var5];
    var8 = var8.bind(var1)(var5);
    var _closure1_slot9 = var8;
    var5 = 6;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.View;
    var _closure1_slot10 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var10 = var5.isGuildOwner;
    var _closure1_slot11 = var10;
    var5 = var5.isGuildOwnerWithRequiredMfaLevel;
    var _closure1_slot12 = var5;
    var5 = 8;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.isEveryoneRole;
    var _closure1_slot13 = var5;
    var5 = 9;
    var5 = var7[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot14 = var5;
    var5 = 10;
    var5 = var7[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot15 = var5;
    var5 = 11;
    var5 = var7[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot16 = var5;
    var5 = 12;
    var5 = var7[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot17 = var5;
    var5 = 13;
    var5 = var7[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot18 = var5;
    var5 = 14;
    var5 = var7[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot19 = var5;
    var5 = 15;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.Permissions;
    var _closure1_slot20 = var9;
    var9 = var5.GuildFeatures;
    var _closure1_slot21 = var9;
    var5 = var5.GuildSettingsSections;
    var _closure1_slot22 = var5;
    var12 = 16;
    var5 = var7[var12];
    var5 = var6.bind(var1)(var5);
    var5 = var5.TABLE_ROW_PADDING;
    var _closure1_slot23 = var5;
    var5 = 17;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.jsx;
    var _closure1_slot24 = var9;
    var9 = var5.jsxs;
    var _closure1_slot25 = var9;
    var5 = var5.Fragment;
    var _closure1_slot26 = var5;
    var5 = 18;
    var5 = var7[var5];
    var11 = var6.bind(var1)(var5);
    var10 = var11.createLegacyClassComponentStyles;
    var9 = {};
    var5 = {};
    var5['flex'] = var13;
    var9['form'] = var5;
    var5 = {};
    var5['paddingTop'] = var12;
    var9['formContent'] = var5;
    var5 = {};
    var12 = 63;
    var5['height'] = var12;
    var9['userInfo'] = var5;
    var5 = 40;
    var12 = {'width': 40, 'height': 40};
    var9['avatar'] = var12;
    var12 = {};
    var13 = 'row';
    var12['flexDirection'] = var13;
    var9['rowLabel'] = var12;
    var12 = {'marginTop': 8, 'marginBottom': 8};
    var9['ctaButton'] = var12;
    var12 = {'marginRight': 0, 'marginLeft': 0, 'paddingRight': 0, 'paddingLeft': 16};
    var9['actionButtonLeft'] = var12;
    var12 = {'marginRight': 0, 'marginLeft': 0, 'paddingRight': 16, 'paddingLeft': 0};
    var9['actionButtonRight'] = var12;
    var12 = {};
    var13 = 'auto';
    var12['flexBasis'] = var13;
    var9['actionButtonContainer'] = var12;
    var9 = var10.bind(var11)(var9);
    var _closure1_slot27 = var9;
    var10 = var8.PureComponent;
    var9 = function(arg1) {
        var5 = function RolesList(arg1) {
            var3 = arg1;
            var6 = this;
            var2 = _closure1_slot4;
            var5 = _closure2_slot0;
            var4 = undefined;
            var2 = var2.bind(var4)(var6, var5);
            var2 = _closure1_slot30;
            var1 = new Array(1);
            var1[0] = var3;
            var1 = var2.bind(var4)(var6, var5, var1);
            var2 = {};
            var3 = var3.isEditing;
            var2['isEditingProp'] = var3;
            var1['state'] = var2;
            return var1;
        };
        var _closure2_slot0 = var5;
        var6 = _closure1_slot8;
        var4 = undefined;
        var3 = arg1;
        var3 = var6.bind(var4)(var5, var3);
        var3 = _closure1_slot5;
        var6 = {};
        var2 = 'render';
        var6['key'] = var2;
        var2 = function value() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var1 = this;
                var1 = var1.props;
                var10 = var1.guild;
                var _closure3_slot0 = var10;
                var6 = var1.sortedGuildRoles;
                var3 = var1.roles;
                var _closure3_slot1 = var3;
                var3 = var1.isEditing;
                var9 = var1.currentUserId;
                var _closure3_slot2 = var9;
                var4 = var1.onStartEditing;
                var1 = var1.onToggleRole;
                var _closure3_slot3 = var1;
                if(var3) { _fun0005_ip = 31; continue _fun0005 }
case 9:
                var5 = _closure1_slot1;
                var17 = _closure1_slot3;
                var3 = 20;
                var3 = var17[var3];
                var12 = undefined;
                var3 = var5.bind(var12)(var3);
                var7 = var3.bind(var12)(var6);
                var5 = var7.filter;
                var3 = function(arg1) {
                    var3 = _closure3_slot1;
                    var2 = var3.includes;
                    var1 = arg1;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var7 = var5.bind(var7)(var3);
                var5 = var7.map;
                var3 = function(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var1 = arg1;
                        var5 = _closure1_slot24;
                        var7 = _closure1_slot0;
                        var9 = _closure1_slot3;
                        var2 = 23;
                        var2 = var9[var2];
                        var4 = undefined;
                        var2 = var7.bind(var4)(var2);
                        var3 = var2.TableRow;
                        var2 = {};
                        var8 = _closure1_slot24;
                        var6 = 22;
                        var6 = var9[var6];
                        var6 = var7.bind(var4)(var6);
                        var7 = var6.Text;
                        var6 = {};
                        var9 = 'text-md/semibold';
                        var6['variant'] = var9;
                        var10 = var1.colorString;
                        var9 = null;
                        var10 = var9 != var10;
                        var9 = undefined;
                        if(!var10) { _fun0006_ip = 32; continue _fun0006 }
case 33:
                        var10 = {};
                        var11 = var1.colorString;
                        var10['color'] = var11;
                        var9 = var10;
case 32:
                        var6['style'] = var9;
                        var9 = var1.name;
                        var6['children'] = var9;
                        var6 = var8.bind(var4)(var7, var6);
                        var2['label'] = var6;
                        var1 = var1.id;
                        var1 = var5.bind(var4)(var3, var2, var1);
                        return var1;
                    }
                };
                var5 = var5.bind(var7)(var3);
                var3 = var5.value;
                var3 = var3.bind(var5)();
                var5 = var3.push;
                var11 = _closure1_slot24;
                var16 = _closure1_slot0;
                var7 = 23;
                var7 = var17[var7];
                var7 = var16.bind(var12)(var7);
                var8 = var7.TableRow;
                var7 = {};
                var13 = 24;
                var14 = var17[var13];
                var14 = var16.bind(var12)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var17[var13];
                var13 = var16.bind(var12)(var13);
                var13 = var13.t;
                var13 = var13.+riKdA;
                var13 = var14.bind(var15)(var13);
                var7['label'] = var13;
                var7['onPress'] = var4;
                var4 = 'addition';
                var4 = var11.bind(var12)(var8, var7, var4);
                var4 = var5.bind(var3)(var4);
                var5 = var3;
                _fun0005_ip = 34; continue _fun0005;
case 31:
                var7 = _closure1_slot2;
                var8 = _closure1_slot3;
                var3 = 19;
                var3 = var8[var3];
                var4 = undefined;
                var7 = var7.bind(var4)(var3);
                var3 = var7.getHighestRole;
                var3 = var3.bind(var7)(var10, var9);
                var _closure3_slot4 = var3;
                var7 = _closure1_slot1;
                var3 = 20;
                var3 = var8[var3];
                var3 = var7.bind(var4)(var3);
                var6 = var3.bind(var4)(var6);
                var4 = var6.filter;
                var3 = function(arg1) {
                    var3 = _closure1_slot13;
                    var2 = undefined;
                    var1 = arg1;
                    var1 = var3.bind(var2)(var1);
                    var1 = !var1;
                    return var1;
                };
                var6 = var4.bind(var6)(var3);
                var4 = var6.filter;
                var3 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.managed;
                    var1 = !var1;
                    return var1;
                };
                var6 = var4.bind(var6)(var3);
                var4 = var6.filter;
                var3 = function(arg1) {
                    var3 = _closure1_slot2;
                    var2 = _closure1_slot3;
                    var1 = 19;
                    var2 = var2[var1];
                    var1 = undefined;
                    var6 = var3.bind(var1)(var2);
                    var5 = var6.isRoleHigher;
                    var10 = _closure3_slot0;
                    var9 = _closure3_slot2;
                    var8 = _closure3_slot4;
                    var7 = arg1;
                    var11 = var6;
                    var1 = var11[var5](var10, var9, var8, var7, var6);
                    return var1;
                };
                var4 = var4.bind(var6)(var3);
                var3 = var4.map;
                var2 = function(arg1) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var1 = arg1;
                        var _closure4_slot0 = var1;
                        var4 = _closure3_slot1;
                        var3 = var4.indexOf;
                        var2 = var1.id;
                        var3 = var3.bind(var4)(var2);
                        var2 = -1;
                        var9 = var2 !== var3;
                        var _closure4_slot1 = var9;
                        var5 = _closure1_slot24;
                        var8 = _closure1_slot0;
                        var10 = _closure1_slot3;
                        var2 = 21;
                        var2 = var10[var2];
                        var4 = undefined;
                        var2 = var8.bind(var4)(var2);
                        var3 = var2.TableCheckboxRow;
                        var2 = {};
                        var2['checked'] = var9;
                        var9 = _closure1_slot24;
                        var7 = 22;
                        var7 = var10[var7];
                        var7 = var8.bind(var4)(var7);
                        var8 = var7.Text;
                        var7 = {};
                        var10 = 'text-md/semibold';
                        var7['variant'] = var10;
                        var11 = var1.colorString;
                        var10 = null;
                        var11 = var10 != var11;
                        var10 = undefined;
                        if(!var11) { _fun0007_ip = 35; continue _fun0007 }
case 36:
                        var11 = {};
                        var12 = var1.colorString;
                        var11['color'] = var12;
                        var10 = var11;
case 35:
                        var7['style'] = var10;
                        var10 = var1.name;
                        var7['children'] = var10;
                        var7 = var9.bind(var4)(var8, var7);
                        var2['label'] = var7;
                        var6 = function onPress() {
                            var4 = _closure3_slot3;
                            var2 = _closure4_slot0;
                            var3 = var2.id;
                            var1 = _closure4_slot1;
                            var2 = !var1;
                            var1 = undefined;
                            var1 = var4.bind(var1)(var3, var2);
                            return var1;
                        };
                        var2['onPress'] = var6;
                        var1 = var1.id;
                        var1 = var5.bind(var4)(var3, var2, var1);
                        return var1;
                    }
                };
                var3 = var3.bind(var4)(var2);
                var2 = var3.value;
                var5 = var2.bind(var3)();
case 34:
                var4 = _closure1_slot24;
                var9 = _closure1_slot0;
                var10 = _closure1_slot3;
                var1 = 25;
                var1 = var10[var1];
                var3 = undefined;
                var1 = var9.bind(var3)(var1);
                var2 = var1.TableRowGroup;
                var1 = {};
                var6 = 24;
                var7 = var10[var6];
                var7 = var9.bind(var3)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var6 = var10[var6];
                var6 = var9.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6.LPJmL/;
                var6 = var7.bind(var8)(var6);
                var1['title'] = var6;
                var1['children'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            }
        };
        var6['value'] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var6 = {};
        var7 = 'getDerivedStateFromProps';
        var6['key'] = var7;
        var1 = function value(arg1, arg2) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var1 = arg1;
                var3 = var1.isEditing;
                var1 = arg2;
                var2 = var1.isEditingProp;
                var1 = null;
                if(!(var2 !== var3)) { _fun0008_ip = 37; continue _fun0008 }
case 38:
                var2 = {};
                var2['isEditingProp'] = var3;
                var1 = var2;
case 37:
                return var1;
            }
        };
        var6['value'] = var1;
        var1 = new Array(1);
        var1[0] = var6;
        var1 = var3.bind(var4)(var5, var2, var1);
        return var1;
    };
    var10 = var9.bind(var1)(var10);
    var _closure1_slot28 = var10;
    var9 = {};
    var11 = new Array(0);
    var9['roles'] = var11;
    var10['defaultProps'] = var9;
    var9 = var8.PureComponent;
    var8 = function(arg1) {
        var4 = function GuildSettingsModalMemberEdit(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var6 = this;
                var11 = 0;
                var7 = copyRestArgs(var11);
                var3 = _closure1_slot4;
                var5 = _closure2_slot0;
                var4 = undefined;
                var3 = var3.bind(var4)(var6, var5);
                var3 = _closure1_slot30;
                var1 = new Array(0);
                var11 = var1;
                var10 = var7;
                var9 = 0;
                var7 = arraySpread(var11, var10, var9);
                var1 = var3.bind(var4)(var6, var5, var1);
                var _closure3_slot0 = var1;
                var3 = {};
                var5 = var1.props;
                var5 = var5.member;
                var6 = null;
                var6 = var6 == var5;
                if(var6) { _fun0009_ip = 4; continue _fun0009 }
case 39:
                var4 = var5.nick;
case 4:
                var3['nick'] = var4;
                var1['state'] = var3;
                var3 = function(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.setState;
                    var1 = {};
                    var4 = arg1;
                    var1['nick'] = var4;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var1['handleChangeNickname'] = var3;
                var3 = function() {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                        var2 = _closure3_slot0;
                        var2 = var2.state;
                        var2 = var2.nick;
                        var5 = null;
                        if(!(var5 != var2)) { _fun0010_ip = 40; continue _fun0010 }
case 41:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot3;
                        var2 = 26;
                        var3 = var3[var2];
                        var2 = undefined;
                        var4 = var4.bind(var2)(var3);
                        var3 = var4.changeNickname;
                        var6 = _closure3_slot0;
                        var2 = var6.props;
                        var2 = var2.guild;
                        var2 = var2.id;
                        var7 = var6.props;
                        var7 = var7.currentUser;
                        var7 = var7.id;
                        var6 = var6.props;
                        var6 = var6.user;
                        var6 = var6.id;
                        var5 = null;
                        if(!(var7 !== var6)) { _fun0010_ip = 42; continue _fun0010 }
case 43:
                        var6 = _closure3_slot0;
                        var6 = var6.props;
                        var6 = var6.user;
                        var5 = var6.id;
case 42:
                        var1 = _closure3_slot0;
                        var1 = var1.state;
                        var1 = var1.nick;
                        var1 = var3.bind(var4)(var2, var5, var1);
case 40:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleSaveNickname'] = var3;
                var3 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 26;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.startEditingRoles;
                    var2 = _closure3_slot0;
                    var3 = var2.props;
                    var3 = var3.guild;
                    var3 = var3.id;
                    var2 = var2.props;
                    var2 = var2.user;
                    var2 = var2.id;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                var1['handleStartEditingRoles'] = var3;
                var3 = function(arg1, arg2) {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 26;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.toggleRole;
                    var3 = arg1;
                    var2 = arg2;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                var1['handleToggleRole'] = var3;
                var3 = function() {
                    var1 = _closure3_slot0;
                    var1 = var1.props;
                    var6 = var1.guild;
                    var5 = var1.user;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 27;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.openDisableCommunication;
                    var2 = {};
                    var6 = var6.id;
                    var2['guildId'] = var6;
                    var5 = var5.id;
                    var2['userId'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var1['handleSetCommunicationDisabled'] = var3;
                var3 = function() {
                    var1 = _closure3_slot0;
                    var1 = var1.props;
                    var6 = var1.guild;
                    var5 = var1.user;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 27;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.openEnableCommunication;
                    var2 = {};
                    var6 = var6.id;
                    var2['guildId'] = var6;
                    var5 = var5.id;
                    var2['userId'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var1['handleClearCommunicationDisabled'] = var3;
                var3 = function() {
                    var1 = _closure3_slot0;
                    var1 = var1.props;
                    var6 = var1.user;
                    var5 = var1.handleSuccessfulRemoval;
                    var4 = var1.navigation;
                    var3 = var4.push;
                    var1 = _closure1_slot22;
                    var2 = var1.MEMBER_KICK;
                    var1 = {};
                    var6 = var6.id;
                    var1['userId'] = var6;
                    var1['onKick'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    var1 = undefined;
                    return var1;
                };
                var1['handleKick'] = var3;
                var3 = function() {
                    var1 = _closure3_slot0;
                    var1 = var1.props;
                    var6 = var1.user;
                    var5 = var1.handleSuccessfulRemoval;
                    var4 = var1.navigation;
                    var3 = var4.push;
                    var1 = _closure1_slot22;
                    var2 = var1.MEMBER_BAN;
                    var1 = {};
                    var6 = var6.id;
                    var1['userId'] = var6;
                    var1['onBan'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    var1 = undefined;
                    return var1;
                };
                var1['handleBan'] = var3;
                var3 = function() {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                        var1 = _closure3_slot0;
                        var1 = var1.props;
                        var5 = var1.guild;
                        var4 = var1.user;
                        var6 = var5.features;
                        var3 = var6.has;
                        var2 = _closure1_slot21;
                        var2 = var2.VERIFIED;
                        var2 = var3.bind(var6)(var2);
                        if(var2) { _fun0011_ip = 44; continue _fun0011 }
case 45:
                        var6 = var5.features;
                        var3 = var6.has;
                        var2 = _closure1_slot21;
                        var2 = var2.PARTNERED;
                        var2 = var3.bind(var6)(var2);
                        if(var2) { _fun0011_ip = 44; continue _fun0011 }
case 46:
                        var6 = _closure1_slot1;
                        var3 = _closure1_slot3;
                        var2 = 29;
                        var3 = var3[var2];
                        var2 = undefined;
                        var3 = var6.bind(var2)(var3);
                        var2 = var3.open;
                        var2 = var2.bind(var3)(var5, var4);
                        _fun0011_ip = 35; continue _fun0011;
case 44:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 28;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var1 = var2.transferOwnershipProtected;
                        var1 = var1.bind(var2)();
case 35:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleTransferOwnership'] = var3;
                var3 = function() {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                        var2 = _closure3_slot0;
                        var2 = var2.props;
                        var3 = var2.editRoles;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0012_ip = 47; continue _fun0012 }
case 38:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot3;
                        var2 = 26;
                        var3 = var3[var2];
                        var2 = undefined;
                        var5 = var4.bind(var2)(var3);
                        var4 = var5.updateMemberRoles;
                        var1 = _closure3_slot0;
                        var2 = var1.props;
                        var2 = var2.guild;
                        var3 = var2.id;
                        var2 = var1.props;
                        var2 = var2.user;
                        var2 = var2.id;
                        var1 = var1.props;
                        var1 = var1.editRoles;
                        var1 = var4.bind(var5)(var3, var2, var1);
case 47:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleSaveMemberRoles'] = var3;
                var2 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 26;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.stopEditingRoles;
                    var2 = var2.bind(var3)();
                    return var1;
                };
                var1['handleCancelEditMemberRoles'] = var2;
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
        var1 = 'componentDidMount';
        var5['key'] = var1;
        var1 = function value() {
            var2 = this;
            var1 = var2.updateNavigator;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'componentDidUpdate';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = this;
            var2 = var3.updateNavigator;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'updateNavigator';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var2 = arg1;
                var1 = this;
                var _closure3_slot0 = var1;
                var1 = var1.props;
                var5 = var1.submitting;
                var6 = var1.isEditing;
                var3 = var1.navigation;
                var10 = var1.onClose;
                var7 = null;
                var1 = var7 != var2;
                if(!var1) { _fun0013_ip = 48; continue _fun0013 }
case 49:
                var8 = var2.submitting;
                var1 = var5 === var8;
case 48:
                if(!var1) { _fun0013_ip = 50; continue _fun0013 }
case 51:
                var8 = var2.isEditing;
                var1 = var6 === var8;
case 50:
                if(!var1) { _fun0013_ip = 39; continue _fun0013 }
case 9:
                var2 = var2.onClose;
                var1 = var10 === var2;
case 39:
                if(var1) { _fun0013_ip = 52; continue _fun0013 }
case 4:
                var2 = var3.setOptions;
                var1 = {};
                if(var5) { _fun0013_ip = 53; continue _fun0013 }
case 32:
                if(var6) { _fun0013_ip = 54; continue _fun0013 }
case 55:
                var8 = var7 != var10;
                var11 = undefined;
                var7 = undefined;
                if(!var8) { _fun0013_ip = 35; continue _fun0013 }
case 56:
                var9 = _closure1_slot0;
                var12 = _closure1_slot3;
                var8 = 31;
                var8 = var12[var8];
                var9 = var9.bind(var11)(var8);
                var8 = var9.getHeaderCloseButton;
                var7 = var8.bind(var9)(var10);
case 35:
                _fun0013_ip = 57; continue _fun0013;
case 54:
                var7 = function() {
                    var4 = _closure1_slot24;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var1 = 30;
                    var1 = var9[var1];
                    var3 = undefined;
                    var1 = var8.bind(var3)(var1);
                    var2 = var1.HeaderActionButton;
                    var1 = {};
                    var5 = 24;
                    var6 = var9[var5];
                    var6 = var8.bind(var3)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var5 = var9[var5];
                    var5 = var8.bind(var3)(var5);
                    var5 = var5.t;
                    var5 = var5.ETE/oC;
                    var5 = var6.bind(var7)(var5);
                    var1['text'] = var5;
                    var5 = _closure3_slot0;
                    var5 = var5.handleCancelEditMemberRoles;
                    var1['onPress'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                };
case 57:
                _fun0013_ip = 58; continue _fun0013;
case 53:
                var7 = function() {
                    var1 = null;
                    return var1;
                };
case 58:
                var1['headerLeft'] = var7;
                if(var5) { _fun0013_ip = 59; continue _fun0013 }
case 60:
                var5 = undefined;
                if(!var6) { _fun0013_ip = 61; continue _fun0013 }
case 62:
                var5 = function() {
                    var4 = _closure1_slot24;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var1 = 30;
                    var1 = var9[var1];
                    var3 = undefined;
                    var1 = var8.bind(var3)(var1);
                    var2 = var1.HeaderActionButton;
                    var1 = {};
                    var5 = 24;
                    var6 = var9[var5];
                    var6 = var8.bind(var3)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var5 = var9[var5];
                    var5 = var8.bind(var3)(var5);
                    var5 = var5.t;
                    var5 = var5.R3BPH+;
                    var5 = var6.bind(var7)(var5);
                    var1['text'] = var5;
                    var5 = _closure3_slot0;
                    var5 = var5.handleSaveMemberRoles;
                    var1['onPress'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                };
case 61:
                _fun0013_ip = 63; continue _fun0013;
case 59:
                var5 = function() {
                    var4 = _closure1_slot24;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 31;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.HeaderSubmittingIndicator;
                    var1 = {};
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                };
case 63:
                var1['headerRight'] = var5;
                var4 = function headerTitle() {
                    var4 = _closure1_slot24;
                    var6 = _closure1_slot0;
                    var11 = _closure1_slot3;
                    var1 = 31;
                    var1 = var11[var1];
                    var3 = undefined;
                    var1 = var6.bind(var3)(var1);
                    var2 = var1.NavigatorHeader;
                    var1 = {};
                    var5 = 24;
                    var7 = var11[var5];
                    var7 = var6.bind(var3)(var7);
                    var8 = var7.intl;
                    var7 = var8.formatToPlainString;
                    var5 = var11[var5];
                    var5 = var6.bind(var3)(var5);
                    var5 = var5.t;
                    var6 = var5.v7odxj;
                    var5 = {};
                    var10 = _closure1_slot1;
                    var9 = 32;
                    var9 = var11[var9];
                    var11 = var10.bind(var3)(var9);
                    var10 = var11.getName;
                    var9 = _closure3_slot0;
                    var9 = var9.props;
                    var9 = var9.user;
                    var9 = var10.bind(var11)(var9);
                    var5['user'] = var9;
                    var5 = var7.bind(var8)(var6, var5);
                    var1['title'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                };
                var1['headerTitle'] = var4;
                var1 = var2.bind(var3)(var1);
case 52:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'render';
        var5['key'] = var7;
        var6 = function value() {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var18 = this;
                var2 = _closure1_slot27;
                var1 = var18.context;
                var5 = undefined;
                var40 = var2.bind(var5)(var1);
                var1 = var18.state;
                var34 = var1.nick;
                var1 = var18.props;
                var25 = var1.user;
                var30 = var1.guild;
                var29 = var1.sortedGuildRoles;
                var28 = var1.member;
                var27 = var1.editRoles;
                var32 = var1.nicknameError;
                var23 = var1.currentUser;
                var22 = var1.isEditing;
                var19 = var1.canChangeNick;
                var17 = var1.canManageRoles;
                var13 = var1.canKick;
                var11 = var1.canBan;
                var14 = var1.canDisableCommunication;
                var1 = null;
                if(!(var1 != var28)) { _fun0014_ip = 64; continue _fun0014 }
case 65:
                var4 = _closure1_slot25;
                var3 = _closure1_slot10;
                var2 = {};
                var6 = var40.rowLabel;
                var2['style'] = var6;
                var8 = _closure1_slot24;
                var7 = _closure1_slot0;
                var9 = _closure1_slot3;
                var6 = 22;
                var6 = var9[var6];
                var6 = var7.bind(var5)(var6);
                var7 = var6.Text;
                var6 = {};
                var10 = 'text-sm/medium';
                var6['variant'] = var10;
                var10 = _closure1_slot1;
                var26 = 32;
                var9 = var9[var26];
                var10 = var10.bind(var5)(var9);
                var9 = var10.getUserTag;
                var9 = var9.bind(var10)(var25);
                var6['children'] = var9;
                var7 = var8.bind(var5)(var7, var6);
                var6 = new Array(2);
                var6[0] = var7;
                var8 = var25.bot;
                var7 = null;
                if(!var8) { _fun0014_ip = 66; continue _fun0014 }
case 67:
                var10 = _closure1_slot24;
                var9 = _closure1_slot1;
                var12 = _closure1_slot3;
                var8 = 33;
                var8 = var12[var8];
                var9 = var9.bind(var5)(var8);
                var8 = {};
                var12 = var25.isVerifiedBot;
                var12 = var12.bind(var25)();
                var8['verified'] = var12;
                var7 = var10.bind(var5)(var9, var8);
case 66:
                var6[1] = var7;
                var2['children'] = var6;
                var36 = var4.bind(var5)(var3, var2);
                var2 = var1 != var28;
                var16 = null;
                if(!var2) { _fun0014_ip = 68; continue _fun0014 }
case 21:
                var3 = _closure1_slot0;
                var4 = _closure1_slot3;
                var2 = 34;
                var2 = var4[var2];
                var3 = var3.bind(var5)(var2);
                var2 = var3.isMemberCommunicationDisabled;
                var2 = var2.bind(var3)(var28);
                var6 = _closure1_slot24;
                var12 = _closure1_slot0;
                var21 = _closure1_slot3;
                var3 = 25;
                var3 = var21[var3];
                var3 = var12.bind(var5)(var3);
                var4 = var3.TableRowGroup;
                var3 = {};
                var9 = _closure1_slot24;
                var7 = 23;
                var7 = var21[var7];
                var7 = var12.bind(var5)(var7);
                var8 = var7.TableRow;
                var7 = {};
                var10 = 'danger';
                var7['variant'] = var10;
                var10 = 24;
                var15 = var21[var10];
                var15 = var12.bind(var5)(var15);
                var20 = var15.intl;
                var15 = var20.formatToPlainString;
                var10 = var21[var10];
                var10 = var12.bind(var5)(var10);
                var10 = var10.t;
                if(var2) { _fun0014_ip = 69; continue _fun0014 }
case 70:
                var12 = var10.FN7NIS;
                var2 = {};
                var33 = _closure1_slot1;
                var31 = var21[var26];
                var33 = var33.bind(var5)(var31);
                var31 = var33.getName;
                var31 = var31.bind(var33)(var25);
                var2['user'] = var31;
                var2 = var15.bind(var20)(var12, var2);
                var7['label'] = var2;
                var2 = var18.handleSetCommunicationDisabled;
                var7['onPress'] = var2;
                var2 = var9.bind(var5)(var8, var7);
                var3['children'] = var2;
                var2 = var6.bind(var5)(var4, var3);
                _fun0014_ip = 27; continue _fun0014;
case 69:
                var12 = var10.RuL6o7;
                var10 = {};
                var31 = _closure1_slot1;
                var21 = var21[var26];
                var31 = var31.bind(var5)(var21);
                var21 = var31.getName;
                var21 = var21.bind(var31)(var25);
                var10['user'] = var21;
                var10 = var15.bind(var20)(var12, var10);
                var7['label'] = var10;
                var10 = var18.handleClearCommunicationDisabled;
                var7['onPress'] = var10;
                var7 = var9.bind(var5)(var8, var7);
                var3['children'] = var7;
                var2 = var6.bind(var5)(var4, var3);
case 27:
                var16 = var2;
case 68:
                var2 = _closure1_slot11;
                var2 = var2.bind(var5)(var30, var25);
                if(var2) { _fun0014_ip = 71; continue _fun0014 }
case 72:
                var3 = _closure1_slot12;
                var3 = var3.bind(var5)(var30, var23);
                var2 = !var3;
case 71:
                if(var2) { _fun0014_ip = 73; continue _fun0014 }
case 74:
                var2 = var25.bot;
case 73:
                var10 = undefined;
                if(var2) { _fun0014_ip = 75; continue _fun0014 }
case 76:
                var4 = _closure1_slot24;
                var20 = _closure1_slot0;
                var21 = _closure1_slot3;
                var2 = 25;
                var2 = var21[var2];
                var2 = var20.bind(var5)(var2);
                var3 = var2.TableRowGroup;
                var2 = {};
                var8 = _closure1_slot24;
                var6 = 23;
                var6 = var21[var6];
                var6 = var20.bind(var5)(var6);
                var7 = var6.TableRow;
                var6 = {};
                var9 = 'danger';
                var6['variant'] = var9;
                var9 = 24;
                var12 = var21[var9];
                var12 = var20.bind(var5)(var12);
                var15 = var12.intl;
                var12 = var15.string;
                var9 = var21[var9];
                var9 = var20.bind(var5)(var9);
                var9 = var9.t;
                var9 = var9.Z5s7PM;
                var9 = var12.bind(var15)(var9);
                var6['label'] = var9;
                var9 = var18.handleTransferOwnership;
                var6['onPress'] = var9;
                var6 = var8.bind(var5)(var7, var6);
                var2['children'] = var6;
                var10 = var4.bind(var5)(var3, var2);
case 75:
                var4 = _closure1_slot24;
                var33 = _closure1_slot0;
                var41 = _closure1_slot3;
                var2 = 35;
                var2 = var41[var2];
                var2 = var33.bind(var5)(var2);
                var3 = var2.Form;
                var2 = {};
                var6 = var40.form;
                var2['style'] = var6;
                var7 = var40.formContent;
                var6 = new Array(2);
                var6[0] = var7;
                var7 = var18.props;
                var7 = var7.contentContainerStyle;
                var6[1] = var7;
                var2['contentContainerStyle'] = var6;
                var8 = _closure1_slot25;
                var6 = 36;
                var6 = var41[var6];
                var6 = var33.bind(var5)(var6);
                var7 = var6.Stack;
                var6 = {};
                var9 = {};
                var12 = _closure1_slot23;
                var9['paddingHorizontal'] = var12;
                var6['style'] = var9;
                var38 = _closure1_slot1;
                var9 = 37;
                var9 = var41[var9];
                var9 = var38.bind(var5)(var9);
                var9 = var9.spacing;
                var9 = var9.PX_24;
                var6['spacing'] = var9;
                var21 = _closure1_slot24;
                var12 = 25;
                var9 = var41[var12];
                var9 = var33.bind(var5)(var9);
                var20 = var9.TableRowGroup;
                var9 = {};
                var35 = _closure1_slot24;
                var15 = 23;
                var31 = var41[var15];
                var31 = var33.bind(var5)(var31);
                var33 = var31.TableRow;
                var31 = {};
                var39 = _closure1_slot24;
                var37 = 38;
                var37 = var41[var37];
                var38 = var38.bind(var5)(var37);
                var37 = {};
                var40 = var40.avatar;
                var37['style'] = var40;
                var37['user'] = var25;
                var40 = var30.id;
                var37['guildId'] = var40;
                var37 = var39.bind(var5)(var38, var37);
                var31['icon'] = var37;
                var31['label'] = var36;
                var31 = var35.bind(var5)(var33, var31);
                var9['children'] = var31;
                var20 = var21.bind(var5)(var20, var9);
                var9 = new Array(7);
                var9[0] = var20;
                if(var19) { _fun0014_ip = 77; continue _fun0014 }
case 78:
                var21 = var23.id;
                var20 = var25.id;
                var19 = var21 === var20;
case 77:
                if(!var19) { _fun0014_ip = 79; continue _fun0014 }
case 80:
                var31 = _closure1_slot24;
                var38 = _closure1_slot0;
                var33 = _closure1_slot3;
                var20 = 39;
                var20 = var33[var20];
                var20 = var38.bind(var5)(var20);
                var21 = var20.TextInput;
                var20 = {};
                var37 = 24;
                var35 = var33[var37];
                var35 = var38.bind(var5)(var35);
                var36 = var35.intl;
                var35 = var36.string;
                var33 = var33[var37];
                var33 = var38.bind(var5)(var33);
                var33 = var33.t;
                var33 = var33.621LJD;
                var33 = var35.bind(var36)(var33);
                var20['label'] = var33;
                var35 = var1 != var34;
                var33 = '';
                if(!var35) { _fun0014_ip = 81; continue _fun0014 }
case 82:
                var33 = var34;
case 81:
                var20['value'] = var33;
                var36 = _closure1_slot0;
                var33 = _closure1_slot3;
                var34 = var33[var37];
                var34 = var36.bind(var5)(var34);
                var35 = var34.intl;
                var34 = var35.string;
                var33 = var33[var37];
                var33 = var36.bind(var5)(var33);
                var33 = var33.t;
                var33 = var33.h7UKXj;
                var33 = var34.bind(var35)(var33);
                var20['placeholder'] = var33;
                var33 = var18.handleChangeNickname;
                var20['onChange'] = var33;
                var33 = var18.handleSaveNickname;
                var20['onBlur'] = var33;
                var20['maxLength'] = var26;
                var20['errorMessage'] = var32;
                var19 = var31.bind(var5)(var21, var20);
case 79:
                var9[1] = var19;
                if(!var17) { _fun0014_ip = 83; continue _fun0014 }
case 84:
                var21 = _closure1_slot24;
                var20 = _closure1_slot28;
                var19 = {};
                var19['guild'] = var30;
                var19['sortedGuildRoles'] = var29;
                if(var22) { _fun0014_ip = 85; continue _fun0014 }
case 86:
                var27 = var28.roles;
case 85:
                if(!(var1 == var27)) { _fun0014_ip = 87; continue _fun0014 }
case 88:
                var27 = new Array(0);
case 87:
                var19['roles'] = var27;
                var23 = var23.id;
                var19['currentUserId'] = var23;
                var19['isEditing'] = var22;
                var22 = var18.handleToggleRole;
                var19['onToggleRole'] = var22;
                var22 = var18.handleStartEditingRoles;
                var19['onStartEditing'] = var22;
                var17 = var21.bind(var5)(var20, var19);
case 83:
                var9[2] = var17;
                if(!var14) { _fun0014_ip = 89; continue _fun0014 }
case 90:
                var14 = var16;
case 89:
                var9[3] = var14;
                if(!var13) { _fun0014_ip = 91; continue _fun0014 }
case 92:
                var17 = _closure1_slot24;
                var23 = _closure1_slot0;
                var29 = _closure1_slot3;
                var14 = var29[var12];
                var14 = var23.bind(var5)(var14);
                var16 = var14.TableRowGroup;
                var14 = {};
                var21 = _closure1_slot24;
                var19 = var29[var15];
                var19 = var23.bind(var5)(var19);
                var20 = var19.TableRow;
                var19 = {};
                var22 = 'danger';
                var19['variant'] = var22;
                var22 = 24;
                var27 = var29[var22];
                var27 = var23.bind(var5)(var27);
                var28 = var27.intl;
                var27 = var28.formatToPlainString;
                var22 = var29[var22];
                var22 = var23.bind(var5)(var22);
                var22 = var22.t;
                var23 = var22.yOiJHB;
                var22 = {};
                var30 = _closure1_slot1;
                var29 = var29[var26];
                var30 = var30.bind(var5)(var29);
                var29 = var30.getName;
                var29 = var29.bind(var30)(var25);
                var22['user'] = var29;
                var22 = var27.bind(var28)(var23, var22);
                var19['label'] = var22;
                var22 = var18.handleKick;
                var19['onPress'] = var22;
                var19 = var21.bind(var5)(var20, var19);
                var14['children'] = var19;
                var13 = var17.bind(var5)(var16, var14);
case 91:
                var9[4] = var13;
                if(!var11) { _fun0014_ip = 93; continue _fun0014 }
case 94:
                var14 = _closure1_slot24;
                var20 = _closure1_slot0;
                var23 = _closure1_slot3;
                var12 = var23[var12];
                var12 = var20.bind(var5)(var12);
                var13 = var12.TableRowGroup;
                var12 = {};
                var17 = _closure1_slot24;
                var15 = var23[var15];
                var15 = var20.bind(var5)(var15);
                var16 = var15.TableRow;
                var15 = {};
                var19 = 'danger';
                var15['variant'] = var19;
                var19 = 24;
                var21 = var23[var19];
                var21 = var20.bind(var5)(var21);
                var22 = var21.intl;
                var21 = var22.formatToPlainString;
                var19 = var23[var19];
                var19 = var20.bind(var5)(var19);
                var19 = var19.t;
                var20 = var19.TuAZuW;
                var19 = {};
                var24 = _closure1_slot1;
                var23 = var23[var26];
                var24 = var24.bind(var5)(var23);
                var23 = var24.getName;
                var23 = var23.bind(var24)(var25);
                var19['user'] = var23;
                var19 = var21.bind(var22)(var20, var19);
                var15['label'] = var19;
                var18 = var18.handleBan;
                var15['onPress'] = var18;
                var15 = var17.bind(var5)(var16, var15);
                var12['children'] = var15;
                var11 = var14.bind(var5)(var13, var12);
case 93:
                var9[5] = var11;
                var9[6] = var10;
                var6['children'] = var9;
                var6 = var8.bind(var5)(var7, var6);
                var2['children'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var2;
case 64:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var8.bind(var1)(var9);
    var _closure1_slot29 = var8;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.ThemeContext;
    var8['contextType'] = var5;
    var5 = 51;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_settings/native/GuildSettingsModalMemberEdit.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function MemberModalEdit(arg1) {
        var2 = arg1;
        var3 = var2.guildId;
        var7 = var2.userId;
        var11 = var2.onClose;
        var _closure2_slot0 = var11;
        var10 = var2.onRemove;
        var _closure2_slot1 = var10;
        var6 = _closure1_slot1;
        var8 = _closure1_slot3;
        var2 = 49;
        var2 = var8[var2];
        var4 = undefined;
        var2 = var6.bind(var4)(var2);
        var9 = var2.bind(var4)(var3);
        var _closure2_slot2 = var9;
        var6 = _closure1_slot9;
        var3 = var6.useMemo;
        var2 = new Array(3);
        var2[0] = var11;
        var2[1] = var10;
        var2[2] = var9;
        var1 = function() {
            var5 = _closure2_slot2;
            var4 = _closure2_slot0;
            var3 = _closure2_slot1;
            var2 = function getScreens(arg1, arg2, arg3) {
                var1 = arg1;
                var _closure4_slot0 = var1;
                var1 = arg2;
                var _closure4_slot1 = var1;
                var1 = arg3;
                var _closure4_slot2 = var1;
                var1 = {};
                var2 = _closure1_slot22;
                var5 = var2.MEMBER_EDIT;
                var3 = {};
                var6 = function render(arg1) {
                    var4 = _closure1_slot24;
                    var3 = _closure1_slot32;
                    var2 = {};
                    var7 = arg1;
                    var8 = var2;
                    var1 = copyDataProperties(var8, var7);
                    var6 = _closure4_slot1;
                    var5 = 'onClose';
                    var2[var5] = var6;
                    var5 = _closure4_slot0;
                    var1 = 'guildId';
                    var2[var1] = var5;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                };
                var3['render'] = var6;
                var1[var5] = var3;
                var5 = var2.MEMBER_KICK;
                var3 = {};
                var6 = function headerTitle() {
                    var1 = null;
                    return var1;
                };
                var3['headerTitle'] = var6;
                var6 = function render(arg1) {
                    var4 = _closure1_slot24;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var1 = 47;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var8 = arg1;
                    var9 = var1;
                    var5 = copyDataProperties(var9, var8);
                    var7 = _closure4_slot0;
                    var6 = 'guildId';
                    var1[var6] = var7;
                    var6 = _closure4_slot2;
                    var5 = 'onKick';
                    var1[var5] = var6;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                };
                var3['render'] = var6;
                var1[var5] = var3;
                var3 = var2.MEMBER_BAN;
                var2 = {};
                var5 = function headerTitle() {
                    var1 = null;
                    return var1;
                };
                var2['headerTitle'] = var5;
                var4 = function render(arg1) {
                    var4 = _closure1_slot24;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var1 = 48;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var8 = arg1;
                    var9 = var1;
                    var5 = copyDataProperties(var9, var8);
                    var7 = _closure4_slot0;
                    var6 = 'guildId';
                    var1[var6] = var7;
                    var6 = _closure4_slot2;
                    var5 = 'onBan';
                    var1[var5] = var6;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                };
                var2['render'] = var4;
                var1[var3] = var2;
                return var1;
            };
            var1 = undefined;
            var1 = var2.bind(var1)(var5, var4, var3);
            return var1;
        };
        var6 = var3.bind(var6)(var1, var2);
        var3 = _closure1_slot24;
        var2 = _closure1_slot0;
        var1 = 50;
        var1 = var8[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.Navigator;
        var1 = {};
        var1['screens'] = var6;
        var5 = _closure1_slot22;
        var6 = var5.MEMBER_EDIT;
        var1['initialRouteName'] = var6;
        var6 = {};
        var5 = var5.MEMBER_EDIT;
        var6['name'] = var5;
        var5 = {};
        var5['userId'] = var7;
        var6['params'] = var5;
        var5 = new Array(1);
        var5[0] = var6;
        var1['initialRouteStack'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var4;
    var3['GuildSettingsModalMemberEditScene'] = var2;
    return var1;
})();