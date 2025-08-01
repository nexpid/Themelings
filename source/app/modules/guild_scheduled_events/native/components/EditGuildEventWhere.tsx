// app/modules/guild_scheduled_events/native/components/EditGuildEventWhere.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var8 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var8;
    var _closure1_slot3 = var6;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.isGuildScheduledEventActive;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildScheduledEventEntityTypes;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.Permissions;
    var _closure1_slot10 = var7;
    var4 = var4.GuildSettingsSections;
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot12 = var7;
    var7 = var4.Fragment;
    var _closure1_slot13 = var7;
    var4 = var4.jsxs;
    var _closure1_slot14 = var4;
    var10 = 8;
    var4 = var6[var10];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var11 = 16;
    var9['marginTop'] = var11;
    var4['channelSelection'] = var9;
    var9 = {};
    var9['paddingVertical'] = var10;
    var4['error'] = var9;
    var9 = {};
    var10 = 24;
    var9['marginTop'] = var10;
    var4['text'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot15 = var4;
    var4 = 25;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_scheduled_events/native/components/EditGuildEventWhere.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function EditGuildEventWhere(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var17 = var1.guild;
            var _closure2_slot0 = var17;
            var16 = var1.guildEvent;
            var _closure2_slot1 = var16;
            var11 = var1.guildEventId;
            var3 = var1.initialGuildEvent;
            var1 = var1.onChange;
            var _closure2_slot2 = var1;
            var1 = _closure1_slot15;
            var4 = undefined;
            var12 = var1.bind(var4)();
            var8 = _closure1_slot5;
            var1 = var8.useRef;
            var22 = null;
            var5 = var1.bind(var8)(var22);
            var _closure2_slot3 = var5;
            var10 = _closure1_slot0;
            var9 = _closure1_slot3;
            var2 = 11;
            var1 = var9[var2];
            var18 = var10.bind(var4)(var1);
            var15 = var18.useStateFromStores;
            var1 = _closure1_slot6;
            var13 = new Array(1);
            var13[0] = var1;
            var1 = var16.channelId;
            var6 = new Array(1);
            var6[0] = var1;
            var1 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getChannel;
                var1 = _closure2_slot1;
                var1 = var1.channelId;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var15.bind(var18)(var13, var1, var6);
            var2 = var9[var2];
            var18 = var10.bind(var4)(var2);
            var15 = var18.useStateFromStores;
            var2 = _closure1_slot7;
            var13 = new Array(1);
            var13[0] = var2;
            var6 = new Array(1);
            var6[0] = var17;
            var2 = function() {
                var4 = _closure1_slot7;
                var3 = var4.can;
                var1 = _closure1_slot10;
                var2 = var1.MANAGE_ROLES;
                var1 = _closure2_slot0;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var6 = var15.bind(var18)(var13, var2, var6);
            var2 = var8.useState;
            var13 = var2.bind(var8)(var22);
            var8 = _closure1_slot4;
            var2 = 2;
            var8 = var8.bind(var4)(var13, var2);
            var2 = 0;
            var21 = var8[var2];
            var2 = 1;
            var2 = var8[var2];
            var _closure2_slot4 = var2;
            var2 = 12;
            var2 = var9[var2];
            var8 = var10.bind(var4)(var2);
            var2 = var8.useNavigation;
            var2 = var2.bind(var8)();
            var _closure2_slot5 = var2;
            var2 = _closure1_slot8;
            var13 = var2.bind(var4)(var3);
            var8 = _closure1_slot12;
            var3 = _closure1_slot1;
            var2 = 13;
            var2 = var9[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['guild'] = var17;
            var2['channel'] = var1;
            var2['guildEventId'] = var11;
            var11 = 10;
            var9 = var9[var11];
            var15 = var10.bind(var4)(var9);
            var10 = var15.getChannelTypeFromEntity;
            var9 = var16.entityType;
            var9 = var10.bind(var15)(var9);
            var2['channelType'] = var9;
            var9 = function onChangeChannel(arg1) {
                var4 = _closure2_slot4;
                var1 = undefined;
                var3 = null;
                var3 = var4.bind(var1)(var3);
                var3 = _closure2_slot2;
                var2 = {};
                var4 = arg1;
                var4 = var4.id;
                var2['channelId'] = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2['onChangeChannel'] = var9;
            var9 = var12.channelSelection;
            var2['style'] = var9;
            var2 = var8.bind(var4)(var3, var2);
            var8 = var16.entityType;
            var3 = _closure1_slot9;
            var3 = var3.EXTERNAL;
            if(!(var8 !== var3)) { _fun0001_ip = 388; continue _fun0001 }
 377:
            var8 = var2;
            if(!(var22 == var1)) { _fun0001_ip = 484; continue _fun0001 }
 384:
            var8 = null;
            _fun0001_ip = 484; continue _fun0001;
 388:
            var3 = _closure1_slot12;
            var10 = _closure1_slot0;
            var9 = _closure1_slot3;
            var1 = 14;
            var1 = var9[var1];
            var1 = var10.bind(var4)(var1);
            var2 = var1.GuildEventLocation;
            var1 = {};
            var9 = var9[var11];
            var10 = var10.bind(var4)(var9);
            var9 = var10.getLocationFromEventData;
            var10 = var9.bind(var10)(var16);
            var11 = var22 != var10;
            var9 = '';
            if(!var11) { _fun0001_ip = 454; continue _fun0001 }
 451:
            var9 = var10;
 454:
            var1['location'] = var9;
            var9 = function onChange(arg1) {
                var4 = _closure2_slot4;
                var1 = undefined;
                var3 = null;
                var3 = var4.bind(var1)(var3);
                var3 = _closure2_slot2;
                var2 = {};
                var4 = {};
                var5 = arg1;
                var4['location'] = var5;
                var2['entityMetadata'] = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1['onChange'] = var9;
            var9 = function onFocus() {
                var1 = global;
                var4 = var1.setTimeout;
                var1 = undefined;
                var3 = function() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var2 = _closure2_slot3;
                        var3 = var2.current;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0002_ip = 37; continue _fun0002 }
 18:
                        var1 = _closure2_slot3;
                        var2 = var1.current;
                        var1 = var2.scrollToEnd;
                        var1 = var1.bind(var2)();
 37:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = 100;
                var2 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var1['onFocus'] = var9;
            var8 = var3.bind(var4)(var2, var1);
 484:
            var3 = _closure1_slot14;
            var2 = _closure1_slot13;
            var1 = {};
            var9 = var22 != var21;
            var10 = null;
            if(!var9) { _fun0001_ip = 567; continue _fun0001 }
 503:
            var15 = _closure1_slot12;
            var11 = _closure1_slot0;
            var18 = _closure1_slot3;
            var9 = 15;
            var9 = var18[var9];
            var9 = var11.bind(var4)(var9);
            var11 = var9.Text;
            var9 = {'style': null, 'variant': 'text-sm/normal', 'color': 'text-danger'};
            var18 = var12.error;
            var9['style'] = var18;
            var9['children'] = var21;
            var10 = var15.bind(var4)(var11, var9);
 567:
            var9 = new Array(2);
            var9[0] = var10;
            var11 = _closure1_slot12;
            var10 = _closure1_slot0;
            var18 = _closure1_slot3;
            var15 = 16;
            var15 = var18[var15];
            var15 = var10.bind(var4)(var15);
            var20 = var15.Button;
            var19 = {};
            var15 = 9;
            var23 = var18[var15];
            var23 = var10.bind(var4)(var23);
            var25 = var23.intl;
            var24 = var25.string;
            var23 = var18[var15];
            var23 = var10.bind(var4)(var23);
            var23 = var23.t;
            var23 = var23.PDTjLC;
            var23 = var24.bind(var25)(var23);
            var19['text'] = var23;
            var23 = 'primary';
            var19['variant'] = var23;
            var23 = function onPress() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var4 = _closure1_slot2;
                    var2 = _closure1_slot3;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var2);
                    var2 = var4.dismissGlobalKeyboard;
                    var2 = var2.bind(var4)();
 35: // try_start_0
                    var4 = _closure2_slot4;
                    var6 = null;
                    var4 = var4.bind(var1)(var6);
                    var9 = _closure2_slot1;
                    var5 = var9.entityType;
                    var4 = var9.channelId;
                    var7 = _closure1_slot9;
                    var7 = var7.NONE;
                    if(!(var5 !== var7)) { _fun0003_ip = 376; continue _fun0003 }
 81:
                    var7 = _closure1_slot9;
                    var7 = var7.EXTERNAL;
                    if(!(var5 === var7)) { _fun0003_ip = 133; continue _fun0003 }
 95:
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot3;
                    var7 = 10;
                    var7 = var10[var7];
                    var8 = var8.bind(var1)(var7);
                    var7 = var8.getLocationFromEventData;
                    var7 = var7.bind(var8)(var9);
                    if(!(var6 != var7)) { _fun0003_ip = 289; continue _fun0003 }
 133:
                    if(!(var6 == var4)) { _fun0003_ip = 151; continue _fun0003 }
 137:
                    var4 = _closure1_slot9;
                    var4 = var4.EXTERNAL;
                    if(!(var5 === var4)) { _fun0003_ip = 202; continue _fun0003 }
 151:
                    var5 = _closure2_slot5;
                    var4 = var5.push;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var2 = 18;
                    var2 = var7[var2];
                    var2 = var6.bind(var1)(var2);
                    var2 = var2.EditGuildEventScreens;
                    var2 = var2.DETAILS;
                    var2 = var4.bind(var5)(var2);
 197: // try_end0
                    _fun0003_ip = 524; continue _fun0003;
 202: // try_start_1
                    var2 = global;
                    var5 = var2.Error;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var2 = 9;
                    var4 = var8[var2];
                    var4 = var7.bind(var1)(var4);
                    var6 = var4.intl;
                    var4 = var6.string;
                    var2 = var8[var2];
                    var2 = var7.bind(var1)(var2);
                    var2 = var2.t;
                    var2 = var2.4LQwn5;
                    var11 = var4.bind(var6)(var2);
                    var4 = var5.prototype;
                    var4 = Object.create(var4, {constructor: {value: var5}});
                    var12 = var4;
                    var2 = new var12[var5](var11, var10);
                    var2 = var2 instanceof Object ? var2 : var4;
                    throw var2;
 289:
                    var2 = global;
                    var5 = var2.Error;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var2 = 9;
                    var4 = var8[var2];
                    var4 = var7.bind(var1)(var4);
                    var6 = var4.intl;
                    var4 = var6.string;
                    var2 = var8[var2];
                    var2 = var7.bind(var1)(var2);
                    var2 = var2.t;
                    var2 = var2.q91szs;
                    var11 = var4.bind(var6)(var2);
                    var4 = var5.prototype;
                    var4 = Object.create(var4, {constructor: {value: var5}});
                    var12 = var4;
                    var2 = new var12[var5](var11, var10);
                    var2 = var2 instanceof Object ? var2 : var4;
                    throw var2;
 376:
                    var2 = global;
                    var5 = var2.Error;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var2 = 9;
                    var4 = var8[var2];
                    var4 = var7.bind(var1)(var4);
                    var6 = var4.intl;
                    var4 = var6.string;
                    var2 = var8[var2];
                    var2 = var7.bind(var1)(var2);
                    var2 = var2.t;
                    var2 = var2.C4KzmZ;
                    var11 = var4.bind(var6)(var2);
                    var4 = var5.prototype;
                    var4 = Object.create(var4, {constructor: {value: var5}});
                    var12 = var4;
                    var2 = new var12[var5](var11, var10);
                    var2 = var2 instanceof Object ? var2 : var4;
                    throw var2;
 463: // try_end1 // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=1);
                    var5 = _closure2_slot4;
                    var4 = var2.message;
                    var4 = var5.bind(var1)(var4);
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var3 = 19;
                    var3 = var5[var3];
                    var3 = var4.bind(var1)(var3);
                    var4 = var3.AccessibilityAnnouncer;
                    var3 = var4.announce;
                    var2 = var2.message;
                    var2 = var3.bind(var4)(var2);
 524:
                    return var1;
                }
            };
            var19['onPress'] = var23;
            var21 = var22 != var21;
            var19['disabled'] = var21;
            var19 = var11.bind(var4)(var20, var19);
            var9[1] = var19;
            var1['children'] = var9;
            var19 = var3.bind(var4)(var2, var1);
            var3 = _closure1_slot14;
            var9 = _closure1_slot1;
            var1 = 20;
            var1 = var18[var1];
            var2 = var9.bind(var4)(var1);
            var1 = {};
            var1['action'] = var19;
            var1['ref'] = var5;
            var5 = 21;
            var5 = var18[var5];
            var9 = var9.bind(var4)(var5);
            var5 = {};
            var19 = var18[var15];
            var19 = var10.bind(var4)(var19);
            var21 = var19.intl;
            var20 = var21.string;
            var19 = var18[var15];
            var19 = var10.bind(var4)(var19);
            var19 = var19.t;
            var19 = var19.DC+Qm5;
            var19 = var20.bind(var21)(var19);
            var5['title'] = var19;
            var19 = var18[var15];
            var19 = var10.bind(var4)(var19);
            var21 = var19.intl;
            var20 = var21.string;
            var19 = var18[var15];
            var19 = var10.bind(var4)(var19);
            var19 = var19.t;
            var19 = var19.IwmXLC;
            var19 = var20.bind(var21)(var19);
            var5['subtitle'] = var19;
            var9 = var11.bind(var4)(var9, var5);
            var5 = new Array(4);
            var5[0] = var9;
            var9 = 14;
            var9 = var18[var9];
            var9 = var10.bind(var4)(var9);
            var10 = var9.GuildEventEntityTypeSelection;
            var9 = {};
            var9['guild'] = var17;
            var16 = var16.entityType;
            var9['entityType'] = var16;
            var16 = function onChange(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var7 = arg1;
                    var3 = _closure2_slot4;
                    var1 = undefined;
                    var5 = null;
                    var3 = var3.bind(var1)(var5);
                    var3 = {};
                    var3['entityType'] = var7;
                    var3['scheduledEndTime'] = var1;
                    var6 = _closure1_slot9;
                    var6 = var6.EXTERNAL;
                    if(!(var7 === var6)) { _fun0004_ip = 142; continue _fun0004 }
 48:
                    var8 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var6 = 22;
                    var7 = var7[var6];
                    var8 = var8.bind(var1)(var7);
                    var7 = _closure2_slot1;
                    var7 = var7.scheduledStartTime;
                    var7 = var8.bind(var1)(var7);
                    if(!(var5 == var7)) { _fun0004_ip = 108; continue _fun0004 }
 87:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var4 = var4[var6];
                    var4 = var5.bind(var1)(var4);
                    var7 = var4.bind(var1)();
 108:
                    var6 = var7.add;
                    var5 = 1;
                    var4 = 'hour';
                    var5 = var6.bind(var7)(var5, var4);
                    var4 = var5.toISOString;
                    var4 = var4.bind(var5)();
                    var3['scheduledEndTime'] = var4;
 142:
                    var2 = _closure2_slot2;
                    var2 = var2.bind(var1)(var3);
                    return var1;
                }
            };
            var9['onChange'] = var16;
            var9['disabled'] = var13;
            var9 = var11.bind(var4)(var10, var9);
            var5[1] = var9;
            var5[2] = var8;
            if(!var6) { _fun0001_ip = 1053; continue _fun0001 }
 931:
            var9 = _closure1_slot12;
            var11 = _closure1_slot0;
            var10 = _closure1_slot3;
            var7 = 23;
            var7 = var10[var7];
            var7 = var11.bind(var4)(var7);
            var8 = var7.TextWithIOSLinkWorkaround;
            var7 = {'style': null, 'variant': 'text-sm/normal', 'color': 'header-secondary'};
            var12 = var12.text;
            var7['style'] = var12;
            var12 = var10[var15];
            var12 = var11.bind(var4)(var12);
            var13 = var12.intl;
            var12 = var13.format;
            var10 = var10[var15];
            var10 = var11.bind(var4)(var10);
            var10 = var10.t;
            var11 = var10.K+DH2t;
            var10 = {};
            var14 = function onClick() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot3;
                var1 = 24;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.open;
                var3 = _closure2_slot0;
                var3 = var3.id;
                var2 = _closure1_slot11;
                var2 = var2.ROLES;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var10['onClick'] = var14;
            var10 = var12.bind(var13)(var11, var10);
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 1053:
            var5[3] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();