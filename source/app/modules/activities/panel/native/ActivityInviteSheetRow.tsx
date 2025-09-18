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
 0:
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
            if(!(var3 !== var5)) { _fun0001_ip = 849; continue _fun0001 }
 203:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var12];
            var3 = var6.bind(var4)(var3);
            var3 = var3.RowTypes;
            var3 = var3.FRIEND;
            if(!(var3 !== var5)) { _fun0001_ip = 849; continue _fun0001 }
 239:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var12];
            var3 = var6.bind(var4)(var3);
            var3 = var3.RowTypes;
            var3 = var3.GROUP_DM;
            if(!(var3 !== var5)) { _fun0001_ip = 661; continue _fun0001 }
 275:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var12];
            var3 = var6.bind(var4)(var3);
            var3 = var3.RowTypes;
            var3 = var3.CHANNEL;
            if(!(var3 !== var5)) { _fun0001_ip = 312; continue _fun0001 }
 308:
            var3 = null;
            return var3;
 312:
            var3 = null;
            var6 = var3 == var29;
            var5 = undefined;
            if(var6) { _fun0001_ip = 328; continue _fun0001 }
 323:
            var5 = var29.guild_id;
 328:
            var5 = var3 != var5;
            var25 = undefined;
            if(!var5) { _fun0001_ip = 356; continue _fun0001 }
 337:
            var12 = _closure1_slot5;
            var6 = var12.getGuild;
            var5 = var29.guild_id;
            var25 = var6.bind(var12)(var5);
 356:
            if(!(var3 != var25)) { _fun0001_ip = 659; continue _fun0001 }
 363:
            var5 = var25.icon;
            if(!(var3 == var5)) { _fun0001_ip = 482; continue _fun0001 }
 372:
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
            _fun0001_ip = 617; continue _fun0001;
 482:
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
 617:
            var5 = var3 == var18;
            var12 = '';
            if(var5) { _fun0001_ip = 650; continue _fun0001 }
 628:
            var5 = global;
            var5 = var5.HermesInternal;
            var6 = var5.concat;
            var5 = '#';
            var12 = var6.bind(var5)(var18);
 650:
            var6 = undefined;
            var5 = undefined;
            _fun0001_ip = 1230; continue _fun0001;
 659:
            return var3;
 661:
            var3 = null;
            var19 = var3 != var29;
            var14 = null;
            if(!var19) { _fun0001_ip = 820; continue _fun0001 }
 675:
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
 820:
            var19 = var3 != var18;
            var3 = '';
            if(!var19) { _fun0001_ip = 834; continue _fun0001 }
 831:
            var3 = var18;
 834:
            var12 = var3;
            var13 = var14;
            var6 = undefined;
            var5 = undefined;
            _fun0001_ip = 1230; continue _fun0001;
 849:
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
 0:
                    var2 = arg1;
                    var1 = var2.stopPropagation;
                    var1 = var1.bind(var2)();
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0002_ip = 41; continue _fun0002 }
 26:
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot3;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
 41:
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
            if(var21) { _fun0001_ip = 977; continue _fun0001 }
 966:
            var21 = var23.getAvatarSource;
            var24 = var21.bind(var23)(var4);
 977:
            var25 = var22 != var24;
            var21 = null;
            if(!var25) { _fun0001_ip = 989; continue _fun0001 }
 986:
            var21 = var24;
 989:
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
            if(!var17) { _fun0001_ip = 1214; continue _fun0001 }
 1111:
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
            if(var24) { _fun0001_ip = 1189; continue _fun0001 }
 1184:
            var22 = var23.tag;
 1189:
            var17['username'] = var22;
            var17 = var20.bind(var21)(var19, var17);
            var18['label'] = var17;
            var17 = new Array(1);
            var17[0] = var18;
            var2 = var17;
 1214:
            var5 = function f(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var2 = var1.actionName;
                    var1 = 'viewProfile';
                    var1 = var1 === var2;
                    if(!var1) { _fun0003_ip = 41; continue _fun0003 }
 28:
                    var3 = _closure2_slot1;
                    var2 = null;
                    var1 = var2 !== var3;
 41:
                    if(!var1) { _fun0003_ip = 72; continue _fun0003 }
 44:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0003_ip = 72; continue _fun0003 }
 57:
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot3;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
 72:
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = var2;
            var13 = var14;
            var12 = var3;
 1230:
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
            if(var7) { _fun0001_ip = 1333; continue _fun0001 }
 1330:
            var7 = var10;
 1333:
            if(var7) { _fun0001_ip = 1350; continue _fun0001 }
 1336:
            var8 = _closure1_slot7;
            var8 = var8.SENT;
            var7 = var9 === var8;
 1350:
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