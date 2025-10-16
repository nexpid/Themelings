// app/modules/activities/panel/native/ActivityInviteSheetRow.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.InviteSendStates;
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot8 = var4;
    var4 = 7;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'width': 32, 'height': 32, 'borderRadius': null, 'backgroundColor': null, 'alignItems': 'center', 'justifyContent': 'center', 'overflow': 'hidden', 'marginTop': 0, 'marginRight': 10, 'borderColor': null, 'borderStyle': 'solid', 'borderWidth': 2};
    var11 = 8;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.lg;
    var10['borderRadius'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_PRIMARY;
    var10['backgroundColor'] = var13;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.INTERACTIVE_MUTED;
    var10['borderColor'] = var11;
    var4['acronym'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot9 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var15 = var3.end;
            var11 = var3.error;
            var10 = var3.isSubmitting;
            var2 = var3.onInviteSent;
            var _closure2_slot0 = var2;
            var2 = var3.onPressAvatar;
            var _closure2_slot1 = var2;
            var5 = var3.row;
            var _closure2_slot2 = var5;
            var9 = var3.sendState;
            var16 = var3.start;
            var3 = _closure1_slot9;
            var4 = undefined;
            var13 = var3.bind(var4)();
            var3 = var5.item;
            var17 = var3.id;
            var _closure2_slot3 = var17;
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var7 = 9;
            var7 = var3[var7];
            var18 = var6.bind(var4)(var7);
            var14 = var18.useStateFromStores;
            var7 = _closure1_slot4;
            var12 = new Array(1);
            var12[0] = var7;
            var7 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getChannel;
                var1 = _closure2_slot3;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var29 = var14.bind(var18)(var12, var7);
            var12 = _closure1_slot1;
            var7 = 10;
            var7 = var3[var7];
            var7 = var12.bind(var4)(var7);
            var18 = var7.bind(var4)(var29);
            var7 = function handlePress() {
                var3 = _closure2_slot0;
                var2 = _closure2_slot2;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var5 = var5.type;
            var12 = 11;
            var3 = var3[var12];
            var3 = var6.bind(var4)(var3);
            var3 = var3.RowTypes;
            var3 = var3.DM;
            if(!(var3 !== var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var12];
            var3 = var6.bind(var4)(var3);
            var3 = var3.RowTypes;
            var3 = var3.FRIEND;
            if(!(var3 !== var5)) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var12];
            var3 = var6.bind(var4)(var3);
            var3 = var3.RowTypes;
            var3 = var3.GROUP_DM;
            if(!(var3 !== var5)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var12];
            var3 = var6.bind(var4)(var3);
            var3 = var3.RowTypes;
            var3 = var3.CHANNEL;
            if(!(var3 !== var5)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var3 = null;
            return var3;
case 7:
            var3 = null;
            var6 = var3 == var29;
            var5 = undefined;
            if(var6) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var5 = var29.guild_id;
case 9:
            var5 = var3 != var5;
            var25 = undefined;
            if(!var5) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var12 = _closure1_slot5;
            var6 = var12.getGuild;
            var5 = var29.guild_id;
            var25 = var6.bind(var12)(var5);
case 11:
            if(!(var3 != var25)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var5 = var25.icon;
            if(!(var3 == var5)) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var14 = _closure1_slot0;
            var20 = _closure1_slot2;
            var5 = 18;
            var5 = var20[var5];
            var12 = var14.bind(var4)(var5);
            var6 = var12.getAcronym;
            var5 = var25.name;
            var19 = var6.bind(var12)(var5);
            var12 = _closure1_slot8;
            var6 = _closure1_slot3;
            var5 = {};
            var13 = var13.acronym;
            var5['style'] = var13;
            var13 = 19;
            var13 = var20[var13];
            var13 = var14.bind(var4)(var13);
            var14 = var13.Text;
            var13 = {};
            var20 = 'text-sm/bold';
            var13['variant'] = var20;
            var13['children'] = var19;
            var13 = var12.bind(var4)(var14, var13);
            var5['children'] = var13;
            var13 = var12.bind(var4)(var6, var5);
            _fun0001_ip = 17; continue _fun0001;
case 15:
            var12 = _closure1_slot8;
            var23 = _closure1_slot1;
            var20 = _closure1_slot2;
            var14 = 13;
            var5 = var20[var14];
            var6 = var23.bind(var4)(var5);
            var5 = {};
            var19 = 17;
            var21 = var20[var19];
            var22 = var23.bind(var4)(var21);
            var21 = var22.makeSource;
            var19 = var20[var19];
            var24 = var23.bind(var4)(var19);
            var23 = var24.getGuildIconURL;
            var19 = {};
            var26 = var25.id;
            var19['id'] = var26;
            var25 = var25.icon;
            var19['icon'] = var25;
            var25 = 32;
            var19['size'] = var25;
            var19 = var23.bind(var24)(var19);
            var19 = var21.bind(var22)(var19);
            var5['source'] = var19;
            var19 = _closure1_slot0;
            var14 = var20[var14];
            var14 = var19.bind(var4)(var14);
            var14 = var14.AvatarSizes;
            var14 = var14.REFRESH_MEDIUM_32;
            var5['size'] = var14;
            var13 = var12.bind(var4)(var6, var5);
case 17:
            var5 = var3 == var18;
            var12 = '';
            if(var5) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var5 = global;
            var5 = var5.HermesInternal;
            var6 = var5.concat;
            var5 = '#';
            var12 = var6.bind(var5)(var18);
case 18:
            var6 = undefined;
            var5 = undefined;
            _fun0001_ip = 20; continue _fun0001;
case 13:
            return var3;
case 5:
            var3 = null;
            var19 = var3 != var29;
            var14 = null;
            if(!var19) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var21 = _closure1_slot8;
            var27 = _closure1_slot1;
            var24 = _closure1_slot2;
            var22 = 13;
            var19 = var24[var22];
            var20 = var27.bind(var4)(var19);
            var19 = {};
            var23 = 17;
            var25 = var24[var23];
            var26 = var27.bind(var4)(var25);
            var25 = var26.makeSource;
            var23 = var24[var23];
            var28 = var27.bind(var4)(var23);
            var27 = var28.getChannelIconURL;
            var23 = {};
            var30 = var29.id;
            var23['id'] = var30;
            var30 = var29.icon;
            var23['icon'] = var30;
            var29 = var29.application_id;
            var23['applicationId'] = var29;
            var29 = 32;
            var23['size'] = var29;
            var23 = var27.bind(var28)(var23);
            var23 = var25.bind(var26)(var23);
            var19['source'] = var23;
            var23 = _closure1_slot0;
            var22 = var24[var22];
            var22 = var23.bind(var4)(var22);
            var22 = var22.AvatarSizes;
            var22 = var22.REFRESH_MEDIUM_32;
            var19['size'] = var22;
            var14 = var21.bind(var4)(var20, var19);
case 21:
            var19 = var3 != var18;
            var3 = '';
            if(!var19) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var3 = var18;
case 23:
            var12 = var3;
            var13 = var14;
            var6 = undefined;
            var5 = undefined;
            _fun0001_ip = 20; continue _fun0001;
case 2:
            var14 = _closure1_slot6;
            var3 = var14.getUser;
            var23 = var3.bind(var14)(var17);
            var17 = _closure1_slot8;
            var14 = _closure1_slot0;
            var18 = _closure1_slot2;
            var3 = 12;
            var3 = var18[var3];
            var3 = var14.bind(var4)(var3);
            var14 = var3.PressableOpacity;
            var3 = {'importantForAccessibility': 'no-hide-descendants', 'accessibilityElementsHidden': true};
            var19 = function onPress(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = arg1;
                    var1 = var2.stopPropagation;
                    var1 = var1.bind(var2)();
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot3;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 25:
                    var1 = undefined;
                    return var1;
                }
            };
            var3['onPress'] = var19;
            var19 = {'padding': 8, 'margin': 4294967288};
            var3['style'] = var19;
            var19 = _closure1_slot1;
            var20 = 13;
            var18 = var18[var20];
            var19 = var19.bind(var4)(var18);
            var18 = {};
            var22 = null;
            var21 = var22 == var23;
            var24 = undefined;
            if(var21) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var21 = var23.getAvatarSource;
            var24 = var21.bind(var23)(var4);
case 27:
            var25 = var22 != var24;
            var21 = null;
            if(!var25) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var21 = var24;
case 29:
            var18['source'] = var21;
            var24 = _closure1_slot0;
            var21 = _closure1_slot2;
            var20 = var21[var20];
            var20 = var24.bind(var4)(var20);
            var20 = var20.AvatarSizes;
            var20 = var20.REFRESH_MEDIUM_32;
            var18['size'] = var20;
            var18 = var17.bind(var4)(var19, var18);
            var3['children'] = var18;
            var14 = var17.bind(var4)(var14, var3);
            var18 = _closure1_slot8;
            var20 = _closure1_slot1;
            var3 = 14;
            var3 = var21[var3];
            var17 = var20.bind(var4)(var3);
            var3 = {};
            var19 = 15;
            var19 = var21[var19];
            var20 = var20.bind(var4)(var19);
            var19 = var20.getGlobalName;
            var19 = var19.bind(var20)(var23);
            var3['nick'] = var19;
            var3['user'] = var23;
            var3 = var18.bind(var4)(var17, var3);
            var17 = var22 != var2;
            var2 = undefined;
            if(!var17) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var18 = {};
            var17 = 'viewProfile';
            var18['name'] = var17;
            var19 = _closure1_slot0;
            var24 = _closure1_slot2;
            var17 = 16;
            var20 = var24[var17];
            var20 = var19.bind(var4)(var20);
            var21 = var20.intl;
            var20 = var21.formatToPlainString;
            var17 = var24[var17];
            var17 = var19.bind(var4)(var17);
            var17 = var17.t;
            var19 = var17.uCenkp;
            var17 = {};
            var24 = var22 == var23;
            var22 = undefined;
            if(var24) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var22 = var23.tag;
case 33:
            var17['username'] = var22;
            var17 = var20.bind(var21)(var19, var17);
            var18['label'] = var17;
            var17 = new Array(1);
            var17[0] = var18;
            var2 = var17;
case 31:
            var5 = function f(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var2 = var1.actionName;
                    var1 = 'viewProfile';
                    var1 = var1 === var2;
                    if(!var1) { _fun0003_ip = 25; continue _fun0003 }
case 35:
                    var3 = _closure2_slot1;
                    var2 = null;
                    var1 = var2 !== var3;
case 25:
                    if(!var1) { _fun0003_ip = 36; continue _fun0003 }
case 37:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0003_ip = 36; continue _fun0003 }
case 38:
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot3;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 36:
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = var2;
            var13 = var14;
            var12 = var3;
case 20:
            var3 = _closure1_slot8;
            var2 = _closure1_slot0;
            var14 = _closure1_slot2;
            var1 = 20;
            var1 = var14[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.TableRow;
            var1 = {};
            var1['start'] = var16;
            var1['end'] = var15;
            var1['icon'] = var13;
            var1['label'] = var12;
            var13 = _closure1_slot1;
            var12 = 21;
            var12 = var14[var12];
            var13 = var13.bind(var4)(var12);
            var12 = {};
            var12['sendState'] = var9;
            var12['onPressSend'] = var7;
            var12 = var3.bind(var4)(var13, var12);
            var1['trailing'] = var12;
            var1['onPress'] = var7;
            var7 = null;
            var7 = var7 != var11;
            if(var7) { _fun0001_ip = 39; continue _fun0001 }
case 40:
            var7 = var10;
case 39:
            if(var7) { _fun0001_ip = 41; continue _fun0001 }
case 42:
            var8 = _closure1_slot7;
            var8 = var8.SENT;
            var7 = var9 === var8;
case 41:
            var1['disabled'] = var7;
            var1['accessibilityActions'] = var6;
            var1['onAccessibilityAction'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 22;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/panel/native/ActivityInviteSheetRow.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();