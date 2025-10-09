// app/modules/guild_scheduled_events/native/components/GuildEventCardComponents.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var15 = require;
    var27 = metroImportDefault;
    var3 = exports;
    var16 = dependencyMap;
    var _closure1_slot0 = var15;
    var _closure1_slot1 = var27;
    var _closure1_slot2 = var16;
    var12 = function useEventRsvpState(arg1, arg2) {
        var3 = arg1;
        var1 = arg2;
        var _closure2_slot0 = var3;
        var _closure2_slot1 = var1;
        var7 = _closure1_slot0;
        var6 = _closure1_slot2;
        var5 = 26;
        var6 = var6[var5];
        var5 = undefined;
        var6 = var7.bind(var5)(var6);
        var5 = var6.useStateFromStores;
        var7 = _closure1_slot18;
        var4 = new Array(1);
        var4[0] = var7;
        var7 = var3.id;
        var3 = new Array(2);
        var3[0] = var7;
        var3[1] = var1;
        var1 = function() {
            var4 = _closure1_slot18;
            var3 = var4.isInterestedInEventRecurrence;
            var2 = _closure2_slot0;
            var2 = var2.id;
            var1 = _closure2_slot1;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var3 = var5.bind(var6)(var4, var1, var3);
        var1 = new Array(2);
        var1[0] = var3;
        var2 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 21;
            var2 = var2[var1];
            var1 = undefined;
            var6 = var3.bind(var1)(var2);
            var5 = var6.handleGuildScheduledEventRsvp;
            var2 = _closure2_slot0;
            var4 = var2.id;
            var3 = _closure2_slot1;
            var2 = var2.guild_id;
            var2 = var5.bind(var6)(var4, var3, var2);
            return var1;
        };
        var1[1] = var2;
        return var1;
    };
    var _closure1_slot28 = var12;
    var10 = function usePrimaryActionButtonType(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var8 = arg1;
            var _closure2_slot0 = var8;
            var2 = var8.guild_id;
            var _closure2_slot1 = var2;
            var5 = var8.channel_id;
            var _closure2_slot2 = var5;
            var2 = var8.scheduled_start_time;
            var _closure2_slot3 = var2;
            var6 = var8.entity_type;
            var9 = _closure1_slot5;
            var7 = var9.useMemo;
            var4 = new Array(1);
            var4[0] = var2;
            var2 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 32;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getEventTimeData;
                var1 = _closure2_slot3;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var7.bind(var9)(var2, var4);
            var2 = var2.withinStartWindow;
            var9 = _closure1_slot0;
            var12 = _closure1_slot2;
            var10 = 26;
            var4 = var12[var10];
            var7 = undefined;
            var14 = var9.bind(var7)(var4);
            var13 = var14.useStateFromStores;
            var4 = _closure1_slot13;
            var11 = new Array(1);
            var11[0] = var4;
            var4 = function() {
                var3 = _closure1_slot13;
                var2 = var3.getGuild;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var13.bind(var14)(var11, var4);
            var11 = var12[var10];
            var15 = var9.bind(var7)(var11);
            var14 = var15.useStateFromStores;
            var11 = _closure1_slot11;
            var13 = new Array(1);
            var13[0] = var11;
            var11 = new Array(1);
            var11[0] = var5;
            var5 = function() {
                var3 = _closure1_slot11;
                var2 = var3.getChannel;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var11 = var14.bind(var15)(var13, var5, var11);
            var5 = 27;
            var5 = var12[var5];
            var9 = var9.bind(var7)(var5);
            var5 = var9.useManageResourcePermissions;
            var12 = null;
            if(!(var12 != var11)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var11;
case 2:
            var4 = var5.bind(var9)(var4);
            var4 = var4.canManageGuildEvent;
            var5 = var4.bind(var7)(var8);
            var9 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var10];
            var10 = var9.bind(var7)(var4);
            var9 = var10.useStateFromStores;
            var11 = _closure1_slot13;
            var4 = new Array(1);
            var4[0] = var11;
            var1 = function() {
                var3 = _closure1_slot13;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var1.guild_id;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var1 = var9.bind(var10)(var4, var1);
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = _closure1_slot27;
            var1 = var1.JOIN_GUILD;
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var4 = _closure1_slot16;
            var4 = var4.bind(var7)(var8);
            if(var4) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var4 = _closure1_slot17;
            var4 = var4.bind(var7)(var8);
            if(var4) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            if(!var2) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            if(var5) { _fun0001_ip = 13; continue _fun0001 }
case 11:
            var2 = _closure1_slot27;
            var2 = var2.RSVP;
            _fun0001_ip = 14; continue _fun0001;
case 13:
            var4 = _closure1_slot27;
            var2 = var4.START;
case 14:
            _fun0001_ip = 15; continue _fun0001;
case 9:
            var4 = _closure1_slot19;
            var4 = var4.EXTERNAL;
            if(!(var6 !== var4)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = _closure1_slot27;
            var4 = arg2;
            if(var4) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var4 = var7.JOIN;
            _fun0001_ip = 20; continue _fun0001;
case 18:
            if(var5) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var6 = var7.CONNECTED;
            _fun0001_ip = 23; continue _fun0001;
case 21:
            var6 = var7.END;
case 23:
            var4 = var6;
case 20:
            _fun0001_ip = 24; continue _fun0001;
case 16:
            var6 = _closure1_slot27;
            if(var5) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var5 = var6.STARTED;
            _fun0001_ip = 27; continue _fun0001;
case 25:
            var5 = var6.END;
case 27:
            var4 = var5;
case 24:
            var2 = var4;
case 15:
            _fun0001_ip = 28; continue _fun0001;
case 7:
            var3 = _closure1_slot27;
            var2 = var3.ENDED;
case 28:
            var1 = var2;
case 6:
            return var1;
        }
    };
    var _closure1_slot29 = var10;
    var9 = function GuildEventCardRSVPAction(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var3 = var1.event;
            var2 = var1.recurrenceId;
            var1 = _closure1_slot28;
            var4 = undefined;
            var3 = var1.bind(var4)(var3, var2);
            var2 = _closure1_slot4;
            var1 = 2;
            var2 = var2.bind(var4)(var3, var1);
            var1 = 0;
            var11 = var2[var1];
            var1 = 1;
            var5 = var2[var1];
            var7 = 'secondary';
            if(!var11) { _fun0002_ip = 29; continue _fun0002 }
case 30:
            var7 = 'tertiary';
case 29:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            if(var11) { _fun0002_ip = 31; continue _fun0002 }
case 32:
            var1 = 30;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var9 = var1.BellIcon;
            _fun0002_ip = 33; continue _fun0002;
case 31:
            var1 = 29;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var9 = var1.CheckmarkLargeIcon;
case 33:
            var3 = _closure1_slot23;
            var2 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 31;
            var1 = var10[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var8 = 'togglebutton';
            var1['accessibilityRole'] = var8;
            var8 = {};
            var8['checked'] = var11;
            var1['accessibilityState'] = var8;
            var1['variant'] = var7;
            var8 = _closure1_slot23;
            var7 = {};
            var11 = 'sm';
            var7['size'] = var11;
            var7 = var8.bind(var4)(var9, var7);
            var1['icon'] = var7;
            var9 = _closure1_slot0;
            var6 = 20;
            var7 = var10[var6];
            var7 = var9.bind(var4)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var10[var6];
            var6 = var9.bind(var4)(var6);
            var6 = var6.t;
            var6 = var6.DlcqlZ;
            var6 = var7.bind(var8)(var6);
            var1['text'] = var6;
            var1['onPress'] = var5;
            var5 = true;
            var1['grow'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot30 = var9;
    var8 = function GuildEventJoinAndRSVPAction(arg1) {
        var2 = arg1;
        var5 = var2.event;
        var _closure2_slot0 = var5;
        var3 = var2.recurrenceId;
        var2 = _closure1_slot28;
        var4 = undefined;
        var3 = var2.bind(var4)(var5, var3);
        var2 = _closure1_slot4;
        var8 = 2;
        var2 = var2.bind(var4)(var3, var8);
        var5 = 0;
        var3 = var2[var5];
        var _closure2_slot1 = var3;
        var3 = 1;
        var2 = var2[var3];
        var _closure2_slot2 = var2;
        var9 = _closure1_slot5;
        var7 = var9.useState;
        var2 = false;
        var7 = var7.bind(var9)(var2);
        var2 = _closure1_slot4;
        var2 = var2.bind(var4)(var7, var8);
        var7 = var2[var5];
        var2 = var2[var3];
        var _closure2_slot3 = var2;
        var1 = function() {
            var4 = _closure1_slot3;
            var3 = undefined;
            var2 = function* () {
                var1 = function* anon_0_() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0003_ip = 34; continue _fun0003 }
case 35:
                        var4 = _closure2_slot3;
                        var5 = undefined;
                        var2 = true;
                        var2 = var4.bind(var5)(var2);
case 36: // try_start_0
                        var4 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var2 = 33;
                        var2 = var7[var2];
                        var8 = var4.bind(var5)(var2);
                        var7 = var8.joinGuild;
                        var2 = _closure2_slot0;
                        var4 = var2.guild_id;
                        var2 = {};
                        var9 = _closure1_slot21;
                        var9 = var9.DIRECTORY_EVENTS;
                        var2['source'] = var9;
                        var2 = var7.bind(var8)(var4, var2);
                        SaveGenerator(address=90);
case 37:
                        return var2;
case 38:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0003_ip = 39; continue _fun0003 }
case 40:
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var4 = 34;
                        var4 = var8[var4];
                        var8 = var7.bind(var5)(var4);
                        var7 = var8.transitionToGuild;
                        var4 = _closure2_slot0;
                        var4 = var4.guild_id;
                        var4 = var7.bind(var8)(var4);
                        var7 = _closure2_slot1;
                        var4 = var7;
                        if(var7) { _fun0003_ip = 41; continue _fun0003 }
case 42:
                        var7 = _closure1_slot17;
                        var6 = _closure2_slot0;
                        var4 = var7.bind(var5)(var6);
case 41:
                        if(var4) { _fun0003_ip = 43; continue _fun0003 }
case 44:
                        var4 = _closure2_slot2;
                        var4 = var4.bind(var5)();
case 43: // try_end0
                        var6 = _closure2_slot3;
                        var4 = false;
                        var4 = var6.bind(var5)(var4);
                        return var5;
case 39:
                        var6 = _closure2_slot3;
                        var4 = false;
                        var4 = var6.bind(var5)(var4);
                        return var2;
case 45: // catch_target0
                        CatchBlockStart(arg_register=1);
                        var4 = _closure2_slot3;
                        var3 = false;
                        var3 = var4.bind(var5)(var3);
                        throw var2;
case 34:
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
        var5 = var1.bind(var4)();
        var3 = _closure1_slot23;
        var2 = _closure1_slot1;
        var10 = _closure1_slot2;
        var1 = 31;
        var1 = var10[var1];
        var2 = var2.bind(var4)(var1);
        var1 = {};
        var1['loading'] = var7;
        var7 = 'active';
        var1['variant'] = var7;
        var9 = _closure1_slot0;
        var6 = 20;
        var7 = var10[var6];
        var7 = var9.bind(var4)(var7);
        var8 = var7.intl;
        var7 = var8.string;
        var6 = var10[var6];
        var6 = var9.bind(var4)(var6);
        var6 = var6.t;
        var6 = var6.VJlc0d;
        var6 = var7.bind(var8)(var6);
        var1['text'] = var6;
        var1['onPress'] = var5;
        var5 = true;
        var1['grow'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot31 = var8;
    var6 = function UserCountIconPill(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var7 = var1.event;
            var6 = var1.recurrenceId;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 43;
            var1 = var3[var1];
            var4 = undefined;
            var3 = var2.bind(var4)(var1);
            var1 = null;
            var8 = var1 == var7;
            var2 = undefined;
            if(var8) { _fun0004_ip = 46; continue _fun0004 }
case 47:
            var2 = var7.guild_id;
case 46:
            var8 = var1 == var7;
            var1 = undefined;
            if(var8) { _fun0004_ip = 48; continue _fun0004 }
case 49:
            var1 = var7.id;
case 48:
            var6 = var3.bind(var4)(var2, var1, var6);
            var3 = _closure1_slot23;
            var2 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 44;
            var1 = var8[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var7 = _closure1_slot0;
            var5 = 20;
            var9 = var8[var5];
            var9 = var7.bind(var4)(var9);
            var11 = var9.intl;
            var10 = var11.formatToPlainString;
            var5 = var8[var5];
            var5 = var7.bind(var4)(var5);
            var5 = var5.t;
            var9 = var5.+DLsDw;
            var5 = {};
            var5['count'] = var6;
            var5 = var10.bind(var11)(var9, var5);
            var1['accessibilityLabel'] = var5;
            var5 = 45;
            var5 = var8[var5];
            var5 = var7.bind(var4)(var5);
            var5 = var5.GroupIcon;
            var1['IconComponent'] = var5;
            var5 = var6.toLocaleString;
            var5 = var5.bind(var6)();
            var1['text'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot32 = var6;
    var5 = function GuildEventCardTitle(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var8 = var1.event;
            var12 = var1.style;
            var9 = var1.textStyle;
            var10 = var1.condensed;
            var13 = var1.onPress;
            var1 = _closure1_slot26;
            var4 = undefined;
            var7 = var1.bind(var4)();
            var3 = _closure1_slot23;
            var2 = _closure1_slot9;
            var1 = {};
            var6 = 'button';
            var1['accessibilityRole'] = var6;
            var6 = _closure1_slot0;
            var11 = _closure1_slot2;
            var14 = 20;
            var15 = var11[var14];
            var15 = var6.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var11[var14];
            var14 = var6.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.epxpi4;
            var14 = var15.bind(var16)(var14);
            var1['accessibilityHint'] = var14;
            var14 = var8.name;
            var1['accessibilityLabel'] = var14;
            var1['onPress'] = var13;
            var13 = var7.topicContainer;
            var7 = new Array(2);
            var7[0] = var13;
            var7[1] = var12;
            var1['style'] = var7;
            var7 = _closure1_slot23;
            var5 = 51;
            var5 = var11[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.Text;
            var5 = {'variant': 'text-md/bold', 'color': 'header-primary'};
            var5['style'] = var9;
            var9 = undefined;
            if(!var10) { _fun0005_ip = 50; continue _fun0005 }
case 2:
            var9 = 1;
case 50:
            var5['lineClamp'] = var9;
            var8 = var8.name;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot33 = var5;
    var4 = function GuildEventCardDescription(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var2 = var1.event;
            var13 = var2.description;
            var9 = var2.guild_id;
            var8 = var1.style;
            var14 = var1.textStyle;
            var10 = var1.numberOfLines;
            var2 = var1.condensed;
            var1 = _closure1_slot26;
            var5 = undefined;
            var7 = var1.bind(var5)();
            var3 = null;
            var4 = var3 != var13;
            var1 = null;
            if(!var4) { _fun0006_ip = 51; continue _fun0006 }
case 29:
            var11 = var13.length;
            var4 = 0;
            var4 = var11 > var4;
            var1 = null;
            if(!var4) { _fun0006_ip = 51; continue _fun0006 }
case 37:
            var1 = null;
            if(var2) { _fun0006_ip = 51; continue _fun0006 }
case 40:
            var2 = var3 != var13;
            var1 = null;
            if(!var2) { _fun0006_ip = 51; continue _fun0006 }
case 52:
            var4 = _closure1_slot23;
            var3 = _closure1_slot6;
            var2 = {};
            var11 = var7.detailsContainer;
            var7 = new Array(2);
            var7[0] = var11;
            var7[1] = var8;
            var2['style'] = var7;
            var8 = _closure1_slot23;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var6 = 51;
            var6 = var12[var6];
            var6 = var11.bind(var5)(var6);
            var7 = var6.Text;
            var6 = {'variant': 'text-md/medium', 'color': 'text-secondary'};
            var6['style'] = var14;
            var6['lineClamp'] = var10;
            var10 = 55;
            var10 = var12[var10];
            var12 = var11.bind(var5)(var10);
            var11 = var12.guildEventDetailsParser;
            var10 = {'guildId': null, 'allowLinks': true, 'allowHeading': true, 'allowList': true};
            var10['guildId'] = var9;
            var9 = true;
            var9 = var11.bind(var12)(var13, var9, var10);
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 51:
            return var1;
        }
    };
    var _closure1_slot34 = var4;
    var1 = global;
    var13 = var1.Object;
    var11 = var13.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var11.bind(var13)(var3, var1, var7);
    var24 = 0;
    var7 = var16[var24];
    var1 = undefined;
    var7 = var27.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var23 = 1;
    var7 = var16[var23];
    var7 = var27.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var22 = 2;
    var11 = var16[var22];
    var7 = metroImportAll;
    var17 = var7.bind(var1)(var11);
    var _closure1_slot5 = var17;
    var21 = 3;
    var7 = var16[var21];
    var7 = var15.bind(var1)(var7);
    var11 = var7.View;
    var _closure1_slot6 = var11;
    var11 = var7.Image;
    var _closure1_slot7 = var11;
    var11 = var7.useWindowDimensions;
    var _closure1_slot8 = var11;
    var7 = var7.Pressable;
    var _closure1_slot9 = var7;
    var20 = 4;
    var7 = var16[var20];
    var7 = var27.bind(var1)(var7);
    var _closure1_slot10 = var7;
    var19 = 5;
    var7 = var16[var19];
    var7 = var27.bind(var1)(var7);
    var _closure1_slot11 = var7;
    var18 = 6;
    var7 = var16[var18];
    var7 = var27.bind(var1)(var7);
    var _closure1_slot12 = var7;
    var14 = 7;
    var7 = var16[var14];
    var7 = var27.bind(var1)(var7);
    var _closure1_slot13 = var7;
    var7 = 8;
    var7 = var16[var7];
    var7 = var27.bind(var1)(var7);
    var _closure1_slot14 = var7;
    var7 = 9;
    var7 = var16[var7];
    var7 = var27.bind(var1)(var7);
    var _closure1_slot15 = var7;
    var7 = 10;
    var11 = var16[var7];
    var11 = var15.bind(var1)(var11);
    var13 = var11.isGuildEventEnded;
    var _closure1_slot16 = var13;
    var11 = var11.isGuildScheduledEventActive;
    var _closure1_slot17 = var11;
    var7 = var16[var7];
    var7 = var27.bind(var1)(var7);
    var _closure1_slot18 = var7;
    var7 = 11;
    var7 = var16[var7];
    var7 = var15.bind(var1)(var7);
    var7 = var7.GuildScheduledEventEntityTypes;
    var _closure1_slot19 = var7;
    var28 = 12;
    var7 = var16[var28];
    var7 = var15.bind(var1)(var7);
    var11 = var7.Permissions;
    var _closure1_slot20 = var11;
    var7 = var7.JoinGuildSources;
    var _closure1_slot21 = var7;
    var7 = 13;
    var7 = var16[var7];
    var7 = var15.bind(var1)(var7);
    var29 = var7.Fonts;
    var7 = var7.NOOP;
    var _closure1_slot22 = var7;
    var30 = 14;
    var7 = var16[var30];
    var7 = var15.bind(var1)(var7);
    var11 = var7.jsx;
    var _closure1_slot23 = var11;
    var11 = var7.jsxs;
    var _closure1_slot24 = var11;
    var7 = var7.Fragment;
    var _closure1_slot25 = var7;
    var7 = 15;
    var7 = var16[var7];
    var13 = var15.bind(var1)(var7);
    var11 = var13.createStyles;
    var7 = {};
    var25 = {'backgroundColor': null, 'flexDirection': 'row', 'alignItems': 'stretch'};
    var26 = 16;
    var31 = var16[var26];
    var31 = var27.bind(var1)(var31);
    var31 = var31.colors;
    var31 = var31.BACKGROUND_TERTIARY;
    var25['backgroundColor'] = var31;
    var7['imageHeaderContainer'] = var25;
    var25 = {'flexDirection': 'row', 'alignItems': 'center'};
    var7['headerContainer'] = var25;
    var25 = {'flexDirection': 'row', 'alignItems': 'center', 'flex': 1};
    var7['dateContainer'] = var25;
    var25 = {};
    var31 = var16[var26];
    var31 = var27.bind(var1)(var31);
    var31 = var31.spacing;
    var31 = var31.PX_8;
    var25['marginRight'] = var31;
    var7['dateIcon'] = var25;
    var25 = {'paddingHorizontal': 4, 'paddingVertical': 2, 'marginEnd': 8};
    var31 = var16[var26];
    var31 = var27.bind(var1)(var31);
    var31 = var31.colors;
    var31 = var31.BG_BRAND;
    var25['backgroundColor'] = var31;
    var7['newBadge'] = var25;
    var25 = {};
    var31 = var16[var26];
    var31 = var27.bind(var1)(var31);
    var31 = var31.spacing;
    var31 = var31.PX_8;
    var25['paddingTop'] = var31;
    var7['topicContainer'] = var25;
    var25 = {};
    var31 = var16[var26];
    var31 = var27.bind(var1)(var31);
    var31 = var31.spacing;
    var31 = var31.PX_8;
    var25['paddingTop'] = var31;
    var7['detailsContainer'] = var25;
    var25 = {'flexDirection': 'row', 'alignItems': 'center'};
    var31 = var16[var26];
    var31 = var27.bind(var1)(var31);
    var31 = var31.spacing;
    var31 = var31.PX_8;
    var25['paddingTop'] = var31;
    var7['channelContainer'] = var25;
    var25 = {};
    var31 = var16[var26];
    var31 = var27.bind(var1)(var31);
    var31 = var31.spacing;
    var31 = var31.PX_8;
    var25['marginRight'] = var31;
    var7['channelIcon'] = var25;
    var25 = {};
    var31 = var29.PRIMARY_MEDIUM;
    var25['fontFamily'] = var31;
    var31 = var16[var26];
    var31 = var27.bind(var1)(var31);
    var31 = var31.colors;
    var31 = var31.HEADER_SECONDARY;
    var25['color'] = var31;
    var25['fontSize'] = var30;
    var30 = 18;
    var25['lineHeight'] = var30;
    var7['channelText'] = var25;
    var25 = {'flexDirection': 'row', 'alignItems': 'center'};
    var30 = var16[var26];
    var30 = var27.bind(var1)(var30);
    var30 = var30.spacing;
    var30 = var30.PX_8;
    var25['paddingTop'] = var30;
    var7['guildInfoContainer'] = var25;
    var25 = {};
    var30 = var16[var26];
    var30 = var27.bind(var1)(var30);
    var30 = var30.spacing;
    var30 = var30.PX_8;
    var25['marginRight'] = var30;
    var30 = var16[var26];
    var30 = var27.bind(var1)(var30);
    var30 = var30.radii;
    var30 = var30.sm;
    var25['borderRadius'] = var30;
    var7['guildIcon'] = var25;
    var25 = {};
    var30 = 'column';
    var25['flexDirection'] = var30;
    var7['guildInfo'] = var25;
    var25 = {'flexDirection': 'row', 'alignItems': 'center'};
    var7['guildInfoChannelContainer'] = var25;
    var25 = {};
    var29 = var29.PRIMARY_MEDIUM;
    var25['fontFamily'] = var29;
    var29 = var16[var26];
    var29 = var27.bind(var1)(var29);
    var29 = var29.colors;
    var29 = var29.HEADER_SECONDARY;
    var25['color'] = var29;
    var25['fontSize'] = var28;
    var25['lineHeight'] = var26;
    var7['guildInfoChannelText'] = var25;
    var25 = {};
    var26 = var16[var26];
    var26 = var27.bind(var1)(var26);
    var26 = var26.spacing;
    var26 = var26.PX_8;
    var25['marginRight'] = var26;
    var7['creatorAvatar'] = var25;
    var13 = var11.bind(var13)(var7);
    var _closure1_slot26 = var13;
    var11 = {};
    var11['RSVP'] = var24;
    var7 = 'RSVP';
    var11[var24] = var7;
    var11['JOIN'] = var23;
    var7 = 'JOIN';
    var11[var23] = var7;
    var11['START'] = var22;
    var7 = 'START';
    var11[var22] = var7;
    var11['STARTED'] = var21;
    var7 = 'STARTED';
    var11[var21] = var7;
    var11['CONNECTED'] = var20;
    var7 = 'CONNECTED';
    var11[var20] = var7;
    var11['END'] = var19;
    var7 = 'END';
    var11[var19] = var7;
    var11['ENDED'] = var18;
    var7 = 'ENDED';
    var11[var18] = var7;
    var11['JOIN_GUILD'] = var14;
    var7 = 'JOIN_GUILD';
    var11[var14] = var7;
    var _closure1_slot27 = var11;
    var14 = var17.memo;
    var7 = function(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var9 = var1.event;
            var _closure2_slot0 = var9;
            var7 = var1.isConnected;
            var2 = var1.onCloseAction;
            var _closure2_slot1 = var2;
            var8 = var1.recurrenceId;
            var _closure2_slot2 = var8;
            var1 = var9.guild_id;
            var _closure2_slot3 = var1;
            var3 = var9.channel_id;
            var _closure2_slot4 = var3;
            var2 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 26;
            var11 = var6[var1];
            var4 = undefined;
            var14 = var2.bind(var4)(var11);
            var13 = var14.useStateFromStores;
            var11 = _closure1_slot11;
            var12 = new Array(1);
            var12[0] = var11;
            var11 = new Array(1);
            var11[0] = var3;
            var3 = function() {
                var3 = _closure1_slot11;
                var2 = var3.getChannel;
                var1 = _closure2_slot4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var13.bind(var14)(var12, var3, var11);
            var _closure2_slot5 = var3;
            var11 = _closure1_slot1;
            var3 = 35;
            var3 = var6[var3];
            var3 = var11.bind(var4)(var3);
            var12 = var3.bind(var4)();
            var11 = _closure1_slot4;
            var3 = 2;
            var11 = var11.bind(var4)(var12, var3);
            var3 = 1;
            var3 = var11[var3];
            var _closure2_slot6 = var3;
            var3 = _closure1_slot29;
            var3 = var3.bind(var4)(var9, var7);
            var1 = var6[var1];
            var7 = var2.bind(var4)(var1);
            var6 = var7.useStateFromStores;
            var1 = _closure1_slot14;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var4 = _closure1_slot14;
                var3 = var4.can;
                var1 = _closure1_slot20;
                var2 = var1.CONNECT;
                var1 = _closure2_slot5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var6 = var6.bind(var7)(var2, var1);
            var7 = function handleListenIn() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var2 = _closure2_slot5;
                    var4 = null;
                    if(!(var4 != var2)) { _fun0008_ip = 33; continue _fun0008 }
case 53:
                    var2 = _closure2_slot0;
                    var5 = var2.entity_type;
                    var3 = _closure1_slot19;
                    var3 = var3.STAGE_INSTANCE;
                    if(!(var5 === var3)) { _fun0008_ip = 49; continue _fun0008 }
case 54:
                    var7 = _closure2_slot6;
                    var6 = _closure2_slot3;
                    var3 = _closure2_slot5;
                    var5 = var3.id;
                    var3 = undefined;
                    var3 = var7.bind(var3)(var6, var5);
case 49:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 39;
                    var3 = var3[var2];
                    var2 = undefined;
                    var6 = var5.bind(var2)(var3);
                    var5 = var6.openGuildVoiceModal;
                    var3 = _closure2_slot5;
                    var3 = var5.bind(var6)(var3);
                    var3 = _closure2_slot1;
                    if(!(var4 != var3)) { _fun0008_ip = 33; continue _fun0008 }
case 55:
                    var1 = _closure2_slot1;
                    var1 = var1.bind(var2)();
case 33:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = _closure1_slot27;
            var1 = var1.ENDED;
            if(!(var1 !== var3)) { _fun0007_ip = 56; continue _fun0007 }
case 57:
            var1 = _closure1_slot27;
            var1 = var1.JOIN;
            if(!(var1 !== var3)) { _fun0007_ip = 58; continue _fun0007 }
case 59:
            var1 = _closure1_slot27;
            var1 = var1.CONNECTED;
            if(!(var1 !== var3)) { _fun0007_ip = 60; continue _fun0007 }
case 61:
            var1 = _closure1_slot27;
            var1 = var1.RSVP;
            if(!(var1 !== var3)) { _fun0007_ip = 62; continue _fun0007 }
case 63:
            var1 = _closure1_slot27;
            var1 = var1.START;
            if(!(var1 !== var3)) { _fun0007_ip = 64; continue _fun0007 }
case 65:
            var1 = _closure1_slot27;
            var1 = var1.STARTED;
            if(!(var1 !== var3)) { _fun0007_ip = 66; continue _fun0007 }
case 67:
            var1 = _closure1_slot27;
            var1 = var1.END;
            if(!(var1 !== var3)) { _fun0007_ip = 68; continue _fun0007 }
case 14:
            var1 = _closure1_slot27;
            var1 = var1.JOIN_GUILD;
            if(!(var1 !== var3)) { _fun0007_ip = 69; continue _fun0007 }
case 70:
            var2 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 40;
            var1 = var11[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.assertNever;
            var1 = var1.bind(var2)(var3);
            return var4;
case 69:
            var3 = _closure1_slot23;
            var2 = _closure1_slot31;
            var1 = {};
            var1['event'] = var9;
            var1['recurrenceId'] = var8;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 68:
            var3 = _closure1_slot23;
            var2 = _closure1_slot1;
            var15 = _closure1_slot2;
            var1 = 31;
            var1 = var15[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var11 = 'secondary';
            var1['variant'] = var11;
            var14 = _closure1_slot0;
            var11 = 20;
            var12 = var15[var11];
            var12 = var14.bind(var4)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var15[var11];
            var11 = var14.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.qaYzPD;
            var11 = var12.bind(var13)(var11);
            var1['text'] = var11;
            var11 = function onPress() {
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 36;
                var2 = var7[var1];
                var1 = undefined;
                var4 = var6.bind(var1)(var2);
                var3 = var4.show;
                var2 = {};
                var10 = _closure1_slot0;
                var5 = 20;
                var8 = var7[var5];
                var8 = var10.bind(var1)(var8);
                var11 = var8.intl;
                var9 = var11.string;
                var8 = var7[var5];
                var8 = var10.bind(var1)(var8);
                var8 = var8.t;
                var8 = var8.qaYzPD;
                var8 = var9.bind(var11)(var8);
                var2['title'] = var8;
                var8 = var7[var5];
                var8 = var10.bind(var1)(var8);
                var11 = var8.intl;
                var9 = var11.string;
                var8 = var7[var5];
                var8 = var10.bind(var1)(var8);
                var8 = var8.t;
                var8 = var8.bnDQ7O;
                var8 = var9.bind(var11)(var8);
                var2['body'] = var8;
                var8 = var7[var5];
                var8 = var10.bind(var1)(var8);
                var11 = var8.intl;
                var9 = var11.string;
                var8 = var7[var5];
                var8 = var10.bind(var1)(var8);
                var8 = var8.t;
                var8 = var8.gm1Ven;
                var8 = var9.bind(var11)(var8);
                var2['cancelText'] = var8;
                var8 = var7[var5];
                var8 = var10.bind(var1)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var5 = var7[var5];
                var5 = var10.bind(var1)(var5);
                var5 = var5.t;
                var5 = var5.p89ACg;
                var5 = var8.bind(var9)(var5);
                var2['confirmText'] = var5;
                var5 = function onConfirm() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 37;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.endEvent;
                    var1 = _closure2_slot0;
                    var2 = var1.id;
                    var1 = var1.guild_id;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var2['onConfirm'] = var5;
                var5 = 38;
                var5 = var7[var5];
                var5 = var6.bind(var1)(var5);
                var5 = var5.Colors;
                var5 = var5.RED;
                var2['confirmColor'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1['onPress'] = var11;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 66:
            var3 = _closure1_slot23;
            var2 = _closure1_slot1;
            var15 = _closure1_slot2;
            var1 = 31;
            var1 = var15[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {'variant': 'secondary', 'text': null, 'grow': true, 'disabled': true};
            var14 = _closure1_slot0;
            var11 = 20;
            var12 = var15[var11];
            var12 = var14.bind(var4)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var15[var11];
            var11 = var14.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.Yz0V6O;
            var11 = var12.bind(var13)(var11);
            var1['text'] = var11;
            var11 = _closure1_slot22;
            var1['onPress'] = var11;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 64:
            var3 = _closure1_slot23;
            var2 = _closure1_slot1;
            var15 = _closure1_slot2;
            var1 = 31;
            var1 = var15[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var11 = 'active';
            var1['variant'] = var11;
            var14 = _closure1_slot0;
            var11 = 20;
            var12 = var15[var11];
            var12 = var14.bind(var4)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var15[var11];
            var11 = var14.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.cK1GGR;
            var11 = var12.bind(var13)(var11);
            var1['text'] = var11;
            var10 = function onPress() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0009_ip = 71; continue _fun0009 }
case 53:
                    var3 = _closure2_slot1;
                    var1 = undefined;
                    var1 = var3.bind(var1)();
case 71:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 21;
                    var3 = var3[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.openStartGuildEventModal;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot2;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                }
            };
            var1['onPress'] = var10;
            var10 = true;
            var1['grow'] = var10;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 62:
            var3 = _closure1_slot23;
            var2 = _closure1_slot30;
            var1 = {};
            var1['event'] = var9;
            var1['recurrenceId'] = var8;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 60:
            var3 = _closure1_slot23;
            var2 = _closure1_slot1;
            var12 = _closure1_slot2;
            var1 = 31;
            var1 = var12[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var8 = 'active';
            var1['variant'] = var8;
            var11 = _closure1_slot0;
            var8 = 20;
            var9 = var12[var8];
            var9 = var11.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var12[var8];
            var8 = var11.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.aW2YlJ;
            var8 = var9.bind(var10)(var8);
            var1['text'] = var8;
            var1['onPress'] = var7;
            var8 = true;
            var1['grow'] = var8;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 58:
            var3 = _closure1_slot23;
            var2 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 31;
            var1 = var8[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var8 = 'active';
            var1['variant'] = var8;
            var9 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 20;
            var10 = var12[var8];
            var10 = var9.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var8 = var12[var8];
            var8 = var9.bind(var4)(var8);
            var9 = var8.t;
            if(var6) { _fun0007_ip = 72; continue _fun0007 }
case 73:
            var8 = var9.TVBCKS;
            var8 = var10.bind(var11)(var8);
            _fun0007_ip = 74; continue _fun0007;
case 72:
            var9 = var9.ZYO5OD;
            var8 = var10.bind(var11)(var9);
case 74:
            var1['text'] = var8;
            var1['onPress'] = var7;
            var6 = !var6;
            var1['disabled'] = var6;
            var6 = true;
            var1['grow'] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 56:
            var3 = _closure1_slot23;
            var2 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 31;
            var1 = var10[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {'variant': 'secondary', 'text': null, 'grow': true, 'disabled': true};
            var9 = _closure1_slot0;
            var6 = 20;
            var7 = var10[var6];
            var7 = var9.bind(var4)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var10[var6];
            var6 = var9.bind(var4)(var6);
            var6 = var6.t;
            var6 = var6.Pj7Xrq;
            var6 = var7.bind(var8)(var6);
            var1['text'] = var6;
            var5 = _closure1_slot22;
            var1['onPress'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var7 = var14.bind(var17)(var7);
    var14 = 61;
    var14 = var16[var14];
    var16 = var15.bind(var1)(var14);
    var15 = var16.fileFinishedImporting;
    var14 = 'modules/guild_scheduled_events/native/components/GuildEventCardComponents.tsx';
    var14 = var15.bind(var16)(var14);
    var3['useGuildEventCardStyles'] = var13;
    var13 = function GuildEventShareAction(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var9 = var1.event;
            var _closure2_slot0 = var9;
            var6 = _closure1_slot1;
            var13 = _closure1_slot2;
            var1 = 17;
            var1 = var13[var1];
            var4 = undefined;
            var1 = var6.bind(var4)(var1);
            var5 = var1.bind(var4)(var9);
            var _closure2_slot1 = var5;
            var12 = _closure1_slot0;
            var1 = 18;
            var1 = var13[var1];
            var3 = var12.bind(var4)(var1);
            var2 = var3.SHARE_EVENT_DETAILS_LINK;
            var1 = {};
            var10 = var9.guild_id;
            var1['guildId'] = var10;
            var9 = var9.id;
            var1['guildEventId'] = var9;
            var1 = var2.bind(var3)(var1);
            var _closure2_slot2 = var1;
            var3 = _closure1_slot23;
            var1 = 19;
            var1 = var13[var1];
            var1 = var12.bind(var4)(var1);
            var2 = var1.IconButton;
            var1 = {};
            var9 = 20;
            var10 = var13[var9];
            var10 = var12.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var13[var9];
            var9 = var12.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.RDE0SU;
            var9 = var10.bind(var11)(var9);
            var1['accessibilityLabel'] = var9;
            var8 = function onPress() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    if(var2) { _fun0011_ip = 75; continue _fun0011 }
case 76:
                    var2 = 22;
                    var2 = var3[var2];
                    var5 = undefined;
                    var7 = var4.bind(var5)(var2);
                    var6 = var7.copy;
                    var2 = _closure2_slot2;
                    var2 = var6.bind(var7)(var2);
                    var2 = 23;
                    var2 = var3[var2];
                    var5 = var4.bind(var5)(var2);
                    var2 = var5.presentLinkCopied;
                    var2 = var2.bind(var5)();
                    _fun0011_ip = 77; continue _fun0011;
case 75:
                    var2 = 21;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.openShareEvent;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
case 77:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['onPress'] = var8;
            var8 = _closure1_slot2;
            if(var5) { _fun0010_ip = 78; continue _fun0010 }
case 79:
            var5 = 25;
            var5 = var8[var5];
            _fun0010_ip = 80; continue _fun0010;
case 78:
            var7 = 24;
            var5 = var8[var7];
case 80:
            var5 = var6.bind(var4)(var5);
            var1['icon'] = var5;
            var5 = 'secondary';
            var1['variant'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['GuildEventShareAction'] = var13;
    var13 = function GuildEventModeratorAction(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var1 = arg1;
            var2 = var1.event;
            var _closure2_slot0 = var2;
            var1 = var1.recurrenceId;
            var _closure2_slot1 = var1;
            var4 = undefined;
            var _closure2_slot3 = var4;
            var3 = var2.channel_id;
            var _closure2_slot2 = var3;
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var8 = 26;
            var1 = var9[var8];
            var12 = var7.bind(var4)(var1);
            var11 = var12.useStateFromStores;
            var1 = _closure1_slot13;
            var10 = new Array(1);
            var10[0] = var1;
            var1 = function() {
                var3 = _closure1_slot13;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var1.guild_id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var11.bind(var12)(var10, var1);
            var8 = var9[var8];
            var12 = var7.bind(var4)(var8);
            var11 = var12.useStateFromStores;
            var8 = _closure1_slot11;
            var10 = new Array(1);
            var10[0] = var8;
            var8 = new Array(1);
            var8[0] = var3;
            var3 = function() {
                var3 = _closure1_slot11;
                var2 = var3.getChannel;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8 = var11.bind(var12)(var10, var3, var8);
            var3 = 27;
            var3 = var9[var3];
            var7 = var7.bind(var4)(var3);
            var3 = var7.useManageResourcePermissions;
            var9 = null;
            if(!(var9 != var8)) { _fun0012_ip = 81; continue _fun0012 }
case 82:
            var1 = var8;
case 81:
            var1 = var3.bind(var7)(var1);
            var1 = var1.canManageGuildEvent;
            var1 = var1.bind(var4)(var2);
            _closure2_slot3 = var1;
            var3 = _closure1_slot23;
            var11 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 19;
            var1 = var7[var1];
            var1 = var11.bind(var4)(var1);
            var2 = var1.IconButton;
            var1 = {};
            var8 = 20;
            var9 = var7[var8];
            var9 = var11.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var7[var8];
            var8 = var11.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.HIgA5e;
            var8 = var9.bind(var10)(var8);
            var1['accessibilityLabel'] = var8;
            var6 = function onPress() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 21;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.showGuildEventModeratorActionSheet;
                var3 = _closure2_slot0;
                var2 = _closure2_slot3;
                var1 = _closure2_slot1;
                var1 = var4.bind(var5)(var3, var2, var1);
                return var1;
            };
            var1['onPress'] = var6;
            var6 = _closure1_slot1;
            var5 = 28;
            var5 = var7[var5];
            var5 = var6.bind(var4)(var5);
            var1['icon'] = var5;
            var5 = 'secondary';
            var1['variant'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['GuildEventModeratorAction'] = var13;
    var3['useEventRsvpState'] = var12;
    var12 = function GuildEventIndicateInterestAction(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var1 = arg1;
            var3 = var1.event;
            var2 = _closure1_slot28;
            var4 = undefined;
            var1 = null;
            var3 = var2.bind(var4)(var3, var1);
            var2 = _closure1_slot4;
            var1 = 2;
            var2 = var2.bind(var4)(var3, var1);
            var1 = 0;
            var11 = var2[var1];
            var1 = 1;
            var5 = var2[var1];
            var7 = 'secondary';
            if(!var11) { _fun0013_ip = 49; continue _fun0013 }
case 83:
            var7 = 'tertiary';
case 49:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            if(var11) { _fun0013_ip = 40; continue _fun0013 }
case 84:
            var1 = 30;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var9 = var1.BellIcon;
            _fun0013_ip = 85; continue _fun0013;
case 40:
            var1 = 29;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var9 = var1.CheckmarkLargeIcon;
case 85:
            var3 = _closure1_slot23;
            var2 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 31;
            var1 = var10[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var8 = 'togglebutton';
            var1['accessibilityRole'] = var8;
            var8 = {};
            var8['checked'] = var11;
            var1['accessibilityState'] = var8;
            var1['variant'] = var7;
            var8 = _closure1_slot23;
            var7 = {};
            var11 = 'sm';
            var7['size'] = var11;
            var7 = var8.bind(var4)(var9, var7);
            var1['icon'] = var7;
            var9 = _closure1_slot0;
            var6 = 20;
            var7 = var10[var6];
            var7 = var9.bind(var4)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var10[var6];
            var6 = var9.bind(var4)(var6);
            var6 = var6.t;
            var6 = var6.DlcqlZ;
            var6 = var7.bind(var8)(var6);
            var1['text'] = var6;
            var1['onPress'] = var5;
            var5 = true;
            var1['grow'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['GuildEventIndicateInterestAction'] = var12;
    var3['PrimaryActionType'] = var11;
    var3['usePrimaryActionButtonType'] = var10;
    var3['GuildEventCardRSVPAction'] = var9;
    var3['GuildEventJoinAndRSVPAction'] = var8;
    var3['GuildEventCardPrimaryAction'] = var7;
    var7 = function GuildEventCardImageHeader(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var1 = arg1;
            var8 = var1.event;
            var1 = _closure1_slot26;
            var5 = undefined;
            var7 = var1.bind(var5)();
            var1 = _closure1_slot8;
            var1 = var1.bind(var5)();
            var12 = var1.width;
            var2 = var8.image;
            var1 = null;
            if(!(var1 != var2)) { _fun0014_ip = 86; continue _fun0014 }
case 87:
            var3 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 41;
            var2 = var10[var2];
            var4 = var3.bind(var5)(var2);
            var3 = var4.makeSource;
            var9 = _closure1_slot1;
            var2 = 42;
            var2 = var10[var2];
            var2 = var9.bind(var5)(var2);
            var2 = var2.bind(var5)(var8, var12);
            var9 = var3.bind(var4)(var2);
            var4 = _closure1_slot23;
            var3 = _closure1_slot6;
            var2 = {};
            var7 = var7.imageHeaderContainer;
            var2['style'] = var7;
            var8 = _closure1_slot23;
            var7 = _closure1_slot7;
            var6 = {};
            var10 = {};
            var10['width'] = var12;
            var11 = 2.5;
            var11 = var12 / var11;
            var10['height'] = var11;
            var6['style'] = var10;
            var6['source'] = var9;
            var9 = 'cover';
            var6['resizeMode'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 86:
            return var1;
        }
    };
    var3['GuildEventCardImageHeader'] = var7;
    var3['UserCountIconPill'] = var6;
    var6 = function GuildEventCardHeader(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var3 = arg1;
            var15 = var3.event;
            var _closure2_slot0 = var15;
            var14 = var3.recurrenceId;
            var1 = var3.showUserCount;
            var4 = undefined;
            if(!(var1 === var4)) { _fun0015_ip = 88; continue _fun0015 }
case 89:
            var1 = true;
case 88:
            var6 = var3.showEndDate;
            if(!(var6 === var4)) { _fun0015_ip = 90; continue _fun0015 }
case 91:
            var6 = false;
case 90:
            var2 = var3.isPreview;
            if(!(var2 === var4)) { _fun0015_ip = 83; continue _fun0015 }
case 92:
            var2 = false;
case 83:
            var7 = var3.showCreator;
            if(!(var7 === var4)) { _fun0015_ip = 93; continue _fun0015 }
case 29:
            var7 = true;
case 93:
            var5 = var3.isNew;
            if(!(var5 === var4)) { _fun0015_ip = 94; continue _fun0015 }
case 95:
            var5 = false;
case 94:
            var10 = var3.style;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var3 = _closure1_slot26;
            var11 = var3.bind(var4)();
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var3 = 46;
            var3 = var9[var3];
            var3 = var8.bind(var4)(var3);
            var18 = var3.bind(var4)();
            var3 = 47;
            var3 = var9[var3];
            var9 = var8.bind(var4)(var3);
            var8 = null;
            var12 = var8 == var15;
            var3 = undefined;
            if(var12) { _fun0015_ip = 96; continue _fun0015 }
case 44:
            var3 = var15.id;
case 96:
            var3 = var9.bind(var4)(var14, var3);
            var20 = var15.entity_type;
            if(!(var8 == var3)) { _fun0015_ip = 97; continue _fun0015 }
case 98:
            var3 = {};
case 97:
            var3 = var3.is_canceled;
            var16 = var4 !== var3;
            if(!var16) { _fun0015_ip = 78; continue _fun0015 }
case 45:
            var16 = var3;
case 78:
            var9 = _closure1_slot1;
            var12 = _closure1_slot2;
            var3 = 48;
            var3 = var12[var3];
            var3 = var9.bind(var4)(var3);
            var9 = var3.bind(var4)(var15, var14);
            var3 = var8 == var9;
            var19 = undefined;
            if(var3) { _fun0015_ip = 99; continue _fun0015 }
case 100:
            var12 = var9.startTime;
            var3 = var12.toISOString;
            var19 = var3.bind(var12)();
case 99:
            _closure2_slot1 = var19;
            var3 = undefined;
            if(!var6) { _fun0015_ip = 101; continue _fun0015 }
case 102:
            var12 = var8 == var9;
            var6 = undefined;
            if(var12) { _fun0015_ip = 103; continue _fun0015 }
case 104:
            var12 = var9.endTime;
            var9 = var8 == var12;
            var6 = undefined;
            if(var9) { _fun0015_ip = 103; continue _fun0015 }
case 105:
            var9 = var12.toISOString;
            var6 = var9.bind(var12)();
case 103:
            var3 = var6;
case 101:
            _closure2_slot2 = var3;
            var12 = _closure1_slot5;
            var9 = var12.useMemo;
            var6 = new Array(2);
            var6[0] = var19;
            var6[1] = var3;
            var3 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 32;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.getEventTimeData;
                var2 = _closure2_slot1;
                var1 = _closure2_slot2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var3 = var9.bind(var12)(var3, var6);
            var6 = _closure1_slot19;
            var19 = var6.STAGE_INSTANCE;
            var9 = _closure1_slot0;
            var12 = _closure1_slot2;
            var6 = 49;
            var6 = var12[var6];
            var12 = var9.bind(var4)(var6);
            var9 = var12.getGuildScheduledEventHeaderProps;
            var6 = {};
            var6['eventTimeData'] = var3;
            var19 = var20 === var19;
            var6['isStage'] = var19;
            var6['theme'] = var18;
            var6['event'] = var15;
            var6['isCanceled'] = var16;
            var6['recurrenceId'] = var14;
            var6 = var9.bind(var12)(var6);
            var22 = var6.color;
            _closure2_slot3 = var22;
            var18 = var6.text;
            var19 = var6.shouldChangeTextColor;
            _closure2_slot4 = var19;
            var12 = var3.endDateTimeString;
            var6 = null;
            if(!var1) { _fun0015_ip = 106; continue _fun0015 }
case 107:
            var9 = _closure1_slot23;
            var3 = _closure1_slot32;
            var1 = {};
            var1['event'] = var15;
            var1['recurrenceId'] = var14;
            var14 = var9.bind(var4)(var3, var1);
            var1 = var14;
            if(var2) { _fun0015_ip = 108; continue _fun0015 }
case 109:
            var9 = _closure1_slot23;
            var3 = _closure1_slot0;
            var16 = _closure1_slot2;
            var2 = 50;
            var2 = var16[var2];
            var2 = var3.bind(var4)(var2);
            var3 = var2.PressableOpacity;
            var2 = {};
            var16 = 'button';
            var2['accessibilityRole'] = var16;
            var16 = function onPress() {
                var1 = undefined;
                return var1;
            };
            var2['onPress'] = var16;
            var2['children'] = var14;
            var1 = var9.bind(var4)(var3, var2);
case 108:
            var6 = var1;
case 106:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 26;
            var1 = var3[var1];
            var14 = var2.bind(var4)(var1);
            var9 = var14.useStateFromStores;
            var1 = _closure1_slot15;
            var3 = new Array(1);
            var3[0] = var1;
            var2 = new Array(1);
            var2[0] = var15;
            var1 = function() {
                var3 = _closure1_slot15;
                var2 = var3.getUser;
                var1 = _closure2_slot0;
                var1 = var1.creator_id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var16 = var9.bind(var14)(var3, var1, var2);
            var14 = var8 != var12;
            if(!var14) { _fun0015_ip = 110; continue _fun0015 }
case 111:
            var1 = '';
            var14 = var1 !== var12;
case 110:
            var20 = var18;
            if(!var14) { _fun0015_ip = 112; continue _fun0015 }
case 113:
            var2 = _closure1_slot0;
            var21 = _closure1_slot2;
            var1 = 20;
            var3 = var21[var1];
            var3 = var2.bind(var4)(var3);
            var9 = var3.intl;
            var3 = var9.format;
            var1 = var21[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.t;
            var2 = var1.vHYgJS;
            var1 = {};
            var1['start'] = var18;
            var17 = function startHook(arg1) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var4 = _closure1_slot23;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 51;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.Text;
                    var1 = {'variant': 'text-sm/semibold', 'color': 'text-secondary'};
                    var5 = _closure2_slot4;
                    if(!var5) { _fun0016_ip = 93; continue _fun0016 }
case 114:
                    var6 = {};
                    var7 = _closure2_slot3;
                    var6['color'] = var7;
                    var5 = var6;
case 93:
                    var1['style'] = var5;
                    var5 = arg1;
                    var1['children'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                }
            };
            var1['startHook'] = var17;
            var1['end'] = var12;
            var20 = var3.bind(var9)(var2, var1);
case 112:
            var3 = _closure1_slot24;
            var2 = _closure1_slot6;
            var1 = {};
            var12 = var11.headerContainer;
            var9 = new Array(2);
            var9[0] = var12;
            var9[1] = var10;
            var1['style'] = var9;
            var12 = _closure1_slot23;
            if(var5) { _fun0015_ip = 115; continue _fun0015 }
case 116:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 53;
            var5 = var10[var5];
            var5 = var9.bind(var4)(var5);
            var9 = var5.CalendarIcon;
            var5 = {};
            var10 = 'sm';
            var5['size'] = var10;
            var5['color'] = var22;
            var10 = var11.dateIcon;
            var5['style'] = var10;
            var9 = var12.bind(var4)(var9, var5);
            _fun0015_ip = 117; continue _fun0015;
case 115:
            var10 = _closure1_slot1;
            var17 = _closure1_slot2;
            var5 = 52;
            var5 = var17[var5];
            var10 = var10.bind(var4)(var5);
            var5 = {};
            var17 = var11.newBadge;
            var5['containerStyle'] = var17;
            var17 = 'text-xs/bold';
            var5['variant'] = var17;
            var9 = var12.bind(var4)(var10, var5);
case 117:
            var5 = new Array(4);
            var5[0] = var9;
            var12 = _closure1_slot23;
            var10 = _closure1_slot6;
            var9 = {};
            var17 = var11.dateContainer;
            var9['style'] = var17;
            var18 = _closure1_slot23;
            var21 = _closure1_slot0;
            var23 = _closure1_slot2;
            var17 = 51;
            var17 = var23[var17];
            var17 = var21.bind(var4)(var17);
            var17 = var17.Text;
            if(var14) { _fun0015_ip = 118; continue _fun0015 }
case 119:
            var14 = {'variant': 'text-sm/semibold', 'color': 'text-secondary'};
            if(!var19) { _fun0015_ip = 120; continue _fun0015 }
case 121:
            var21 = {};
            var21['color'] = var22;
            var19 = var21;
case 120:
            var14['style'] = var19;
            var14['children'] = var20;
            _fun0015_ip = 122; continue _fun0015;
case 118:
            var19 = {'variant': 'text-sm/semibold', 'color': 'header-secondary'};
            var19['children'] = var20;
            var14 = var19;
case 122:
            var14 = var18.bind(var4)(var17, var14);
            var9['children'] = var14;
            var9 = var12.bind(var4)(var10, var9);
            var5[1] = var9;
            if(!var7) { _fun0015_ip = 123; continue _fun0015 }
case 124:
            var7 = var8 != var16;
case 123:
            if(!var7) { _fun0015_ip = 125; continue _fun0015 }
case 126:
            var10 = _closure1_slot23;
            var9 = _closure1_slot1;
            var14 = _closure1_slot2;
            var12 = 54;
            var8 = var14[var12];
            var9 = var9.bind(var4)(var8);
            var8 = {};
            var17 = true;
            var8['accessible'] = var17;
            var13 = _closure1_slot0;
            var17 = 20;
            var18 = var14[var17];
            var18 = var13.bind(var4)(var18);
            var20 = var18.intl;
            var19 = var20.formatToPlainString;
            var17 = var14[var17];
            var17 = var13.bind(var4)(var17);
            var17 = var17.t;
            var18 = var17.+3iypa;
            var17 = {};
            var21 = var16.username;
            var17['username'] = var21;
            var17 = var19.bind(var20)(var18, var17);
            var8['accessibilityLabel'] = var17;
            var8['user'] = var16;
            var15 = var15.guild_id;
            var8['guildId'] = var15;
            var12 = var14[var12];
            var12 = var13.bind(var4)(var12);
            var12 = var12.AvatarSizes;
            var12 = var12.XSMALL_20;
            var8['size'] = var12;
            var11 = var11.creatorAvatar;
            var8['style'] = var11;
            var7 = var10.bind(var4)(var9, var8);
case 125:
            var5[2] = var7;
            var5[3] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['GuildEventCardHeader'] = var6;
    var3['GuildEventCardTitle'] = var5;
    var3['GuildEventCardDescription'] = var4;
    var4 = function GuildEventCardMetaInfo(arg1) {
        var2 = arg1;
        var12 = var2.event;
        var14 = var2.titleStyle;
        var13 = var2.titleContainerStyle;
        var1 = var2.onTitlePress;
        var11 = var2.descriptionStyle;
        var10 = var2.descriptionContainerStyle;
        var9 = var2.condensed;
        var4 = _closure1_slot24;
        var3 = _closure1_slot25;
        var2 = {};
        var8 = _closure1_slot23;
        var7 = _closure1_slot33;
        var5 = {};
        var5['event'] = var12;
        var5['textStyle'] = var14;
        var5['style'] = var13;
        var5['condensed'] = var9;
        var5['onPress'] = var1;
        var1 = undefined;
        var7 = var8.bind(var1)(var7, var5);
        var5 = new Array(2);
        var5[0] = var7;
        var8 = _closure1_slot23;
        var7 = _closure1_slot34;
        var6 = {};
        var6['event'] = var12;
        var6['textStyle'] = var11;
        var6['style'] = var10;
        var6['condensed'] = var9;
        var9 = 3;
        var6['numberOfLines'] = var9;
        var6 = var8.bind(var1)(var7, var6);
        var5[1] = var6;
        var2['children'] = var5;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var3['GuildEventCardMetaInfo'] = var4;
    var4 = function GuildEventSimpleLocation(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var2 = arg1;
            var6 = var2.event;
            var2 = _closure1_slot26;
            var5 = undefined;
            var10 = var2.bind(var5)();
            var7 = var6.channel_id;
            var _closure2_slot0 = var7;
            var11 = var6.guild_id;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var4 = 26;
            var8 = var3[var4];
            var14 = var2.bind(var5)(var8);
            var13 = var14.useStateFromStores;
            var8 = _closure1_slot11;
            var9 = new Array(1);
            var9[0] = var8;
            var8 = new Array(1);
            var8[0] = var7;
            var7 = function() {
                var3 = _closure1_slot11;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var16 = var13.bind(var14)(var9, var7, var8);
            var _closure2_slot1 = var16;
            var4 = var3[var4];
            var9 = var2.bind(var5)(var4);
            var8 = var9.useStateFromStores;
            var4 = _closure1_slot12;
            var7 = new Array(2);
            var7[0] = var4;
            var4 = _closure1_slot10;
            var7[1] = var4;
            var4 = new Array(1);
            var4[0] = var16;
            var1 = function() {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var3 = _closure1_slot10;
                    var2 = var3.getId;
                    var4 = var2.bind(var3)();
                    var3 = _closure1_slot12;
                    var2 = var3.isMember;
                    var6 = _closure2_slot1;
                    var1 = null;
                    var6 = var1 == var6;
                    var1 = undefined;
                    if(var6) { _fun0018_ip = 127; continue _fun0018 }
case 91:
                    var5 = _closure2_slot1;
                    var1 = var5.guild_id;
case 127:
                    var1 = var2.bind(var3)(var1, var4);
                    return var1;
                }
            };
            var4 = var8.bind(var9)(var7, var1, var4);
            var1 = 56;
            var1 = var3[var1];
            var2 = var2.bind(var5)(var1);
            var1 = var2.getLocationFromEvent;
            var3 = var1.bind(var2)(var6);
            var1 = null;
            if(!(var1 == var16)) { _fun0017_ip = 128; continue _fun0017 }
case 129:
            if(!(var1 != var3)) { _fun0017_ip = 130; continue _fun0017 }
case 128:
            var7 = var1 == var16;
            var2 = undefined;
            if(var7) { _fun0017_ip = 2; continue _fun0017 }
case 45:
            var2 = var16.name;
case 2:
            var15 = var3;
            if(!(var1 != var2)) { _fun0017_ip = 34; continue _fun0017 }
case 131:
            var15 = var2;
case 34:
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 57;
            var2 = var7[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.getEventLocationIconComponent;
            var9 = var2.bind(var3)(var6, var16, var4);
            var4 = _closure1_slot24;
            var3 = _closure1_slot6;
            var2 = {};
            var6 = var10.channelContainer;
            var2['style'] = var6;
            var7 = var1 != var9;
            if(!var7) { _fun0017_ip = 132; continue _fun0017 }
case 133:
            var8 = _closure1_slot23;
            var6 = {};
            var13 = 'sm';
            var6['size'] = var13;
            var13 = var10.channelIcon;
            var6['style'] = var13;
            var7 = var8.bind(var5)(var9, var6);
case 132:
            var6 = new Array(2);
            var6[0] = var7;
            var9 = _closure1_slot23;
            var8 = _closure1_slot0;
            var13 = _closure1_slot2;
            var7 = 51;
            var7 = var13[var7];
            var7 = var8.bind(var5)(var7);
            var8 = var7.Text;
            var7 = {};
            var10 = var10.channelText;
            var7['style'] = var10;
            var13 = var1 != var16;
            var10 = undefined;
            if(!var13) { _fun0017_ip = 134; continue _fun0017 }
case 135:
            var14 = _closure1_slot1;
            var17 = _closure1_slot2;
            var13 = 58;
            var13 = var17[var13];
            var14 = var14.bind(var5)(var13);
            var13 = {};
            var13['channel'] = var16;
            var10 = var14.bind(var5)(var13);
case 134:
            var7['accessibilityLabel'] = var10;
            var10 = 'text-sm/medium';
            var7['variant'] = var10;
            var10 = 'header-secondary';
            var7['color'] = var10;
            var13 = var1 != var15;
            var10 = null;
            if(!var13) { _fun0017_ip = 136; continue _fun0017 }
case 137:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var12 = 55;
            var12 = var14[var12];
            var14 = var13.bind(var5)(var12);
            var13 = var14.guildEventDetailsParser;
            var12 = {};
            var12['guildId'] = var11;
            var11 = true;
            var10 = var13.bind(var14)(var15, var11, var12);
case 136:
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 130:
            return var1;
        }
    };
    var3['GuildEventSimpleLocation'] = var4;
    var4 = function GuildEventCardSimpleGuildInfo(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var3 = arg1;
            var2 = var3.event;
            var7 = var3.style;
            var14 = var3.textStyle;
            var3 = _closure1_slot26;
            var5 = undefined;
            var12 = var3.bind(var5)();
            var8 = var2.guild_id;
            var _closure2_slot0 = var8;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 26;
            var2 = var4[var2];
            var6 = var3.bind(var5)(var2);
            var4 = var6.useStateFromStores;
            var2 = _closure1_slot13;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = new Array(1);
            var2[0] = var8;
            var1 = function() {
                var3 = _closure1_slot13;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var13 = var4.bind(var6)(var3, var1, var2);
            var1 = null;
            var2 = var1 == var13;
            if(var2) { _fun0019_ip = 138; continue _fun0019 }
case 139:
            var4 = _closure1_slot24;
            var3 = _closure1_slot6;
            var2 = {};
            var8 = var12.guildInfoContainer;
            var6 = new Array(2);
            var6[0] = var8;
            var6[1] = var7;
            var2['style'] = var6;
            var8 = _closure1_slot23;
            var7 = _closure1_slot1;
            var15 = _closure1_slot2;
            var9 = 59;
            var6 = var15[var9];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var6['guild'] = var13;
            var11 = _closure1_slot0;
            var9 = var15[var9];
            var9 = var11.bind(var5)(var9);
            var9 = var9.GuildIconSizes;
            var9 = var9.XSMALL_20;
            var6['size'] = var9;
            var9 = var12.guildIcon;
            var6['style'] = var9;
            var7 = var8.bind(var5)(var7, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var9 = _closure1_slot23;
            var8 = _closure1_slot6;
            var7 = {};
            var12 = var12.guildInfo;
            var7['style'] = var12;
            var12 = _closure1_slot23;
            var10 = 51;
            var10 = var15[var10];
            var10 = var11.bind(var5)(var10);
            var11 = var10.Text;
            var10 = {};
            var15 = 'text-sm/semibold';
            var10['variant'] = var15;
            var10['style'] = var14;
            var13 = var13.name;
            var10['children'] = var13;
            var10 = var12.bind(var5)(var11, var10);
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 138:
            return var1;
        }
    };
    var3['GuildEventCardSimpleGuildInfo'] = var4;
    var2 = function GuildEventCardGuildInfo(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var2 = arg1;
            var6 = var2.event;
            var2 = _closure1_slot26;
            var5 = undefined;
            var19 = var2.bind(var5)();
            var8 = var6.channel_id;
            var _closure2_slot0 = var8;
            var7 = var6.guild_id;
            var _closure2_slot1 = var7;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 26;
            var9 = var4[var2];
            var12 = var3.bind(var5)(var9);
            var11 = var12.useStateFromStores;
            var9 = _closure1_slot11;
            var10 = new Array(1);
            var10[0] = var9;
            var9 = new Array(1);
            var9[0] = var8;
            var8 = function() {
                var3 = _closure1_slot11;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var10 = var11.bind(var12)(var10, var8, var9);
            var _closure2_slot2 = var10;
            var8 = var4[var2];
            var12 = var3.bind(var5)(var8);
            var11 = var12.useStateFromStores;
            var8 = _closure1_slot13;
            var9 = new Array(1);
            var9[0] = var8;
            var8 = new Array(1);
            var8[0] = var7;
            var7 = function() {
                var3 = _closure1_slot13;
                var2 = var3.getGuild;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var14 = var11.bind(var12)(var9, var7, var8);
            var2 = var4[var2];
            var7 = var3.bind(var5)(var2);
            var4 = var7.useStateFromStores;
            var2 = _closure1_slot12;
            var3 = new Array(2);
            var3[0] = var2;
            var2 = _closure1_slot10;
            var3[1] = var2;
            var2 = new Array(1);
            var2[0] = var10;
            var1 = function() {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                    var3 = _closure1_slot10;
                    var2 = var3.getId;
                    var4 = var2.bind(var3)();
                    var3 = _closure1_slot12;
                    var2 = var3.isMember;
                    var6 = _closure2_slot2;
                    var1 = null;
                    var6 = var1 == var6;
                    var1 = undefined;
                    if(var6) { _fun0021_ip = 127; continue _fun0021 }
case 91:
                    var5 = _closure2_slot2;
                    var1 = var5.guild_id;
case 127:
                    var1 = var2.bind(var3)(var1, var4);
                    return var1;
                }
            };
            var4 = var4.bind(var7)(var3, var1, var2);
            var1 = null;
            if(!(var1 != var14)) { _fun0020_ip = 140; continue _fun0020 }
case 141:
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 56;
            var2 = var7[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.getLocationFromEvent;
            var11 = var2.bind(var3)(var6);
            var3 = var1 == var10;
            var2 = undefined;
            if(var3) { _fun0020_ip = 142; continue _fun0020 }
case 99:
            var2 = var10.name;
case 142:
            var18 = var11;
            if(!(var1 != var2)) { _fun0020_ip = 5; continue _fun0020 }
case 143:
            var18 = var2;
case 5:
            var12 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 57;
            var2 = var9[var2];
            var3 = var12.bind(var5)(var2);
            var2 = var3.getEventLocationIconSource;
            var25 = var2.bind(var3)(var6, var10, var4);
            var4 = _closure1_slot24;
            var3 = _closure1_slot6;
            var2 = {};
            var6 = var19.guildInfoContainer;
            var2['style'] = var6;
            var8 = _closure1_slot23;
            var7 = _closure1_slot1;
            var13 = 59;
            var6 = var9[var13];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var6['guild'] = var14;
            var13 = var9[var13];
            var13 = var12.bind(var5)(var13);
            var13 = var13.GuildIconSizes;
            var13 = var13.SMALL;
            var6['size'] = var13;
            var13 = var19.guildIcon;
            var6['style'] = var13;
            var7 = var8.bind(var5)(var7, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var8 = _closure1_slot6;
            var7 = {};
            var13 = var19.guildInfo;
            var7['style'] = var13;
            var13 = _closure1_slot23;
            var20 = 51;
            var9 = var9[var20];
            var9 = var12.bind(var5)(var9);
            var12 = var9.Text;
            var9 = {'variant': 'text-sm/medium', 'color': 'header-primary'};
            var14 = var14.name;
            var9['children'] = var14;
            var12 = var13.bind(var5)(var12, var9);
            var9 = new Array(2);
            var9[0] = var12;
            var10 = var1 != var10;
            if(var10) { _fun0020_ip = 144; continue _fun0020 }
case 145:
            var10 = var1 != var11;
case 144:
            if(!var10) { _fun0020_ip = 146; continue _fun0020 }
case 147:
            var13 = _closure1_slot24;
            var12 = _closure1_slot6;
            var11 = {};
            var14 = var19.guildInfoChannelContainer;
            var11['style'] = var14;
            var16 = var1 != var25;
            if(!var16) { _fun0020_ip = 148; continue _fun0020 }
case 149:
            var21 = _closure1_slot23;
            var23 = _closure1_slot1;
            var24 = _closure1_slot2;
            var22 = 60;
            var14 = var24[var22];
            var17 = var23.bind(var5)(var14);
            var14 = {};
            var14['source'] = var25;
            var22 = var24[var22];
            var22 = var23.bind(var5)(var22);
            var22 = var22.Sizes;
            var22 = var22.EXTRA_SMALL;
            var14['size'] = var22;
            var22 = var19.channelIcon;
            var14['style'] = var22;
            var22 = true;
            var14['disableColor'] = var22;
            var16 = var21.bind(var5)(var17, var14);
case 148:
            var14 = new Array(2);
            var14[0] = var16;
            var17 = _closure1_slot23;
            var16 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var20];
            var15 = var16.bind(var5)(var15);
            var16 = var15.Text;
            var15 = {'style': null, 'variant': 'text-xs/medium', 'color': 'header-secondary'};
            var19 = var19.guildInfoChannelText;
            var15['style'] = var19;
            var15['children'] = var18;
            var15 = var17.bind(var5)(var16, var15);
            var14[1] = var15;
            var11['children'] = var14;
            var10 = var13.bind(var5)(var12, var11);
case 146:
            var9[1] = var10;
            var7['children'] = var9;
            var7 = var4.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 140:
            return var1;
        }
    };
    var3['GuildEventCardGuildInfo'] = var2;
    return var1;
})();