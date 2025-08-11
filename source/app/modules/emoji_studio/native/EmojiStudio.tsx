// app/modules/emoji_studio/native/EmojiStudio.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var1 = function NameAndUploadFooter(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var3 = var2.selectedGuildId;
            var _closure2_slot0 = var3;
            var2 = var2.setSelectedGuildId;
            var2 = _closure1_slot16;
            var5 = undefined;
            var16 = var2.bind(var5)();
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 9;
            var2 = var4[var2];
            var4 = var3.bind(var5)(var2);
            var3 = var4.useStateFromStores;
            var6 = _closure1_slot7;
            var2 = new Array(1);
            var2[0] = var6;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure1_slot7;
                    var2 = var3.getGuild;
                    var1 = _closure2_slot0;
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    var3 = var1 != var2;
                    if(!var3) { _fun0002_ip = 36; continue _fun0002 }
 33:
                    var1 = var2;
 36:
                    return var1;
                }
            };
            var21 = var3.bind(var4)(var2, var1);
            var1 = null;
            var2 = var1 == var21;
            if(var2) { _fun0001_ip = 467; continue _fun0001 }
 94:
            var4 = _closure1_slot13;
            var3 = _closure1_slot6;
            var2 = {};
            var6 = var16.footer;
            var2['style'] = var6;
            var8 = _closure1_slot13;
            var20 = _closure1_slot0;
            var23 = _closure1_slot2;
            var6 = 18;
            var6 = var23[var6];
            var6 = var20.bind(var5)(var6);
            var7 = var6.TableRowGroup;
            var6 = {};
            var11 = _closure1_slot13;
            var9 = 19;
            var9 = var23[var9];
            var9 = var20.bind(var5)(var9);
            var10 = var9.TableRow;
            var9 = {};
            var15 = _closure1_slot13;
            var18 = _closure1_slot1;
            var17 = 20;
            var13 = var23[var17];
            var14 = var18.bind(var5)(var13);
            var13 = {};
            var13['guild'] = var21;
            var17 = var23[var17];
            var17 = var20.bind(var5)(var17);
            var17 = var17.GuildIconSizes;
            var17 = var17.SMALL_32;
            var13['size'] = var17;
            var13 = var15.bind(var5)(var14, var13);
            var9['icon'] = var13;
            var15 = _closure1_slot13;
            var14 = _closure1_slot6;
            var13 = {};
            var17 = var16.label;
            var13['style'] = var17;
            var19 = _closure1_slot13;
            var17 = 21;
            var17 = var23[var17];
            var18 = var18.bind(var5)(var17);
            var17 = {};
            var21 = var21.name;
            var17['text'] = var21;
            var17 = var19.bind(var5)(var18, var17);
            var13['children'] = var17;
            var13 = var15.bind(var5)(var14, var13);
            var9['label'] = var13;
            var15 = _closure1_slot13;
            var14 = _closure1_slot6;
            var13 = {};
            var16 = var16.label;
            var13['style'] = var16;
            var18 = _closure1_slot13;
            var16 = 22;
            var16 = var23[var16];
            var16 = var20.bind(var5)(var16);
            var17 = var16.Text;
            var16 = {};
            var19 = 'heading-sm/normal';
            var16['variant'] = var19;
            var19 = 14;
            var21 = var23[var19];
            var21 = var20.bind(var5)(var21);
            var22 = var21.intl;
            var21 = var22.format;
            var19 = var23[var19];
            var19 = var20.bind(var5)(var19);
            var19 = var19.t;
            var20 = var19.WkK72t;
            var19 = {};
            var23 = 15;
            var19['count'] = var23;
            var19 = var21.bind(var22)(var20, var19);
            var16['children'] = var19;
            var16 = var18.bind(var5)(var17, var16);
            var13['children'] = var16;
            var13 = var15.bind(var5)(var14, var13);
            var9['subLabel'] = var13;
            var12 = _closure1_slot11;
            var9['onPress'] = var12;
            var9 = var11.bind(var5)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 467:
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function NameAndUploadBackdrop() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = _closure1_slot17;
            var5 = undefined;
            var7 = var1.bind(var5)();
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 23;
            var1 = var4[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.isAndroid;
            var1 = var1.bind(var3)();
            var4 = _closure1_slot13;
            var3 = _closure1_slot6;
            var2 = {};
            var8 = var7.backdrop;
            if(var1) { _fun0003_ip = 73; continue _fun0003 }
 61:
            var2['style'] = var8;
            var1 = var4.bind(var5)(var3, var2);
            _fun0003_ip = 101; continue _fun0003;
 73:
            var6 = new Array(2);
            var6[0] = var8;
            var7 = var7.backdropAndroid;
            var6[1] = var7;
            var2['style'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 101:
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function NameAndUploadScreen(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var10 = var1.selectedGuildId;
            var9 = var1.setSelectedGuildId;
            var24 = var1.name;
            var2 = var1.setName;
            var _closure2_slot0 = var2;
            var13 = var1.error;
            var19 = var1.asset;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 24;
            var1 = var3[var1];
            var4 = undefined;
            var1 = var2.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var11 = var1.top;
            var8 = var1.bottom;
            var1 = _closure1_slot17;
            var16 = var1.bind(var4)();
            var3 = _closure1_slot14;
            var2 = _closure1_slot6;
            var1 = {};
            var7 = var16.container;
            var5 = new Array(2);
            var5[0] = var7;
            var7 = {};
            var7['paddingTop'] = var11;
            var7['paddingBottom'] = var8;
            var5[1] = var7;
            var1['style'] = var5;
            var8 = _closure1_slot13;
            var7 = _closure1_slot19;
            var5 = {};
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(3);
            var5[0] = var7;
            var11 = _closure1_slot14;
            var8 = _closure1_slot6;
            var7 = {};
            var12 = var16.stage;
            var7['style'] = var12;
            var14 = null;
            var12 = var14 == var19;
            if(var12) { _fun0004_ip = 254; continue _fun0004 }
 186:
            var17 = _closure1_slot13;
            var15 = _closure1_slot1;
            var18 = _closure1_slot2;
            var12 = 25;
            var12 = var18[var12];
            var15 = var15.bind(var4)(var12);
            var12 = {};
            var18 = var16.asset;
            var12['style'] = var18;
            var18 = {};
            var19 = var19.base64;
            var18['uri'] = var19;
            var12['source'] = var18;
            var18 = 'contain';
            var12['resizeMode'] = var18;
            var14 = var17.bind(var4)(var15, var12);
 254:
            var12 = new Array(3);
            var12[0] = var14;
            var18 = _closure1_slot13;
            var15 = _closure1_slot6;
            var14 = {};
            var16 = var16.nameInput;
            var14['style'] = var16;
            var22 = _closure1_slot13;
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var19 = 26;
            var19 = var17[var19];
            var19 = var16.bind(var4)(var19);
            var20 = var19.TextInput;
            var19 = {};
            var21 = 14;
            var25 = var17[var21];
            var25 = var16.bind(var4)(var25);
            var27 = var25.intl;
            var26 = var27.string;
            var25 = var17[var21];
            var25 = var16.bind(var4)(var25);
            var25 = var25.t;
            var25 = var25.m0YV7O;
            var25 = var26.bind(var27)(var25);
            var19['accessibilityLabel'] = var25;
            var19['value'] = var24;
            var23 = function onChange(arg1) {
                var3 = _closure2_slot0;
                var4 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 27;
                var1 = var2[var1];
                var2 = undefined;
                var5 = var4.bind(var2)(var1);
                var4 = var5.sanitizeEmojiName;
                var1 = arg1;
                var1 = var4.bind(var5)(var1);
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var19['onChange'] = var23;
            var23 = var17[var21];
            var23 = var16.bind(var4)(var23);
            var25 = var23.intl;
            var24 = var25.string;
            var23 = var17[var21];
            var23 = var16.bind(var4)(var23);
            var23 = var23.t;
            var23 = var23.U2JFHR;
            var23 = var24.bind(var25)(var23);
            var19['placeholder'] = var23;
            var19 = var22.bind(var4)(var20, var19);
            var14['children'] = var19;
            var14 = var18.bind(var4)(var15, var14);
            var12[1] = var14;
            var15 = _closure1_slot13;
            var14 = 22;
            var14 = var17[var14];
            var14 = var16.bind(var4)(var14);
            var14 = var14.Text;
            if(var13) { _fun0004_ip = 550; continue _fun0004 }
 476:
            var13 = {'variant': 'text-sm/normal', 'color': 'text-muted'};
            var19 = _closure1_slot0;
            var16 = _closure1_slot2;
            var17 = var16[var21];
            var17 = var19.bind(var4)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var16 = var16[var21];
            var16 = var19.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16.uiHHIy;
            var16 = var17.bind(var18)(var16);
            var13['children'] = var16;
            _fun0004_ip = 623; continue _fun0004;
 550:
            var16 = {'variant': 'text-sm/normal', 'color': 'text-danger'};
            var20 = _closure1_slot0;
            var17 = _closure1_slot2;
            var18 = var17[var21];
            var18 = var20.bind(var4)(var18);
            var19 = var18.intl;
            var18 = var19.string;
            var17 = var17[var21];
            var17 = var20.bind(var4)(var17);
            var17 = var17.t;
            var17 = var17.CKsXk5;
            var17 = var18.bind(var19)(var17);
            var16['children'] = var17;
            var13 = var16;
 623:
            var13 = var15.bind(var4)(var14, var13);
            var12[2] = var13;
            var7['children'] = var12;
            var7 = var11.bind(var4)(var8, var7);
            var5[1] = var7;
            var8 = _closure1_slot13;
            var7 = _closure1_slot18;
            var6 = {};
            var6['selectedGuildId'] = var10;
            var6['setSelectedGuildId'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var8 = var7[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.Permissions;
    var _closure1_slot10 = var5;
    var5 = var4.NOOP_NULL;
    var _closure1_slot11 = var5;
    var4 = var4.AnalyticsPages;
    var _closure1_slot12 = var4;
    var4 = 8;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.jsx;
    var _closure1_slot13 = var5;
    var4 = var4.jsxs;
    var _closure1_slot14 = var4;
    var4 = {};
    var5 = 'NameAndUpload';
    var4['NAME_AND_UPLOAD'] = var5;
    var _closure1_slot15 = var4;
    var5 = 16;
    var8 = var7[var5];
    var10 = var6.bind(var1)(var8);
    var9 = var10.createStyles;
    var8 = function() {
        var1 = {};
        var2 = {};
        var5 = _closure1_slot1;
        var4 = _closure1_slot2;
        var3 = 17;
        var4 = var4[var3];
        var3 = undefined;
        var3 = var5.bind(var3)(var4);
        var3 = var3.spacing;
        var3 = var3.PX_16;
        var2['padding'] = var3;
        var1['footer'] = var2;
        var2 = {};
        var1['label'] = var2;
        return var1;
    };
    var8 = var9.bind(var10)(var8);
    var _closure1_slot16 = var8;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.createStyles;
    var5 = function() {
        var1 = {};
        var2 = {'width': 144, 'height': 144};
        var4 = {};
        var3 = '3deg';
        var4['rotate'] = var3;
        var3 = new Array(1);
        var3[0] = var4;
        var2['transform'] = var3;
        var1['asset'] = var2;
        var2 = {'position': 'absolute', 'aspectRatio': 1, 'top': '-50%', 'left': 0, 'right': 0, 'backgroundColor': '#3FA086'};
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var3 = 17;
        var7 = var6[var3];
        var4 = undefined;
        var7 = var5.bind(var4)(var7);
        var7 = var7.radii;
        var7 = var7.round;
        var2['borderRadius'] = var7;
        var1['backdrop'] = var2;
        var2 = {};
        var1['backdropAndroid'] = var2;
        var7 = '100%';
        var2 = {'position': 'relative', 'height': '100%', 'flexDirection': 'column'};
        var1['container'] = var2;
        var2 = {};
        var2['width'] = var7;
        var1['nameInput'] = var2;
        var2 = {'flex': 1, 'alignItems': 'center', 'justifyContent': 'center', 'flexDirection': 'column'};
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_32;
        var2['gap'] = var7;
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.spacing;
        var3 = var3.PX_16;
        var2['padding'] = var3;
        var1['stage'] = var2;
        return var1;
    };
    var5 = var8.bind(var9)(var5);
    var _closure1_slot17 = var5;
    var5 = 28;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/emoji_studio/native/EmojiStudio.tsx';
    var5 = var6.bind(var7)(var5);
    var3['EmojiStudioScreens'] = var4;
    var2 = function useEmojiStudioScreens(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var11 = arg1;
            var _closure2_slot0 = var11;
            var14 = _closure1_slot5;
            var4 = var14.useState;
            var3 = false;
            var3 = var4.bind(var14)(var3);
            var5 = _closure1_slot4;
            var4 = undefined;
            var10 = 2;
            var3 = var5.bind(var4)(var3, var10);
            var7 = 0;
            var9 = var3[var7];
            var _closure2_slot1 = var9;
            var12 = 1;
            var3 = var3[var12];
            var _closure2_slot2 = var3;
            var6 = var14.useState;
            var3 = '';
            var3 = var6.bind(var14)(var3);
            var3 = var5.bind(var4)(var3, var10);
            var8 = var3[var7];
            var _closure2_slot3 = var8;
            var3 = var3[var12];
            var _closure2_slot4 = var3;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 9;
            var3 = var6[var3];
            var13 = var5.bind(var4)(var3);
            var6 = var13.useStateFromStores;
            var3 = _closure1_slot7;
            var5 = new Array(3);
            var5[0] = var3;
            var3 = _closure1_slot9;
            var5[1] = var3;
            var3 = _closure1_slot8;
            var5[2] = var3;
            var3 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var3 = _closure1_slot9;
                    var2 = var3.getGuildId;
                    var4 = var2.bind(var3)();
                    var3 = _closure1_slot7;
                    var2 = var3.getGuild;
                    var2 = var2.bind(var3)(var4);
                    var4 = _closure1_slot8;
                    var3 = var4.can;
                    var1 = _closure1_slot10;
                    var1 = var1.CREATE_GUILD_EXPRESSIONS;
                    var3 = var3.bind(var4)(var1, var2);
                    var4 = null;
                    var1 = null;
                    if(!var3) { _fun0006_ip = 78; continue _fun0006 }
 64:
                    var3 = var4 != var2;
                    var1 = null;
                    if(!var3) { _fun0006_ip = 78; continue _fun0006 }
 73:
                    var1 = var2.id;
 78:
                    return var1;
                }
            };
            var5 = var6.bind(var13)(var5, var3);
            var _closure2_slot5 = var5;
            var13 = var14.useState;
            var15 = var11.guildId;
            var3 = null;
            var6 = var5;
            if(!(var3 != var15)) { _fun0005_ip = 190; continue _fun0005 }
 187:
            var6 = var15;
 190:
            var13 = var13.bind(var14)(var6);
            var6 = _closure1_slot4;
            var6 = var6.bind(var4)(var13, var10);
            var7 = var6[var7];
            var _closure2_slot6 = var7;
            var6 = var6[var12];
            var _closure2_slot7 = var6;
            var13 = _closure1_slot5;
            var12 = var13.useCallback;
            var14 = var11.guildId;
            var6 = new Array(2);
            var6[0] = var14;
            var6[1] = var5;
            var5 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var3 = _closure2_slot2;
                    var1 = undefined;
                    var2 = false;
                    var2 = var3.bind(var1)(var2);
                    var3 = _closure2_slot4;
                    var2 = '';
                    var2 = var3.bind(var1)(var2);
                    var3 = _closure2_slot7;
                    var2 = _closure2_slot0;
                    var2 = var2.guildId;
                    var5 = null;
                    if(!(var5 == var2)) { _fun0007_ip = 52; continue _fun0007 }
 48:
                    var2 = _closure2_slot5;
 52:
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var5 = var12.bind(var13)(var5, var6);
            var _closure2_slot8 = var5;
            var12 = var13.useCallback;
            var6 = new Array(1);
            var6[0] = var5;
            var5 = function() {
                var2 = _closure2_slot8;
                var1 = undefined;
                var2 = var2.bind(var1)();
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 10;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.pop;
                var2 = var2.bind(var3)();
                return var1;
            };
            var5 = var12.bind(var13)(var5, var6);
            var _closure2_slot9 = var5;
            var3 = var3 !== var8;
            if(!var3) { _fun0005_ip = 310; continue _fun0005 }
 301:
            var6 = var8.length;
            var3 = var6 >= var10;
 310:
            if(!var3) { _fun0005_ip = 316; continue _fun0005 }
 313:
            var3 = !var9;
 316:
            var10 = !var3;
            var _closure2_slot10 = var10;
            var13 = _closure1_slot5;
            var12 = var13.useCallback;
            var6 = _closure1_slot3;
            var3 = function* () {
                var1 = function* anon_0_() {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0008_ip = 282; continue _fun0008 }
 10:
                        var5 = _closure2_slot2;
                        var2 = undefined;
                        var4 = false;
                        var4 = var5.bind(var2)(var4);
                        var4 = _closure2_slot0;
                        var4 = var4.asset;
                        var5 = null;
                        if(!(var5 != var4)) { _fun0008_ip = 62; continue _fun0008 }
 42:
                        var4 = _closure2_slot0;
                        var4 = var4.asset;
                        var4 = var4.base64;
                        if(!(var5 == var4)) { _fun0008_ip = 78; continue _fun0008 }
 62:
                        var6 = _closure2_slot2;
                        var4 = true;
                        var4 = var6.bind(var2)(var4);
                        _fun0008_ip = 279; continue _fun0008;
 78:
                        var4 = _closure2_slot6;
                        if(!(var5 == var4)) { _fun0008_ip = 102; continue _fun0008 }
 86:
                        var6 = _closure2_slot2;
                        var4 = true;
                        var4 = var6.bind(var2)(var4);
                        _fun0008_ip = 279; continue _fun0008;
 102:
                        var4 = _closure2_slot3;
                        if(!(var5 != var4)) { _fun0008_ip = 268; continue _fun0008 }
 113:
                        var4 = _closure2_slot3;
                        var5 = var4.length;
                        var4 = 2;
                        if(!(!(var5 < var4))) { _fun0008_ip = 268; continue _fun0008 }
 132: // try_start_0
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var4 = 11;
                        var4 = var6[var4];
                        var6 = var5.bind(var2)(var4);
                        var5 = var6.uploadEmoji;
                        var4 = {};
                        var7 = _closure2_slot0;
                        var7 = var7.asset;
                        var7 = var7.base64;
                        var4['image'] = var7;
                        var7 = _closure2_slot6;
                        var4['guildId'] = var7;
                        var7 = _closure2_slot3;
                        var4['name'] = var7;
                        var7 = {};
                        var8 = _closure1_slot12;
                        var8 = var8.EMOJI_STUDIO;
                        var7['page'] = var8;
                        var4['analyticsLocation'] = var7;
                        var4 = var5.bind(var6)(var4);
                        SaveGenerator(address=231);
 229:
                        return var4;
 231:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                        if(var5) { _fun0008_ip = 247; continue _fun0008 }
 237: // try_end0
                        var5 = _closure2_slot9;
                        var5 = var5.bind(var2)();
                        _fun0008_ip = 279; continue _fun0008;
 247:
                        return var4;
 250: // catch_target0
                        CatchBlockStart(arg_register=3);
                        var5 = _closure2_slot2;
                        var4 = true;
                        var4 = var5.bind(var2)(var4);
                        var4 = undefined;
                        return var4;
 268:
                        var4 = _closure2_slot2;
                        var3 = true;
                        var3 = var4.bind(var2)(var3);
 279:
                        return var2;
 282:
                        return var1;
                    }
                };
                return var1;
            };
            var6 = var6.bind(var4)(var3);
            var3 = new Array(4);
            var3[0] = var11;
            var3[1] = var8;
            var3[2] = var7;
            var3[3] = var5;
            var6 = var12.bind(var13)(var6, var3);
            var _closure2_slot11 = var6;
            var3 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = 12;
            var2 = var12[var2];
            var4 = var3.bind(var4)(var2);
            var3 = var4.useNavigatorScreens;
            var2 = new Array(7);
            var2[0] = var11;
            var2[1] = var10;
            var2[2] = var9;
            var2[3] = var8;
            var2[4] = var7;
            var2[5] = var6;
            var2[6] = var5;
            var1 = function() {
                var1 = {};
                var2 = _closure1_slot15;
                var3 = var2.NAME_AND_UPLOAD;
                var2 = {};
                var5 = function headerLeft() {
                    var4 = _closure1_slot13;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var1 = 13;
                    var1 = var9[var1];
                    var3 = undefined;
                    var1 = var8.bind(var3)(var1);
                    var2 = var1.HeaderActionButton;
                    var1 = {};
                    var5 = 14;
                    var6 = var9[var5];
                    var6 = var8.bind(var3)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var5 = var9[var5];
                    var5 = var8.bind(var3)(var5);
                    var5 = var5.t;
                    var5 = var5.13/7kZ;
                    var5 = var6.bind(var7)(var5);
                    var1['text'] = var5;
                    var5 = _closure2_slot9;
                    var1['onPress'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                };
                var2['headerLeft'] = var5;
                var5 = function headerRight() {
                    var4 = _closure1_slot13;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var1 = 13;
                    var1 = var9[var1];
                    var3 = undefined;
                    var1 = var8.bind(var3)(var1);
                    var2 = var1.HeaderActionButton;
                    var1 = {};
                    var5 = 14;
                    var6 = var9[var5];
                    var6 = var8.bind(var3)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var5 = var9[var5];
                    var5 = var8.bind(var3)(var5);
                    var5 = var5.t;
                    var5 = var5.3UB9aW;
                    var5 = var6.bind(var7)(var5);
                    var1['text'] = var5;
                    var6 = _closure2_slot11;
                    var1['onPress'] = var6;
                    var5 = _closure2_slot10;
                    var1['disabled'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                };
                var2['headerRight'] = var5;
                var5 = function headerTitle() {
                    var4 = _closure1_slot13;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var1 = 15;
                    var1 = var9[var1];
                    var3 = undefined;
                    var1 = var8.bind(var3)(var1);
                    var2 = var1.NavigatorHeader;
                    var1 = {};
                    var5 = 14;
                    var6 = var9[var5];
                    var6 = var8.bind(var3)(var6);
                    var10 = var6.intl;
                    var7 = var10.string;
                    var6 = var9[var5];
                    var6 = var8.bind(var3)(var6);
                    var6 = var6.t;
                    var6 = var6.iMJO39;
                    var6 = var7.bind(var10)(var6);
                    var1['title'] = var6;
                    var6 = var9[var5];
                    var6 = var8.bind(var3)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var5 = var9[var5];
                    var5 = var8.bind(var3)(var5);
                    var5 = var5.t;
                    var5 = var5./wK9CA;
                    var5 = var6.bind(var7)(var5);
                    var1['subtitle'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                };
                var2['headerTitle'] = var5;
                var4 = function render() {
                    var4 = _closure1_slot13;
                    var3 = _closure1_slot20;
                    var2 = {};
                    var5 = _closure2_slot3;
                    var2['name'] = var5;
                    var5 = _closure2_slot4;
                    var2['setName'] = var5;
                    var5 = _closure2_slot1;
                    var2['error'] = var5;
                    var5 = _closure2_slot6;
                    var2['selectedGuildId'] = var5;
                    var5 = _closure2_slot7;
                    var2['setSelectedGuildId'] = var5;
                    var6 = _closure2_slot0;
                    var7 = var2;
                    var1 = copyDataProperties(var7, var6);
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                };
                var2['render'] = var4;
                var1[var3] = var2;
                return var1;
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['useEmojiStudioScreens'] = var2;
    return var1;
})();