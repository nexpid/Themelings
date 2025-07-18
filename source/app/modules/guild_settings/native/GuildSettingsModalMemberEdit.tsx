// app/modules/guild_settings/native/GuildSettingsModalMemberEdit.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var9 = native3;
    var8 = native4;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
    var _closure1_slot3 = var7;
    var1 = function _callSuper(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var6 = arg3;
            var2 = _closure1_slot7;
            var3 = undefined;
            var1 = arg2;
            var9 = var2.bind(var3)(var1);
            var2 = _closure1_slot6;
            var1 = _closure1_slot29;
            var1 = var1.bind(var3)();
            if(var1) { _fun0001_ip = 51; continue _fun0001 }
 38:
            var1 = var9.apply;
            var1 = var1.bind(var9)(var4, var6);
            _fun0001_ip = 92; continue _fun0001;
 51:
            var7 = global;
            var8 = var7.Reflect;
            var7 = var8.construct;
            if(var6) { _fun0001_ip = 71; continue _fun0001 }
 67:
            var6 = new Array(0);
 71:
            var5 = _closure1_slot7;
            var5 = var5.bind(var3)(var4);
            var5 = var5.constructor;
            var1 = var7.bind(var8)(var9, var6, var5);
 92:
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var _closure1_slot28 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
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
            _fun0002_ip = 74; continue _fun0002;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot29 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot29 = var1;
    var2 = function GuildSettingsModalMemberEditScene(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var8 = var2.guildId;
            var _closure2_slot0 = var8;
            var9 = var2.userId;
            var _closure2_slot1 = var9;
            var20 = var2.onClose;
            var13 = var2.contentContainerStyle;
            var3 = _closure1_slot0;
            var4 = _closure1_slot3;
            var2 = 35;
            var2 = var4[var2];
            var5 = undefined;
            var6 = var3.bind(var5)(var2);
            var2 = var6.useNavigation;
            var14 = var2.bind(var6)();
            var _closure2_slot2 = var14;
            var2 = 36;
            var6 = var4[var2];
            var12 = var3.bind(var5)(var6);
            var11 = var12.useStateFromStores;
            var6 = _closure1_slot15;
            var10 = new Array(1);
            var10[0] = var6;
            var6 = function() {
                var3 = _closure1_slot15;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var18 = var11.bind(var12)(var10, var6);
            var _closure2_slot3 = var18;
            var6 = var4[var2];
            var12 = var3.bind(var5)(var6);
            var11 = var12.useStateFromStores;
            var6 = _closure1_slot14;
            var10 = new Array(1);
            var10[0] = var6;
            var6 = function() {
                var3 = _closure1_slot14;
                var2 = var3.getRoles;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var17 = var11.bind(var12)(var10, var6);
            var6 = var4[var2];
            var12 = var3.bind(var5)(var6);
            var11 = var12.useStateFromStoresObject;
            var6 = _closure1_slot17;
            var10 = new Array(1);
            var10[0] = var6;
            var6 = function() {
                var2 = _closure1_slot17;
                var1 = var2.getCurrentUser;
                var2 = var1.bind(var2)();
                var4 = _closure1_slot1;
                var5 = _closure1_slot3;
                var1 = 37;
                var1 = var5[var1];
                var6 = undefined;
                var5 = var4.bind(var6)(var1);
                var1 = null;
                var4 = var1 != var2;
                var1 = 'GuildSettingsModalMemberEditScene: current user cannot be undefined';
                var1 = var5.bind(var6)(var4, var1);
                var1 = {};
                var5 = _closure1_slot17;
                var4 = var5.getUser;
                var3 = _closure2_slot1;
                var3 = var4.bind(var5)(var3);
                var1['user'] = var3;
                var1['currentUser'] = var2;
                return var1;
            };
            var6 = var11.bind(var12)(var10, var6);
            var15 = var6.user;
            var _closure2_slot4 = var15;
            var16 = var6.currentUser;
            var12 = _closure1_slot9;
            var11 = var12.useEffect;
            var10 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 22;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.startEditingNickname;
                var2 = var2.bind(var3)();
                return var1;
            };
            var6 = new Array(0);
            var6 = var11.bind(var12)(var10, var6);
            var2 = var4[var2];
            var11 = var3.bind(var5)(var2);
            var10 = var11.useStateFromStoresObject;
            var2 = _closure1_slot18;
            var6 = new Array(5);
            var6[0] = var2;
            var2 = _closure1_slot13;
            var6[1] = var2;
            var2 = _closure1_slot16;
            var6[2] = var2;
            var2 = _closure1_slot17;
            var6[3] = var2;
            var2 = _closure1_slot15;
            var6[4] = var2;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = {};
                    var6 = _closure1_slot13;
                    var5 = var6.getMember;
                    var4 = _closure2_slot0;
                    var3 = _closure2_slot1;
                    var3 = var5.bind(var6)(var4, var3);
                    var1['member'] = var3;
                    var3 = _closure1_slot18;
                    var3 = var3.nicknameError;
                    var1['nicknameError'] = var3;
                    var3 = _closure1_slot18;
                    var3 = var3.roles;
                    var1['editRoles'] = var3;
                    var3 = _closure1_slot18;
                    var3 = var3.isEditing;
                    var1['isEditing'] = var3;
                    var3 = _closure1_slot18;
                    var3 = var3.isSubmitting;
                    var1['submitting'] = var3;
                    var3 = _closure2_slot3;
                    var9 = null;
                    var3 = var9 != var3;
                    if(!var3) { _fun0004_ip = 118; continue _fun0004 }
 110:
                    var4 = _closure2_slot4;
                    var3 = var9 != var4;
 118:
                    if(!var3) { _fun0004_ip = 156; continue _fun0004 }
 121:
                    var10 = _closure1_slot16;
                    var8 = var10.canManageUser;
                    var4 = _closure1_slot19;
                    var6 = var4.MANAGE_NICKNAMES;
                    var5 = _closure2_slot4;
                    var4 = _closure2_slot3;
                    var3 = var8.bind(var10)(var6, var5, var4);
 156:
                    var1['canChangeNick'] = var3;
                    var6 = _closure1_slot16;
                    var5 = var6.can;
                    var3 = _closure1_slot19;
                    var4 = var3.MANAGE_ROLES;
                    var3 = _closure2_slot3;
                    var4 = var5.bind(var6)(var4, var3);
                    var1['canManageRoles'] = var4;
                    var3 = var9 != var3;
                    if(!var3) { _fun0004_ip = 211; continue _fun0004 }
 203:
                    var4 = _closure2_slot4;
                    var3 = var9 != var4;
 211:
                    if(!var3) { _fun0004_ip = 249; continue _fun0004 }
 214:
                    var10 = _closure1_slot16;
                    var8 = var10.canManageUser;
                    var4 = _closure1_slot19;
                    var6 = var4.KICK_MEMBERS;
                    var5 = _closure2_slot4;
                    var4 = _closure2_slot3;
                    var3 = var8.bind(var10)(var6, var5, var4);
 249:
                    var1['canKick'] = var3;
                    var3 = _closure2_slot3;
                    var3 = var9 != var3;
                    if(!var3) { _fun0004_ip = 273; continue _fun0004 }
 265:
                    var4 = _closure2_slot4;
                    var3 = var9 != var4;
 273:
                    if(!var3) { _fun0004_ip = 311; continue _fun0004 }
 276:
                    var10 = _closure1_slot16;
                    var8 = var10.canManageUser;
                    var4 = _closure1_slot19;
                    var6 = var4.BAN_MEMBERS;
                    var5 = _closure2_slot4;
                    var4 = _closure2_slot3;
                    var3 = var8.bind(var10)(var6, var5, var4);
 311:
                    var1['canBan'] = var3;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var3 = 38;
                    var4 = var4[var3];
                    var3 = undefined;
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.canToggleCommunicationDisableOnUser;
                    var4 = _closure2_slot3;
                    var8 = var9 == var4;
                    var4 = undefined;
                    if(var8) { _fun0004_ip = 366; continue _fun0004 }
 357:
                    var8 = _closure2_slot3;
                    var4 = var8.id;
 366:
                    var8 = _closure2_slot4;
                    var8 = var9 == var8;
                    var3 = undefined;
                    if(var8) { _fun0004_ip = 388; continue _fun0004 }
 379:
                    var2 = _closure2_slot4;
                    var3 = var2.id;
 388:
                    var8 = _closure1_slot17;
                    var2 = new Array(3);
                    var2[0] = var8;
                    var8 = _closure1_slot15;
                    var2[1] = var8;
                    var7 = _closure1_slot16;
                    var2[2] = var7;
                    var2 = var5.bind(var6)(var4, var3, var2);
                    var1['canDisableCommunication'] = var2;
                    return var1;
                }
            };
            var12 = var10.bind(var11)(var6, var2);
            var2 = 39;
            var2 = var4[var2];
            var4 = var3.bind(var5)(var2);
            var3 = var4.useSubscribeGuildMembers;
            var2 = {};
            var6 = new Array(1);
            var6[0] = var9;
            var2[var8] = var6;
            var2 = var3.bind(var4)(var2);
            var4 = _closure1_slot9;
            var3 = var4.useCallback;
            var2 = new Array(1);
            var2[0] = var14;
            var1 = function() {
                var3 = _closure2_slot2;
                var2 = var3.pop;
                var1 = 2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var19 = var3.bind(var4)(var1, var2);
            var3 = null;
            var2 = var3 != var16;
            var1 = null;
            if(!var2) { _fun0003_ip = 588; continue _fun0003 }
 382:
            var2 = var3 != var18;
            var1 = null;
            if(!var2) { _fun0003_ip = 588; continue _fun0003 }
 394:
            var2 = var3 != var15;
            var1 = null;
            if(!var2) { _fun0003_ip = 588; continue _fun0003 }
 406:
            var4 = _closure1_slot23;
            var8 = _closure1_slot0;
            var10 = _closure1_slot3;
            var2 = 40;
            var2 = var10[var2];
            var2 = var8.bind(var5)(var2);
            var3 = var2.RedesignCompat;
            var2 = {};
            var11 = _closure1_slot22;
            var9 = _closure1_slot27;
            var6 = {};
            var22 = var6;
            var21 = var12;
            var12 = copyDataProperties(var22, var21);
            var12 = 'onClose';
            var6[var12] = var20;
            var12 = 'handleSuccessfulRemoval';
            var6[var12] = var19;
            var12 = 'guild';
            var6[var12] = var18;
            var12 = 'guildRoles';
            var6[var12] = var17;
            var12 = 'currentUser';
            var6[var12] = var16;
            var12 = 'user';
            var6[var12] = var15;
            var12 = 'navigation';
            var6[var12] = var14;
            var12 = 'contentContainerStyle';
            var6[var12] = var13;
            var9 = var11.bind(var5)(var9, var6);
            var6 = new Array(2);
            var6[0] = var9;
            var9 = _closure1_slot22;
            var7 = 41;
            var7 = var10[var7];
            var7 = var8.bind(var5)(var7);
            var8 = var7.NavScrim;
            var7 = {};
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 588:
            return var1;
        }
    };
    var _closure1_slot30 = var2;
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
    var5 = 1;
    var5 = var7[var5];
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
    var5 = var8.bind(var1)(var5);
    var _closure1_slot9 = var5;
    var8 = 6;
    var8 = var7[var8];
    var8 = var6.bind(var1)(var8);
    var8 = var8.View;
    var _closure1_slot10 = var8;
    var8 = 7;
    var8 = var7[var8];
    var8 = var6.bind(var1)(var8);
    var10 = var8.isGuildOwner;
    var _closure1_slot11 = var10;
    var8 = var8.isGuildOwnerWithRequiredMfaLevel;
    var _closure1_slot12 = var8;
    var8 = 8;
    var8 = var7[var8];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot13 = var8;
    var8 = 9;
    var8 = var7[var8];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot14 = var8;
    var8 = 10;
    var8 = var7[var8];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot15 = var8;
    var8 = 11;
    var8 = var7[var8];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot16 = var8;
    var8 = 12;
    var8 = var7[var8];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot17 = var8;
    var8 = 13;
    var8 = var7[var8];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot18 = var8;
    var8 = 14;
    var8 = var7[var8];
    var8 = var6.bind(var1)(var8);
    var9 = var8.Permissions;
    var _closure1_slot19 = var9;
    var9 = var8.GuildFeatures;
    var _closure1_slot20 = var9;
    var8 = var8.GuildSettingsSections;
    var _closure1_slot21 = var8;
    var8 = 15;
    var8 = var7[var8];
    var8 = var6.bind(var1)(var8);
    var9 = var8.jsx;
    var _closure1_slot22 = var9;
    var9 = var8.jsxs;
    var _closure1_slot23 = var9;
    var8 = var8.Fragment;
    var _closure1_slot24 = var8;
    var8 = 16;
    var8 = var7[var8];
    var10 = var6.bind(var1)(var8);
    var9 = var10.createLegacyClassComponentStyles;
    var8 = {};
    var11 = {};
    var12 = 63;
    var11['height'] = var12;
    var8['userInfo'] = var11;
    var11 = {'width': 40, 'height': 40};
    var8['avatar'] = var11;
    var11 = {};
    var12 = 'row';
    var11['flexDirection'] = var12;
    var8['rowLabel'] = var11;
    var11 = {'marginTop': 8, 'marginBottom': 8};
    var8['ctaButton'] = var11;
    var11 = {'marginRight': 0, 'marginLeft': 0, 'paddingRight': 0, 'paddingLeft': 16};
    var8['actionButtonLeft'] = var11;
    var11 = {'marginRight': 0, 'marginLeft': 0, 'paddingRight': 16, 'paddingLeft': 0};
    var8['actionButtonRight'] = var11;
    var11 = {};
    var12 = 'auto';
    var11['flexBasis'] = var12;
    var8['actionButtonContainer'] = var11;
    var8 = var9.bind(var10)(var8);
    var _closure1_slot25 = var8;
    var9 = var5.PureComponent;
    var8 = function(arg1) {
        var5 = function RolesList(arg1) {
            var3 = arg1;
            var6 = this;
            var2 = _closure1_slot4;
            var5 = _closure2_slot0;
            var4 = undefined;
            var2 = var2.bind(var4)(var6, var5);
            var2 = _closure1_slot28;
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
 0:
                var1 = this;
                var1 = var1.props;
                var10 = var1.guild;
                var _closure3_slot0 = var10;
                var6 = var1.guildRoles;
                var3 = var1.roles;
                var _closure3_slot1 = var3;
                var3 = var1.isEditing;
                var9 = var1.currentUserId;
                var _closure3_slot2 = var9;
                var4 = var1.onStartEditing;
                var1 = var1.onToggleRole;
                var _closure3_slot3 = var1;
                if(var3) { _fun0005_ip = 258; continue _fun0005 }
 76:
                var5 = _closure1_slot1;
                var17 = _closure1_slot3;
                var3 = 18;
                var3 = var17[var3];
                var12 = undefined;
                var3 = var5.bind(var12)(var3);
                var7 = var3.bind(var12)(var6);
                var5 = var7.filter;
                var3 = function(arg1) {
                    var3 = _closure3_slot1;
                    var2 = var3.indexOf;
                    var1 = arg1;
                    var1 = var1.id;
                    var2 = var2.bind(var3)(var1);
                    var1 = -1;
                    var1 = var1 !== var2;
                    return var1;
                };
                var7 = var5.bind(var7)(var3);
                var5 = var7.map;
                var3 = function(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                        var1 = arg1;
                        var5 = _closure1_slot23;
                        var4 = _closure1_slot10;
                        var3 = {};
                        var9 = _closure1_slot22;
                        var12 = _closure1_slot0;
                        var11 = _closure1_slot3;
                        var10 = 20;
                        var6 = var11[var10];
                        var2 = undefined;
                        var6 = var12.bind(var2)(var6);
                        var8 = var6.FormRow;
                        var6 = {};
                        var13 = _closure1_slot22;
                        var11 = var11[var10];
                        var11 = var12.bind(var2)(var11);
                        var11 = var11.FormRow;
                        var12 = var11.Label;
                        var11 = {};
                        var15 = var1.colorString;
                        var14 = null;
                        var15 = var14 != var15;
                        if(!var15) { _fun0006_ip = 107; continue _fun0006 }
 92:
                        var15 = {};
                        var16 = var1.colorString;
                        var15['color'] = var16;
                        var14 = var15;
 107:
                        var11['style'] = var14;
                        var14 = var1.name;
                        var11['text'] = var14;
                        var11 = var13.bind(var2)(var12, var11);
                        var6['label'] = var11;
                        var8 = var9.bind(var2)(var8, var6);
                        var6 = new Array(2);
                        var6[0] = var8;
                        var9 = _closure1_slot22;
                        var8 = _closure1_slot0;
                        var7 = _closure1_slot3;
                        var7 = var7[var10];
                        var7 = var8.bind(var2)(var7);
                        var8 = var7.FormDivider;
                        var7 = {};
                        var7 = var9.bind(var2)(var8, var7);
                        var6[1] = var7;
                        var3['children'] = var6;
                        var1 = var1.id;
                        var1 = var5.bind(var2)(var4, var3, var1);
                        return var1;
                    }
                };
                var5 = var5.bind(var7)(var3);
                var3 = var5.value;
                var3 = var3.bind(var5)();
                var5 = var3.push;
                var11 = _closure1_slot22;
                var16 = _closure1_slot0;
                var7 = 20;
                var7 = var17[var7];
                var7 = var16.bind(var12)(var7);
                var8 = var7.FormRow;
                var7 = {};
                var13 = 21;
                var14 = var17[var13];
                var14 = var16.bind(var12)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var17[var13];
                var13 = var16.bind(var12)(var13);
                var13 = var13.t;
                var13 = var13.+riKdH;
                var13 = var14.bind(var15)(var13);
                var7['label'] = var13;
                var7['onPress'] = var4;
                var4 = 'addition';
                var4 = var11.bind(var12)(var8, var7, var4);
                var4 = var5.bind(var3)(var4);
                var5 = var3;
                _fun0005_ip = 386; continue _fun0005;
 258:
                var7 = _closure1_slot2;
                var8 = _closure1_slot3;
                var3 = 17;
                var3 = var8[var3];
                var4 = undefined;
                var7 = var7.bind(var4)(var3);
                var3 = var7.getHighestRole;
                var3 = var3.bind(var7)(var10, var9);
                var _closure3_slot4 = var3;
                var7 = _closure1_slot1;
                var3 = 18;
                var3 = var8[var3];
                var3 = var7.bind(var4)(var3);
                var6 = var3.bind(var4)(var6);
                var4 = var6.filter;
                var3 = function(arg1) {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 19;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.isEveryoneRoleId;
                    var1 = _closure3_slot0;
                    var2 = var1.id;
                    var1 = arg1;
                    var1 = var1.id;
                    var1 = var3.bind(var4)(var2, var1);
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
                    var1 = 17;
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
 0:
                        var1 = arg1;
                        var _closure4_slot0 = var1;
                        var4 = _closure3_slot1;
                        var3 = var4.indexOf;
                        var2 = var1.id;
                        var3 = var3.bind(var4)(var2);
                        var2 = -1;
                        var16 = var2 !== var3;
                        var _closure4_slot1 = var16;
                        var5 = _closure1_slot23;
                        var4 = _closure1_slot10;
                        var3 = {};
                        var12 = _closure1_slot22;
                        var13 = _closure1_slot0;
                        var8 = _closure1_slot3;
                        var10 = 20;
                        var6 = var8[var10];
                        var2 = undefined;
                        var6 = var13.bind(var2)(var6);
                        var11 = var6.FormRow;
                        var6 = {};
                        var14 = _closure1_slot22;
                        var8 = var8[var10];
                        var8 = var13.bind(var2)(var8);
                        var8 = var8.FormRow;
                        var13 = var8.Label;
                        var8 = {};
                        var17 = var1.colorString;
                        var15 = null;
                        var17 = var15 != var17;
                        if(!var17) { _fun0007_ip = 150; continue _fun0007 }
 135:
                        var17 = {};
                        var18 = var1.colorString;
                        var17['color'] = var18;
                        var15 = var17;
 150:
                        var8['style'] = var15;
                        var15 = var1.name;
                        var8['text'] = var15;
                        var8 = var14.bind(var2)(var13, var8);
                        var6['label'] = var8;
                        var7 = function onPress() {
                            var4 = _closure3_slot3;
                            var2 = _closure4_slot0;
                            var3 = var2.id;
                            var1 = _closure4_slot1;
                            var2 = !var1;
                            var1 = undefined;
                            var1 = var4.bind(var1)(var3, var2);
                            return var1;
                        };
                        var6['onPress'] = var7;
                        var15 = _closure1_slot22;
                        var8 = _closure1_slot0;
                        var7 = _closure1_slot3;
                        var13 = var7[var10];
                        var13 = var8.bind(var2)(var13);
                        var13 = var13.FormRow;
                        var14 = var13.Radio;
                        var13 = {};
                        var13['selected'] = var16;
                        var13 = var15.bind(var2)(var14, var13);
                        var6['leading'] = var13;
                        var11 = var12.bind(var2)(var11, var6);
                        var6 = new Array(2);
                        var6[0] = var11;
                        var9 = _closure1_slot22;
                        var7 = var7[var10];
                        var7 = var8.bind(var2)(var7);
                        var8 = var7.FormDivider;
                        var7 = {};
                        var10 = true;
                        var7['iconPush'] = var10;
                        var7 = var9.bind(var2)(var8, var7);
                        var6[1] = var7;
                        var3['children'] = var6;
                        var1 = var1.id;
                        var1 = var5.bind(var2)(var4, var3, var1);
                        return var1;
                    }
                };
                var3 = var3.bind(var4)(var2);
                var2 = var3.value;
                var5 = var2.bind(var3)();
 386:
                var4 = _closure1_slot22;
                var9 = _closure1_slot0;
                var10 = _closure1_slot3;
                var1 = 20;
                var1 = var10[var1];
                var3 = undefined;
                var1 = var9.bind(var3)(var1);
                var2 = var1.FormSection;
                var1 = {};
                var6 = 21;
                var7 = var10[var6];
                var7 = var9.bind(var3)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var6 = var10[var6];
                var6 = var9.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6.LPJmLy;
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
 0:
                var1 = arg1;
                var3 = var1.isEditing;
                var1 = arg2;
                var2 = var1.isEditingProp;
                var1 = null;
                if(!(var2 !== var3)) { _fun0008_ip = 34; continue _fun0008 }
 24:
                var2 = {};
                var2['isEditingProp'] = var3;
                var1 = var2;
 34:
                return var1;
            }
        };
        var6['value'] = var1;
        var1 = new Array(1);
        var1[0] = var6;
        var1 = var3.bind(var4)(var5, var2, var1);
        return var1;
    };
    var9 = var8.bind(var1)(var9);
    var _closure1_slot26 = var9;
    var8 = {};
    var10 = new Array(0);
    var8['roles'] = var10;
    var9['defaultProps'] = var8;
    var8 = var5.PureComponent;
    var5 = function(arg1) {
        var4 = function GuildSettingsModalMemberEdit(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var6 = this;
                var11 = 0;
                var7 = copyRestArgs(var11);
                var3 = _closure1_slot4;
                var5 = _closure2_slot0;
                var4 = undefined;
                var3 = var3.bind(var4)(var6, var5);
                var3 = _closure1_slot28;
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
                if(var6) { _fun0009_ip = 92; continue _fun0009 }
 86:
                var4 = var5.nick;
 92:
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
 0:
                        var2 = _closure3_slot0;
                        var2 = var2.state;
                        var2 = var2.nick;
                        var5 = null;
                        if(!(var5 != var2)) { _fun0010_ip = 155; continue _fun0010 }
 27:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot3;
                        var2 = 22;
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
                        if(!(var7 !== var6)) { _fun0010_ip = 133; continue _fun0010 }
 114:
                        var6 = _closure3_slot0;
                        var6 = var6.props;
                        var6 = var6.user;
                        var5 = var6.id;
 133:
                        var1 = _closure3_slot0;
                        var1 = var1.state;
                        var1 = var1.nick;
                        var1 = var3.bind(var4)(var2, var5, var1);
 155:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleSaveNickname'] = var3;
                var3 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 22;
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
                    var1 = 22;
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
                    var1 = 23;
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
                    var1 = 23;
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
                    var1 = _closure1_slot21;
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
                    var1 = _closure1_slot21;
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
 0:
                        var1 = _closure3_slot0;
                        var1 = var1.props;
                        var5 = var1.guild;
                        var4 = var1.user;
                        var6 = var5.features;
                        var3 = var6.has;
                        var2 = _closure1_slot20;
                        var2 = var2.VERIFIED;
                        var2 = var3.bind(var6)(var2);
                        if(var2) { _fun0011_ip = 119; continue _fun0011 }
 54:
                        var6 = var5.features;
                        var3 = var6.has;
                        var2 = _closure1_slot20;
                        var2 = var2.PARTNERED;
                        var2 = var3.bind(var6)(var2);
                        if(var2) { _fun0011_ip = 119; continue _fun0011 }
 83:
                        var6 = _closure1_slot1;
                        var3 = _closure1_slot3;
                        var2 = 25;
                        var3 = var3[var2];
                        var2 = undefined;
                        var3 = var6.bind(var2)(var3);
                        var2 = var3.open;
                        var2 = var2.bind(var3)(var5, var4);
                        _fun0011_ip = 151; continue _fun0011;
 119:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 24;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var1 = var2.transferOwnershipProtected;
                        var1 = var1.bind(var2)();
 151:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleTransferOwnership'] = var3;
                var3 = function() {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                        var2 = _closure3_slot0;
                        var2 = var2.props;
                        var3 = var2.editRoles;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0012_ip = 107; continue _fun0012 }
 24:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot3;
                        var2 = 22;
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
 107:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleSaveMemberRoles'] = var3;
                var2 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 22;
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
 0:
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
                if(!var1) { _fun0013_ip = 60; continue _fun0013 }
 50:
                var8 = var2.submitting;
                var1 = var5 === var8;
 60:
                if(!var1) { _fun0013_ip = 73; continue _fun0013 }
 63:
                var8 = var2.isEditing;
                var1 = var6 === var8;
 73:
                if(!var1) { _fun0013_ip = 86; continue _fun0013 }
 76:
                var2 = var2.onClose;
                var1 = var10 === var2;
 86:
                if(var1) { _fun0013_ip = 207; continue _fun0013 }
 89:
                var2 = var3.setOptions;
                var1 = {};
                if(var5) { _fun0013_ip = 157; continue _fun0013 }
 100:
                if(var6) { _fun0013_ip = 150; continue _fun0013 }
 103:
                var8 = var7 != var10;
                var11 = undefined;
                var7 = undefined;
                if(!var8) { _fun0013_ip = 148; continue _fun0013 }
 114:
                var9 = _closure1_slot0;
                var12 = _closure1_slot3;
                var8 = 27;
                var8 = var12[var8];
                var9 = var9.bind(var11)(var8);
                var8 = var9.getHeaderCloseButton;
                var7 = var8.bind(var9)(var10);
 148:
                _fun0013_ip = 155; continue _fun0013;
 150:
                var7 = function() {
                    var4 = _closure1_slot22;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var1 = 26;
                    var1 = var9[var1];
                    var3 = undefined;
                    var1 = var8.bind(var3)(var1);
                    var2 = var1.HeaderActionButton;
                    var1 = {};
                    var5 = 21;
                    var6 = var9[var5];
                    var6 = var8.bind(var3)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var5 = var9[var5];
                    var5 = var8.bind(var3)(var5);
                    var5 = var5.t;
                    var5 = var5.ETE/oK;
                    var5 = var6.bind(var7)(var5);
                    var1['text'] = var5;
                    var5 = _closure3_slot0;
                    var5 = var5.handleCancelEditMemberRoles;
                    var1['onPress'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                };
 155:
                _fun0013_ip = 162; continue _fun0013;
 157:
                var7 = function() {
                    var1 = null;
                    return var1;
                };
 162:
                var1['headerLeft'] = var7;
                if(var5) { _fun0013_ip = 182; continue _fun0013 }
 170:
                var5 = undefined;
                if(!var6) { _fun0013_ip = 180; continue _fun0013 }
 175:
                var5 = function() {
                    var4 = _closure1_slot22;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var1 = 26;
                    var1 = var9[var1];
                    var3 = undefined;
                    var1 = var8.bind(var3)(var1);
                    var2 = var1.HeaderActionButton;
                    var1 = {};
                    var5 = 21;
                    var6 = var9[var5];
                    var6 = var8.bind(var3)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var5 = var9[var5];
                    var5 = var8.bind(var3)(var5);
                    var5 = var5.t;
                    var5 = var5.R3BPHx;
                    var5 = var6.bind(var7)(var5);
                    var1['text'] = var5;
                    var5 = _closure3_slot0;
                    var5 = var5.handleSaveMemberRoles;
                    var1['onPress'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                };
 180:
                _fun0013_ip = 187; continue _fun0013;
 182:
                var5 = function() {
                    var4 = _closure1_slot22;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 27;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.HeaderSubmittingIndicator;
                    var1 = {};
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                };
 187:
                var1['headerRight'] = var5;
                var4 = function headerTitle() {
                    var4 = _closure1_slot22;
                    var6 = _closure1_slot0;
                    var11 = _closure1_slot3;
                    var1 = 27;
                    var1 = var11[var1];
                    var3 = undefined;
                    var1 = var6.bind(var3)(var1);
                    var2 = var1.NavigatorHeader;
                    var1 = {};
                    var5 = 21;
                    var7 = var11[var5];
                    var7 = var6.bind(var3)(var7);
                    var8 = var7.intl;
                    var7 = var8.formatToPlainString;
                    var5 = var11[var5];
                    var5 = var6.bind(var3)(var5);
                    var5 = var5.t;
                    var6 = var5.v7odxs;
                    var5 = {};
                    var10 = _closure1_slot1;
                    var9 = 28;
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
 207:
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
 0:
                var15 = this;
                var2 = _closure1_slot25;
                var1 = var15.context;
                var5 = undefined;
                var31 = var2.bind(var5)(var1);
                var1 = var15.state;
                var35 = var1.nick;
                var1 = var15.props;
                var22 = var1.user;
                var30 = var1.guild;
                var29 = var1.guildRoles;
                var28 = var1.member;
                var27 = var1.editRoles;
                var32 = var1.nicknameError;
                var26 = var1.currentUser;
                var25 = var1.isEditing;
                var19 = var1.canChangeNick;
                var18 = var1.canManageRoles;
                var14 = var1.canKick;
                var8 = var1.canBan;
                var16 = var1.canDisableCommunication;
                var1 = null;
                if(!(var1 != var28)) { _fun0014_ip = 1747; continue _fun0014 }
 123:
                var4 = _closure1_slot23;
                var3 = _closure1_slot10;
                var2 = {};
                var6 = var31.rowLabel;
                var2['style'] = var6;
                var9 = _closure1_slot22;
                var7 = _closure1_slot0;
                var10 = _closure1_slot3;
                var6 = 29;
                var6 = var10[var6];
                var6 = var7.bind(var5)(var6);
                var7 = var6.Text;
                var6 = {};
                var11 = 'text-sm/medium';
                var6['variant'] = var11;
                var11 = _closure1_slot1;
                var23 = 28;
                var10 = var10[var23];
                var11 = var11.bind(var5)(var10);
                var10 = var11.getUserTag;
                var10 = var10.bind(var11)(var22);
                var6['children'] = var10;
                var7 = var9.bind(var5)(var7, var6);
                var6 = new Array(2);
                var6[0] = var7;
                var9 = var22.bot;
                var7 = null;
                if(!var9) { _fun0014_ip = 285; continue _fun0014 }
 238:
                var11 = _closure1_slot22;
                var10 = _closure1_slot1;
                var12 = _closure1_slot3;
                var9 = 30;
                var9 = var12[var9];
                var10 = var10.bind(var5)(var9);
                var9 = {};
                var12 = var22.isVerifiedBot;
                var12 = var12.bind(var22)();
                var9['verified'] = var12;
                var7 = var11.bind(var5)(var10, var9);
 285:
                var6[1] = var7;
                var2['children'] = var6;
                var24 = var4.bind(var5)(var3, var2);
                var2 = var1 != var28;
                var17 = null;
                if(!var2) { _fun0014_ip = 596; continue _fun0014 }
 311:
                var3 = _closure1_slot0;
                var4 = _closure1_slot3;
                var2 = 31;
                var2 = var4[var2];
                var3 = var3.bind(var5)(var2);
                var2 = var3.isMemberCommunicationDisabled;
                var2 = var2.bind(var3)(var28);
                var6 = _closure1_slot22;
                var12 = _closure1_slot0;
                var33 = _closure1_slot3;
                var3 = 20;
                var3 = var33[var3];
                var3 = var12.bind(var5)(var3);
                var4 = var3.FormSection;
                var3 = {};
                var10 = _closure1_slot22;
                var7 = 32;
                var7 = var33[var7];
                var7 = var12.bind(var5)(var7);
                var9 = var7.TableRow;
                var7 = {};
                var11 = 'danger';
                var7['variant'] = var11;
                var11 = 21;
                var13 = var33[var11];
                var13 = var12.bind(var5)(var13);
                var20 = var13.intl;
                var13 = var20.formatToPlainString;
                var11 = var33[var11];
                var11 = var12.bind(var5)(var11);
                var11 = var11.t;
                if(var2) { _fun0014_ip = 519; continue _fun0014 }
 445:
                var12 = var11.FN7NIS;
                var2 = {};
                var36 = _closure1_slot1;
                var34 = var33[var23];
                var36 = var36.bind(var5)(var34);
                var34 = var36.getName;
                var34 = var34.bind(var36)(var22);
                var2['user'] = var34;
                var2 = var13.bind(var20)(var12, var2);
                var7['label'] = var2;
                var2 = var15.handleSetCommunicationDisabled;
                var7['onPress'] = var2;
                var2 = var10.bind(var5)(var9, var7);
                var3['children'] = var2;
                var2 = var6.bind(var5)(var4, var3);
                _fun0014_ip = 593; continue _fun0014;
 519:
                var12 = var11.RuL6o6;
                var11 = {};
                var34 = _closure1_slot1;
                var33 = var33[var23];
                var34 = var34.bind(var5)(var33);
                var33 = var34.getName;
                var33 = var33.bind(var34)(var22);
                var11['user'] = var33;
                var11 = var13.bind(var20)(var12, var11);
                var7['label'] = var11;
                var11 = var15.handleClearCommunicationDisabled;
                var7['onPress'] = var11;
                var7 = var10.bind(var5)(var9, var7);
                var3['children'] = var7;
                var2 = var6.bind(var5)(var4, var3);
 593:
                var17 = var2;
 596:
                var2 = _closure1_slot11;
                var2 = var2.bind(var5)(var30, var22);
                if(var2) { _fun0014_ip = 622; continue _fun0014 }
 609:
                var3 = _closure1_slot12;
                var3 = var3.bind(var5)(var30, var26);
                var2 = !var3;
 622:
                if(var2) { _fun0014_ip = 631; continue _fun0014 }
 625:
                var2 = var22.bot;
 631:
                var7 = undefined;
                if(var2) { _fun0014_ip = 780; continue _fun0014 }
 639:
                var4 = _closure1_slot22;
                var20 = _closure1_slot0;
                var33 = _closure1_slot3;
                var2 = 20;
                var2 = var33[var2];
                var2 = var20.bind(var5)(var2);
                var3 = var2.FormSection;
                var2 = {};
                var10 = _closure1_slot22;
                var6 = 32;
                var6 = var33[var6];
                var6 = var20.bind(var5)(var6);
                var9 = var6.TableRow;
                var6 = {};
                var11 = 'danger';
                var6['variant'] = var11;
                var11 = 21;
                var12 = var33[var11];
                var12 = var20.bind(var5)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var11 = var33[var11];
                var11 = var20.bind(var5)(var11);
                var11 = var11.t;
                var11 = var11.Z5s7PD;
                var11 = var12.bind(var13)(var11);
                var6['label'] = var11;
                var11 = var15.handleTransferOwnership;
                var6['onPress'] = var11;
                var6 = var10.bind(var5)(var9, var6);
                var2['children'] = var6;
                var7 = var4.bind(var5)(var3, var2);
 780:
                var4 = _closure1_slot23;
                var13 = _closure1_slot0;
                var37 = _closure1_slot3;
                var9 = 20;
                var2 = var37[var9];
                var2 = var13.bind(var5)(var2);
                var3 = var2.Form;
                var2 = {};
                var6 = {};
                var10 = 1;
                var6['flex'] = var10;
                var2['style'] = var6;
                var6 = var15.props;
                var6 = var6.contentContainerStyle;
                var2['contentContainerStyle'] = var6;
                var11 = _closure1_slot22;
                var6 = var37[var9];
                var6 = var13.bind(var5)(var6);
                var10 = var6.FormSection;
                var6 = {};
                var20 = _closure1_slot22;
                var12 = var37[var9];
                var12 = var13.bind(var5)(var12);
                var13 = var12.FormRow;
                var12 = {};
                var36 = _closure1_slot22;
                var34 = _closure1_slot1;
                var33 = 33;
                var33 = var37[var33];
                var34 = var34.bind(var5)(var33);
                var33 = {};
                var37 = var31.avatar;
                var33['style'] = var37;
                var33['user'] = var22;
                var37 = var30.id;
                var33['guildId'] = var37;
                var33 = var36.bind(var5)(var34, var33);
                var12['leading'] = var33;
                var31 = var31.userInfo;
                var12['DEPRECATED_style'] = var31;
                var12['label'] = var24;
                var12 = var20.bind(var5)(var13, var12);
                var6['children'] = var12;
                var10 = var11.bind(var5)(var10, var6);
                var6 = new Array(4);
                var6[0] = var10;
                var12 = _closure1_slot23;
                var11 = _closure1_slot24;
                var10 = {};
                if(var19) { _fun0014_ip = 1005; continue _fun0014 }
 991:
                var20 = var26.id;
                var13 = var22.id;
                var19 = var20 === var13;
 1005:
                if(!var19) { _fun0014_ip = 1246; continue _fun0014 }
 1011:
                var24 = _closure1_slot22;
                var36 = _closure1_slot0;
                var31 = _closure1_slot3;
                var13 = var31[var9];
                var13 = var36.bind(var5)(var13);
                var20 = var13.FormSection;
                var13 = {};
                var38 = 21;
                var33 = var31[var38];
                var33 = var36.bind(var5)(var33);
                var34 = var33.intl;
                var33 = var34.string;
                var31 = var31[var38];
                var31 = var36.bind(var5)(var31);
                var31 = var31.t;
                var31 = var31.621LJC;
                var31 = var33.bind(var34)(var31);
                var13['title'] = var31;
                var33 = var1 != var32;
                var31 = undefined;
                if(!var33) { _fun0014_ip = 1105; continue _fun0014 }
 1102:
                var31 = var32;
 1105:
                var13['error'] = var31;
                var33 = _closure1_slot22;
                var37 = _closure1_slot0;
                var34 = _closure1_slot3;
                var31 = var34[var9];
                var31 = var37.bind(var5)(var31);
                var32 = var31.FormInput;
                var31 = {};
                var31['value'] = var35;
                var35 = false;
                var31['showTopContainer'] = var35;
                var35 = var34[var38];
                var35 = var37.bind(var5)(var35);
                var36 = var35.intl;
                var35 = var36.string;
                var34 = var34[var38];
                var34 = var37.bind(var5)(var34);
                var34 = var34.t;
                var34 = var34.h7UKXl;
                var34 = var35.bind(var36)(var34);
                var31['placeholder'] = var34;
                var34 = var15.handleChangeNickname;
                var31['onChange'] = var34;
                var34 = var15.handleSaveNickname;
                var31['onEndEditing'] = var34;
                var34 = 32;
                var31['maxLength'] = var34;
                var31 = var33.bind(var5)(var32, var31);
                var13['children'] = var31;
                var19 = var24.bind(var5)(var20, var13);
 1246:
                var13 = new Array(4);
                var13[0] = var19;
                if(!var18) { _fun0014_ip = 1341; continue _fun0014 }
 1257:
                var24 = _closure1_slot22;
                var20 = _closure1_slot26;
                var19 = {};
                var19['guild'] = var30;
                var19['guildRoles'] = var29;
                if(var25) { _fun0014_ip = 1285; continue _fun0014 }
 1279:
                var27 = var28.roles;
 1285:
                if(!(var1 == var27)) { _fun0014_ip = 1293; continue _fun0014 }
 1289:
                var27 = new Array(0);
 1293:
                var19['roles'] = var27;
                var26 = var26.id;
                var19['currentUserId'] = var26;
                var19['isEditing'] = var25;
                var25 = var15.handleToggleRole;
                var19['onToggleRole'] = var25;
                var25 = var15.handleStartEditingRoles;
                var19['onStartEditing'] = var25;
                var18 = var24.bind(var5)(var20, var19);
 1341:
                var13[1] = var18;
                if(!var16) { _fun0014_ip = 1351; continue _fun0014 }
 1348:
                var16 = var17;
 1351:
                var13[2] = var16;
                if(!var14) { _fun0014_ip = 1532; continue _fun0014 }
 1361:
                var18 = _closure1_slot22;
                var26 = _closure1_slot0;
                var29 = _closure1_slot3;
                var16 = var29[var9];
                var16 = var26.bind(var5)(var16);
                var17 = var16.FormSection;
                var16 = {};
                var24 = _closure1_slot22;
                var19 = 32;
                var19 = var29[var19];
                var19 = var26.bind(var5)(var19);
                var20 = var19.TableRow;
                var19 = {};
                var25 = 'danger';
                var19['variant'] = var25;
                var25 = 21;
                var27 = var29[var25];
                var27 = var26.bind(var5)(var27);
                var28 = var27.intl;
                var27 = var28.formatToPlainString;
                var25 = var29[var25];
                var25 = var26.bind(var5)(var25);
                var25 = var25.t;
                var26 = var25.yOiJHB;
                var25 = {};
                var30 = _closure1_slot1;
                var29 = var29[var23];
                var30 = var30.bind(var5)(var29);
                var29 = var30.getName;
                var29 = var29.bind(var30)(var22);
                var25['user'] = var29;
                var25 = var27.bind(var28)(var26, var25);
                var19['label'] = var25;
                var25 = var15.handleKick;
                var19['onPress'] = var25;
                var19 = var24.bind(var5)(var20, var19);
                var16['children'] = var19;
                var14 = var18.bind(var5)(var17, var16);
 1532:
                var13[3] = var14;
                var10['children'] = var13;
                var10 = var12.bind(var5)(var11, var10);
                var6[1] = var10;
                if(!var8) { _fun0014_ip = 1727; continue _fun0014 }
 1556:
                var11 = _closure1_slot22;
                var17 = _closure1_slot0;
                var20 = _closure1_slot3;
                var9 = var20[var9];
                var9 = var17.bind(var5)(var9);
                var10 = var9.FormSection;
                var9 = {};
                var14 = _closure1_slot22;
                var12 = 32;
                var12 = var20[var12];
                var12 = var17.bind(var5)(var12);
                var13 = var12.TableRow;
                var12 = {};
                var16 = 'danger';
                var12['variant'] = var16;
                var16 = 21;
                var18 = var20[var16];
                var18 = var17.bind(var5)(var18);
                var19 = var18.intl;
                var18 = var19.formatToPlainString;
                var16 = var20[var16];
                var16 = var17.bind(var5)(var16);
                var16 = var16.t;
                var17 = var16.TuAZub;
                var16 = {};
                var21 = _closure1_slot1;
                var20 = var20[var23];
                var21 = var21.bind(var5)(var20);
                var20 = var21.getName;
                var20 = var20.bind(var21)(var22);
                var16['user'] = var20;
                var16 = var18.bind(var19)(var17, var16);
                var12['label'] = var16;
                var15 = var15.handleBan;
                var12['onPress'] = var15;
                var12 = var14.bind(var5)(var13, var12);
                var9['children'] = var12;
                var8 = var11.bind(var5)(var10, var9);
 1727:
                var6[2] = var8;
                var6[3] = var7;
                var2['children'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var2;
 1747:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var5.bind(var1)(var8);
    var _closure1_slot27 = var8;
    var5 = 34;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.ThemeContext;
    var8['contextType'] = var5;
    var5 = 46;
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
        var2 = 44;
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
                var2 = _closure1_slot21;
                var5 = var2.MEMBER_EDIT;
                var3 = {};
                var6 = function render(arg1) {
                    var4 = _closure1_slot22;
                    var3 = _closure1_slot30;
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
                    var4 = _closure1_slot22;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var1 = 42;
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
                    var4 = _closure1_slot22;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var1 = 43;
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
        var3 = _closure1_slot22;
        var2 = _closure1_slot0;
        var1 = 45;
        var1 = var8[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.Navigator;
        var1 = {};
        var1['screens'] = var6;
        var5 = _closure1_slot21;
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