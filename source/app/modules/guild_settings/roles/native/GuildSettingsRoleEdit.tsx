// app/modules/guild_settings/roles/native/GuildSettingsRoleEdit.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var12 = native3;
    var7 = native4;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
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
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot28 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot28 = var1;
    var1 = ['guild'];
    var _closure1_slot4 = var1;
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
    var4 = var12.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var11 = 1;
    var4 = var6[var11];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var7 = 8;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.View;
    var _closure1_slot13 = var7;
    var7 = 9;
    var7 = var6[var7];
    var7 = var12.bind(var1)(var7);
    var _closure1_slot14 = var7;
    var7 = 10;
    var7 = var6[var7];
    var7 = var12.bind(var1)(var7);
    var _closure1_slot15 = var7;
    var7 = 11;
    var7 = var6[var7];
    var7 = var12.bind(var1)(var7);
    var _closure1_slot16 = var7;
    var7 = 12;
    var7 = var6[var7];
    var7 = var12.bind(var1)(var7);
    var _closure1_slot17 = var7;
    var7 = 13;
    var7 = var6[var7];
    var7 = var12.bind(var1)(var7);
    var _closure1_slot18 = var7;
    var7 = 14;
    var7 = var6[var7];
    var7 = var12.bind(var1)(var7);
    var _closure1_slot19 = var7;
    var7 = 15;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.GuildSettingsRoleEditSections;
    var _closure1_slot20 = var7;
    var7 = 16;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var8 = var7.AnalyticEvents;
    var _closure1_slot21 = var8;
    var8 = var7.DEFAULT_ROLE_COLOR;
    var _closure1_slot22 = var8;
    var7 = var7.GuildSettingsSections;
    var _closure1_slot23 = var7;
    var7 = 17;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var8 = var7.jsx;
    var _closure1_slot24 = var8;
    var7 = var7.jsxs;
    var _closure1_slot25 = var7;
    var7 = 18;
    var7 = var6[var7];
    var9 = var5.bind(var1)(var7);
    var8 = var9.createLegacyClassComponentStyles;
    var7 = {};
    var10 = {};
    var10['flex'] = var11;
    var7['container'] = var10;
    var10 = {};
    var10['flex'] = var11;
    var11 = 19;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_SECONDARY;
    var10['backgroundColor'] = var11;
    var7['innerContainer'] = var10;
    var10 = {'marginVertical': 8, 'marginHorizontal': 16};
    var7['managedRolesWarningContainer'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot26 = var7;
    var7 = var4.PureComponent;
    var4 = function(arg1) {
        var4 = function GuildSettingsRoleEdit(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var8 = _closure1_slot7;
                var3 = _closure2_slot0;
                var4 = undefined;
                var8 = var8.bind(var4)(var5, var3);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot10;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot9;
                var1 = _closure1_slot28;
                var1 = var1.bind(var4)();
                if(var1) { _fun0002_ip = 86; continue _fun0002 }
 73:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0002_ip = 120; continue _fun0002;
 86:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot10;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
 120:
                var1 = var3.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
                var3 = {'changed': false, 'submitting': false};
                var4 = var1.props;
                var4 = var4.role;
                var5 = var4.name;
                var3['name'] = var5;
                var5 = var4.permissions;
                var3['permissions'] = var5;
                var5 = var4.mentionable;
                var3['mentionable'] = var5;
                var5 = var4.color;
                var3['color'] = var5;
                var5 = var4.colors;
                var3['colors'] = var5;
                var4 = var4.hoist;
                var3['hoist'] = var4;
                var1['state'] = var3;
                var3 = function(arg1) {
                    var5 = _closure3_slot0;
                    var1 = var5.props;
                    var4 = var1.navigation;
                    var3 = var4.push;
                    var1 = _closure1_slot23;
                    var2 = var1.ROLE_EDIT_REFRESH;
                    var1 = {};
                    var7 = var5.props;
                    var8 = var1;
                    var5 = copyDataProperties(var8, var7);
                    var6 = arg1;
                    var5 = 'section';
                    var1[var5] = var6;
                    var1 = var3.bind(var4)(var2, var1);
                    var1 = undefined;
                    return var1;
                };
                var1['onSubScreenValueChange'] = var3;
                var3 = function(arg1) {
                    var14 = _closure1_slot0;
                    var15 = _closure1_slot3;
                    var1 = 20;
                    var4 = var15[var1];
                    var1 = undefined;
                    var6 = var14.bind(var1)(var4);
                    var5 = var6.collectGuildAnalyticsMetadata;
                    var12 = _closure3_slot0;
                    var4 = var12.props;
                    var4 = var4.guild;
                    var4 = var4.id;
                    var6 = var5.bind(var6)(var4);
                    var4 = var12.props;
                    var4 = var4.role;
                    var11 = var4.id;
                    var _closure4_slot0 = var11;
                    var10 = var4.mentionable;
                    var8 = var4.hoist;
                    var9 = var4.permissions;
                    var4 = 21;
                    var4 = var15[var4];
                    var7 = var14.bind(var1)(var4);
                    var5 = var7.getSectionAnalyticsName;
                    var4 = arg1;
                    var13 = var5.bind(var7)(var4);
                    var7 = _closure1_slot15;
                    var5 = var7.getMembers;
                    var4 = var12.props;
                    var4 = var4.guild;
                    var4 = var4.id;
                    var7 = var5.bind(var7)(var4);
                    var4 = _closure1_slot1;
                    var5 = 22;
                    var5 = var15[var5];
                    var5 = var4.bind(var1)(var5);
                    var7 = var5.bind(var1)(var7);
                    var5 = var7.filter;
                    var3 = function(arg1) {
                        var1 = arg1;
                        var3 = var1.roles;
                        var2 = var3.includes;
                        var1 = _closure4_slot0;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var5 = var5.bind(var7)(var3);
                    var3 = var5.size;
                    var7 = var3.bind(var5)();
                    var3 = 23;
                    var3 = var15[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.track;
                    var2 = _closure1_slot21;
                    var3 = var2.ROLE_PAGE_VIEWED;
                    var2 = {};
                    var2['tab_opened'] = var13;
                    var13 = 24;
                    var13 = var15[var13];
                    var14 = var14.bind(var1)(var13);
                    var13 = var14.isEveryoneRoleId;
                    var12 = var12.props;
                    var12 = var12.guild;
                    var12 = var12.id;
                    var12 = var13.bind(var14)(var12, var11);
                    var2['is_everyone'] = var12;
                    var2['role_id'] = var11;
                    var2['role_mentionable'] = var10;
                    var2['role_hoist'] = var8;
                    var8 = var9.toString;
                    var8 = var8.bind(var9)();
                    var2['role_permissions'] = var8;
                    var2['role_num_members'] = var7;
                    var17 = var2;
                    var16 = var6;
                    var6 = copyDataProperties(var17, var16);
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                var1['trackTabChanged'] = var3;
                var3 = function(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.setState;
                    var1 = {};
                    var4 = true;
                    var1['changed'] = var4;
                    var4 = arg1;
                    var1['name'] = var4;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var1['handleNameChanged'] = var3;
                var3 = function(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var2 = arg1;
                        var3 = _closure1_slot22;
                        var1 = 0;
                        if(!(var2 !== var3)) { _fun0003_ip = 19; continue _fun0003 }
 16:
                        var1 = var2;
 19:
                        var4 = _closure3_slot0;
                        var2 = var4.state;
                        var7 = var2.colors;
                        var3 = var4.setState;
                        var2 = {};
                        var5 = true;
                        var2['changed'] = var5;
                        var2['color'] = var1;
                        var5 = {};
                        var5['primary_color'] = var1;
                        var6 = null;
                        var9 = var6 == var7;
                        var1 = undefined;
                        var8 = undefined;
                        if(var9) { _fun0003_ip = 81; continue _fun0003 }
 75:
                        var8 = var7.secondary_color;
 81:
                        var5['secondary_color'] = var8;
                        var8 = var6 == var7;
                        var6 = undefined;
                        if(var8) { _fun0003_ip = 101; continue _fun0003 }
 95:
                        var6 = var7.tertiary_color;
 101:
                        var5['tertiary_color'] = var6;
                        var2['colors'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    }
                };
                var1['handleColorChanged'] = var3;
                var3 = function(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.setState;
                    var1 = {};
                    var4 = true;
                    var1['changed'] = var4;
                    var4 = arg1;
                    var1['mentionable'] = var4;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var1['handleMentionableChanged'] = var3;
                var3 = function(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.setState;
                    var1 = {};
                    var4 = true;
                    var1['changed'] = var4;
                    var4 = arg1;
                    var1['hoist'] = var4;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var1['handleHoistChanged'] = var3;
                var3 = function(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.setState;
                    var1 = {};
                    var4 = true;
                    var1['changed'] = var4;
                    var4 = arg1;
                    var1['permissions'] = var4;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var1['handlePermissionsChanged'] = var3;
                var3 = function() {
                    var3 = _closure3_slot0;
                    var2 = var3.setState;
                    var1 = {};
                    var4 = true;
                    var1['changed'] = var4;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var1['handleConnectionsChanged'] = var3;
                var3 = function() {
                    var1 = global;
                    var3 = var1.Promise;
                    var1 = var3.prototype;
                    var2 = Object.create(var1, {constructor: {value: var3}});
                    var4 = function(arg1) {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                            var2 = arg1;
                            var _closure5_slot0 = var2;
                            var3 = _closure3_slot0;
                            var4 = var3.props;
                            var4 = var4.navigation;
                            var _closure5_slot2 = var4;
                            var4 = var3.state;
                            var5 = var4.name;
                            var _closure5_slot3 = var5;
                            var5 = var4.permissions;
                            var _closure5_slot4 = var5;
                            var5 = var4.mentionable;
                            var _closure5_slot5 = var5;
                            var5 = var4.color;
                            var _closure5_slot6 = var5;
                            var5 = var4.colors;
                            var _closure5_slot7 = var5;
                            var4 = var4.hoist;
                            var _closure5_slot8 = var4;
                            var4 = var3.props;
                            var4 = var4.guild;
                            var4 = var4.id;
                            var _closure5_slot9 = var4;
                            var3 = var3.props;
                            var3 = var3.role;
                            var5 = var3.id;
                            var _closure5_slot10 = var5;
                            var4 = _closure1_slot18;
                            var4 = var4.hasRoleConfigurationChanges;
                            if(!var4) { _fun0004_ip = 172; continue _fun0004 }
 150:
                            var6 = _closure1_slot18;
                            var7 = var6.editedRoleIdsForConfigurations;
                            var6 = var7.has;
                            var4 = var6.bind(var7)(var5);
 172:
                            if(!var4) { _fun0004_ip = 203; continue _fun0004 }
 175:
                            var4 = _closure1_slot18;
                            var3 = var4.getEditedRoleConnectionConfigurationsMap;
                            var4 = var3.bind(var4)();
                            var3 = var4.get;
                            var3 = var3.bind(var4)(var5);
                            var _closure5_slot1 = var3;
 203:
                            var3 = function success() {
                                var3 = _closure5_slot2;
                                var1 = var3.pop;
                                var1 = var1.bind(var3)();
                                var4 = _closure3_slot0;
                                var3 = var4.setState;
                                var1 = {'changed': false, 'submitting': false};
                                var1 = var3.bind(var4)(var1);
                                var7 = _closure1_slot1;
                                var8 = _closure1_slot3;
                                var1 = 25;
                                var3 = var8[var1];
                                var1 = undefined;
                                var5 = var7.bind(var1)(var3);
                                var4 = var5.open;
                                var3 = {};
                                var9 = 'ROLE_EDIT_SAVED';
                                var3['key'] = var9;
                                var11 = _closure1_slot0;
                                var6 = 26;
                                var9 = var8[var6];
                                var9 = var11.bind(var1)(var9);
                                var10 = var9.intl;
                                var9 = var10.string;
                                var6 = var8[var6];
                                var6 = var11.bind(var1)(var6);
                                var6 = var6.t;
                                var6 = var6.ulZn1t;
                                var6 = var9.bind(var10)(var6);
                                var3['content'] = var6;
                                var6 = 27;
                                var6 = var8[var6];
                                var6 = var7.bind(var1)(var6);
                                var3['icon'] = var6;
                                var3 = var4.bind(var5)(var3);
                                var2 = _closure5_slot0;
                                var2 = var2.bind(var1)();
                                return var1;
                            };
                            var _closure5_slot11 = var3;
                            var3 = function failure() {
                                var3 = _closure3_slot0;
                                var2 = var3.setState;
                                var1 = {};
                                var4 = false;
                                var1['submitting'] = var4;
                                var1 = var2.bind(var3)(var1);
                                var6 = _closure1_slot1;
                                var7 = _closure1_slot3;
                                var1 = 25;
                                var2 = var7[var1];
                                var1 = undefined;
                                var4 = var6.bind(var1)(var2);
                                var3 = var4.open;
                                var2 = {};
                                var8 = 'ERROR_OCCURRED_TRY_AGAIN';
                                var2['key'] = var8;
                                var10 = _closure1_slot0;
                                var5 = 26;
                                var8 = var7[var5];
                                var8 = var10.bind(var1)(var8);
                                var9 = var8.intl;
                                var8 = var9.string;
                                var5 = var7[var5];
                                var5 = var10.bind(var1)(var5);
                                var5 = var5.t;
                                var5 = var5.fEptJC;
                                var5 = var8.bind(var9)(var5);
                                var2['content'] = var5;
                                var5 = 28;
                                var5 = var7[var5];
                                var5 = var6.bind(var1)(var5);
                                var2['icon'] = var5;
                                var2 = var3.bind(var4)(var2);
                                var2 = _closure5_slot0;
                                var2 = var2.bind(var1)();
                                return var1;
                            };
                            var _closure5_slot12 = var3;
                            var4 = _closure3_slot0;
                            var3 = var4.setState;
                            var2 = {};
                            var5 = true;
                            var2['submitting'] = var5;
                            var1 = function() {
                                var4 = _closure1_slot1;
                                var3 = _closure1_slot3;
                                var2 = 29;
                                var3 = var3[var2];
                                var2 = undefined;
                                var6 = var4.bind(var2)(var3);
                                var5 = var6.updateRole;
                                var4 = _closure5_slot9;
                                var3 = _closure5_slot10;
                                var2 = {};
                                var8 = _closure5_slot3;
                                var2['name'] = var8;
                                var8 = _closure5_slot4;
                                var2['permissions'] = var8;
                                var8 = _closure5_slot6;
                                var2['color'] = var8;
                                var8 = _closure5_slot7;
                                var2['colors'] = var8;
                                var8 = _closure5_slot8;
                                var2['hoist'] = var8;
                                var7 = _closure5_slot5;
                                var2['mentionable'] = var7;
                                var4 = var5.bind(var6)(var4, var3, var2);
                                var3 = var4.then;
                                var2 = function() {
                                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                                        var3 = _closure5_slot1;
                                        var2 = null;
                                        if(!(var2 == var3)) { _fun0005_ip = 25; continue _fun0005 }
 13:
                                        var3 = _closure5_slot11;
                                        var2 = undefined;
                                        var2 = var3.bind(var2)();
                                        _fun0005_ip = 94; continue _fun0005;
 25:
                                        var4 = _closure1_slot0;
                                        var3 = _closure1_slot3;
                                        var2 = 30;
                                        var3 = var3[var2];
                                        var2 = undefined;
                                        var6 = var4.bind(var2)(var3);
                                        var5 = var6.putRoleConnectionsConfigurations;
                                        var4 = _closure5_slot9;
                                        var3 = _closure5_slot10;
                                        var2 = _closure5_slot1;
                                        var4 = var5.bind(var6)(var4, var3, var2);
                                        var3 = var4.then;
                                        var2 = _closure5_slot11;
                                        var1 = _closure5_slot12;
                                        var1 = var3.bind(var4)(var2, var1);
 94:
                                        var1 = undefined;
                                        return var1;
                                    }
                                };
                                var1 = function() {
                                    var2 = _closure5_slot12;
                                    var1 = undefined;
                                    var2 = var2.bind(var1)();
                                    return var1;
                                };
                                var1 = var3.bind(var4)(var2, var1);
                                return var1;
                            };
                            var1 = var3.bind(var4)(var2, var1);
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var5 = var2;
                    var1 = new var5[var3](var4, var3);
                    var1 = var1 instanceof Object ? var1 : var2;
                    return var1;
                };
                var1['handleSaveRole'] = var3;
                var3 = function() {
                    var1 = _closure3_slot0;
                    var1 = var1.props;
                    var2 = var1.guild;
                    var _closure4_slot1 = var2;
                    var14 = var1.role;
                    var _closure4_slot2 = var14;
                    var1 = var1.navigation;
                    var _closure4_slot3 = var1;
                    var3 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var1 = 31;
                    var2 = var7[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.show;
                    var2 = {};
                    var6 = _closure1_slot0;
                    var9 = 26;
                    var10 = var7[var9];
                    var10 = var6.bind(var1)(var10);
                    var13 = var10.intl;
                    var12 = var13.formatToPlainString;
                    var10 = var7[var9];
                    var10 = var6.bind(var1)(var10);
                    var10 = var10.t;
                    var11 = var10.FiMFTU;
                    var10 = {};
                    var14 = var14.name;
                    var10['name'] = var14;
                    var10 = var12.bind(var13)(var11, var10);
                    var2['title'] = var10;
                    var10 = var7[var9];
                    var10 = var6.bind(var1)(var10);
                    var12 = var10.intl;
                    var11 = var12.string;
                    var10 = var7[var9];
                    var10 = var6.bind(var1)(var10);
                    var10 = var10.t;
                    var10 = var10.qALKn5;
                    var10 = var11.bind(var12)(var10);
                    var2['body'] = var10;
                    var10 = var7[var9];
                    var10 = var6.bind(var1)(var10);
                    var12 = var10.intl;
                    var11 = var12.string;
                    var10 = var7[var9];
                    var10 = var6.bind(var1)(var10);
                    var10 = var10.t;
                    var10 = var10.ETE/oK;
                    var10 = var11.bind(var12)(var10);
                    var2['cancelText'] = var10;
                    var10 = var7[var9];
                    var10 = var6.bind(var1)(var10);
                    var11 = var10.intl;
                    var10 = var11.string;
                    var9 = var7[var9];
                    var9 = var6.bind(var1)(var9);
                    var9 = var9.t;
                    var9 = var9.N86XcH;
                    var9 = var10.bind(var11)(var9);
                    var2['confirmText'] = var9;
                    var9 = _closure1_slot6;
                    var8 = function* () {
                        var1 = function* anon_0_() {
                            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0006_ip = 187; continue _fun0006 }
 10:
                                var2 = _closure4_slot2;
                                var6 = var2.tags;
                                var5 = null;
                                var7 = var5 == var6;
                                var3 = undefined;
                                var2 = undefined;
                                if(var7) { _fun0006_ip = 42; continue _fun0006 }
 36:
                                var2 = var6.guild_connections;
 42:
                                if(!(var5 === var2)) { _fun0006_ip = 114; continue _fun0006 }
 46:
                                var5 = _closure1_slot0;
                                var6 = _closure1_slot3;
                                var2 = 30;
                                var2 = var6[var2];
                                var8 = var5.bind(var3)(var2);
                                var7 = var8.putRoleConnectionsConfigurations;
                                var2 = _closure4_slot1;
                                var6 = var2.id;
                                var2 = _closure4_slot2;
                                var5 = var2.id;
                                var2 = new Array(0);
                                var2 = var7.bind(var8)(var6, var5, var2);
                                SaveGenerator(address=108);
 106:
                                return var2;
 108:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                                if(var5) { _fun0006_ip = 184; continue _fun0006 }
 114:
                                var6 = _closure1_slot1;
                                var7 = _closure1_slot3;
                                var5 = 29;
                                var5 = var7[var5];
                                var8 = var6.bind(var3)(var5);
                                var7 = var8.deleteRole;
                                var5 = _closure4_slot1;
                                var6 = var5.id;
                                var5 = _closure4_slot2;
                                var5 = var5.id;
                                var5 = var7.bind(var8)(var6, var5);
                                var5 = _closure4_slot3;
                                var4 = var5.pop;
                                var4 = var4.bind(var5)();
                                return var3;
 184:
                                return var2;
 187:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var8 = var9.bind(var1)(var8);
                    var _closure4_slot0 = var8;
                    var5 = function() {
                        var1 = undefined;
                        var4 = _closure4_slot0;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var2['onConfirm'] = var5;
                    var5 = false;
                    var2['hideActionSheet'] = var5;
                    var5 = 32;
                    var5 = var7[var5];
                    var5 = var6.bind(var1)(var5);
                    var5 = var5.ButtonColors;
                    var5 = var5.RED;
                    var2['confirmColor'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var1['handleDeleteRole'] = var3;
                var2 = function() {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                        var1 = _closure3_slot0;
                        var2 = var1.props;
                        var3 = var2.navigation;
                        var6 = var2.section;
                        var1 = var1.state;
                        var1 = var1.changed;
                        var5 = _closure1_slot20;
                        var5 = var5.DISPLAY;
                        if(!(var6 !== var5)) { _fun0007_ip = 76; continue _fun0007 }
 51:
                        var5 = _closure3_slot0;
                        var4 = var5.trackTabChanged;
                        var2 = _closure1_slot20;
                        var2 = var2.DISPLAY;
                        var2 = var4.bind(var5)(var2);
 76:
                        var2 = global;
                        if(var1) { _fun0007_ip = 112; continue _fun0007 }
 81:
                        var1 = var3.pop;
                        var1 = var1.bind(var3)();
                        var4 = var2.Promise;
                        var3 = var4.resolve;
                        var1 = false;
                        var1 = var3.bind(var4)(var1);
                        _fun0007_ip = 147; continue _fun0007;
 112:
                        var4 = var2.Promise;
                        var2 = var4.prototype;
                        var3 = Object.create(var2, {constructor: {value: var4}});
                        var7 = function(arg1) {
                            var1 = arg1;
                            var _closure5_slot0 = var1;
                            var3 = _closure1_slot1;
                            var7 = _closure1_slot3;
                            var1 = 31;
                            var2 = var7[var1];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.show;
                            var2 = {};
                            var6 = _closure1_slot0;
                            var8 = 26;
                            var9 = var7[var8];
                            var9 = var6.bind(var1)(var9);
                            var11 = var9.intl;
                            var10 = var11.string;
                            var9 = var7[var8];
                            var9 = var6.bind(var1)(var9);
                            var9 = var9.t;
                            var9 = var9.P3yCXF;
                            var9 = var10.bind(var11)(var9);
                            var2['title'] = var9;
                            var9 = var7[var8];
                            var9 = var6.bind(var1)(var9);
                            var11 = var9.intl;
                            var10 = var11.string;
                            var9 = var7[var8];
                            var9 = var6.bind(var1)(var9);
                            var9 = var9.t;
                            var9 = var9.BU8Qoa;
                            var9 = var10.bind(var11)(var9);
                            var2['body'] = var9;
                            var9 = var7[var8];
                            var9 = var6.bind(var1)(var9);
                            var11 = var9.intl;
                            var10 = var11.string;
                            var9 = var7[var8];
                            var9 = var6.bind(var1)(var9);
                            var9 = var9.t;
                            var9 = var9.lHKZ19;
                            var9 = var10.bind(var11)(var9);
                            var2['cancelText'] = var9;
                            var9 = var7[var8];
                            var9 = var6.bind(var1)(var9);
                            var10 = var9.intl;
                            var9 = var10.string;
                            var8 = var7[var8];
                            var8 = var6.bind(var1)(var8);
                            var8 = var8.t;
                            var8 = var8.p89ACg;
                            var8 = var9.bind(var10)(var8);
                            var2['confirmText'] = var8;
                            var8 = function onConfirm() {
                                var2 = _closure3_slot0;
                                var1 = var2.handleSaveRole;
                                var3 = var1.bind(var2)();
                                var2 = var3.then;
                                var1 = function() {
                                    var3 = _closure5_slot0;
                                    var2 = undefined;
                                    var1 = true;
                                    var1 = var3.bind(var2)(var1);
                                    return var1;
                                };
                                var1 = var2.bind(var3)(var1);
                                var1 = undefined;
                                return var1;
                            };
                            var2['onConfirm'] = var8;
                            var5 = function onCancel() {
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot3;
                                var1 = 33;
                                var2 = var2[var1];
                                var1 = undefined;
                                var3 = var3.bind(var1)(var2);
                                var2 = var3.init;
                                var2 = var2.bind(var3)();
                                var3 = _closure5_slot0;
                                var2 = true;
                                var2 = var3.bind(var1)(var2);
                                return var1;
                            };
                            var2['onCancel'] = var5;
                            var5 = false;
                            var2['hideActionSheet'] = var5;
                            var5 = 32;
                            var5 = var7[var5];
                            var5 = var6.bind(var1)(var5);
                            var5 = var5.ButtonColors;
                            var5 = var5.BRAND;
                            var2['confirmColor'] = var5;
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        };
                        var8 = var3;
                        var2 = new var8[var4](var7, var6);
                        var1 = var2 instanceof Object ? var2 : var3;
 147:
                        return var1;
                    }
                };
                var1['handleBack'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot11;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot8;
        var5 = {};
        var1 = 'componentDidMount';
        var5['key'] = var1;
        var1 = function value() {
            var4 = this;
            var2 = var4.trackTabChanged;
            var1 = var4.props;
            var1 = var1.section;
            var1 = var2.bind(var4)(var1);
            var3 = var4.updateNavigation;
            var2 = var4.state;
            var1 = undefined;
            var2 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(7);
        var1[0] = var5;
        var5 = {};
        var7 = 'componentDidUpdate';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var4 = this;
            var3 = var4.updateNavigation;
            var2 = arg1;
            var1 = arg2;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'updateNavigation';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var5 = arg1;
                var2 = arg2;
                var8 = this;
                var _closure3_slot0 = var8;
                var1 = var8.props;
                var9 = var1.role;
                var _closure3_slot1 = var9;
                var3 = var1.navigation;
                var1 = var8.state;
                var7 = var1.submitting;
                var6 = var1.changed;
                var1 = null;
                var1 = var1 != var5;
                if(!var1) { _fun0008_ip = 82; continue _fun0008 }
 62:
                var9 = var9.name;
                var5 = var5.role;
                var5 = var5.name;
                var1 = var9 === var5;
 82:
                if(!var1) { _fun0008_ip = 95; continue _fun0008 }
 85:
                var5 = var2.submitting;
                var1 = var7 === var5;
 95:
                if(!var1) { _fun0008_ip = 108; continue _fun0008 }
 98:
                var2 = var2.changed;
                var1 = var6 === var2;
 108:
                if(var1) { _fun0008_ip = 212; continue _fun0008 }
 111:
                var2 = var3.setOptions;
                var1 = {};
                var10 = _closure1_slot0;
                var9 = _closure1_slot3;
                var5 = 34;
                var9 = var9[var5];
                var5 = undefined;
                var10 = var10.bind(var5)(var9);
                var9 = var10.getHeaderConditionalBackButton;
                var8 = var8.handleBack;
                var8 = var9.bind(var10)(var8);
                var1['headerLeft'] = var8;
                if(var7) { _fun0008_ip = 183; continue _fun0008 }
 169:
                var5 = undefined;
                if(!var6) { _fun0008_ip = 181; continue _fun0008 }
 174:
                var5 = function() {
                    var4 = _closure1_slot24;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var1 = 35;
                    var1 = var9[var1];
                    var3 = undefined;
                    var1 = var8.bind(var3)(var1);
                    var2 = var1.HeaderActionButton;
                    var1 = {};
                    var5 = _closure3_slot0;
                    var5 = var5.handleSaveRole;
                    var1['onPress'] = var5;
                    var5 = 26;
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
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                };
 181:
                _fun0008_ip = 190; continue _fun0008;
 183:
                var5 = function() {
                    var4 = _closure1_slot24;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 34;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.HeaderSubmittingIndicator;
                    var1 = {};
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                };
 190:
                var1['headerRight'] = var5;
                var4 = function headerTitle() {
                    var4 = _closure1_slot24;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var1 = 34;
                    var1 = var9[var1];
                    var3 = undefined;
                    var1 = var8.bind(var3)(var1);
                    var2 = var1.NavigatorHeader;
                    var1 = {};
                    var5 = _closure3_slot1;
                    var5 = var5.name;
                    var1['title'] = var5;
                    var5 = 26;
                    var6 = var9[var5];
                    var6 = var8.bind(var3)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var5 = var9[var5];
                    var5 = var8.bind(var3)(var5);
                    var5 = var5.t;
                    var5 = var5.XPGZXF;
                    var5 = var6.bind(var7)(var5);
                    var1['subtitle'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                };
                var1['headerTitle'] = var4;
                var1 = var2.bind(var3)(var1);
 212:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'renderSubScreenButtons';
        var5['key'] = var7;
        var7 = function value() {
            var1 = this;
            var _closure3_slot0 = var1;
            var4 = _closure1_slot25;
            var7 = _closure1_slot0;
            var9 = _closure1_slot3;
            var6 = 36;
            var1 = var9[var6];
            var3 = undefined;
            var1 = var7.bind(var3)(var1);
            var2 = var1.FormSection;
            var1 = {};
            var8 = _closure1_slot24;
            var5 = var9[var6];
            var5 = var7.bind(var3)(var5);
            var10 = var5.FormRow;
            var5 = {};
            var13 = 26;
            var11 = var9[var13];
            var11 = var7.bind(var3)(var11);
            var15 = var11.intl;
            var14 = var15.string;
            var11 = var9[var13];
            var11 = var7.bind(var3)(var11);
            var11 = var11.t;
            var11 = var11.WIDE1N;
            var11 = var14.bind(var15)(var11);
            var5['label'] = var11;
            var11 = function onPress() {
                var3 = _closure3_slot0;
                var2 = var3.onSubScreenValueChange;
                var1 = _closure1_slot20;
                var1 = var1.PERMISSIONS;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5['onPress'] = var11;
            var11 = var9[var6];
            var11 = var7.bind(var3)(var11);
            var11 = var11.FormRow;
            var11 = var11.Arrow;
            var5['trailing'] = var11;
            var10 = var8.bind(var3)(var10, var5);
            var5 = new Array(6);
            var5[0] = var10;
            var10 = var9[var6];
            var10 = var7.bind(var3)(var10);
            var11 = var10.FormDivider;
            var10 = {};
            var10 = var8.bind(var3)(var11, var10);
            var5[1] = var10;
            var10 = var9[var6];
            var10 = var7.bind(var3)(var10);
            var11 = var10.FormRow;
            var10 = {};
            var14 = var9[var13];
            var14 = var7.bind(var3)(var14);
            var16 = var14.intl;
            var15 = var16.string;
            var14 = var9[var13];
            var14 = var7.bind(var3)(var14);
            var14 = var14.t;
            var14 = var14.5//Mur;
            var14 = var15.bind(var16)(var14);
            var10['label'] = var14;
            var14 = function onPress() {
                var3 = _closure3_slot0;
                var2 = var3.onSubScreenValueChange;
                var1 = _closure1_slot20;
                var1 = var1.VERIFICATIONS;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var10['onPress'] = var14;
            var14 = var9[var6];
            var14 = var7.bind(var3)(var14);
            var14 = var14.FormRow;
            var14 = var14.Arrow;
            var10['trailing'] = var14;
            var10 = var8.bind(var3)(var11, var10);
            var5[2] = var10;
            var10 = var9[var6];
            var10 = var7.bind(var3)(var10);
            var11 = var10.FormDivider;
            var10 = {};
            var10 = var8.bind(var3)(var11, var10);
            var5[3] = var10;
            var10 = var9[var6];
            var10 = var7.bind(var3)(var10);
            var11 = var10.FormRow;
            var10 = {};
            var14 = var9[var13];
            var14 = var7.bind(var3)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var9[var13];
            var13 = var7.bind(var3)(var13);
            var13 = var13.t;
            var13 = var13.J4ZtHx;
            var13 = var14.bind(var15)(var13);
            var10['label'] = var13;
            var12 = function onPress() {
                var3 = _closure3_slot0;
                var2 = var3.onSubScreenValueChange;
                var1 = _closure1_slot20;
                var1 = var1.MEMBERS;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var10['onPress'] = var12;
            var12 = var9[var6];
            var12 = var7.bind(var3)(var12);
            var12 = var12.FormRow;
            var12 = var12.Arrow;
            var10['trailing'] = var12;
            var10 = var8.bind(var3)(var11, var10);
            var5[4] = var10;
            var6 = var9[var6];
            var6 = var7.bind(var3)(var6);
            var7 = var6.FormDivider;
            var6 = {};
            var6 = var8.bind(var3)(var7, var6);
            var5[5] = var6;
            var1['children'] = var5;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'renderDeleteButton';
        var5['key'] = var7;
        var7 = function value() {
            var4 = _closure1_slot24;
            var10 = _closure1_slot0;
            var11 = _closure1_slot3;
            var1 = 36;
            var1 = var11[var1];
            var3 = undefined;
            var1 = var10.bind(var3)(var1);
            var2 = var1.FormSection;
            var1 = {};
            var5 = 37;
            var5 = var11[var5];
            var5 = var10.bind(var3)(var5);
            var6 = var5.TableRow;
            var5 = {};
            var7 = 'danger';
            var5['variant'] = var7;
            var7 = 26;
            var8 = var11[var7];
            var8 = var10.bind(var3)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var11[var7];
            var7 = var10.bind(var3)(var7);
            var7 = var7.t;
            var7 = var7.c9ej8v;
            var7 = var8.bind(var9)(var7);
            var5['label'] = var7;
            var7 = this;
            var7 = var7.handleDeleteRole;
            var5['onPress'] = var7;
            var5 = var4.bind(var3)(var6, var5);
            var1['children'] = var5;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'renderManagedRoleWarningText';
        var5['key'] = var7;
        var7 = function value() {
            var2 = _closure1_slot26;
            var1 = this;
            var1 = var1.context;
            var4 = undefined;
            var5 = var2.bind(var4)(var1);
            var3 = _closure1_slot24;
            var2 = _closure1_slot13;
            var1 = {};
            var5 = var5.managedRolesWarningContainer;
            var1['style'] = var5;
            var6 = _closure1_slot1;
            var11 = _closure1_slot3;
            var7 = 38;
            var5 = var11[var7];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var10 = _closure1_slot0;
            var7 = var11[var7];
            var7 = var10.bind(var4)(var7);
            var7 = var7.HelpMessageTypes;
            var7 = var7.WARNING;
            var5['messageType'] = var7;
            var7 = 26;
            var8 = var11[var7];
            var8 = var10.bind(var4)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var11[var7];
            var7 = var10.bind(var4)(var7);
            var7 = var7.t;
            var7 = var7.k5d7DA;
            var7 = var8.bind(var9)(var7);
            var5['children'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'render';
        var5['key'] = var7;
        var6 = function value() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var12 = this;
                var2 = _closure1_slot26;
                var1 = var12.context;
                var4 = undefined;
                var5 = var2.bind(var4)(var1);
                var1 = var12.props;
                var21 = var1.guild;
                var20 = var1.role;
                var8 = var1.locked;
                var7 = var1.newRole;
                var23 = var1.integrations;
                var15 = var1.section;
                var1 = var12.state;
                var19 = var1.name;
                var22 = var1.permissions;
                var18 = var1.mentionable;
                var17 = var1.hoist;
                var16 = var1.color;
                var2 = _closure1_slot0;
                var3 = _closure1_slot3;
                var1 = 24;
                var1 = var3[var1];
                var6 = var2.bind(var4)(var1);
                var3 = var6.isEveryoneRoleId;
                var2 = var21.id;
                var1 = var20.id;
                var6 = var3.bind(var6)(var2, var1);
                var2 = var20.tags;
                var13 = null;
                var3 = var13 == var2;
                var1 = undefined;
                if(var3) { _fun0009_ip = 159; continue _fun0009 }
 153:
                var1 = var2.guild_connections;
 159:
                var24 = var13 === var1;
                var1 = var6;
                if(var1) { _fun0009_ip = 172; continue _fun0009 }
 169:
                var1 = var8;
 172:
                var11 = !var1;
                if(!var11) { _fun0009_ip = 196; continue _fun0009 }
 178:
                var1 = var20.managed;
                var1 = !var1;
                if(var1) { _fun0009_ip = 193; continue _fun0009 }
 190:
                var1 = var24;
 193:
                var11 = var1;
 196:
                var9 = var20.managed;
                if(!var6) { _fun0009_ip = 215; continue _fun0009 }
 205:
                var1 = _closure1_slot20;
                var15 = var1.PERMISSIONS;
 215:
                var1 = _closure1_slot20;
                var1 = var1.DISPLAY;
                if(!(var1 !== var15)) { _fun0009_ip = 500; continue _fun0009 }
 232:
                var1 = _closure1_slot20;
                var1 = var1.PERMISSIONS;
                if(!(var1 !== var15)) { _fun0009_ip = 425; continue _fun0009 }
 249:
                var1 = _closure1_slot20;
                var1 = var1.MEMBERS;
                if(!(var1 !== var15)) { _fun0009_ip = 349; continue _fun0009 }
 263:
                var1 = _closure1_slot20;
                var1 = var1.VERIFICATIONS;
                var14 = undefined;
                if(!(var1 === var15)) { _fun0009_ip = 613; continue _fun0009 }
 282:
                var3 = _closure1_slot24;
                var2 = _closure1_slot1;
                var25 = _closure1_slot3;
                var1 = 42;
                var1 = var25[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var1['guild'] = var21;
                var1['role'] = var20;
                var1['locked'] = var8;
                var25 = var12.handleConnectionsChanged;
                var1['onConnectionsChanged'] = var25;
                var1['integrations'] = var23;
                var14 = var3.bind(var4)(var2, var1);
                _fun0009_ip = 613; continue _fun0009;
 349:
                var3 = _closure1_slot24;
                var2 = _closure1_slot1;
                var23 = _closure1_slot3;
                var1 = 41;
                var1 = var23[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var1['guild'] = var21;
                var1['role'] = var20;
                var23 = var8;
                if(var23) { _fun0009_ip = 393; continue _fun0009 }
 390:
                var23 = var24;
 393:
                var1['locked'] = var23;
                var23 = var12.props;
                var23 = var23.contentContainerStyle;
                var1['contentContainerStyle'] = var23;
                var14 = var3.bind(var4)(var2, var1);
                _fun0009_ip = 613; continue _fun0009;
 425:
                var3 = _closure1_slot24;
                var2 = _closure1_slot1;
                var23 = _closure1_slot3;
                var1 = 40;
                var1 = var23[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var1['guild'] = var21;
                var1['role'] = var20;
                var1['permissions'] = var22;
                var22 = var12.handlePermissionsChanged;
                var1['onPermissionsChanged'] = var22;
                var22 = var12.props;
                var22 = var22.contentContainerStyle;
                var1['contentContainerStyle'] = var22;
                var14 = var3.bind(var4)(var2, var1);
                _fun0009_ip = 613; continue _fun0009;
 500:
                var3 = _closure1_slot24;
                var2 = _closure1_slot1;
                var22 = _closure1_slot3;
                var1 = 39;
                var1 = var22[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var1['guild'] = var21;
                var1['role'] = var20;
                var1['name'] = var19;
                var1['mentionable'] = var18;
                var1['hoist'] = var17;
                var1['color'] = var16;
                var16 = var12.handleNameChanged;
                var1['onNameChanged'] = var16;
                var16 = var12.handleMentionableChanged;
                var1['onMentionableChanged'] = var16;
                var16 = var12.handleHoistChanged;
                var1['onHoistChanged'] = var16;
                var16 = var12.handleColorChanged;
                var1['onColorChanged'] = var16;
                var1['locked'] = var8;
                var1['autoFocusInput'] = var7;
                var14 = var3.bind(var4)(var2, var1);
 613:
                var3 = _closure1_slot24;
                var2 = _closure1_slot13;
                var1 = {};
                var5 = var5.container;
                var1['style'] = var5;
                var5 = var14;
                if(var6) { _fun0009_ip = 795; continue _fun0009 }
 641:
                var8 = _closure1_slot25;
                var7 = _closure1_slot0;
                var16 = _closure1_slot3;
                var6 = 36;
                var6 = var16[var6];
                var6 = var7.bind(var4)(var6);
                var7 = var6.Form;
                var6 = {};
                var16 = _closure1_slot20;
                var17 = var16.DISPLAY;
                var16 = null;
                if(!(var15 === var17)) { _fun0009_ip = 706; continue _fun0009 }
 689:
                var16 = null;
                if(!var9) { _fun0009_ip = 706; continue _fun0009 }
 694:
                var9 = var12.renderManagedRoleWarningText;
                var16 = var9.bind(var12)();
 706:
                var9 = new Array(4);
                var9[0] = var16;
                var9[1] = var14;
                var14 = _closure1_slot20;
                var16 = var14.DISPLAY;
                var14 = null;
                if(!(var15 === var16)) { _fun0009_ip = 746; continue _fun0009 }
 734:
                var16 = var12.renderSubScreenButtons;
                var14 = var16.bind(var12)();
 746:
                var9[2] = var14;
                var10 = _closure1_slot20;
                var14 = var10.DISPLAY;
                var10 = null;
                if(!(var15 === var14)) { _fun0009_ip = 781; continue _fun0009 }
 766:
                var10 = null;
                if(!var11) { _fun0009_ip = 781; continue _fun0009 }
 771:
                var11 = var12.renderDeleteButton;
                var10 = var11.bind(var12)();
 781:
                var9[3] = var10;
                var6['children'] = var9;
                var5 = var8.bind(var4)(var7, var6);
 795:
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var5['value'] = var6;
        var1[6] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var7 = var4.bind(var1)(var7);
    var _closure1_slot27 = var7;
    var4 = 43;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ThemeContext;
    var7['contextType'] = var4;
    var4 = 49;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_settings/roles/native/GuildSettingsRoleEdit.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ConnectedGuildSettingsRoleEdit(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var3 = arg1;
            var1 = var3.guildId;
            var _closure2_slot0 = var1;
            var9 = var3.role;
            var _closure2_slot1 = var9;
            var4 = var3.newRole;
            var5 = undefined;
            if(!(var4 === var5)) { _fun0010_ip = 38; continue _fun0010 }
 36:
            var4 = false;
 38:
            var _closure2_slot2 = var4;
            var12 = var3.contentContainerStyle;
            var3 = var3.section;
            var _closure2_slot3 = var3;
            var4 = _closure1_slot0;
            var7 = _closure1_slot3;
            var3 = 44;
            var3 = var7[var3];
            var8 = var4.bind(var5)(var3);
            var3 = var8.useNavigation;
            var13 = var3.bind(var8)();
            var3 = 45;
            var3 = var7[var3];
            var8 = var4.bind(var5)(var3);
            var7 = var8.useStateFromStoresObject;
            var3 = _closure1_slot17;
            var4 = new Array(4);
            var4[0] = var3;
            var3 = _closure1_slot16;
            var4[1] = var3;
            var3 = _closure1_slot14;
            var4[2] = var3;
            var3 = _closure1_slot19;
            var4[3] = var3;
            var3 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var4 = _closure1_slot17;
                    var3 = var4.getGuild;
                    var5 = _closure2_slot0;
                    var8 = var3.bind(var4)(var5);
                    var4 = _closure1_slot16;
                    var3 = var4.getRoles;
                    var4 = var3.bind(var4)(var5);
                    var3 = _closure2_slot1;
                    var3 = var3.id;
                    var7 = var4[var3];
                    var4 = _closure1_slot14;
                    var3 = var4.getId;
                    var12 = var3.bind(var4)();
                    var5 = null;
                    var4 = var5 != var8;
                    var3 = undefined;
                    var11 = undefined;
                    if(!var4) { _fun0011_ip = 111; continue _fun0011 }
 79:
                    var6 = _closure1_slot2;
                    var9 = _closure1_slot3;
                    var4 = 46;
                    var4 = var9[var4];
                    var6 = var6.bind(var3)(var4);
                    var4 = var6.getHighestRole;
                    var11 = var4.bind(var6)(var8, var12);
 111:
                    var6 = var5 != var8;
                    if(!var6) { _fun0011_ip = 167; continue _fun0011 }
 118:
                    var9 = _closure1_slot2;
                    var10 = _closure1_slot3;
                    var4 = 46;
                    var4 = var10[var4];
                    var10 = var9.bind(var3)(var4);
                    var9 = var10.isRoleHigher;
                    var13 = _closure2_slot1;
                    var17 = var10;
                    var16 = var8;
                    var15 = var12;
                    var14 = var11;
                    var4 = var17[var9](var16, var15, var14, var13, var12);
                    var6 = !var4;
 167:
                    var4 = _closure1_slot19;
                    var1 = var4.getProps;
                    var1 = var1.bind(var4)();
                    var4 = var1.integrations;
                    var1 = {};
                    var1['guild'] = var8;
                    if(!(var5 == var7)) { _fun0011_ip = 201; continue _fun0011 }
 197:
                    var7 = _closure2_slot1;
 201:
                    var1['role'] = var7;
                    var7 = _closure2_slot2;
                    var1['newRole'] = var7;
                    var1['locked'] = var6;
                    var5 = var5 != var4;
                    var3 = undefined;
                    if(!var5) { _fun0011_ip = 232; continue _fun0011 }
 229:
                    var3 = var4;
 232:
                    var1['integrations'] = var3;
                    var2 = _closure2_slot3;
                    var1['section'] = var2;
                    return var1;
                }
            };
            var7 = var7.bind(var8)(var4, var3);
            var14 = var7.guild;
            var4 = _closure1_slot5;
            var3 = _closure1_slot4;
            var11 = var4.bind(var5)(var7, var3);
            var7 = _closure1_slot12;
            var8 = var7.useEffect;
            var4 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 33;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.init;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = new Array(0);
            var3 = var8.bind(var7)(var4, var3);
            var4 = var7.useEffect;
            var3 = new Array(2);
            var3[0] = var1;
            var1 = null;
            var10 = var1 == var9;
            var8 = undefined;
            if(var10) { _fun0010_ip = 231; continue _fun0010 }
 226:
            var8 = var9.id;
 231:
            var3[1] = var8;
            var2 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var1 = _closure2_slot1;
                    var4 = null;
                    var5 = var4 == var1;
                    var1 = undefined;
                    var3 = undefined;
                    if(var5) { _fun0012_ip = 29; continue _fun0012 }
 20:
                    var5 = _closure2_slot1;
                    var3 = var5.id;
 29:
                    if(!(var4 != var3)) { _fun0012_ip = 81; continue _fun0012 }
 33:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var3 = 30;
                    var3 = var5[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.fetchRoleConnectionsConfiguration;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = var2.id;
                    var2 = var4.bind(var5)(var3, var2);
 81:
                    return var1;
                }
            };
            var2 = var4.bind(var7)(var2, var3);
            var2 = var1 != var14;
            var1 = null;
            if(!var2) { _fun0010_ip = 393; continue _fun0010 }
 260:
            var4 = _closure1_slot25;
            var8 = _closure1_slot0;
            var10 = _closure1_slot3;
            var2 = 47;
            var2 = var10[var2];
            var2 = var8.bind(var5)(var2);
            var3 = var2.RedesignCompat;
            var2 = {};
            var9 = _closure1_slot24;
            var7 = _closure1_slot27;
            var6 = {};
            var16 = var6;
            var15 = var11;
            var11 = copyDataProperties(var16, var15);
            var11 = 'guild';
            var6[var11] = var14;
            var11 = 'navigation';
            var6[var11] = var13;
            var11 = 'contentContainerStyle';
            var6[var11] = var12;
            var7 = var9.bind(var5)(var7, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var7 = 48;
            var7 = var10[var7];
            var7 = var8.bind(var5)(var7);
            var8 = var7.NavScrim;
            var7 = {};
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 393:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();