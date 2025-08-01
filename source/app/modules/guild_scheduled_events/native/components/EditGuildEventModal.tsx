// app/modules/guild_scheduled_events/native/components/EditGuildEventModal.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var7 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var6;
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
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var7 = var7.bind(var1)(var4);
    var _closure1_slot6 = var7;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildScheduledEventEntityTypes;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var11 = 6;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_PRIMARY;
    var10['backgroundColor'] = var11;
    var4['cardStyle'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot9 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var15 = var1.guild;
            var _closure2_slot0 = var15;
            var2 = var1.onCloseModal;
            var _closure2_slot1 = var2;
            var13 = var1.initialGuildEvent;
            var _closure2_slot2 = var13;
            var6 = var1.targetChannel;
            var4 = undefined;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var2 = _closure1_slot9;
            var5 = var2.bind(var4)();
            var11 = _closure1_slot0;
            var10 = _closure1_slot3;
            var9 = 7;
            var2 = var10[var9];
            var3 = var11.bind(var4)(var2);
            var2 = var3.getInitialGuildEventData;
            var3 = var2.bind(var3)(var13, var6);
            var17 = _closure1_slot6;
            var2 = var17.useState;
            var2 = var2.bind(var17)(var3);
            var6 = _closure1_slot5;
            var16 = 2;
            var2 = var6.bind(var4)(var2, var16);
            var8 = 0;
            var14 = var2[var8];
            var _closure2_slot3 = var14;
            var3 = 1;
            var2 = var2[var3];
            var _closure2_slot4 = var2;
            var7 = var17.useState;
            var2 = var10[var9];
            var11 = var11.bind(var4)(var2);
            var2 = var11.isEditingEvent;
            var2 = var2.bind(var11)(var13);
            var2 = var7.bind(var17)(var2);
            var2 = var6.bind(var4)(var2, var3);
            var11 = var2[var8];
            var _closure2_slot5 = var11;
            var7 = var17.useState;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot5;
                    var3 = {};
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var4 = 7;
                    var2 = var7[var4];
                    var5 = undefined;
                    var2 = var6.bind(var5)(var2);
                    var2 = var2.EditGuildEventScreens;
                    var2 = var2.CHANNEL_SELECTOR;
                    var3['name'] = var2;
                    if(var1) { _fun0002_ip = 63; continue _fun0002 }
 53:
                    var1 = new Array(1);
                    var1[0] = var3;
                    _fun0002_ip = 105; continue _fun0002;
 63:
                    var2 = new Array(2);
                    var2[0] = var3;
                    var3 = {};
                    var4 = var7[var4];
                    var4 = var6.bind(var5)(var4);
                    var4 = var4.EditGuildEventScreens;
                    var4 = var4.DETAILS;
                    var3['name'] = var4;
                    var2[1] = var3;
                    var1 = var2;
 105:
                    return var1;
                }
            };
            var2 = var7.bind(var17)(var2);
            var2 = var6.bind(var4)(var2, var3);
            var6 = var2[var8];
            var7 = _closure1_slot1;
            var2 = 8;
            var2 = var10[var2];
            var7 = var7.bind(var4)(var2);
            var2 = null;
            var10 = var2 == var13;
            var2 = undefined;
            if(var10) { _fun0001_ip = 246; continue _fun0001 }
 241:
            var2 = var13.id;
 246:
            var2 = var7.bind(var4)(var15, var2, var14);
            _closure2_slot6 = var2;
            var10 = _closure1_slot1;
            var7 = _closure1_slot3;
            var2 = 9;
            var2 = var7[var2];
            var10 = var10.bind(var4)(var2);
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure1_slot2;
                    var4 = _closure1_slot3;
                    var1 = 10;
                    var1 = var4[var1];
                    var5 = undefined;
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.dismissGlobalKeyboard;
                    var1 = var1.bind(var2)();
                    var7 = {};
                    var1 = _closure2_slot6;
                    var1 = var1.broadcastToDirectoryChannels;
                    var7['broadcastToDirectoryChannels'] = var1;
                    var1 = _closure2_slot5;
                    if(!var1) { _fun0003_ip = 90; continue _fun0003 }
 62:
                    var1 = _closure2_slot2;
                    var4 = null;
                    var6 = var4 == var1;
                    var1 = undefined;
                    if(var6) { _fun0003_ip = 86; continue _fun0003 }
 77:
                    var6 = _closure2_slot2;
                    var1 = var6.id;
 86:
                    if(!(var4 == var1)) { _fun0003_ip = 138; continue _fun0003 }
 90:
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var1 = 11;
                    var1 = var6[var1];
                    var8 = var4.bind(var5)(var1);
                    var6 = var8.createGuildEvent;
                    var4 = _closure2_slot3;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var6.bind(var8)(var4, var1, var7);
                    _fun0003_ip = 196; continue _fun0003;
 138:
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var3 = 11;
                    var3 = var6[var3];
                    var6 = var4.bind(var5)(var3);
                    var5 = var6.saveEvent;
                    var3 = _closure2_slot2;
                    var12 = var3.id;
                    var11 = _closure2_slot3;
                    var2 = _closure2_slot0;
                    var10 = var2.id;
                    var13 = var6;
                    var9 = var7;
                    var1 = var13[var5](var12, var11, var10, var9, var8);
 196:
                    return var1;
                }
            };
            var10 = var10.bind(var4)(var2);
            var2 = _closure1_slot5;
            var2 = var2.bind(var4)(var10, var16);
            var8 = var2[var8];
            _closure2_slot7 = var8;
            var2 = var2[var3];
            var8 = var2.loading;
            var10 = var2.error;
            var2 = function() {
                var4 = _closure1_slot4;
                var3 = undefined;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0004_ip = 272; continue _fun0004 }
 10:
                            var2 = _closure2_slot7;
                            var3 = undefined;
                            var2 = var2.bind(var3)();
                            SaveGenerator(address=27);
 25:
                            return var2;
 27:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                            if(var5) { _fun0004_ip = 269; continue _fun0004 }
 36:
                            var6 = null;
                            if(!(var6 != var2)) { _fun0004_ip = 266; continue _fun0004 }
 45:
                            var5 = _closure2_slot5;
                            if(!var5) { _fun0004_ip = 78; continue _fun0004 }
 52:
                            var5 = _closure2_slot2;
                            var7 = var6 == var5;
                            var5 = undefined;
                            if(var7) { _fun0004_ip = 74; continue _fun0004 }
 65:
                            var7 = _closure2_slot2;
                            var5 = var7.id;
 74:
                            if(!(var6 == var5)) { _fun0004_ip = 169; continue _fun0004 }
 78:
                            var10 = _closure1_slot0;
                            var11 = _closure1_slot3;
                            var5 = 12;
                            var5 = var11[var5];
                            var5 = var10.bind(var3)(var5);
                            var7 = var5.AccessibilityAnnouncer;
                            var6 = var7.announce;
                            var5 = 13;
                            var8 = var11[var5];
                            var8 = var10.bind(var3)(var8);
                            var9 = var8.intl;
                            var8 = var9.string;
                            var5 = var11[var5];
                            var5 = var10.bind(var3)(var5);
                            var5 = var5.t;
                            var5 = var5.5HzXOz;
                            var5 = var8.bind(var9)(var5);
                            var5 = var6.bind(var7)(var5);
                            _fun0004_ip = 258; continue _fun0004;
 169:
                            var10 = _closure1_slot0;
                            var11 = _closure1_slot3;
                            var5 = 12;
                            var5 = var11[var5];
                            var5 = var10.bind(var3)(var5);
                            var7 = var5.AccessibilityAnnouncer;
                            var6 = var7.announce;
                            var5 = 13;
                            var8 = var11[var5];
                            var8 = var10.bind(var3)(var8);
                            var9 = var8.intl;
                            var8 = var9.string;
                            var5 = var11[var5];
                            var5 = var10.bind(var3)(var5);
                            var5 = var5.t;
                            var5 = var5.F9On+v;
                            var5 = var8.bind(var9)(var5);
                            var5 = var6.bind(var7)(var5);
 258:
                            var4 = _closure2_slot1;
                            var4 = var4.bind(var3)();
 266:
                            return var3;
 269:
                            return var2;
 272:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = undefined;
                    var4 = _closure3_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                return var1;
            };
            var3 = var2.bind(var4)();
            var2 = {};
            var2['guild'] = var15;
            var2['guildEvent'] = var14;
            var2['initialGuildEvent'] = var13;
            var2['isEdit'] = var11;
            var2['error'] = var10;
            var2['loading'] = var8;
            var2['onSave'] = var3;
            var3 = function onChange(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = arg1;
                    var _closure3_slot0 = var3;
                    var4 = var3.entityType;
                    var1 = null;
                    if(!(var1 != var4)) { _fun0005_ip = 207; continue _fun0005 }
 24:
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var4 = 14;
                    var4 = var8[var4];
                    var7 = undefined;
                    var10 = var6.bind(var7)(var4);
                    var9 = var10.getChannelTypeFromEntity;
                    var4 = var3.entityType;
                    var10 = var9.bind(var10)(var4);
                    var4 = 15;
                    var4 = var8[var4];
                    var9 = var6.bind(var7)(var4);
                    var8 = var9.getEventChannelsByType;
                    var4 = _closure2_slot0;
                    var4 = var4.id;
                    var9 = var8.bind(var9)(var4, var10);
                    var8 = _closure1_slot5;
                    var4 = 1;
                    var8 = var8.bind(var7)(var9, var4);
                    var4 = 0;
                    var4 = var8[var4];
                    var8 = var1 == var4;
                    if(var8) { _fun0005_ip = 133; continue _fun0005 }
 128:
                    var7 = var4.id;
 133:
                    var8 = var1 != var7;
                    var4 = null;
                    if(!var8) { _fun0005_ip = 145; continue _fun0005 }
 142:
                    var4 = var7;
 145:
                    var3['channelId'] = var4;
                    var7 = var3.entityType;
                    var4 = _closure1_slot7;
                    var4 = var4.EXTERNAL;
                    var4 = var7 !== var4;
                    if(!var4) { _fun0005_ip = 198; continue _fun0005 }
 174:
                    var6 = _closure2_slot3;
                    var6 = var6.entityType;
                    var5 = _closure1_slot7;
                    var5 = var5.EXTERNAL;
                    var4 = var6 === var5;
 198:
                    if(!var4) { _fun0005_ip = 207; continue _fun0005 }
 201:
                    var3['entityMetadata'] = var1;
 207:
                    var3 = _closure2_slot4;
                    var1 = undefined;
                    var2 = function(arg1) {
                        var1 = {};
                        var3 = arg1;
                        var4 = var1;
                        var2 = copyDataProperties(var4, var3);
                        var3 = _closure3_slot0;
                        var4 = var1;
                        var2 = copyDataProperties(var4, var3);
                        return var1;
                    };
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var2['onChange'] = var3;
            _closure2_slot8 = var2;
            var14 = function getChannelSelectorHeader(arg1) {
                var2 = arg1;
                var _closure3_slot0 = var2;
                var1 = function() {
                    var4 = _closure1_slot8;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var1 = 16;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var5 = _closure3_slot0;
                    var1['screen'] = var5;
                    var5 = _closure2_slot1;
                    var1['onClose'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                };
                return var1;
            };
            var10 = {};
            var8 = _closure1_slot0;
            var2 = var7[var9];
            var2 = var8.bind(var4)(var2);
            var2 = var2.EditGuildEventScreens;
            var3 = var2.CHANNEL_SELECTOR;
            var2 = {};
            var13 = '';
            var2['title'] = var13;
            var11 = var7[var9];
            var11 = var8.bind(var4)(var11);
            var11 = var11.EditGuildEventScreens;
            var11 = var11.CHANNEL_SELECTOR;
            var11 = var14.bind(var4)(var11);
            var2['customNavbar'] = var11;
            var11 = function headerLeft() {
                var1 = null;
                return var1;
            };
            var2['headerLeft'] = var11;
            var11 = function render() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var4 = _closure1_slot8;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var1 = 17;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var8 = _closure2_slot8;
                    var9 = var1;
                    var6 = copyDataProperties(var9, var8);
                    var7 = _closure2_slot2;
                    var6 = null;
                    var7 = var6 == var7;
                    var6 = undefined;
                    if(var7) { _fun0006_ip = 69; continue _fun0006 }
 60:
                    var5 = _closure2_slot2;
                    var6 = var5.id;
 69:
                    var5 = 'guildEventId';
                    var1[var5] = var6;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                }
            };
            var2['render'] = var11;
            var11 = true;
            var2['fullscreen'] = var11;
            var10[var3] = var2;
            var2 = var7[var9];
            var2 = var8.bind(var4)(var2);
            var2 = var2.EditGuildEventScreens;
            var3 = var2.DETAILS;
            var2 = {};
            var2['title'] = var13;
            var15 = var7[var9];
            var15 = var8.bind(var4)(var15);
            var15 = var15.EditGuildEventScreens;
            var15 = var15.DETAILS;
            var15 = var14.bind(var4)(var15);
            var2['customNavbar'] = var15;
            var15 = function render() {
                var4 = _closure1_slot8;
                var2 = _closure1_slot1;
                var3 = _closure1_slot3;
                var1 = 18;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var7 = _closure2_slot8;
                var8 = var1;
                var6 = copyDataProperties(var8, var7);
                var6 = _closure2_slot6;
                var5 = 'editBroadcastInfoData';
                var1[var5] = var6;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var2['render'] = var15;
            var2['fullscreen'] = var11;
            var10[var3] = var2;
            var2 = var7[var9];
            var2 = var8.bind(var4)(var2);
            var2 = var2.EditGuildEventScreens;
            var3 = var2.PREVIEW;
            var2 = {};
            var2['title'] = var13;
            var13 = var7[var9];
            var13 = var8.bind(var4)(var13);
            var13 = var13.EditGuildEventScreens;
            var13 = var13.PREVIEW;
            var13 = var14.bind(var4)(var13);
            var2['customNavbar'] = var13;
            var12 = function render() {
                var4 = _closure1_slot8;
                var2 = _closure1_slot1;
                var3 = _closure1_slot3;
                var1 = 19;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var6 = _closure2_slot8;
                var7 = var1;
                var5 = copyDataProperties(var7, var6);
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var2['render'] = var12;
            var2['fullscreen'] = var11;
            var10[var3] = var2;
            var3 = _closure1_slot8;
            var1 = 20;
            var1 = var7[var1];
            var1 = var8.bind(var4)(var1);
            var2 = var1.Navigator;
            var1 = {};
            var1['screens'] = var10;
            var7 = var7[var9];
            var7 = var8.bind(var4)(var7);
            var7 = var7.EditGuildEventScreens;
            var7 = var7.CHANNEL_SELECTOR;
            var1['initialRouteName'] = var7;
            var1['initialRouteStack'] = var6;
            var6 = false;
            var1['cardShadowEnabled'] = var6;
            var1['cardOverlayEnabled'] = var6;
            var5 = var5.cardStyle;
            var1['cardStyle'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 21;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_scheduled_events/native/components/EditGuildEventModal.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();