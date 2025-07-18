// app/modules/markup/native/MarkupReactCommandRule.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var7 = native2;
    var9 = native3;
    var3 = native6;
    var8 = native7;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
    var4 = function handleTapCommandMention(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var3 = var2.appLauncherNavigator;
            var7 = var2.channelId;
            var10 = var2.currentText;
            var4 = var2.onSetCommand;
            var _closure2_slot0 = var4;
            var5 = var2.onOpenCustomKeyboard;
            var _closure2_slot1 = var5;
            var8 = var2.commandId;
            var11 = var2.commandName;
            var9 = undefined;
            var _closure2_slot2 = var9;
            var6 = _closure1_slot4;
            var2 = var6.getChannel;
            var6 = var2.bind(var6)(var7);
            var2 = null;
            if(!(var2 != var6)) { _fun0001_ip = 95; continue _fun0001 }
 83:
            var7 = var6.guild_id;
            if(!(var2 == var7)) { _fun0001_ip = 397; continue _fun0001 }
 95:
            var7 = '';
            if(!(var7 !== var10)) { _fun0001_ip = 388; continue _fun0001 }
 106:
            var15 = _closure1_slot1;
            var17 = _closure1_slot2;
            var7 = 10;
            var7 = var17[var7];
            var12 = var15.bind(var9)(var7);
            var10 = var12.show;
            var7 = {};
            var16 = _closure1_slot0;
            var13 = 11;
            var14 = var17[var13];
            var14 = var16.bind(var9)(var14);
            var19 = var14.intl;
            var18 = var19.string;
            var14 = var17[var13];
            var14 = var16.bind(var9)(var14);
            var14 = var14.t;
            var14 = var14.pe26Cg;
            var14 = var18.bind(var19)(var14);
            var7['title'] = var14;
            var14 = var17[var13];
            var14 = var16.bind(var9)(var14);
            var19 = var14.intl;
            var18 = var19.string;
            var14 = var17[var13];
            var14 = var16.bind(var9)(var14);
            var14 = var14.t;
            var14 = var14.VkKicX;
            var14 = var18.bind(var19)(var14);
            var7['confirmText'] = var14;
            var14 = function onConfirm() {
                var2 = _closure2_slot0;
                var1 = undefined;
                var1 = var2.bind(var1)();
                return var1;
            };
            var7['onConfirm'] = var14;
            var14 = var17[var13];
            var14 = var16.bind(var9)(var14);
            var19 = var14.intl;
            var18 = var19.string;
            var14 = var17[var13];
            var14 = var16.bind(var9)(var14);
            var14 = var14.t;
            var14 = var14.ETE/oK;
            var14 = var18.bind(var19)(var14);
            var7['cancelText'] = var14;
            var14 = 12;
            var14 = var17[var14];
            var14 = var15.bind(var9)(var14);
            var14 = var14.Colors;
            var14 = var14.BRAND;
            var7['confirmColor'] = var14;
            var14 = var17[var13];
            var14 = var16.bind(var9)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var17[var13];
            var13 = var16.bind(var9)(var13);
            var13 = var13.t;
            var13 = var13.+awCIy;
            var13 = var14.bind(var15)(var13);
            var7['body'] = var13;
            var7 = var10.bind(var12)(var7);
            _fun0001_ip = 684; continue _fun0001;
 388:
            var4 = var4.bind(var9)();
            _fun0001_ip = 684; continue _fun0001;
 397:
            var4 = var11.includes;
            var10 = ' ';
            var4 = var4.bind(var11)(var10);
            var7 = var8;
            if(!var4) { _fun0001_ip = 466; continue _fun0001 }
 417:
            var4 = _closure1_slot7;
            var8 = var8 + var4;
            var4 = var11.split;
            var11 = var4.bind(var11)(var10);
            var10 = var11.slice;
            var4 = 1;
            var11 = var10.bind(var11)(var4);
            var10 = var11.join;
            var4 = _closure1_slot7;
            var4 = var10.bind(var11)(var4);
            var7 = var8 + var4;
 466:
            _closure2_slot2 = var7;
            if(!(var2 != var3)) { _fun0001_ip = 481; continue _fun0001 }
 474:
            if(!(var2 == var6)) { _fun0001_ip = 686; continue _fun0001 }
 481:
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 7;
            var4 = var10[var4];
            var8 = var8.bind(var9)(var4);
            var4 = var8.getRootNavigationRef;
            var8 = var4.bind(var8)();
            if(!(var2 != var8)) { _fun0001_ip = 633; continue _fun0001 }
 515:
            var4 = var8.getState;
            var4 = var4.bind(var8)();
            var11 = var2 == var4;
            var10 = undefined;
            if(var11) { _fun0001_ip = 554; continue _fun0001 }
 534:
            var4 = var4.routes;
            var11 = var2 == var4;
            var10 = undefined;
            if(var11) { _fun0001_ip = 554; continue _fun0001 }
 549:
            var10 = var4.length;
 554:
            var4 = 1;
            if(!(var10 > var4)) { _fun0001_ip = 633; continue _fun0001 }
 561:
            var10 = var8.getState;
            var11 = var10.bind(var8)();
            var12 = var2 == var11;
            var10 = undefined;
            if(var12) { _fun0001_ip = 600; continue _fun0001 }
 580:
            var11 = var11.routes;
            var12 = var2 == var11;
            var10 = undefined;
            if(var12) { _fun0001_ip = 600; continue _fun0001 }
 595:
            var10 = var11.length;
 600:
            var11 = var2 != var10;
            var2 = 0;
            if(!var11) { _fun0001_ip = 612; continue _fun0001 }
 609:
            var2 = var10;
 612:
            if(!(var2 > var4)) { _fun0001_ip = 633; continue _fun0001 }
 616:
            var10 = var8.goBack;
            var10 = var10.bind(var8)();
            var2 = var2 - 1;
            if(var2 > var4) { _fun0001_ip = 616; continue _fun0001 }
 633:
            var4 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 8;
            var2 = var8[var2];
            var4 = var4.bind(var9)(var2);
            var2 = var4.hideActionSheet;
            var2 = var2.bind(var4)();
            var2 = global;
            var4 = var2.setTimeout;
            var2 = function() {
                var3 = _closure2_slot1;
                var2 = {};
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 9;
                var4 = var8[var1];
                var1 = undefined;
                var4 = var7.bind(var1)(var4);
                var4 = var4.KeyboardTypes;
                var4 = var4.APP_LAUNCHER;
                var2['type'] = var4;
                var4 = {};
                var5 = _closure1_slot5;
                var5 = var5.COMMAND_VIEW;
                var4['initialRouteName'] = var5;
                var5 = 6;
                var5 = var8[var5];
                var5 = var7.bind(var1)(var5);
                var5 = var5.ApplicationCommandTriggerLocations;
                var5 = var5.MENTION;
                var4['analyticsLocation'] = var5;
                var5 = {};
                var6 = _closure2_slot2;
                var5['commandId'] = var6;
                var4['preSelectedCommand'] = var5;
                var2['context'] = var4;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = 0;
            var1 = var4.bind(var9)(var2, var1);
 684:
            return var9;
 686:
            var2 = var3.navigate;
            var1 = {};
            var4 = _closure1_slot5;
            var4 = var4.COMMAND_VIEW;
            var1['name'] = var4;
            var4 = {};
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 6;
            var5 = var10[var5];
            var5 = var8.bind(var9)(var5);
            var5 = var5.ApplicationCommandTriggerLocations;
            var5 = var5.MENTION;
            var4['analyticsLocation'] = var5;
            var5 = {};
            var5['commandId'] = var7;
            var4['preSelectedCommand'] = var5;
            var5 = {};
            var7 = 'channel';
            var5['type'] = var7;
            var5['channel'] = var6;
            var4['context'] = var5;
            var1['params'] = var4;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot10 = var4;
    var2 = function handleLongPressCommandMention(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var _closure2_slot0 = var1;
            var1 = arg2;
            var _closure2_slot1 = var1;
            var3 = {};
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var7 = 11;
            var5 = var8[var7];
            var1 = undefined;
            var5 = var4.bind(var1)(var5);
            var10 = var5.intl;
            var9 = var10.string;
            var5 = var8[var7];
            var5 = var4.bind(var1)(var5);
            var5 = var5.t;
            var5 = var5.42H+NT;
            var5 = var9.bind(var10)(var5);
            var3['label'] = var5;
            var9 = _closure1_slot1;
            var5 = 13;
            var5 = var8[var5];
            var5 = var9.bind(var1)(var5);
            var3['icon'] = var5;
            var5 = function onPress() {
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 14;
                var3 = var5[var1];
                var1 = undefined;
                var6 = var4.bind(var1)(var3);
                var3 = var6.presentCommandCopied;
                var3 = var3.bind(var6)();
                var3 = 15;
                var3 = var5[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.copy;
                var7 = _closure1_slot8;
                var6 = _closure2_slot0;
                var2 = global;
                var2 = var2.HermesInternal;
                var5 = var2.concat;
                var2 = '';
                var2 = var5.bind(var2)(var7, var6);
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var3['onPress'] = var5;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = 16;
            var3 = var8[var3];
            var3 = var4.bind(var1)(var3);
            var4 = var3.DeveloperMode;
            var3 = var4.getSetting;
            var3 = var3.bind(var4)();
            if(!var3) { _fun0002_ip = 249; continue _fun0002 }
 150:
            var4 = var5.push;
            var3 = {};
            var11 = _closure1_slot0;
            var9 = _closure1_slot2;
            var8 = var9[var7];
            var8 = var11.bind(var1)(var8);
            var10 = var8.intl;
            var8 = var10.string;
            var7 = var9[var7];
            var7 = var11.bind(var1)(var7);
            var7 = var7.t;
            var7 = var7.oJ1Mu7;
            var7 = var8.bind(var10)(var7);
            var3['label'] = var7;
            var8 = _closure1_slot1;
            var7 = 17;
            var7 = var9[var7];
            var7 = var8.bind(var1)(var7);
            var3['icon'] = var7;
            var6 = function onPress() {
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 14;
                var2 = var4[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var2 = var5.presentIdCopied;
                var2 = var2.bind(var5)();
                var2 = 15;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.copy;
                var2 = _closure2_slot1;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var3['onPress'] = var6;
            var3 = var4.bind(var5)(var3);
 249:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 18;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.showSimpleActionSheet;
            var2 = {};
            var6 = 'LongPressCommandMention';
            var2['key'] = var6;
            var2['options'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var _closure1_slot11 = var2;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var6);
    var1 = 0;
    var10 = var8[var1];
    var6 = native4;
    var1 = undefined;
    var6 = var6.bind(var1)(var10);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var9 = var6.AppLauncherRouteName;
    var _closure1_slot5 = var9;
    var6 = var6.useAppLauncherNavigation;
    var _closure1_slot6 = var6;
    var6 = 3;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.SUB_COMMAND_KEY_SEPARATOR;
    var _closure1_slot7 = var6;
    var6 = 4;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.COMMAND_SENTINEL;
    var _closure1_slot8 = var6;
    var6 = 5;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.jsxs;
    var _closure1_slot9 = var6;
    var6 = 24;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/markup/native/MarkupReactCommandRule.tsx';
    var6 = var7.bind(var8)(var6);
    var5 = function MarkupReactCommandRule(arg1) {
        var1 = arg1;
        var9 = var1.node;
        var _closure2_slot0 = var9;
        var8 = var1.output;
        var7 = var1.state;
        var11 = var1.style;
        var12 = _closure1_slot3;
        var3 = var12.useContext;
        var6 = _closure1_slot0;
        var10 = _closure1_slot2;
        var2 = 19;
        var2 = var10[var2];
        var4 = undefined;
        var2 = var6.bind(var4)(var2);
        var2 = var2.PortalKeyboardContext;
        var3 = var3.bind(var12)(var2);
        var2 = null;
        var2 = var2 != var3;
        var _closure2_slot1 = var2;
        var2 = _closure1_slot6;
        var2 = var2.bind(var4)();
        var _closure2_slot2 = var2;
        var3 = _closure1_slot9;
        var1 = 20;
        var1 = var10[var1];
        var1 = var6.bind(var4)(var1);
        var2 = var1.Text;
        var1 = {};
        var1['style'] = var11;
        var11 = 'text-md/bold';
        var1['variant'] = var11;
        var11 = function onPress() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 21;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var3);
                var3 = var5.getBestActiveInput;
                var8 = var3.bind(var5)();
                var _closure3_slot0 = var8;
                var3 = _closure1_slot10;
                var2 = {};
                var7 = _closure2_slot1;
                var6 = undefined;
                if(!var7) { _fun0003_ip = 63; continue _fun0003 }
 59:
                var6 = _closure2_slot2;
 63:
                var2['appLauncherNavigator'] = var6;
                var5 = _closure2_slot0;
                var6 = var5.channelId;
                var2['channelId'] = var6;
                var6 = var5.commandId;
                var2['commandId'] = var6;
                var5 = var5.commandName;
                var2['commandName'] = var5;
                var5 = null;
                var7 = var5 == var8;
                var6 = undefined;
                if(var7) { _fun0003_ip = 124; continue _fun0003 }
 114:
                var7 = var8.getText;
                var6 = var7.bind(var8)();
 124:
                var7 = var5 != var6;
                var5 = '';
                if(!var7) { _fun0003_ip = 138; continue _fun0003 }
 135:
                var5 = var6;
 138:
                var2['currentText'] = var5;
                var5 = function onOpenCustomKeyboard(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var3 = _closure3_slot0;
                        var1 = null;
                        var3 = var1 == var3;
                        var1 = undefined;
                        if(var3) { _fun0004_ip = 36; continue _fun0004 }
 18:
                        var4 = _closure3_slot0;
                        var3 = var4.openCustomKeyboard;
                        var2 = arg1;
                        var1 = var3.bind(var4)(var2);
 36:
                        return var1;
                    }
                };
                var2['onOpenCustomKeyboard'] = var5;
                var4 = function onSetCommand() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var1 = 22;
                        var3 = var5[var1];
                        var1 = undefined;
                        var3 = var4.bind(var1)(var3);
                        var3 = var3.bind(var1)();
                        var3 = 8;
                        var3 = var5[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.hideActionSheet;
                        var3 = var3.bind(var4)();
                        var3 = _closure3_slot0;
                        var5 = null;
                        if(!(var5 != var3)) { _fun0005_ip = 78; continue _fun0005 }
 64:
                        var6 = _closure3_slot0;
                        var3 = var6.openSystemKeyboard;
                        var3 = var3.bind(var6)();
 78:
                        var3 = _closure3_slot0;
                        var3 = var5 == var3;
                        var6 = undefined;
                        if(var3) { _fun0005_ip = 112; continue _fun0005 }
 91:
                        var7 = _closure3_slot0;
                        var4 = var7.getApplicationCommandManager;
                        var4 = var4.bind(var7)();
                        var3 = var5 == var4;
                        var6 = var4;
 112:
                        if(var3) { _fun0005_ip = 179; continue _fun0005 }
 115:
                        var5 = var6.setPartialCommand;
                        var3 = _closure2_slot0;
                        var4 = var3.commandId;
                        var3 = var3.commandName;
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var2 = 6;
                        var2 = var8[var2];
                        var2 = var7.bind(var1)(var2);
                        var2 = var2.ApplicationCommandTriggerLocations;
                        var2 = var2.MENTION;
                        var2 = var5.bind(var6)(var4, var3, var2);
 179:
                        return var1;
                    }
                };
                var2['onSetCommand'] = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            }
        };
        var1['onPress'] = var11;
        var5 = function onLongPress() {
            var4 = _closure1_slot11;
            var1 = _closure2_slot0;
            var3 = var1.commandName;
            var2 = var1.commandId;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var1['onLongPress'] = var5;
        var5 = 23;
        var5 = var10[var5];
        var6 = var6.bind(var4)(var5);
        var5 = var6.smartOutput;
        var6 = var5.bind(var6)(var9, var8, var7);
        var5 = ['/'];
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var5;
    var3['handleTapCommandMention'] = var4;
    var3['handleLongPressCommandMention'] = var2;
    return var1;
})();