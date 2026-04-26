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
        var7 = _closure1_slot17;
        var4 = new Array(1);
        var4[0] = var7;
        var7 = var3.id;
        var3 = new Array(2);
        var3[0] = var7;
        var3[1] = var1;
        var1 = function() {
            var4 = _closure1_slot17;
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
    var _closure1_slot27 = var12;
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
            var4 = _closure1_slot12;
            var11 = new Array(1);
            var11[0] = var4;
            var4 = function() {
                var3 = _closure1_slot12;
                var2 = var3.getGuild;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var13.bind(var14)(var11, var4);
            var11 = var12[var10];
            var15 = var9.bind(var7)(var11);
            var14 = var15.useStateFromStores;
            var11 = _closure1_slot10;
            var13 = new Array(1);
            var13[0] = var11;
            var11 = new Array(1);
            var11[0] = var5;
            var5 = function() {
                var3 = _closure1_slot10;
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
            var11 = _closure1_slot12;
            var4 = new Array(1);
            var4[0] = var11;
            var1 = function() {
                var3 = _closure1_slot12;
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
            var1 = _closure1_slot26;
            var1 = var1.JOIN_GUILD;
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var4 = _closure1_slot15;
            var4 = var4.bind(var7)(var8);
            if(var4) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var4 = _closure1_slot16;
            var4 = var4.bind(var7)(var8);
            if(var4) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            if(!var2) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            if(var5) { _fun0001_ip = 13; continue _fun0001 }
case 11:
            var2 = _closure1_slot26;
            var2 = var2.RSVP;
            _fun0001_ip = 14; continue _fun0001;
case 13:
            var4 = _closure1_slot26;
            var2 = var4.START;
case 14:
            _fun0001_ip = 15; continue _fun0001;
case 9:
            var4 = _closure1_slot18;
            var4 = var4.EXTERNAL;
            if(!(var6 !== var4)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = _closure1_slot26;
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
            var6 = _closure1_slot26;
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
            var3 = _closure1_slot26;
            var2 = var3.ENDED;
case 28:
            var1 = var2;
case 6:
            return var1;
        }
    };
    var _closure1_slot28 = var10;
    var9 = function GuildEventCardRSVPAction(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var12 = var1.event;
            var2 = var1.recurrenceId;
            var1 = _closure1_slot27;
            var4 = undefined;
            var3 = var1.bind(var4)(var12, var2);
            var2 = _closure1_slot4;
            var1 = 2;
            var2 = var2.bind(var4)(var3, var1);
            var1 = 0;
            var9 = var2[var1];
            var1 = 1;
            var5 = var2[var1];
            var8 = 'secondary';
            if(!var9) { _fun0002_ip = 29; continue _fun0002 }
case 30:
            var8 = 'tertiary';
case 29:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            if(var9) { _fun0002_ip = 31; continue _fun0002 }
case 32:
            var1 = 30;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var11 = var1.BellIcon;
            _fun0002_ip = 33; continue _fun0002;
case 31:
            var1 = 29;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var11 = var1.CheckmarkLargeIcon;
case 33:
            var3 = _closure1_slot22;
            var2 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 31;
            var1 = var10[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var6 = 'togglebutton';
            var1['accessibilityRole'] = var6;
            var6 = {};
            var6['checked'] = var9;
            var1['accessibilityState'] = var6;
            var9 = _closure1_slot0;
            var6 = 20;
            var13 = var10[var6];
            var13 = var9.bind(var4)(var13);
            var15 = var13.intl;
            var14 = var15.string;
            var13 = var10[var6];
            var13 = var9.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.DlcqlU;
            var16 = var14.bind(var15)(var13);
            var15 = var12.name;
            var12 = global;
            var12 = var12.HermesInternal;
            var14 = var12.concat;
            var13 = '';
            var12 = ', ';
            var12 = var14.bind(var13)(var16, var12, var15);
            var1['accessibilityLabel'] = var12;
            var1['variant'] = var8;
            var8 = _closure1_slot22;
            var7 = {};
            var12 = 'sm';
            var7['size'] = var12;
            var7 = var8.bind(var4)(var11, var7);
            var1['icon'] = var7;
            var7 = var10[var6];
            var7 = var9.bind(var4)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var10[var6];
            var6 = var9.bind(var4)(var6);
            var6 = var6.t;
            var6 = var6.DlcqlU;
            var6 = var7.bind(var8)(var6);
            var1['text'] = var6;
            var1['onPress'] = var5;
            var5 = true;
            var1['grow'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot29 = var9;
    var8 = function GuildEventJoinAndRSVPAction(arg1) {
        var2 = arg1;
        var6 = var2.event;
        var _closure2_slot0 = var6;
        var3 = var2.recurrenceId;
        var2 = _closure1_slot27;
        var4 = undefined;
        var3 = var2.bind(var4)(var6, var3);
        var2 = _closure1_slot4;
        var9 = 2;
        var2 = var2.bind(var4)(var3, var9);
        var5 = 0;
        var3 = var2[var5];
        var _closure2_slot1 = var3;
        var3 = 1;
        var2 = var2[var3];
        var _closure2_slot2 = var2;
        var10 = _closure1_slot5;
        var8 = var10.useState;
        var2 = false;
        var8 = var8.bind(var10)(var2);
        var2 = _closure1_slot4;
        var2 = var2.bind(var4)(var8, var9);
        var8 = var2[var5];
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
                        var9 = _closure1_slot20;
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
                        var7 = _closure1_slot16;
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
        var3 = _closure1_slot22;
        var2 = _closure1_slot1;
        var11 = _closure1_slot2;
        var1 = 31;
        var1 = var11[var1];
        var2 = var2.bind(var4)(var1);
        var1 = {};
        var1['loading'] = var8;
        var8 = 'active';
        var1['variant'] = var8;
        var10 = _closure1_slot0;
        var7 = 20;
        var8 = var11[var7];
        var8 = var10.bind(var4)(var8);
        var12 = var8.intl;
        var9 = var12.string;
        var8 = var11[var7];
        var8 = var10.bind(var4)(var8);
        var8 = var8.t;
        var8 = var8.VJlc0S;
        var8 = var9.bind(var12)(var8);
        var1['text'] = var8;
        var8 = var11[var7];
        var8 = var10.bind(var4)(var8);
        var9 = var8.intl;
        var8 = var9.string;
        var7 = var11[var7];
        var7 = var10.bind(var4)(var7);
        var7 = var7.t;
        var7 = var7.VJlc0S;
        var10 = var8.bind(var9)(var7);
        var9 = var6.name;
        var6 = global;
        var6 = var6.HermesInternal;
        var8 = var6.concat;
        var7 = '';
        var6 = ', ';
        var6 = var8.bind(var7)(var10, var6, var9);
        var1['accessibilityLabel'] = var6;
        var1['onPress'] = var5;
        var5 = true;
        var1['grow'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot30 = var8;
    var6 = function UserCountIconPill(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var5 = var1.event;
            var7 = var1.recurrenceId;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 44;
            var2 = var4[var2];
            var4 = undefined;
            var6 = var3.bind(var4)(var2);
            var2 = null;
            var8 = var2 == var5;
            var3 = undefined;
            if(var8) { _fun0004_ip = 46; continue _fun0004 }
case 47:
            var3 = var5.guild_id;
case 46:
            var8 = var2 == var5;
            var2 = undefined;
            if(var8) { _fun0004_ip = 48; continue _fun0004 }
case 49:
            var2 = var5.id;
case 48:
            var6 = var6.bind(var4)(var3, var2, var7);
            var3 = _closure1_slot22;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 45;
            var1 = var8[var1];
            var1 = var7.bind(var4)(var1);
            var2 = var1.IconPill;
            var1 = {};
            var9 = 20;
            var10 = var8[var9];
            var10 = var7.bind(var4)(var10);
            var12 = var10.intl;
            var11 = var12.formatToPlainString;
            var9 = var8[var9];
            var9 = var7.bind(var4)(var9);
            var9 = var9.t;
            var10 = var9["+DLsD8"];
            var9 = {};
            var9['count'] = var6;
            var12 = var11.bind(var12)(var10, var9);
            var11 = var5.name;
            var5 = global;
            var5 = var5.HermesInternal;
            var10 = var5.concat;
            var9 = '';
            var5 = ', ';
            var5 = var10.bind(var9)(var12, var5, var11);
            var1['accessibilityLabel'] = var5;
            var5 = 46;
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
    var _closure1_slot31 = var6;
    var5 = function GuildEventCardTitle(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var8 = var1.event;
            var12 = var1.style;
            var9 = var1.textStyle;
            var10 = var1.condensed;
            var13 = var1.onPress;
            var1 = _closure1_slot25;
            var4 = undefined;
            var7 = var1.bind(var4)();
            var3 = _closure1_slot22;
            var2 = _closure1_slot8;
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
            var14 = var14.epxpiy;
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
            var7 = _closure1_slot22;
            var5 = 52;
            var5 = var11[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.Text;
            var5 = {'variant': 'text-md/bold', 'color': 'mobile-text-heading-primary'};
            var5['style'] = var9;
            var9 = undefined;
            if(!var10) { _fun0005_ip = 3; continue _fun0005 }
case 50:
            var9 = 1;
case 3:
            var5['lineClamp'] = var9;
            var8 = var8.name;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot32 = var5;
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
            var1 = _closure1_slot25;
            var5 = undefined;
            var7 = var1.bind(var5)();
            var3 = null;
            var4 = var3 != var13;
            var1 = null;
            if(!var4) { _fun0006_ip = 51; continue _fun0006 }
case 52:
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
case 53:
            var4 = _closure1_slot22;
            var3 = _closure1_slot6;
            var2 = {};
            var11 = var7.detailsContainer;
            var7 = new Array(2);
            var7[0] = var11;
            var7[1] = var8;
            var2['style'] = var7;
            var8 = _closure1_slot22;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var6 = 52;
            var6 = var12[var6];
            var6 = var11.bind(var5)(var6);
            var7 = var6.Text;
            var6 = {'variant': 'text-md/medium', 'color': 'text-subtle'};
            var6['style'] = var14;
            var6['lineClamp'] = var10;
            var10 = 54;
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
    var _closure1_slot33 = var4;
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
    var7 = var7.Pressable;
    var _closure1_slot8 = var7;
    var20 = 4;
    var7 = var16[var20];
    var7 = var27.bind(var1)(var7);
    var _closure1_slot9 = var7;
    var19 = 5;
    var7 = var16[var19];
    var7 = var27.bind(var1)(var7);
    var _closure1_slot10 = var7;
    var18 = 6;
    var7 = var16[var18];
    var7 = var27.bind(var1)(var7);
    var _closure1_slot11 = var7;
    var14 = 7;
    var7 = var16[var14];
    var7 = var27.bind(var1)(var7);
    var _closure1_slot12 = var7;
    var7 = 8;
    var7 = var16[var7];
    var7 = var27.bind(var1)(var7);
    var _closure1_slot13 = var7;
    var7 = 9;
    var7 = var16[var7];
    var7 = var27.bind(var1)(var7);
    var _closure1_slot14 = var7;
    var7 = 10;
    var11 = var16[var7];
    var11 = var15.bind(var1)(var11);
    var13 = var11.isGuildEventEnded;
    var _closure1_slot15 = var13;
    var11 = var11.isGuildScheduledEventActive;
    var _closure1_slot16 = var11;
    var7 = var16[var7];
    var7 = var27.bind(var1)(var7);
    var _closure1_slot17 = var7;
    var7 = 11;
    var7 = var16[var7];
    var7 = var15.bind(var1)(var7);
    var7 = var7.GuildScheduledEventEntityTypes;
    var _closure1_slot18 = var7;
    var28 = 12;
    var7 = var16[var28];
    var7 = var15.bind(var1)(var7);
    var11 = var7.Permissions;
    var _closure1_slot19 = var11;
    var7 = var7.JoinGuildSources;
    var _closure1_slot20 = var7;
    var7 = 13;
    var7 = var16[var7];
    var7 = var15.bind(var1)(var7);
    var29 = var7.Fonts;
    var7 = var7.NOOP;
    var _closure1_slot21 = var7;
    var30 = 14;
    var7 = var16[var30];
    var7 = var15.bind(var1)(var7);
    var11 = var7.jsx;
    var _closure1_slot22 = var11;
    var11 = var7.jsxs;
    var _closure1_slot23 = var11;
    var7 = var7.Fragment;
    var _closure1_slot24 = var7;
    var7 = 15;
    var7 = var16[var7];
    var13 = var15.bind(var1)(var7);
    var11 = var13.createStyles;
    var7 = {};
    var25 = {};
    var26 = 16;
    var31 = var16[var26];
    var31 = var27.bind(var1)(var31);
    var31 = var31.colors;
    var31 = var31.BACKGROUND_BASE_LOWEST;
    var25['backgroundColor'] = var31;
    var7['imageHeaderContainer'] = var25;
    var25 = {'width': '100%', 'aspectRatio': 2.5};
    var7['imageHeaderBanner'] = var25;
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
    var31 = var31.BACKGROUND_BRAND;
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
    var31 = var31.TEXT_SUBTLE;
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
    var29 = var29.TEXT_SUBTLE;
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
    var _closure1_slot25 = var13;
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
    var _closure1_slot26 = var11;
    var14 = var17.memo;
    var7 = function(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var6 = var1.event;
            var _closure2_slot0 = var6;
            var8 = var1.isConnected;
            var2 = var1.onCloseAction;
            var _closure2_slot1 = var2;
            var9 = var1.recurrenceId;
            var _closure2_slot2 = var9;
            var1 = var6.guild_id;
            var _closure2_slot3 = var1;
            var3 = var6.channel_id;
            var _closure2_slot4 = var3;
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 26;
            var11 = var7[var1];
            var4 = undefined;
            var14 = var2.bind(var4)(var11);
            var13 = var14.useStateFromStores;
            var11 = _closure1_slot10;
            var12 = new Array(1);
            var12[0] = var11;
            var11 = new Array(1);
            var11[0] = var3;
            var3 = function() {
                var3 = _closure1_slot10;
                var2 = var3.getChannel;
                var1 = _closure2_slot4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var13.bind(var14)(var12, var3, var11);
            var _closure2_slot5 = var3;
            var11 = _closure1_slot1;
            var3 = 35;
            var3 = var7[var3];
            var3 = var11.bind(var4)(var3);
            var12 = var3.bind(var4)();
            var11 = _closure1_slot4;
            var3 = 2;
            var11 = var11.bind(var4)(var12, var3);
            var3 = 1;
            var3 = var11[var3];
            var _closure2_slot6 = var3;
            var3 = _closure1_slot28;
            var3 = var3.bind(var4)(var6, var8);
            var1 = var7[var1];
            var8 = var2.bind(var4)(var1);
            var7 = var8.useStateFromStores;
            var1 = _closure1_slot13;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var4 = _closure1_slot13;
                var3 = var4.can;
                var1 = _closure1_slot19;
                var2 = var1.CONNECT;
                var1 = _closure2_slot5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var7 = var7.bind(var8)(var2, var1);
            var8 = function handleListenIn() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var2 = _closure2_slot5;
                    var4 = null;
                    if(!(var4 != var2)) { _fun0008_ip = 54; continue _fun0008 }
case 55:
                    var2 = _closure2_slot0;
                    var5 = var2.entity_type;
                    var3 = _closure1_slot18;
                    var3 = var3.STAGE_INSTANCE;
                    if(!(var5 === var3)) { _fun0008_ip = 49; continue _fun0008 }
case 56:
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
                    if(!(var4 != var3)) { _fun0008_ip = 54; continue _fun0008 }
case 57:
                    var1 = _closure2_slot1;
                    var1 = var1.bind(var2)();
case 54:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = _closure1_slot26;
            var1 = var1.ENDED;
            if(!(var1 !== var3)) { _fun0007_ip = 58; continue _fun0007 }
case 59:
            var1 = _closure1_slot26;
            var1 = var1.JOIN;
            if(!(var1 !== var3)) { _fun0007_ip = 60; continue _fun0007 }
case 61:
            var1 = _closure1_slot26;
            var1 = var1.CONNECTED;
            if(!(var1 !== var3)) { _fun0007_ip = 62; continue _fun0007 }
case 63:
            var1 = _closure1_slot26;
            var1 = var1.RSVP;
            if(!(var1 !== var3)) { _fun0007_ip = 64; continue _fun0007 }
case 65:
            var1 = _closure1_slot26;
            var1 = var1.START;
            if(!(var1 !== var3)) { _fun0007_ip = 66; continue _fun0007 }
case 67:
            var1 = _closure1_slot26;
            var1 = var1.STARTED;
            if(!(var1 !== var3)) { _fun0007_ip = 68; continue _fun0007 }
case 69:
            var1 = _closure1_slot26;
            var1 = var1.END;
            if(!(var1 !== var3)) { _fun0007_ip = 70; continue _fun0007 }
case 71:
            var1 = _closure1_slot26;
            var1 = var1.JOIN_GUILD;
            if(!(var1 !== var3)) { _fun0007_ip = 21; continue _fun0007 }
case 72:
            var2 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 40;
            var1 = var11[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.assertNever;
            var1 = var1.bind(var2)(var3);
            return var4;
case 21:
            var3 = _closure1_slot22;
            var2 = _closure1_slot30;
            var1 = {};
            var1['event'] = var6;
            var1['recurrenceId'] = var9;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 70:
            var3 = _closure1_slot22;
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
            var16 = var12.intl;
            var13 = var16.string;
            var12 = var15[var11];
            var12 = var14.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.qaYzPA;
            var12 = var13.bind(var16)(var12);
            var1['text'] = var12;
            var12 = var15[var11];
            var12 = var14.bind(var4)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var15[var11];
            var11 = var14.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.qaYzPA;
            var15 = var12.bind(var13)(var11);
            var14 = var6.name;
            var11 = global;
            var11 = var11.HermesInternal;
            var13 = var11.concat;
            var12 = '';
            var11 = ', ';
            var11 = var13.bind(var12)(var15, var11, var14);
            var1['accessibilityLabel'] = var11;
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
                var8 = var8.qaYzPA;
                var8 = var9.bind(var11)(var8);
                var2['title'] = var8;
                var8 = var7[var5];
                var8 = var10.bind(var1)(var8);
                var11 = var8.intl;
                var9 = var11.string;
                var8 = var7[var5];
                var8 = var10.bind(var1)(var8);
                var8 = var8.t;
                var8 = var8.bnDQ7E;
                var8 = var9.bind(var11)(var8);
                var2['body'] = var8;
                var8 = var7[var5];
                var8 = var10.bind(var1)(var8);
                var11 = var8.intl;
                var9 = var11.string;
                var8 = var7[var5];
                var8 = var10.bind(var1)(var8);
                var8 = var8.t;
                var8 = var8.gm1Vej;
                var8 = var9.bind(var11)(var8);
                var2['cancelText'] = var8;
                var8 = var7[var5];
                var8 = var10.bind(var1)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var5 = var7[var5];
                var5 = var10.bind(var1)(var5);
                var5 = var5.t;
                var5 = var5.p89ACt;
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
            var11 = true;
            var1['grow'] = var11;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 68:
            var3 = _closure1_slot22;
            var2 = _closure1_slot1;
            var15 = _closure1_slot2;
            var1 = 31;
            var1 = var15[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {'variant': 'secondary', 'text': null, 'accessibilityLabel': null, 'grow': true, 'disabled': true};
            var14 = _closure1_slot0;
            var11 = 20;
            var12 = var15[var11];
            var12 = var14.bind(var4)(var12);
            var16 = var12.intl;
            var13 = var16.string;
            var12 = var15[var11];
            var12 = var14.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.Yz0V6O;
            var12 = var13.bind(var16)(var12);
            var1['text'] = var12;
            var12 = var15[var11];
            var12 = var14.bind(var4)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var15[var11];
            var11 = var14.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.Yz0V6O;
            var15 = var12.bind(var13)(var11);
            var14 = var6.name;
            var11 = global;
            var11 = var11.HermesInternal;
            var13 = var11.concat;
            var12 = '';
            var11 = ', ';
            var11 = var13.bind(var12)(var15, var11, var14);
            var1['accessibilityLabel'] = var11;
            var11 = _closure1_slot21;
            var1['onPress'] = var11;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 66:
            var3 = _closure1_slot22;
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
            var16 = var12.intl;
            var13 = var16.string;
            var12 = var15[var11];
            var12 = var14.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.cK1GGY;
            var12 = var13.bind(var16)(var12);
            var1['text'] = var12;
            var12 = var15[var11];
            var12 = var14.bind(var4)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var15[var11];
            var11 = var14.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.cK1GGY;
            var15 = var12.bind(var13)(var11);
            var14 = var6.name;
            var11 = global;
            var11 = var11.HermesInternal;
            var13 = var11.concat;
            var12 = '';
            var11 = ', ';
            var11 = var13.bind(var12)(var15, var11, var14);
            var1['accessibilityLabel'] = var11;
            var10 = function onPress() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0009_ip = 73; continue _fun0009 }
case 55:
                    var3 = _closure2_slot1;
                    var1 = undefined;
                    var1 = var3.bind(var1)();
case 73:
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
case 64:
            var3 = _closure1_slot22;
            var2 = _closure1_slot29;
            var1 = {};
            var1['event'] = var6;
            var1['recurrenceId'] = var9;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 62:
            var3 = _closure1_slot22;
            var2 = _closure1_slot1;
            var13 = _closure1_slot2;
            var1 = 31;
            var1 = var13[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var9 = 'active';
            var1['variant'] = var9;
            var12 = _closure1_slot0;
            var9 = 20;
            var10 = var13[var9];
            var10 = var12.bind(var4)(var10);
            var14 = var10.intl;
            var11 = var14.string;
            var10 = var13[var9];
            var10 = var12.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10.aW2YlJ;
            var10 = var11.bind(var14)(var10);
            var1['text'] = var10;
            var10 = var13[var9];
            var10 = var12.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var13[var9];
            var9 = var12.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.aW2YlJ;
            var13 = var10.bind(var11)(var9);
            var12 = var6.name;
            var9 = global;
            var9 = var9.HermesInternal;
            var11 = var9.concat;
            var10 = '';
            var9 = ', ';
            var9 = var11.bind(var10)(var13, var9, var12);
            var1['accessibilityLabel'] = var9;
            var1['onPress'] = var8;
            var9 = true;
            var1['grow'] = var9;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 60:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 20;
            var2 = var10[var1];
            var2 = var9.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var10[var1];
            var1 = var9.bind(var4)(var1);
            var1 = var1.t;
            if(var7) { _fun0007_ip = 74; continue _fun0007 }
case 75:
            var9 = var1.TVBCKZ;
            var13 = var2.bind(var3)(var9);
            _fun0007_ip = 76; continue _fun0007;
case 74:
            var1 = var1.ZYO5OK;
            var13 = var2.bind(var3)(var1);
case 76:
            var3 = _closure1_slot22;
            var2 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 31;
            var1 = var9[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var9 = 'active';
            var1['variant'] = var9;
            var1['text'] = var13;
            var12 = var6.name;
            var9 = global;
            var9 = var9.HermesInternal;
            var11 = var9.concat;
            var10 = '';
            var9 = ', ';
            var9 = var11.bind(var10)(var13, var9, var12);
            var1['accessibilityLabel'] = var9;
            var1['onPress'] = var8;
            var7 = !var7;
            var1['disabled'] = var7;
            var7 = true;
            var1['grow'] = var7;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 58:
            var3 = _closure1_slot22;
            var2 = _closure1_slot1;
            var11 = _closure1_slot2;
            var1 = 31;
            var1 = var11[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {'variant': 'secondary', 'text': null, 'accessibilityLabel': null, 'grow': true, 'disabled': true};
            var10 = _closure1_slot0;
            var7 = 20;
            var8 = var11[var7];
            var8 = var10.bind(var4)(var8);
            var12 = var8.intl;
            var9 = var12.string;
            var8 = var11[var7];
            var8 = var10.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.Pj7Xrv;
            var8 = var9.bind(var12)(var8);
            var1['text'] = var8;
            var8 = var11[var7];
            var8 = var10.bind(var4)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var11[var7];
            var7 = var10.bind(var4)(var7);
            var7 = var7.t;
            var7 = var7.Pj7Xrv;
            var10 = var8.bind(var9)(var7);
            var9 = var6.name;
            var6 = global;
            var6 = var6.HermesInternal;
            var8 = var6.concat;
            var7 = '';
            var6 = ', ';
            var6 = var8.bind(var7)(var10, var6, var9);
            var1['accessibilityLabel'] = var6;
            var5 = _closure1_slot21;
            var1['onPress'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var7 = var14.bind(var17)(var7);
    var14 = 60;
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
            var14 = _closure1_slot2;
            var1 = 17;
            var1 = var14[var1];
            var4 = undefined;
            var1 = var6.bind(var4)(var1);
            var5 = var1.bind(var4)(var9);
            var _closure2_slot1 = var5;
            var13 = _closure1_slot0;
            var1 = 18;
            var1 = var14[var1];
            var3 = var13.bind(var4)(var1);
            var2 = var3.SHARE_EVENT_DETAILS_LINK;
            var1 = {};
            var10 = var9.guild_id;
            var1['guildId'] = var10;
            var10 = var9.id;
            var1['guildEventId'] = var10;
            var1 = var2.bind(var3)(var1);
            var _closure2_slot2 = var1;
            var3 = _closure1_slot22;
            var1 = 19;
            var1 = var14[var1];
            var1 = var13.bind(var4)(var1);
            var2 = var1.IconButton;
            var1 = {};
            var10 = 20;
            var11 = var14[var10];
            var11 = var13.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var14[var10];
            var10 = var13.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10.RDE0Sc;
            var13 = var11.bind(var12)(var10);
            var12 = var9.name;
            var9 = global;
            var9 = var9.HermesInternal;
            var11 = var9.concat;
            var10 = '';
            var9 = ', ';
            var9 = var11.bind(var10)(var13, var9, var12);
            var1['accessibilityLabel'] = var9;
            var8 = function onPress() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    if(var2) { _fun0011_ip = 77; continue _fun0011 }
case 78:
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
                    _fun0011_ip = 79; continue _fun0011;
case 77:
                    var2 = 21;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.openShareEvent;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
case 79:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['onPress'] = var8;
            var8 = _closure1_slot2;
            if(var5) { _fun0010_ip = 80; continue _fun0010 }
case 81:
            var5 = 25;
            var5 = var8[var5];
            _fun0010_ip = 82; continue _fun0010;
case 80:
            var7 = 24;
            var5 = var8[var7];
case 82:
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
            var8 = var1.event;
            var _closure2_slot0 = var8;
            var1 = var1.recurrenceId;
            var _closure2_slot1 = var1;
            var4 = undefined;
            var _closure2_slot3 = var4;
            var2 = var8.channel_id;
            var _closure2_slot2 = var2;
            var3 = _closure1_slot0;
            var9 = _closure1_slot2;
            var7 = 26;
            var1 = var9[var7];
            var12 = var3.bind(var4)(var1);
            var11 = var12.useStateFromStores;
            var1 = _closure1_slot12;
            var10 = new Array(1);
            var10[0] = var1;
            var1 = function() {
                var3 = _closure1_slot12;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var1.guild_id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var11.bind(var12)(var10, var1);
            var7 = var9[var7];
            var12 = var3.bind(var4)(var7);
            var11 = var12.useStateFromStores;
            var7 = _closure1_slot10;
            var10 = new Array(1);
            var10[0] = var7;
            var7 = new Array(1);
            var7[0] = var2;
            var2 = function() {
                var3 = _closure1_slot10;
                var2 = var3.getChannel;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var11.bind(var12)(var10, var2, var7);
            var2 = 27;
            var2 = var9[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useManageResourcePermissions;
            var9 = null;
            if(!(var9 != var7)) { _fun0012_ip = 83; continue _fun0012 }
case 84:
            var1 = var7;
case 83:
            var1 = var2.bind(var3)(var1);
            var1 = var1.canManageGuildEvent;
            var1 = var1.bind(var4)(var8);
            _closure2_slot3 = var1;
            var3 = _closure1_slot22;
            var12 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 19;
            var1 = var7[var1];
            var1 = var12.bind(var4)(var1);
            var2 = var1.IconButton;
            var1 = {};
            var9 = 20;
            var10 = var7[var9];
            var10 = var12.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var7[var9];
            var9 = var12.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.HIgA5a;
            var12 = var10.bind(var11)(var9);
            var11 = var8.name;
            var8 = global;
            var8 = var8.HermesInternal;
            var10 = var8.concat;
            var9 = '';
            var8 = ', ';
            var8 = var10.bind(var9)(var12, var8, var11);
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
            var12 = var1.event;
            var2 = _closure1_slot27;
            var4 = undefined;
            var1 = null;
            var3 = var2.bind(var4)(var12, var1);
            var2 = _closure1_slot4;
            var1 = 2;
            var2 = var2.bind(var4)(var3, var1);
            var1 = 0;
            var9 = var2[var1];
            var1 = 1;
            var5 = var2[var1];
            var8 = 'secondary';
            if(!var9) { _fun0013_ip = 30; continue _fun0013 }
case 85:
            var8 = 'tertiary';
case 30:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            if(var9) { _fun0013_ip = 86; continue _fun0013 }
case 77:
            var1 = 30;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var11 = var1.BellIcon;
            _fun0013_ip = 87; continue _fun0013;
case 86:
            var1 = 29;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var11 = var1.CheckmarkLargeIcon;
case 87:
            var3 = _closure1_slot22;
            var2 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 31;
            var1 = var10[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var6 = 'togglebutton';
            var1['accessibilityRole'] = var6;
            var6 = {};
            var6['checked'] = var9;
            var1['accessibilityState'] = var6;
            var9 = _closure1_slot0;
            var6 = 20;
            var13 = var10[var6];
            var13 = var9.bind(var4)(var13);
            var15 = var13.intl;
            var14 = var15.string;
            var13 = var10[var6];
            var13 = var9.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.DlcqlU;
            var16 = var14.bind(var15)(var13);
            var15 = var12.name;
            var12 = global;
            var12 = var12.HermesInternal;
            var14 = var12.concat;
            var13 = '';
            var12 = ', ';
            var12 = var14.bind(var13)(var16, var12, var15);
            var1['accessibilityLabel'] = var12;
            var1['variant'] = var8;
            var8 = _closure1_slot22;
            var7 = {};
            var12 = 'sm';
            var7['size'] = var12;
            var7 = var8.bind(var4)(var11, var7);
            var1['icon'] = var7;
            var7 = var10[var6];
            var7 = var9.bind(var4)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var6 = var10[var6];
            var6 = var9.bind(var4)(var6);
            var6 = var6.t;
            var6 = var6.DlcqlU;
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
            var2 = arg1;
            var9 = var2.event;
            var2 = _closure1_slot25;
            var5 = undefined;
            var10 = var2.bind(var5)();
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 41;
            var2 = var4[var2];
            var2 = var3.bind(var5)(var2);
            var2 = var2.bind(var5)();
            var8 = var2.width;
            var4 = _closure1_slot5;
            var2 = var4.useState;
            var3 = 0;
            var7 = var2.bind(var4)(var3);
            var4 = _closure1_slot4;
            var2 = 2;
            var7 = var4.bind(var5)(var7, var2);
            var2 = var7[var3];
            var4 = 1;
            var4 = var7[var4];
            var _closure2_slot0 = var4;
            var11 = _closure1_slot5;
            var7 = var11.useCallback;
            var4 = function(arg1) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var2 = arg1;
                    var2 = var2.nativeEvent;
                    var2 = var2.layout;
                    var3 = var2.width;
                    var _closure3_slot0 = var3;
                    var2 = 0;
                    if(!(var3 > var2)) { _fun0015_ip = 88; continue _fun0015 }
case 89:
                    var3 = _closure2_slot0;
                    var2 = undefined;
                    var1 = function(arg1) {
                        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                            var1 = arg1;
                            var2 = global;
                            var5 = var2.Math;
                            var4 = var5.abs;
                            var3 = _closure3_slot0;
                            var3 = var1 - var3;
                            var4 = var4.bind(var5)(var3);
                            var3 = 1;
                            if(!(!(var4 < var3))) { _fun0016_ip = 90; continue _fun0016 }
case 56:
                            var1 = _closure3_slot0;
case 90:
                            return var1;
                        }
                    };
                    var1 = var3.bind(var2)(var1);
case 88:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = new Array(0);
            var7 = var7.bind(var11)(var4, var1);
            var4 = var9.image;
            var1 = null;
            if(!(var1 != var4)) { _fun0014_ip = 91; continue _fun0014 }
case 92:
            if(!(var2 > var3)) { _fun0014_ip = 93; continue _fun0014 }
case 94:
            var8 = var2;
case 93:
            var3 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = 42;
            var2 = var12[var2];
            var4 = var3.bind(var5)(var2);
            var3 = var4.makeSource;
            var11 = _closure1_slot1;
            var2 = 43;
            var2 = var12[var2];
            var2 = var11.bind(var5)(var2);
            var2 = var2.bind(var5)(var9, var8);
            var9 = var3.bind(var4)(var2);
            var4 = _closure1_slot22;
            var3 = _closure1_slot6;
            var2 = {};
            var8 = var10.imageHeaderContainer;
            var2['style'] = var8;
            var2['onLayout'] = var7;
            var8 = _closure1_slot22;
            var7 = _closure1_slot7;
            var6 = {};
            var10 = var10.imageHeaderBanner;
            var6['style'] = var10;
            var6['source'] = var9;
            var9 = 'cover';
            var6['resizeMode'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 91:
            return var1;
        }
    };
    var3['GuildEventCardImageHeader'] = var7;
    var3['UserCountIconPill'] = var6;
    var6 = function GuildEventCardHeader(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var3 = arg1;
            var15 = var3.event;
            var _closure2_slot0 = var15;
            var14 = var3.recurrenceId;
            var1 = var3.showUserCount;
            var4 = undefined;
            if(!(var1 === var4)) { _fun0017_ip = 95; continue _fun0017 }
case 96:
            var1 = true;
case 95:
            var6 = var3.showEndDate;
            if(!(var6 === var4)) { _fun0017_ip = 97; continue _fun0017 }
case 98:
            var6 = false;
case 97:
            var2 = var3.isPreview;
            if(!(var2 === var4)) { _fun0017_ip = 85; continue _fun0017 }
case 99:
            var2 = false;
case 85:
            var7 = var3.showCreator;
            if(!(var7 === var4)) { _fun0017_ip = 100; continue _fun0017 }
case 52:
            var7 = true;
case 100:
            var5 = var3.isNew;
            if(!(var5 === var4)) { _fun0017_ip = 101; continue _fun0017 }
case 102:
            var5 = false;
case 101:
            var23 = var3.isActive;
            if(!(var23 === var4)) { _fun0017_ip = 103; continue _fun0017 }
case 104:
            var23 = false;
case 103:
            var12 = var3.style;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var3 = _closure1_slot25;
            var11 = var3.bind(var4)();
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var3 = 47;
            var3 = var10[var3];
            var3 = var9.bind(var4)(var3);
            var18 = var3.bind(var4)();
            var3 = 48;
            var3 = var10[var3];
            var10 = var9.bind(var4)(var3);
            var9 = null;
            var13 = var9 == var15;
            var3 = undefined;
            if(var13) { _fun0017_ip = 105; continue _fun0017 }
case 106:
            var3 = var15.id;
case 105:
            var3 = var10.bind(var4)(var14, var3);
            var20 = var15.entity_type;
            if(!(var9 == var3)) { _fun0017_ip = 107; continue _fun0017 }
case 108:
            var3 = {};
case 107:
            var3 = var3.is_canceled;
            var16 = var4 !== var3;
            if(!var16) { _fun0017_ip = 34; continue _fun0017 }
case 109:
            var16 = var3;
case 34:
            var10 = _closure1_slot1;
            var13 = _closure1_slot2;
            var3 = 49;
            var3 = var13[var3];
            var3 = var10.bind(var4)(var3);
            var10 = var3.bind(var4)(var15, var14);
            var3 = var9 == var10;
            var19 = undefined;
            if(var3) { _fun0017_ip = 110; continue _fun0017 }
case 111:
            var13 = var10.startTime;
            var3 = var13.toISOString;
            var19 = var3.bind(var13)();
case 110:
            _closure2_slot1 = var19;
            var3 = undefined;
            if(!var6) { _fun0017_ip = 112; continue _fun0017 }
case 91:
            var13 = var9 == var10;
            var6 = undefined;
            if(var13) { _fun0017_ip = 113; continue _fun0017 }
case 114:
            var13 = var10.endTime;
            var10 = var9 == var13;
            var6 = undefined;
            if(var10) { _fun0017_ip = 113; continue _fun0017 }
case 115:
            var10 = var13.toISOString;
            var6 = var10.bind(var13)();
case 113:
            var3 = var6;
case 112:
            _closure2_slot2 = var3;
            var13 = _closure1_slot5;
            var10 = var13.useMemo;
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
            var3 = var10.bind(var13)(var3, var6);
            var6 = _closure1_slot18;
            var19 = var6.STAGE_INSTANCE;
            var10 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = 50;
            var6 = var13[var6];
            var13 = var10.bind(var4)(var6);
            var10 = var13.getGuildScheduledEventHeaderProps;
            var6 = {};
            var6['eventTimeData'] = var3;
            var19 = var20 === var19;
            var6['isStage'] = var19;
            var6['theme'] = var18;
            var6['event'] = var15;
            var6['isCanceled'] = var16;
            var6['recurrenceId'] = var14;
            var6 = var10.bind(var13)(var6);
            var22 = var6.color;
            _closure2_slot3 = var22;
            var18 = var6.text;
            var19 = var6.shouldChangeTextColor;
            _closure2_slot4 = var19;
            var13 = var3.endDateTimeString;
            var6 = null;
            if(!var1) { _fun0017_ip = 116; continue _fun0017 }
case 117:
            var10 = _closure1_slot22;
            var3 = _closure1_slot31;
            var1 = {};
            var1['event'] = var15;
            var1['recurrenceId'] = var14;
            var14 = var10.bind(var4)(var3, var1);
            var1 = var14;
            if(var2) { _fun0017_ip = 118; continue _fun0017 }
case 119:
            var10 = _closure1_slot22;
            var3 = _closure1_slot0;
            var16 = _closure1_slot2;
            var2 = 51;
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
            var1 = var10.bind(var4)(var3, var2);
case 118:
            var6 = var1;
case 116:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 26;
            var1 = var3[var1];
            var14 = var2.bind(var4)(var1);
            var10 = var14.useStateFromStores;
            var1 = _closure1_slot14;
            var3 = new Array(1);
            var3[0] = var1;
            var2 = new Array(1);
            var2[0] = var15;
            var1 = function() {
                var3 = _closure1_slot14;
                var2 = var3.getUser;
                var1 = _closure2_slot0;
                var1 = var1.creator_id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var16 = var10.bind(var14)(var3, var1, var2);
            var14 = var9 != var13;
            if(!var14) { _fun0017_ip = 120; continue _fun0017 }
case 121:
            var1 = '';
            var14 = var1 !== var13;
case 120:
            var20 = var18;
            if(!var14) { _fun0017_ip = 122; continue _fun0017 }
case 123:
            var2 = _closure1_slot0;
            var21 = _closure1_slot2;
            var1 = 20;
            var3 = var21[var1];
            var3 = var2.bind(var4)(var3);
            var10 = var3.intl;
            var3 = var10.format;
            var1 = var21[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.t;
            var2 = var1.vHYgJW;
            var1 = {};
            var1['start'] = var18;
            var17 = function startHook(arg1) {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var4 = _closure1_slot22;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 52;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.Text;
                    var1 = {'variant': 'text-sm/semibold', 'color': 'text-subtle'};
                    var5 = _closure2_slot4;
                    if(!var5) { _fun0018_ip = 100; continue _fun0018 }
case 124:
                    var6 = {};
                    var7 = _closure2_slot3;
                    var6['color'] = var7;
                    var5 = var6;
case 100:
                    var1['style'] = var5;
                    var5 = arg1;
                    var1['children'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                }
            };
            var1['startHook'] = var17;
            var1['end'] = var13;
            var20 = var3.bind(var10)(var2, var1);
case 122:
            var3 = _closure1_slot23;
            var2 = _closure1_slot6;
            var1 = {};
            var13 = var11.headerContainer;
            var10 = new Array(2);
            var10[0] = var13;
            var10[1] = var12;
            var1['style'] = var10;
            var13 = _closure1_slot22;
            var12 = _closure1_slot0;
            var17 = _closure1_slot2;
            if(var5) { _fun0017_ip = 125; continue _fun0017 }
case 126:
            var5 = 53;
            var5 = var17[var5];
            var5 = var12.bind(var4)(var5);
            var10 = var5.CalendarIcon;
            var5 = {};
            var18 = 'sm';
            var5['size'] = var18;
            var5['color'] = var22;
            var18 = var11.dateIcon;
            var5['style'] = var18;
            var10 = var13.bind(var4)(var10, var5);
            _fun0017_ip = 127; continue _fun0017;
case 125:
            var5 = 45;
            var5 = var17[var5];
            var5 = var12.bind(var4)(var5);
            var12 = var5.NewTag;
            var5 = {};
            var17 = var11.newBadge;
            var5['containerStyle'] = var17;
            var17 = 'text-xs/bold';
            var5['variant'] = var17;
            var10 = var13.bind(var4)(var12, var5);
case 127:
            var5 = new Array(4);
            var5[0] = var10;
            var13 = _closure1_slot22;
            var12 = _closure1_slot6;
            var10 = {};
            var17 = var11.dateContainer;
            var10['style'] = var17;
            var18 = _closure1_slot22;
            var21 = _closure1_slot0;
            var24 = _closure1_slot2;
            var17 = 52;
            var17 = var24[var17];
            var17 = var21.bind(var4)(var17);
            var17 = var17.Text;
            if(var14) { _fun0017_ip = 128; continue _fun0017 }
case 129:
            var14 = {};
            var21 = 'text-sm/semibold';
            var14['variant'] = var21;
            var21 = 'text-subtle';
            if(!var23) { _fun0017_ip = 130; continue _fun0017 }
case 131:
            var21 = 'text-strong';
case 130:
            var14['color'] = var21;
            if(!var19) { _fun0017_ip = 132; continue _fun0017 }
case 133:
            var21 = {};
            var21['color'] = var22;
            var19 = var21;
case 132:
            var14['style'] = var19;
            var14['children'] = var20;
            _fun0017_ip = 134; continue _fun0017;
case 128:
            var19 = {'variant': 'text-sm/semibold', 'color': 'text-default'};
            var19['children'] = var20;
            var14 = var19;
case 134:
            var14 = var18.bind(var4)(var17, var14);
            var10['children'] = var14;
            var10 = var13.bind(var4)(var12, var10);
            var5[1] = var10;
            if(!var7) { _fun0017_ip = 135; continue _fun0017 }
case 136:
            var7 = var9 != var16;
case 135:
            if(!var7) { _fun0017_ip = 137; continue _fun0017 }
case 138:
            var10 = _closure1_slot22;
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var12 = 45;
            var8 = var14[var12];
            var8 = var13.bind(var4)(var8);
            var9 = var8.Avatar;
            var8 = {};
            var17 = true;
            var8['accessible'] = var17;
            var17 = 20;
            var18 = var14[var17];
            var18 = var13.bind(var4)(var18);
            var20 = var18.intl;
            var19 = var20.formatToPlainString;
            var17 = var14[var17];
            var17 = var13.bind(var4)(var17);
            var17 = var17.t;
            var18 = var17["+3iypQ"];
            var17 = {};
            var21 = var16.username;
            var17['username'] = var21;
            var21 = var19.bind(var20)(var18, var17);
            var20 = var15.name;
            var17 = global;
            var17 = var17.HermesInternal;
            var19 = var17.concat;
            var18 = '';
            var17 = ', ';
            var17 = var19.bind(var18)(var21, var17, var20);
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
case 137:
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
        var4 = _closure1_slot23;
        var3 = _closure1_slot24;
        var2 = {};
        var8 = _closure1_slot22;
        var7 = _closure1_slot32;
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
        var8 = _closure1_slot22;
        var7 = _closure1_slot33;
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
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var2 = arg1;
            var6 = var2.event;
            var2 = _closure1_slot25;
            var5 = undefined;
            var10 = var2.bind(var5)();
            var4 = var6.channel_id;
            var _closure2_slot0 = var4;
            var11 = var6.guild_id;
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 26;
            var8 = var7[var2];
            var14 = var3.bind(var5)(var8);
            var13 = var14.useStateFromStores;
            var8 = _closure1_slot10;
            var9 = new Array(1);
            var9[0] = var8;
            var8 = new Array(1);
            var8[0] = var4;
            var4 = function() {
                var3 = _closure1_slot10;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var16 = var13.bind(var14)(var9, var4, var8);
            var _closure2_slot1 = var16;
            var2 = var7[var2];
            var9 = var3.bind(var5)(var2);
            var8 = var9.useStateFromStores;
            var2 = _closure1_slot11;
            var4 = new Array(2);
            var4[0] = var2;
            var2 = _closure1_slot9;
            var4[1] = var2;
            var2 = new Array(1);
            var2[0] = var16;
            var1 = function() {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                    var3 = _closure1_slot9;
                    var2 = var3.getId;
                    var4 = var2.bind(var3)();
                    var3 = _closure1_slot11;
                    var2 = var3.isMember;
                    var6 = _closure2_slot1;
                    var1 = null;
                    var6 = var1 == var6;
                    var1 = undefined;
                    if(var6) { _fun0020_ip = 139; continue _fun0020 }
case 98:
                    var5 = _closure2_slot1;
                    var1 = var5.guild_id;
case 139:
                    var1 = var2.bind(var3)(var1, var4);
                    return var1;
                }
            };
            var4 = var8.bind(var9)(var4, var1, var2);
            var2 = _closure1_slot1;
            var1 = 55;
            var1 = var7[var1];
            var1 = var2.bind(var5)(var1);
            var2 = var1.bind(var5)(var16);
            var1 = 56;
            var1 = var7[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.getLocationFromEvent;
            var3 = var1.bind(var3)(var6);
            var1 = null;
            if(!(var1 == var16)) { _fun0019_ip = 140; continue _fun0019 }
case 141:
            if(!(var1 != var3)) { _fun0019_ip = 142; continue _fun0019 }
case 140:
            var15 = var3;
            if(!(var1 != var2)) { _fun0019_ip = 143; continue _fun0019 }
case 144:
            var15 = var2;
case 143:
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 57;
            var2 = var7[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.getEventLocationIconComponent;
            var9 = var2.bind(var3)(var6, var16, var4);
            var4 = _closure1_slot23;
            var3 = _closure1_slot6;
            var2 = {};
            var6 = var10.channelContainer;
            var2['style'] = var6;
            var7 = var1 != var9;
            if(!var7) { _fun0019_ip = 145; continue _fun0019 }
case 146:
            var8 = _closure1_slot22;
            var6 = {};
            var13 = 'sm';
            var6['size'] = var13;
            var13 = var10.channelIcon;
            var6['style'] = var13;
            var7 = var8.bind(var5)(var9, var6);
case 145:
            var6 = new Array(2);
            var6[0] = var7;
            var9 = _closure1_slot22;
            var8 = _closure1_slot0;
            var13 = _closure1_slot2;
            var7 = 52;
            var7 = var13[var7];
            var7 = var8.bind(var5)(var7);
            var8 = var7.Text;
            var7 = {};
            var10 = var10.channelText;
            var7['style'] = var10;
            var13 = var1 != var16;
            var10 = undefined;
            if(!var13) { _fun0019_ip = 147; continue _fun0019 }
case 148:
            var14 = _closure1_slot1;
            var17 = _closure1_slot2;
            var13 = 58;
            var13 = var17[var13];
            var14 = var14.bind(var5)(var13);
            var13 = {};
            var13['channel'] = var16;
            var10 = var14.bind(var5)(var13);
case 147:
            var7['accessibilityLabel'] = var10;
            var10 = 'text-sm/medium';
            var7['variant'] = var10;
            var10 = 'text-default';
            var7['color'] = var10;
            var13 = var1 != var15;
            var10 = null;
            if(!var13) { _fun0019_ip = 149; continue _fun0019 }
case 150:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var12 = 54;
            var12 = var14[var12];
            var14 = var13.bind(var5)(var12);
            var13 = var14.guildEventDetailsParser;
            var12 = {};
            var12['guildId'] = var11;
            var11 = true;
            var10 = var13.bind(var14)(var15, var11, var12);
case 149:
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 142:
            return var1;
        }
    };
    var3['GuildEventSimpleLocation'] = var4;
    var4 = function GuildEventCardSimpleGuildInfo(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
            var3 = arg1;
            var2 = var3.event;
            var7 = var3.style;
            var14 = var3.textStyle;
            var3 = _closure1_slot25;
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
            var2 = _closure1_slot12;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = new Array(1);
            var2[0] = var8;
            var1 = function() {
                var3 = _closure1_slot12;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var13 = var4.bind(var6)(var3, var1, var2);
            var1 = null;
            var2 = var1 == var13;
            if(var2) { _fun0021_ip = 151; continue _fun0021 }
case 152:
            var4 = _closure1_slot23;
            var3 = _closure1_slot6;
            var2 = {};
            var8 = var12.guildInfoContainer;
            var6 = new Array(2);
            var6[0] = var8;
            var6[1] = var7;
            var2['style'] = var6;
            var8 = _closure1_slot22;
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
            var9 = _closure1_slot22;
            var8 = _closure1_slot6;
            var7 = {};
            var12 = var12.guildInfo;
            var7['style'] = var12;
            var12 = _closure1_slot22;
            var10 = 52;
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
case 151:
            return var1;
        }
    };
    var3['GuildEventCardSimpleGuildInfo'] = var4;
    var2 = function GuildEventCardGuildInfo(arg1) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var2 = arg1;
            var6 = var2.event;
            var2 = _closure1_slot25;
            var5 = undefined;
            var19 = var2.bind(var5)();
            var8 = var6.channel_id;
            var _closure2_slot0 = var8;
            var7 = var6.guild_id;
            var _closure2_slot1 = var7;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 26;
            var9 = var3[var2];
            var12 = var4.bind(var5)(var9);
            var11 = var12.useStateFromStores;
            var9 = _closure1_slot10;
            var10 = new Array(1);
            var10[0] = var9;
            var9 = new Array(1);
            var9[0] = var8;
            var8 = function() {
                var3 = _closure1_slot10;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var21 = var11.bind(var12)(var10, var8, var9);
            var _closure2_slot2 = var21;
            var8 = var3[var2];
            var11 = var4.bind(var5)(var8);
            var10 = var11.useStateFromStores;
            var8 = _closure1_slot12;
            var9 = new Array(1);
            var9[0] = var8;
            var8 = new Array(1);
            var8[0] = var7;
            var7 = function() {
                var3 = _closure1_slot12;
                var2 = var3.getGuild;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var13 = var10.bind(var11)(var9, var7, var8);
            var2 = var3[var2];
            var8 = var4.bind(var5)(var2);
            var7 = var8.useStateFromStores;
            var2 = _closure1_slot11;
            var4 = new Array(2);
            var4[0] = var2;
            var2 = _closure1_slot9;
            var4[1] = var2;
            var2 = new Array(1);
            var2[0] = var21;
            var1 = function() {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                    var3 = _closure1_slot9;
                    var2 = var3.getId;
                    var4 = var2.bind(var3)();
                    var3 = _closure1_slot11;
                    var2 = var3.isMember;
                    var6 = _closure2_slot2;
                    var1 = null;
                    var6 = var1 == var6;
                    var1 = undefined;
                    if(var6) { _fun0023_ip = 139; continue _fun0023 }
case 98:
                    var5 = _closure2_slot2;
                    var1 = var5.guild_id;
case 139:
                    var1 = var2.bind(var3)(var1, var4);
                    return var1;
                }
            };
            var4 = var7.bind(var8)(var4, var1, var2);
            var2 = _closure1_slot1;
            var1 = 55;
            var1 = var3[var1];
            var1 = var2.bind(var5)(var1);
            var2 = var1.bind(var5)(var21);
            var1 = null;
            if(!(var1 != var13)) { _fun0022_ip = 153; continue _fun0022 }
case 154:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 56;
            var3 = var8[var3];
            var7 = var7.bind(var5)(var3);
            var3 = var7.getLocationFromEvent;
            var11 = var3.bind(var7)(var6);
            var18 = var11;
            if(!(var1 != var2)) { _fun0022_ip = 155; continue _fun0022 }
case 156:
            var18 = var2;
case 155:
            var10 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 57;
            var2 = var9[var2];
            var3 = var10.bind(var5)(var2);
            var2 = var3.getEventLocationIconSource;
            var26 = var2.bind(var3)(var6, var21, var4);
            var4 = _closure1_slot23;
            var3 = _closure1_slot6;
            var2 = {};
            var6 = var19.guildInfoContainer;
            var2['style'] = var6;
            var8 = _closure1_slot22;
            var7 = _closure1_slot1;
            var12 = 59;
            var6 = var9[var12];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var6['guild'] = var13;
            var12 = var9[var12];
            var12 = var10.bind(var5)(var12);
            var12 = var12.GuildIconSizes;
            var12 = var12.SMALL;
            var6['size'] = var12;
            var12 = var19.guildIcon;
            var6['style'] = var12;
            var7 = var8.bind(var5)(var7, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var8 = _closure1_slot6;
            var7 = {};
            var12 = var19.guildInfo;
            var7['style'] = var12;
            var12 = _closure1_slot22;
            var20 = 52;
            var9 = var9[var20];
            var9 = var10.bind(var5)(var9);
            var10 = var9.Text;
            var9 = {'variant': 'text-sm/medium', 'color': 'mobile-text-heading-primary'};
            var13 = var13.name;
            var9['children'] = var13;
            var10 = var12.bind(var5)(var10, var9);
            var9 = new Array(2);
            var9[0] = var10;
            var10 = var1 != var21;
            if(var10) { _fun0022_ip = 157; continue _fun0022 }
case 158:
            var10 = var1 != var11;
case 157:
            if(!var10) { _fun0022_ip = 159; continue _fun0022 }
case 160:
            var13 = _closure1_slot23;
            var12 = _closure1_slot6;
            var11 = {};
            var14 = var19.guildInfoChannelContainer;
            var11['style'] = var14;
            var22 = true;
            var11['accessible'] = var22;
            if(!(var1 == var21)) { _fun0022_ip = 161; continue _fun0022 }
case 162:
            var16 = var1 != var18;
            var14 = undefined;
            if(!var16) { _fun0022_ip = 163; continue _fun0022 }
case 164:
            var14 = var18;
case 163:
            _fun0022_ip = 165; continue _fun0022;
case 161:
            var17 = _closure1_slot1;
            var23 = _closure1_slot2;
            var16 = 58;
            var16 = var23[var16];
            var17 = var17.bind(var5)(var16);
            var16 = {};
            var16['channel'] = var21;
            var14 = var17.bind(var5)(var16);
case 165:
            var11['accessibilityLabel'] = var14;
            var16 = var1 != var26;
            if(!var16) { _fun0022_ip = 166; continue _fun0022 }
case 167:
            var21 = _closure1_slot22;
            var24 = _closure1_slot0;
            var25 = _closure1_slot2;
            var23 = 45;
            var14 = var25[var23];
            var14 = var24.bind(var5)(var14);
            var17 = var14.Icon;
            var14 = {};
            var14['source'] = var26;
            var23 = var25[var23];
            var23 = var24.bind(var5)(var23);
            var23 = var23.Icon;
            var23 = var23.Sizes;
            var23 = var23.EXTRA_SMALL;
            var14['size'] = var23;
            var23 = var19.channelIcon;
            var14['style'] = var23;
            var14['disableColor'] = var22;
            var16 = var21.bind(var5)(var17, var14);
case 166:
            var14 = new Array(2);
            var14[0] = var16;
            var17 = _closure1_slot22;
            var16 = _closure1_slot0;
            var15 = _closure1_slot2;
            var15 = var15[var20];
            var15 = var16.bind(var5)(var15);
            var16 = var15.Text;
            var15 = {'style': null, 'variant': 'text-xs/medium', 'color': 'text-default'};
            var19 = var19.guildInfoChannelText;
            var15['style'] = var19;
            var15['children'] = var18;
            var15 = var17.bind(var5)(var16, var15);
            var14[1] = var15;
            var11['children'] = var14;
            var10 = var13.bind(var5)(var12, var11);
case 159:
            var9[1] = var10;
            var7['children'] = var9;
            var7 = var4.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 153:
            return var1;
        }
    };
    var3['GuildEventCardGuildInfo'] = var2;
    return var1;
})();