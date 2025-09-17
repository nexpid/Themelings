// app/modules/user_profile/native/UserProfileActivity.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var5 = require;
        var11 = metroImportDefault;
        var3 = exports;
        var6 = dependencyMap;
        var _closure1_slot0 = var5;
        var _closure1_slot1 = var11;
        var _closure1_slot2 = var6;
        var1 = function ActivityCardText(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var5 = arg1;
                var2 = var5.children;
                var3 = null;
                var4 = Object.create(var3);
                var1 = 0;
                var4['children'] = var1;
                var10 = {};
                var9 = var5;
                var8 = var4;
                var6 = copyDataProperties(var10, var9, var8);
                var4 = 'string';
                var1 = typeof var2;
                var7 = var2;
                if(!(var4 === var1)) { _fun0002_ip = 55; continue _fun0002 }
 45:
                var1 = var2.trim;
                var7 = var1.bind(var2)();
 55:
                var2 = var3 == var7;
                var1 = null;
                if(var2) { _fun0002_ip = 135; continue _fun0002 }
 64:
                var2 = '';
                var1 = null;
                if(!(var2 !== var7)) { _fun0002_ip = 135; continue _fun0002 }
 74:
                var5 = _closure1_slot21;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 17;
                var2 = var4[var2];
                var4 = undefined;
                var2 = var3.bind(var4)(var2);
                var3 = var2.Text;
                var2 = {};
                var10 = var2;
                var9 = var6;
                var6 = copyDataProperties(var10, var9);
                var6 = 'children';
                var2[var6] = var7;
                var1 = var5.bind(var4)(var3, var2);
 135:
                return var1;
            }
        };
        var _closure1_slot25 = var1;
        var1 = function MaybeLink(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var1 = arg1;
                var4 = var1.href;
                var _closure2_slot0 = var4;
                var2 = var1.children;
                var3 = null;
                var1 = var2;
                if(!(var3 != var4)) { _fun0003_ip = 73; continue _fun0003 }
 29:
                var5 = _closure1_slot21;
                var4 = _closure1_slot4;
                var3 = {};
                var7 = 'link';
                var3['accessibilityRole'] = var7;
                var6 = function onPress() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 18;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.handleClick;
                    var1 = {};
                    var4 = _closure2_slot0;
                    var1['href'] = var4;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3['onPress'] = var6;
                var3['children'] = var2;
                var2 = undefined;
                var1 = var5.bind(var2)(var4, var3);
 73:
                return var1;
            }
        };
        var _closure1_slot26 = var1;
        var1 = function ActivityCardBody(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var1 = arg1;
                var10 = var1.user;
                var _closure2_slot0 = var10;
                var14 = var1.activity;
                var _closure2_slot1 = var14;
                var6 = var1.application;
                var1 = var1.onAction;
                var _closure2_slot2 = var1;
                var1 = _closure1_slot24;
                var4 = undefined;
                var15 = var1.bind(var4)();
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 19;
                var1 = var3[var1];
                var5 = var2.bind(var4)(var1);
                var1 = var5.useImageForActivity;
                var1 = var1.bind(var5)(var14, var6);
                var22 = var1.largeImage;
                var28 = var1.smallImage;
                var1 = 20;
                var1 = var3[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.useThemeContext;
                var1 = var1.bind(var2)();
                var20 = var1.theme;
                var2 = var14.type;
                var1 = _closure1_slot16;
                var1 = var1.HANG_STATUS;
                var9 = var2 === var1;
                var _closure2_slot3 = var9;
                var3 = _closure1_slot22;
                var2 = _closure1_slot6;
                var1 = {};
                var5 = var15.body;
                var1['style'] = var5;
                var5 = var10.bot;
                var6 = !var5;
                if(!var6) { _fun0004_ip = 1113; continue _fun0004 }
 181:
                var26 = null;
                if(!(var26 != var22)) { _fun0004_ip = 218; continue _fun0004 }
 187:
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var5 = 21;
                var5 = var8[var5];
                var5 = var7.bind(var4)(var5);
                var5 = var5.bind(var4)(var14);
                if(var5) { _fun0004_ip = 869; continue _fun0004 }
 218:
                if(!(var26 == var22)) { _fun0004_ip = 462; continue _fun0004 }
 225:
                var13 = _closure1_slot21;
                if(var9) { _fun0004_ip = 406; continue _fun0004 }
 235:
                var7 = _closure1_slot6;
                var5 = {};
                var16 = var15.imageContainer;
                var8 = new Array(2);
                var8[0] = var16;
                var16 = var15.imageAspectRatio;
                var8[1] = var16;
                var5['style'] = var8;
                var17 = _closure1_slot21;
                var19 = _closure1_slot0;
                var21 = _closure1_slot2;
                var8 = 28;
                var8 = var21[var8];
                var8 = var19.bind(var4)(var8);
                var16 = var8.UnknownGameIcon;
                var8 = {};
                var18 = 'custom';
                var8['size'] = var18;
                var18 = var15.largeImage;
                var8['style'] = var18;
                var18 = 29;
                var18 = var21[var18];
                var19 = var19.bind(var4)(var18);
                var18 = var19.isThemeDark;
                var18 = var18.bind(var19)(var20);
                var20 = _closure1_slot1;
                var21 = _closure1_slot2;
                var19 = 15;
                var19 = var21[var19];
                var19 = var20.bind(var4)(var19);
                var19 = var19.colors;
                if(var18) { _fun0004_ip = 378; continue _fun0004 }
 370:
                var18 = var19.BLACK;
                _fun0004_ip = 384; continue _fun0004;
 378:
                var18 = var19.WHITE;
 384:
                var8['color'] = var18;
                var8 = var17.bind(var4)(var16, var8);
                var5['children'] = var8;
                var5 = var13.bind(var4)(var7, var5);
                _fun0004_ip = 457; continue _fun0004;
 406:
                var8 = _closure1_slot1;
                var16 = _closure1_slot2;
                var7 = 27;
                var7 = var16[var7];
                var8 = var8.bind(var4)(var7);
                var7 = {};
                var16 = 24;
                var7['size'] = var16;
                var16 = var15.smallImage;
                var7['emojiStyle'] = var16;
                var7['hangStatusActivity'] = var14;
                var5 = var13.bind(var4)(var8, var7);
 457:
                _fun0004_ip = 864; continue _fun0004;
 462:
                var13 = _closure1_slot22;
                var8 = _closure1_slot6;
                var7 = {};
                var17 = var15.imageContainer;
                var16 = new Array(2);
                var16[0] = var17;
                var18 = _closure1_slot1;
                var19 = _closure1_slot2;
                var17 = 26;
                var17 = var19[var17];
                var17 = var18.bind(var4)(var17);
                var17 = var17.bind(var4)(var14);
                if(var17) { _fun0004_ip = 522; continue _fun0004 }
 514:
                var17 = var15.imageAspectRatio;
                _fun0004_ip = 528; continue _fun0004;
 522:
                var17 = var15.crunchyrollImageAspectRatio;
 528:
                var16[1] = var17;
                var7['style'] = var16;
                var18 = _closure1_slot21;
                var17 = _closure1_slot26;
                var16 = {};
                var20 = var14.assets;
                var21 = var26 == var20;
                var19 = undefined;
                if(var21) { _fun0004_ip = 567; continue _fun0004 }
 561:
                var19 = var20.large_url;
 567:
                var16['href'] = var19;
                var21 = _closure1_slot21;
                var20 = _closure1_slot1;
                var23 = _closure1_slot2;
                var25 = 24;
                var19 = var23[var25];
                var20 = var20.bind(var4)(var19);
                var19 = {};
                var24 = _closure1_slot0;
                var31 = 25;
                var23 = var23[var31];
                var27 = var24.bind(var4)(var23);
                var24 = var27.makeSource;
                var23 = var22.src;
                var23 = var24.bind(var27)(var23);
                var19['source'] = var23;
                var23 = var22.alt;
                var19['alt'] = var23;
                var23 = var15.largeImage;
                var19['style'] = var23;
                var19 = var21.bind(var4)(var20, var19);
                var16['children'] = var19;
                var17 = var18.bind(var4)(var17, var16);
                var16 = new Array(2);
                var16[0] = var17;
                var17 = var26 != var28;
                if(!var17) { _fun0004_ip = 850; continue _fun0004 }
 690:
                var20 = _closure1_slot21;
                var19 = _closure1_slot6;
                var18 = {};
                var21 = var15.smallImageBackground;
                var18['style'] = var21;
                var24 = _closure1_slot21;
                var23 = _closure1_slot26;
                var21 = {};
                var27 = var14.assets;
                var29 = var26 == var27;
                var26 = undefined;
                if(var29) { _fun0004_ip = 741; continue _fun0004 }
 735:
                var26 = var27.small_url;
 741:
                var21['href'] = var26;
                var27 = _closure1_slot21;
                var26 = _closure1_slot1;
                var29 = _closure1_slot2;
                var25 = var29[var25];
                var26 = var26.bind(var4)(var25);
                var25 = {};
                var30 = _closure1_slot0;
                var29 = var29[var31];
                var31 = var30.bind(var4)(var29);
                var30 = var31.makeSource;
                var29 = var28.src;
                var29 = var30.bind(var31)(var29);
                var25['source'] = var29;
                var28 = var28.alt;
                var25['alt'] = var28;
                var28 = var15.smallImage;
                var25['style'] = var28;
                var25 = var27.bind(var4)(var26, var25);
                var21['children'] = var25;
                var21 = var24.bind(var4)(var23, var21);
                var18['children'] = var21;
                var17 = var20.bind(var4)(var19, var18);
 850:
                var16[1] = var17;
                var7['children'] = var16;
                var5 = var13.bind(var4)(var8, var7);
 864:
                _fun0004_ip = 1110; continue _fun0004;
 869:
                var13 = _closure1_slot21;
                var8 = _closure1_slot5;
                var7 = {};
                var16 = 'button';
                var7['accessibilityRole'] = var16;
                var16 = var22.alt;
                var7['accessibilityLabel'] = var16;
                var24 = _closure1_slot0;
                var25 = _closure1_slot2;
                var16 = 22;
                var17 = var25[var16];
                var17 = var24.bind(var4)(var17);
                var18 = var17.intl;
                var17 = var18.string;
                var16 = var25[var16];
                var16 = var24.bind(var4)(var16);
                var16 = var16.t;
                var16 = var16.sjjOk5;
                var16 = var17.bind(var18)(var16);
                var7['accessibilityHint'] = var16;
                var16 = function onPress() {
                    var4 = _closure2_slot2;
                    var3 = {};
                    var1 = 'OPEN_SPOTIFY_ALBUM';
                    var3['action'] = var1;
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 23;
                    var3 = var5[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.openAlbum;
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                var7['onPress'] = var16;
                var18 = _closure1_slot21;
                var17 = _closure1_slot6;
                var16 = {};
                var20 = var15.imageContainer;
                var19 = new Array(2);
                var19[0] = var20;
                var20 = var15.imageAspectRatio;
                var19[1] = var20;
                var16['style'] = var19;
                var21 = _closure1_slot21;
                var20 = _closure1_slot1;
                var19 = 24;
                var19 = var25[var19];
                var20 = var20.bind(var4)(var19);
                var19 = {};
                var23 = 25;
                var23 = var25[var23];
                var25 = var24.bind(var4)(var23);
                var24 = var25.makeSource;
                var23 = var22.src;
                var23 = var24.bind(var25)(var23);
                var19['source'] = var23;
                var22 = var22.alt;
                var19['alt'] = var22;
                var22 = var15.largeImage;
                var19['style'] = var22;
                var19 = var21.bind(var4)(var20, var19);
                var16['children'] = var19;
                var16 = var18.bind(var4)(var17, var16);
                var7['children'] = var16;
                var5 = var13.bind(var4)(var8, var7);
 1110:
                var6 = var5;
 1113:
                var5 = new Array(2);
                var5[0] = var6;
                var8 = _closure1_slot22;
                var7 = _closure1_slot6;
                var6 = {};
                var13 = var15.content;
                var6['style'] = var13;
                var17 = _closure1_slot1;
                var13 = _closure1_slot2;
                var16 = 21;
                var13 = var13[var16];
                var13 = var17.bind(var4)(var13);
                var13 = var13.bind(var4)(var14);
                if(var13) { _fun0004_ip = 1436; continue _fun0004 }
 1171:
                if(!var9) { _fun0004_ip = 1323; continue _fun0004 }
 1177:
                var13 = _closure1_slot1;
                var17 = _closure1_slot2;
                var9 = 30;
                var9 = var17[var9];
                var9 = var13.bind(var4)(var9);
                var9 = var9.bind(var4)(var14);
                if(var9) { _fun0004_ip = 1323; continue _fun0004 }
 1205:
                var17 = _closure1_slot21;
                var13 = _closure1_slot26;
                var9 = {};
                var18 = var14.details_url;
                var9['href'] = var18;
                var20 = _closure1_slot21;
                var19 = _closure1_slot25;
                var18 = {};
                var21 = 'text-md/semibold';
                var18['variant'] = var21;
                var24 = _closure1_slot0;
                var25 = _closure1_slot2;
                var21 = 22;
                var22 = var25[var21];
                var22 = var24.bind(var4)(var22);
                var23 = var22.intl;
                var22 = var23.string;
                var21 = var25[var21];
                var21 = var24.bind(var4)(var21);
                var21 = var21.t;
                var21 = var21.74vS//;
                var21 = var22.bind(var23)(var21);
                var18['children'] = var21;
                var18 = var20.bind(var4)(var19, var18);
                var9['children'] = var18;
                var13 = var17.bind(var4)(var13, var9);
                _fun0004_ip = 1434; continue _fun0004;
 1323:
                var18 = _closure1_slot21;
                var17 = _closure1_slot26;
                var9 = {};
                var19 = var14.details_url;
                var9['href'] = var19;
                var21 = _closure1_slot21;
                var20 = _closure1_slot25;
                var19 = {};
                var22 = 'text-md/semibold';
                var19['variant'] = var22;
                var23 = _closure1_slot1;
                var24 = _closure1_slot2;
                var22 = 30;
                var22 = var24[var22];
                var22 = var23.bind(var4)(var22);
                var22 = var22.bind(var4)(var14);
                if(var22) { _fun0004_ip = 1409; continue _fun0004 }
 1390:
                var22 = var14.details;
                var23 = null;
                if(!(var23 == var22)) { _fun0004_ip = 1407; continue _fun0004 }
 1402:
                var22 = var14.name;
 1407:
                _fun0004_ip = 1414; continue _fun0004;
 1409:
                var22 = var14.name;
 1414:
                var19['children'] = var22;
                var19 = var21.bind(var4)(var20, var19);
                var9['children'] = var19;
                var13 = var18.bind(var4)(var17, var9);
 1434:
                _fun0004_ip = 1528; continue _fun0004;
 1436:
                var18 = _closure1_slot21;
                var17 = _closure1_slot25;
                var9 = {};
                var19 = 'text-md/semibold';
                var9['variant'] = var19;
                var21 = _closure1_slot21;
                var20 = _closure1_slot0;
                var22 = _closure1_slot2;
                var19 = 23;
                var19 = var22[var19];
                var19 = var20.bind(var4)(var19);
                var20 = var19.SpotifyTrack;
                var19 = {};
                var22 = var14.details;
                var19['text'] = var22;
                var19['activity'] = var14;
                var22 = function onPress() {
                    var3 = _closure2_slot2;
                    var2 = {};
                    var1 = 'OPEN_SPOTIFY_TRACK';
                    var2['action'] = var1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var19['onPress'] = var22;
                var19 = var21.bind(var4)(var20, var19);
                var9['children'] = var19;
                var13 = var18.bind(var4)(var17, var9);
 1528:
                var9 = new Array(4);
                var9[0] = var13;
                var12 = function() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 21;
                        var1 = var3[var1];
                        var5 = undefined;
                        var2 = var2.bind(var5)(var1);
                        var1 = _closure2_slot1;
                        var2 = var2.bind(var5)(var1);
                        var1 = _closure2_slot1;
                        if(var2) { _fun0005_ip = 260; continue _fun0005 }
 47:
                        var3 = var1.details;
                        var2 = _closure2_slot3;
                        if(!var2) { _fun0005_ip = 129; continue _fun0005 }
 60:
                        var4 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var2 = 30;
                        var2 = var7[var2];
                        var4 = var4.bind(var5)(var2);
                        var2 = _closure2_slot1;
                        var2 = var4.bind(var5)(var2);
                        if(var2) { _fun0005_ip = 129; continue _fun0005 }
 92:
                        var4 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var2 = 31;
                        var2 = var7[var2];
                        var7 = var4.bind(var5)(var2);
                        var4 = var7.getHangStatusText;
                        var2 = _closure2_slot1;
                        var11 = var4.bind(var7)(var2);
                        _fun0005_ip = 191; continue _fun0005;
 129:
                        var4 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var2 = 30;
                        var2 = var7[var2];
                        var4 = var4.bind(var5)(var2);
                        var2 = _closure2_slot1;
                        var2 = var4.bind(var5)(var2);
                        if(var2) { _fun0005_ip = 176; continue _fun0005 }
 161:
                        var4 = _closure2_slot1;
                        var7 = var4.state;
                        var4 = null;
                        var2 = var4 == var7;
 176:
                        var11 = var3;
                        if(var2) { _fun0005_ip = 191; continue _fun0005 }
 182:
                        var2 = _closure2_slot1;
                        var11 = var2.state;
 191:
                        var4 = _closure1_slot21;
                        var3 = _closure1_slot26;
                        var2 = {};
                        var7 = _closure2_slot1;
                        var7 = var7.state_url;
                        var2['href'] = var7;
                        var10 = _closure1_slot21;
                        var8 = _closure1_slot25;
                        var7 = {'variant': 'text-xs/medium', 'lineClamp': 1};
                        var7['children'] = var11;
                        var7 = var10.bind(var5)(var8, var7);
                        var2['children'] = var7;
                        var2 = var4.bind(var5)(var3, var2);
                        return var2;
 260:
                        var2 = var1.state;
                        var3 = null;
                        var1 = var3 == var2;
                        var10 = undefined;
                        if(var1) { _fun0005_ip = 286; continue _fun0005 }
 276:
                        var1 = var2.trim;
                        var10 = var1.bind(var2)();
 286:
                        var2 = var3 == var10;
                        var1 = null;
                        if(var2) { _fun0005_ip = 415; continue _fun0005 }
 295:
                        var2 = '';
                        var1 = null;
                        if(!(var2 !== var10)) { _fun0005_ip = 415; continue _fun0005 }
 305:
                        var4 = _closure1_slot21;
                        var3 = _closure1_slot25;
                        var2 = {'variant': 'text-xs/medium', 'lineClamp': 1};
                        var8 = _closure1_slot21;
                        var7 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var6 = 23;
                        var6 = var11[var6];
                        var6 = var7.bind(var5)(var6);
                        var7 = var6.SpotifyArtists;
                        var6 = {};
                        var6['artists'] = var10;
                        var10 = _closure2_slot1;
                        var6['activity'] = var10;
                        var9 = _closure2_slot0;
                        var9 = var9.id;
                        var6['userId'] = var9;
                        var9 = function onPress() {
                            var3 = _closure2_slot2;
                            var2 = {};
                            var1 = 'OPEN_SPOTIFY_ARTIST';
                            var2['action'] = var1;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var6['onPress'] = var9;
                        var6 = var8.bind(var5)(var7, var6);
                        var2['children'] = var6;
                        var1 = var4.bind(var5)(var3, var2);
 415:
                        return var1;
                    }
                };
                var12 = var12.bind(var4)();
                var9[1] = var12;
                var13 = _closure1_slot1;
                var12 = _closure1_slot2;
                var12 = var12[var16];
                var12 = var13.bind(var4)(var12);
                var13 = var12.bind(var4)(var14);
                var16 = null;
                var12 = null;
                if(var13) { _fun0004_ip = 2141; continue _fun0004 }
 1583:
                var17 = var14.type;
                var13 = _closure1_slot16;
                var13 = var13.WATCHING;
                var12 = null;
                if(!(var17 !== var13)) { _fun0004_ip = 2141; continue _fun0004 }
 1607:
                var17 = _closure1_slot1;
                var13 = _closure1_slot2;
                var18 = 30;
                var13 = var13[var18];
                var13 = var17.bind(var4)(var13);
                var13 = var13.bind(var4)(var14);
                if(!var13) { _fun0004_ip = 1681; continue _fun0004 }
 1635:
                var17 = _closure1_slot1;
                var19 = _closure1_slot2;
                var13 = 32;
                var13 = var19[var13];
                var13 = var17.bind(var4)(var13);
                var13 = var13.bind(var4)(var14);
                if(var13) { _fun0004_ip = 1681; continue _fun0004 }
 1663:
                var13 = var14.party;
                var13 = var16 != var13;
                var12 = null;
                if(var13) { _fun0004_ip = 2141; continue _fun0004 }
 1681:
                var17 = _closure1_slot1;
                var13 = _closure1_slot2;
                var13 = var13[var18];
                var13 = var17.bind(var4)(var13);
                var13 = var13.bind(var4)(var14);
                if(var13) { _fun0004_ip = 1810; continue _fun0004 }
 1706:
                var18 = _closure1_slot21;
                var17 = _closure1_slot26;
                var13 = {};
                var20 = var14.assets;
                var21 = var16 == var20;
                var19 = undefined;
                if(var21) { _fun0004_ip = 1737; continue _fun0004 }
 1731:
                var19 = var20.large_url;
 1737:
                var13['href'] = var19;
                var21 = _closure1_slot21;
                var20 = _closure1_slot25;
                var19 = {'variant': 'text-xs/medium', 'lineClamp': 1};
                var23 = var14.assets;
                var24 = var16 == var23;
                var22 = undefined;
                if(var24) { _fun0004_ip = 1785; continue _fun0004 }
 1779:
                var22 = var23.large_text;
 1785:
                var19['children'] = var22;
                var19 = var21.bind(var4)(var20, var19);
                var13['children'] = var19;
                var12 = var18.bind(var4)(var17, var13);
                _fun0004_ip = 2141; continue _fun0004;
 1810:
                var17 = var14.party;
                var18 = var16 == var17;
                var13 = undefined;
                if(var18) { _fun0004_ip = 1830; continue _fun0004 }
 1825:
                var13 = var17.size;
 1830:
                var13 = var16 != var13;
                if(!var13) { _fun0004_ip = 1860; continue _fun0004 }
 1837:
                var16 = var14.party;
                var16 = var16.size;
                var17 = var16.length;
                var16 = 2;
                var13 = var17 >= var16;
 1860:
                var18 = '';
                if(!var13) { _fun0004_ip = 2078; continue _fun0004 }
 1870:
                var13 = var14.party;
                var13 = var13.size;
                var21 = 1;
                var13 = var13[var21];
                var22 = 0;
                if(!(var22 !== var13)) { _fun0004_ip = 1995; continue _fun0004 }
 1894:
                var16 = _closure1_slot0;
                var20 = _closure1_slot2;
                var13 = 22;
                var17 = var20[var13];
                var17 = var16.bind(var4)(var17);
                var19 = var17.intl;
                var17 = var19.formatToPlainString;
                var13 = var20[var13];
                var13 = var16.bind(var4)(var13);
                var13 = var13.t;
                var16 = var13.u//9Bw;
                var13 = {};
                var20 = var14.party;
                var20 = var20.size;
                var20 = var20[var22];
                var13['count'] = var20;
                var20 = var14.party;
                var20 = var20.size;
                var20 = var20[var21];
                var13['max'] = var20;
                var13 = var17.bind(var19)(var16, var13);
                _fun0004_ip = 2075; continue _fun0004;
 1995:
                var17 = _closure1_slot0;
                var21 = _closure1_slot2;
                var16 = 22;
                var19 = var21[var16];
                var19 = var17.bind(var4)(var19);
                var20 = var19.intl;
                var19 = var20.formatToPlainString;
                var16 = var21[var16];
                var16 = var17.bind(var4)(var16);
                var16 = var16.t;
                var17 = var16.IM4J4e;
                var16 = {};
                var21 = var14.party;
                var21 = var21.size;
                var21 = var21[var22];
                var16['count'] = var21;
                var13 = var19.bind(var20)(var17, var16);
 2075:
                var18 = var13;
 2078:
                var17 = _closure1_slot21;
                var16 = _closure1_slot25;
                var13 = {'variant': 'text-xs/medium', 'lineClamp': 1};
                var19 = var14.state;
                var20 = new Array(2);
                var20[0] = var19;
                var20[1] = var18;
                var19 = var20.join;
                var18 = ' ';
                var18 = var19.bind(var20)(var18);
                var13['children'] = var18;
                var12 = var17.bind(var4)(var16, var13);
 2141:
                var9[2] = var12;
                var10 = var10.bot;
                var10 = !var10;
                if(!var10) { _fun0004_ip = 2204; continue _fun0004 }
 2157:
                var13 = _closure1_slot21;
                var12 = _closure1_slot1;
                var16 = _closure1_slot2;
                var11 = 33;
                var11 = var16[var11];
                var12 = var12.bind(var4)(var11);
                var11 = {};
                var15 = var15.badges;
                var11['style'] = var15;
                var11['activity'] = var14;
                var10 = var13.bind(var4)(var12, var11);
 2204:
                var9[3] = var10;
                var6['children'] = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var _closure1_slot27 = var1;
        var1 = function ActivityCard(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var1 = arg1;
                var20 = var1.user;
                var _closure2_slot0 = var20;
                var19 = var1.currentUser;
                var17 = var1.activity;
                var _closure2_slot1 = var17;
                var23 = var1.voiceChannel;
                var _closure2_slot2 = var23;
                var10 = var1.style;
                var5 = undefined;
                var _closure2_slot5 = var5;
                var1 = _closure1_slot24;
                var24 = var1.bind(var5)();
                var3 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 34;
                var1 = var7[var1];
                var1 = var3.bind(var5)(var1);
                var25 = var1.bind(var5)(var17);
                var2 = _closure1_slot0;
                var4 = 35;
                var1 = var7[var4];
                var8 = var2.bind(var5)(var1);
                var6 = var8.useStateFromStores;
                var1 = _closure1_slot14;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                        var3 = _closure1_slot14;
                        var2 = var3.isInChannel;
                        var5 = _closure2_slot2;
                        var1 = null;
                        var5 = var1 == var5;
                        var1 = undefined;
                        if(var5) { _fun0007_ip = 40; continue _fun0007 }
 31:
                        var4 = _closure2_slot2;
                        var1 = var4.id;
 40:
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    }
                };
                var22 = var6.bind(var8)(var2, var1);
                var _closure2_slot3 = var22;
                var2 = var17.type;
                var1 = _closure1_slot16;
                var1 = var1.HANG_STATUS;
                var11 = var2 === var1;
                var _closure2_slot4 = var11;
                var2 = 36;
                var1 = var7[var2];
                var6 = var3.bind(var5)(var1);
                var1 = 37;
                var1 = var7[var1];
                var1 = var3.bind(var5)(var1);
                var1 = var1.USER_PROFILE_LIVE_ACTIVITY_CARD;
                var1 = var6.bind(var5)(var1);
                var6 = var1.analyticsLocations;
                var1 = 38;
                var1 = var7[var1];
                var3 = var3.bind(var5)(var1);
                var1 = {};
                var7 = 'live';
                var1['display'] = var7;
                var13 = null;
                var8 = var13 == var23;
                var7 = undefined;
                if(var8) { _fun0006_ip = 239; continue _fun0006 }
 234:
                var7 = var23.id;
 239:
                var1['voiceChannelId'] = var7;
                var1['user'] = var20;
                var1['activity'] = var17;
                var1['analyticsLocations'] = var6;
                var14 = var3.bind(var5)(var1);
                _closure2_slot5 = var14;
                var7 = _closure1_slot1;
                var1 = _closure1_slot2;
                var3 = 39;
                var3 = var1[var3];
                var7 = var7.bind(var5)(var3);
                var3 = {};
                var8 = var20.id;
                var3['userId'] = var8;
                var3['onAction'] = var14;
                var3 = var7.bind(var5)(var3);
                var3 = _closure1_slot0;
                var7 = var1[var4];
                var12 = var3.bind(var5)(var7);
                var9 = var12.useStateFromStores;
                var7 = _closure1_slot9;
                var8 = new Array(3);
                var8[0] = var7;
                var7 = _closure1_slot14;
                var8[1] = var7;
                var7 = _closure1_slot8;
                var8[2] = var7;
                var7 = function() {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 32;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = _closure2_slot1;
                        var2 = var3.bind(var1)(var2);
                        if(var2) { _fun0008_ip = 89; continue _fun0008 }
 40:
                        var3 = _closure2_slot4;
                        var7 = null;
                        var2 = null;
                        if(!var3) { _fun0008_ip = 87; continue _fun0008 }
 51:
                        var6 = _closure1_slot9;
                        var4 = var6.getGuild;
                        var3 = _closure2_slot2;
                        var7 = var7 == var3;
                        var3 = undefined;
                        if(var7) { _fun0008_ip = 82; continue _fun0008 }
 73:
                        var7 = _closure2_slot2;
                        var3 = var7.guild_id;
 82:
                        var2 = var4.bind(var6)(var3);
 87:
                        return var2;
 89:
                        var7 = _closure1_slot14;
                        var6 = var7.getVoiceStateForSession;
                        var2 = _closure2_slot0;
                        var3 = var2.id;
                        var2 = _closure2_slot1;
                        var4 = null;
                        var9 = var4 == var2;
                        var2 = undefined;
                        if(var9) { _fun0008_ip = 133; continue _fun0008 }
 123:
                        var8 = _closure2_slot1;
                        var2 = var8.session_id;
 133:
                        var2 = var6.bind(var7)(var3, var2);
                        var3 = var4 == var2;
                        var7 = undefined;
                        if(var3) { _fun0008_ip = 153; continue _fun0008 }
 148:
                        var7 = var2.channelId;
 153:
                        var3 = _closure1_slot9;
                        var2 = var3.getGuild;
                        var6 = _closure1_slot8;
                        var5 = var6.getChannel;
                        var5 = var5.bind(var6)(var7);
                        var4 = var4 == var5;
                        var1 = undefined;
                        if(var4) { _fun0008_ip = 195; continue _fun0008 }
 185:
                        var4 = var5.getGuildId;
                        var1 = var4.bind(var5)();
 195:
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    }
                };
                var26 = var9.bind(var12)(var8, var7);
                var1 = var1[var4];
                var7 = var3.bind(var5)(var1);
                var4 = var7.useStateFromStores;
                var1 = _closure1_slot7;
                var3 = new Array(1);
                var3[0] = var1;
                var1 = function() {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                        var1 = _closure2_slot1;
                        var3 = var1.application_id;
                        var1 = null;
                        if(!(var1 == var3)) { _fun0009_ip = 66; continue _fun0009 }
 19:
                        var3 = _closure2_slot1;
                        var3 = var3.name;
                        var3 = var1 != var3;
                        var1 = null;
                        if(!var3) { _fun0009_ip = 64; continue _fun0009 }
 37:
                        var5 = _closure1_slot7;
                        var4 = var5.getApplicationByName;
                        var3 = _closure2_slot1;
                        var3 = var3.name;
                        var1 = var4.bind(var5)(var3);
 64:
                        _fun0009_ip = 94; continue _fun0009;
 66:
                        var4 = _closure1_slot7;
                        var3 = var4.getApplication;
                        var2 = _closure2_slot1;
                        var2 = var2.application_id;
                        var1 = var3.bind(var4)(var2);
 94:
                        return var1;
                    }
                };
                var18 = var4.bind(var7)(var3, var1);
                var4 = var17.type;
                var1 = _closure1_slot16;
                var3 = var1.CUSTOM_STATUS;
                var1 = null;
                if(!(var4 !== var3)) { _fun0006_ip = 1562; continue _fun0006 }
 430:
                var4 = var17.type;
                var3 = _closure1_slot16;
                var3 = var3.HANG_STATUS;
                if(!(var4 === var3)) { _fun0006_ip = 461; continue _fun0006 }
 449:
                var3 = var13 == var23;
                var1 = null;
                if(var3) { _fun0006_ip = 1562; continue _fun0006 }
 461:
                var4 = _closure1_slot21;
                var3 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = var9[var2];
                var2 = var3.bind(var5)(var2);
                var3 = var2.AnalyticsLocationProvider;
                var2 = {};
                var2['value'] = var6;
                var8 = _closure1_slot22;
                var7 = _closure1_slot1;
                var6 = 40;
                var6 = var9[var6];
                var7 = var7.bind(var5)(var6);
                var6 = {};
                var12 = var24.card;
                var9 = new Array(2);
                var9[0] = var12;
                var9[1] = var10;
                var6['style'] = var9;
                var9 = var25.text;
                var6['title'] = var9;
                var9 = var24.cardTitle;
                var6['titleStyle'] = var9;
                var9 = var25.platformIcon;
                var9 = var13 != var9;
                if(!var9) { _fun0006_ip = 708; continue _fun0006 }
 574:
                var16 = _closure1_slot21;
                var12 = _closure1_slot1;
                var30 = _closure1_slot2;
                var28 = 41;
                var10 = var30[var28];
                var12 = var12.bind(var5)(var10);
                var10 = {};
                var27 = var24.cardTitleIcon;
                var10['style'] = var27;
                var29 = _closure1_slot0;
                var27 = 25;
                var27 = var30[var27];
                var29 = var29.bind(var5)(var27);
                var27 = var29.makeSource;
                var30 = var25.platformIcon;
                var31 = var13 == var30;
                var25 = undefined;
                if(var31) { _fun0006_ip = 653; continue _fun0006 }
 647:
                var25 = var30.whitePNG;
 653:
                var25 = var27.bind(var29)(var25);
                var10['source'] = var25;
                var27 = _closure1_slot0;
                var25 = _closure1_slot2;
                var25 = var25[var28];
                var25 = var27.bind(var5)(var25);
                var25 = var25.IconSizes;
                var25 = var25.SMALL_14;
                var10['size'] = var25;
                var25 = true;
                var10['disableColor'] = var25;
                var9 = var16.bind(var5)(var12, var10);
 708:
                var6['titleIcon'] = var9;
                var12 = _closure1_slot21;
                var10 = _closure1_slot27;
                var9 = {};
                var9['user'] = var20;
                var9['activity'] = var17;
                var9['application'] = var18;
                var9['onAction'] = var14;
                var10 = var12.bind(var5)(var10, var9);
                var9 = new Array(4);
                var9[0] = var10;
                var12 = _closure1_slot1;
                var16 = _closure1_slot2;
                var10 = 42;
                var10 = var16[var10];
                var10 = var12.bind(var5)(var10);
                var12 = var10.bind(var5)(var17);
                var10 = null;
                if(!var12) { _fun0006_ip = 841; continue _fun0006 }
 785:
                var12 = var17.timestamps;
                var28 = var12.start;
                var27 = var12.end;
                var25 = _closure1_slot21;
                var16 = _closure1_slot1;
                var29 = _closure1_slot2;
                var12 = 43;
                var12 = var29[var12];
                var16 = var16.bind(var5)(var12);
                var12 = {};
                var12['start'] = var28;
                var12['end'] = var27;
                var10 = var25.bind(var5)(var16, var12);
 841:
                var9[1] = var10;
                var12 = var13 == var23;
                var10 = null;
                if(var12) { _fun0006_ip = 918; continue _fun0006 }
 854:
                var12 = var13 == var26;
                var10 = null;
                if(var12) { _fun0006_ip = 918; continue _fun0006 }
 863:
                var25 = _closure1_slot21;
                var16 = _closure1_slot1;
                var27 = _closure1_slot2;
                var12 = 44;
                var12 = var27[var12];
                var16 = var16.bind(var5)(var12);
                var12 = {};
                var12['guild'] = var26;
                var12['channel'] = var23;
                var12['onAction'] = var14;
                var26 = var24.voiceChannelDivider;
                var12['style'] = var26;
                var10 = var25.bind(var5)(var16, var12);
 918:
                var9[2] = var10;
                var12 = _closure1_slot1;
                var16 = _closure1_slot2;
                var10 = 45;
                var10 = var16[var10];
                var10 = var12.bind(var5)(var10);
                var10 = var10.bind(var5)(var17);
                if(var10) { _fun0006_ip = 1481; continue _fun0006 }
 953:
                var12 = _closure1_slot1;
                var16 = _closure1_slot2;
                var10 = 47;
                var10 = var16[var10];
                var10 = var12.bind(var5)(var10);
                var10 = var10.bind(var5)(var17);
                if(var10) { _fun0006_ip = 1422; continue _fun0006 }
 984:
                var16 = var20.id;
                var12 = var19.id;
                var10 = null;
                if(!(var16 !== var12)) { _fun0006_ip = 1420; continue _fun0006 }
 1003:
                var16 = _closure1_slot1;
                var25 = _closure1_slot2;
                var12 = 21;
                var12 = var25[var12];
                var12 = var16.bind(var5)(var12);
                var12 = var12.bind(var5)(var17);
                if(var12) { _fun0006_ip = 1369; continue _fun0006 }
 1034:
                var16 = _closure1_slot1;
                var25 = _closure1_slot2;
                var12 = 32;
                var12 = var25[var12];
                var12 = var16.bind(var5)(var12);
                var12 = var12.bind(var5)(var17);
                if(var12) { _fun0006_ip = 1306; continue _fun0006 }
 1065:
                var16 = _closure1_slot1;
                var25 = _closure1_slot2;
                var12 = 48;
                var12 = var25[var12];
                var12 = var16.bind(var5)(var12);
                var12 = var12.bind(var5)(var17);
                if(var12) { _fun0006_ip = 1256; continue _fun0006 }
 1096:
                if(!var11) { _fun0006_ip = 1103; continue _fun0006 }
 1099:
                if(!(var13 == var23)) { _fun0006_ip = 1195; continue _fun0006 }
 1103:
                var11 = var17.buttons;
                var12 = var13 != var11;
                var11 = null;
                if(!var12) { _fun0006_ip = 1193; continue _fun0006 }
 1118:
                var12 = var17.buttons;
                var16 = var12.length;
                var12 = 0;
                var12 = var16 > var12;
                var11 = null;
                if(!var12) { _fun0006_ip = 1193; continue _fun0006 }
 1140:
                var16 = _closure1_slot21;
                var13 = _closure1_slot6;
                var12 = {};
                var24 = var24.customButtons;
                var12['style'] = var24;
                var26 = var17.buttons;
                var25 = var26.map;
                var24 = function(arg1, arg2) {
                    var5 = arg2;
                    var4 = _closure1_slot21;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 46;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.CustomActivityButton;
                    var1 = {};
                    var1['index'] = var5;
                    var7 = _closure2_slot0;
                    var1['user'] = var7;
                    var7 = _closure2_slot1;
                    var1['activity'] = var7;
                    var6 = _closure2_slot5;
                    var1['onAction'] = var6;
                    var1 = var4.bind(var3)(var2, var1, var5);
                    return var1;
                };
                var24 = var25.bind(var26)(var24);
                var12['children'] = var24;
                var11 = var16.bind(var5)(var13, var12);
 1193:
                _fun0006_ip = 1254; continue _fun0006;
 1195:
                var16 = _closure1_slot21;
                var13 = _closure1_slot0;
                var24 = _closure1_slot2;
                var12 = 46;
                var12 = var24[var12];
                var12 = var13.bind(var5)(var12);
                var13 = var12.VoiceChannelButtons;
                var12 = {};
                var12['channel'] = var23;
                var12['isInChannel'] = var22;
                var21 = function onAction(arg1) {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                        var3 = _closure2_slot5;
                        var1 = undefined;
                        var2 = arg1;
                        var2 = var3.bind(var1)(var2);
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 49;
                        var2 = var4[var2];
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.track;
                        var2 = _closure1_slot17;
                        var3 = var2.HANG_STATUS_CTA_CLICKED;
                        var2 = {};
                        var7 = 'UserProfilePopout';
                        var2['source'] = var7;
                        var7 = _closure2_slot2;
                        var9 = var7.guild_id;
                        var2['guild_id'] = var9;
                        var9 = var7.id;
                        var2['channel_id'] = var9;
                        var10 = _closure1_slot12;
                        var9 = var10.getMediaSessionId;
                        var9 = var9.bind(var10)();
                        var2['media_session_id'] = var9;
                        var9 = _closure1_slot15;
                        var8 = var9.countVoiceStatesForChannel;
                        var7 = var7.id;
                        var7 = var8.bind(var9)(var7);
                        var2['call_num_participants'] = var7;
                        var7 = _closure2_slot0;
                        var7 = var7.id;
                        var2['other_user_id'] = var7;
                        var7 = _closure2_slot3;
                        var6 = 'join';
                        if(!var7) { _fun0010_ip = 162; continue _fun0010 }
 158:
                        var6 = 'open';
 162:
                        var2['cta_type'] = var6;
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    }
                };
                var12['onAction'] = var21;
                var11 = var16.bind(var5)(var13, var12);
 1254:
                _fun0006_ip = 1304; continue _fun0006;
 1256:
                var16 = _closure1_slot21;
                var13 = _closure1_slot0;
                var21 = _closure1_slot2;
                var12 = 46;
                var12 = var21[var12];
                var12 = var13.bind(var5)(var12);
                var13 = var12.WatchActivityButton;
                var12 = {};
                var12['activity'] = var17;
                var12['onAction'] = var14;
                var11 = var16.bind(var5)(var13, var12);
 1304:
                _fun0006_ip = 1367; continue _fun0006;
 1306:
                var16 = _closure1_slot21;
                var13 = _closure1_slot0;
                var21 = _closure1_slot2;
                var12 = 46;
                var12 = var21[var12];
                var12 = var13.bind(var5)(var12);
                var13 = var12.JoinActivityButton;
                var12 = {};
                var12['user'] = var20;
                var12['currentUser'] = var19;
                var12['activity'] = var17;
                var12['application'] = var18;
                var12['onAction'] = var14;
                var11 = var16.bind(var5)(var13, var12);
 1367:
                _fun0006_ip = 1417; continue _fun0006;
 1369:
                var16 = _closure1_slot21;
                var13 = _closure1_slot0;
                var18 = _closure1_slot2;
                var12 = 46;
                var12 = var18[var12];
                var12 = var13.bind(var5)(var12);
                var13 = var12.PlayOnSpotifyButton;
                var12 = {};
                var12['activity'] = var17;
                var12['onAction'] = var14;
                var11 = var16.bind(var5)(var13, var12);
 1417:
                var10 = var11;
 1420:
                _fun0006_ip = 1479; continue _fun0006;
 1422:
                var13 = _closure1_slot21;
                var12 = _closure1_slot0;
                var16 = _closure1_slot2;
                var11 = 46;
                var11 = var16[var11];
                var11 = var12.bind(var5)(var11);
                var12 = var11.ConnectPlatformButton;
                var11 = {};
                var16 = _closure1_slot19;
                var16 = var16.PLAYSTATION;
                var11['type'] = var16;
                var11['onAction'] = var14;
                var10 = var13.bind(var5)(var12, var11);
 1479:
                _fun0006_ip = 1538; continue _fun0006;
 1481:
                var13 = _closure1_slot21;
                var12 = _closure1_slot0;
                var16 = _closure1_slot2;
                var11 = 46;
                var11 = var16[var11];
                var11 = var12.bind(var5)(var11);
                var12 = var11.ConnectPlatformButton;
                var11 = {};
                var15 = _closure1_slot19;
                var15 = var15.XBOX;
                var11['type'] = var15;
                var11['onAction'] = var14;
                var10 = var13.bind(var5)(var12, var11);
 1538:
                var9[3] = var10;
                var6['children'] = var9;
                var6 = var8.bind(var5)(var7, var6);
                var2['children'] = var6;
                var1 = var4.bind(var5)(var3, var2);
 1562:
                return var1;
            }
        };
        var _closure1_slot28 = var1;
        var1 = function StreamActivityCard(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var1 = arg1;
                var22 = var1.user;
                var _closure2_slot0 = var22;
                var26 = var1.stream;
                var _closure2_slot1 = var26;
                var21 = var1.activity;
                var _closure2_slot2 = var21;
                var11 = var1.style;
                var4 = undefined;
                var _closure2_slot4 = var4;
                var1 = _closure1_slot24;
                var18 = var1.bind(var4)();
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 35;
                var3 = var6[var1];
                var8 = var2.bind(var4)(var3);
                var7 = var8.useStateFromStores;
                var3 = _closure1_slot8;
                var5 = new Array(1);
                var5[0] = var3;
                var3 = function() {
                    var3 = _closure1_slot8;
                    var2 = var3.getChannel;
                    var1 = _closure2_slot1;
                    var1 = var1.channelId;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var15 = var7.bind(var8)(var5, var3);
                var _closure2_slot3 = var15;
                var3 = var6[var1];
                var8 = var2.bind(var4)(var3);
                var7 = var8.useStateFromStores;
                var3 = _closure1_slot14;
                var5 = new Array(1);
                var5[0] = var3;
                var3 = function() {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                        var3 = _closure1_slot14;
                        var2 = var3.isInChannel;
                        var5 = _closure2_slot3;
                        var1 = null;
                        var5 = var1 == var5;
                        var1 = undefined;
                        if(var5) { _fun0012_ip = 40; continue _fun0012 }
 31:
                        var4 = _closure2_slot3;
                        var1 = var4.id;
 40:
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    }
                };
                var14 = var7.bind(var8)(var5, var3);
                var3 = var6[var1];
                var8 = var2.bind(var4)(var3);
                var7 = var8.useStateFromStores;
                var3 = _closure1_slot9;
                var5 = new Array(1);
                var5[0] = var3;
                var3 = function() {
                    var3 = _closure1_slot9;
                    var2 = var3.getGuild;
                    var1 = _closure2_slot1;
                    var1 = var1.guildId;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var19 = var7.bind(var8)(var5, var3);
                var3 = var6[var1];
                var8 = var2.bind(var4)(var3);
                var7 = var8.useStateFromStores;
                var3 = _closure1_slot11;
                var5 = new Array(1);
                var5[0] = var3;
                var3 = function() {
                    var4 = _closure1_slot11;
                    var3 = var4.findActivity;
                    var1 = _closure2_slot0;
                    var2 = var1.id;
                    var1 = function(arg1) {
                        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                            var4 = arg1;
                            var5 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 30;
                            var1 = var3[var1];
                            var3 = undefined;
                            var1 = var5.bind(var3)(var1);
                            var1 = var1.bind(var3)(var4);
                            if(!var1) { _fun0013_ip = 64; continue _fun0013 }
 36:
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var2 = 50;
                            var2 = var6[var2];
                            var2 = var5.bind(var3)(var2);
                            var2 = var2.bind(var3)(var4);
                            var1 = !var2;
 64:
                            return var1;
                        }
                    };
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var23 = var7.bind(var8)(var5, var3);
                var1 = var6[var1];
                var7 = var2.bind(var4)(var1);
                var5 = var7.useStateFromStores;
                var1 = _closure1_slot7;
                var3 = new Array(1);
                var3[0] = var1;
                var1 = function() {
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                        var3 = _closure2_slot2;
                        var1 = null;
                        var5 = var1 == var3;
                        var4 = undefined;
                        if(var5) { _fun0014_ip = 28; continue _fun0014 }
 18:
                        var5 = _closure2_slot2;
                        var4 = var5.application_id;
 28:
                        if(!(var1 == var4)) { _fun0014_ip = 92; continue _fun0014 }
 32:
                        var4 = _closure2_slot2;
                        var4 = var1 == var4;
                        var3 = undefined;
                        if(var4) { _fun0014_ip = 54; continue _fun0014 }
 45:
                        var4 = _closure2_slot2;
                        var3 = var4.name;
 54:
                        var3 = var1 != var3;
                        var1 = null;
                        if(!var3) { _fun0014_ip = 90; continue _fun0014 }
 63:
                        var5 = _closure1_slot7;
                        var4 = var5.getApplicationByName;
                        var3 = _closure2_slot2;
                        var3 = var3.name;
                        var1 = var4.bind(var5)(var3);
 90:
                        _fun0014_ip = 120; continue _fun0014;
 92:
                        var4 = _closure1_slot7;
                        var3 = var4.getApplication;
                        var2 = _closure2_slot2;
                        var2 = var2.application_id;
                        var1 = var3.bind(var4)(var2);
 120:
                        return var1;
                    }
                };
                var20 = var5.bind(var7)(var3, var1);
                var1 = 51;
                var1 = var6[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.useCanWatchStream;
                var3 = var1.bind(var2)(var15);
                var2 = _closure1_slot3;
                var1 = 1;
                var2 = var2.bind(var4)(var3, var1);
                var1 = 0;
                var25 = var2[var1];
                var3 = _closure1_slot1;
                var1 = 36;
                var2 = var6[var1];
                var5 = var3.bind(var4)(var2);
                var2 = 37;
                var2 = var6[var2];
                var2 = var3.bind(var4)(var2);
                var2 = var2.USER_PROFILE_LIVE_ACTIVITY_CARD;
                var2 = var5.bind(var4)(var2);
                var5 = var2.analyticsLocations;
                var2 = 38;
                var2 = var6[var2];
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var6 = 'live';
                var2['display'] = var6;
                var9 = null;
                var7 = var9 == var15;
                var6 = undefined;
                if(var7) { _fun0011_ip = 391; continue _fun0011 }
 386:
                var6 = var15.id;
 391:
                var2['voiceChannelId'] = var6;
                var2['user'] = var22;
                var2['stream'] = var26;
                var2['analyticsLocations'] = var5;
                var13 = var3.bind(var4)(var2);
                _closure2_slot4 = var13;
                var6 = _closure1_slot1;
                var8 = _closure1_slot2;
                var2 = 39;
                var2 = var8[var2];
                var3 = var6.bind(var4)(var2);
                var2 = {};
                var7 = var22.id;
                var2['userId'] = var7;
                var2['onAction'] = var13;
                var2 = var3.bind(var4)(var2);
                var3 = _closure1_slot21;
                var2 = _closure1_slot0;
                var1 = var8[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.AnalyticsLocationProvider;
                var1 = {};
                var1['value'] = var5;
                var7 = _closure1_slot22;
                var5 = 40;
                var5 = var8[var5];
                var6 = var6.bind(var4)(var5);
                var5 = {};
                var12 = var18.card;
                var8 = new Array(2);
                var8[0] = var12;
                var8[1] = var11;
                var5['style'] = var8;
                if(!(var9 == var23)) { _fun0011_ip = 590; continue _fun0011 }
 533:
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                var8 = 22;
                var11 = var17[var8];
                var11 = var16.bind(var4)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var8 = var17[var8];
                var8 = var16.bind(var4)(var8);
                var8 = var8.t;
                var8 = var8.Jpkr/v;
                var8 = var11.bind(var12)(var8);
                _fun0011_ip = 657; continue _fun0011;
 590:
                var12 = _closure1_slot0;
                var27 = _closure1_slot2;
                var11 = 22;
                var16 = var27[var11];
                var16 = var12.bind(var4)(var16);
                var17 = var16.intl;
                var16 = var17.formatToPlainString;
                var11 = var27[var11];
                var11 = var12.bind(var4)(var11);
                var11 = var11.t;
                var12 = var11.4CQq9f;
                var11 = {};
                var23 = var23.name;
                var11['name'] = var23;
                var8 = var16.bind(var17)(var12, var11);
 657:
                var5['title'] = var8;
                var8 = var18.cardTitle;
                var5['titleStyle'] = var8;
                var12 = _closure1_slot21;
                var11 = _closure1_slot6;
                var8 = {};
                var16 = var18.liveIndicator;
                var8['style'] = var16;
                var28 = _closure1_slot21;
                var17 = _closure1_slot0;
                var27 = _closure1_slot2;
                var16 = 17;
                var16 = var27[var16];
                var16 = var17.bind(var4)(var16);
                var23 = var16.Text;
                var16 = {'variant': 'eyebrow', 'color': 'always-white'};
                var29 = var18.liveIndicatorText;
                var16['style'] = var29;
                var29 = 22;
                var30 = var27[var29];
                var30 = var17.bind(var4)(var30);
                var31 = var30.intl;
                var30 = var31.string;
                var29 = var27[var29];
                var29 = var17.bind(var4)(var29);
                var29 = var29.t;
                var29 = var29.dI3q4u;
                var29 = var30.bind(var31)(var29);
                var16['children'] = var29;
                var16 = var28.bind(var4)(var23, var16);
                var8['children'] = var16;
                var8 = var12.bind(var4)(var11, var8);
                var5['titleIcon'] = var8;
                var12 = _closure1_slot21;
                var11 = _closure1_slot6;
                var8 = {};
                var16 = var18.streamPreview;
                var8['style'] = var16;
                var23 = _closure1_slot21;
                var16 = 52;
                var16 = var27[var16];
                var16 = var17.bind(var4)(var16);
                var17 = var16.VoicePanelStreamPreview;
                var16 = {};
                var16['mode'] = var4;
                var16['stream'] = var26;
                var25 = !var25;
                var16['disabled'] = var25;
                var24 = function onPress() {
                    var3 = _closure2_slot4;
                    var2 = {};
                    var1 = 'PRESS_IMAGE';
                    var2['action'] = var1;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var6 = 53;
                    var6 = var4[var6];
                    var8 = var3.bind(var1)(var6);
                    var7 = var8.selectVoiceChannel;
                    var6 = _closure2_slot1;
                    var5 = var6.channelId;
                    var5 = var7.bind(var8)(var5);
                    var5 = _closure1_slot0;
                    var2 = 54;
                    var2 = var4[var2];
                    var5 = var5.bind(var1)(var2);
                    var2 = var5.watchStreamAndTransitionToStream;
                    var2 = var2.bind(var5)(var6);
                    var2 = 55;
                    var2 = var4[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.hideActionSheet;
                    var2 = var2.bind(var3)();
                    return var1;
                };
                var16['onPress'] = var24;
                var16 = var23.bind(var4)(var17, var16);
                var8['children'] = var16;
                var11 = var12.bind(var4)(var11, var8);
                var8 = new Array(4);
                var8[0] = var11;
                var11 = var9 != var21;
                if(!var11) { _fun0011_ip = 944; continue _fun0011 }
 919:
                var16 = _closure1_slot1;
                var17 = _closure1_slot2;
                var12 = 32;
                var12 = var17[var12];
                var12 = var16.bind(var4)(var12);
                var11 = var12.bind(var4)(var21);
 944:
                if(!var11) { _fun0011_ip = 981; continue _fun0011 }
 947:
                var17 = _closure1_slot21;
                var16 = _closure1_slot27;
                var12 = {};
                var12['user'] = var22;
                var12['activity'] = var21;
                var12['application'] = var20;
                var12['onAction'] = var13;
                var11 = var17.bind(var4)(var16, var12);
 981:
                var8[1] = var11;
                var11 = var9 != var19;
                if(!var11) { _fun0011_ip = 996; continue _fun0011 }
 992:
                var11 = var9 != var15;
 996:
                if(!var11) { _fun0011_ip = 1054; continue _fun0011 }
 999:
                var17 = _closure1_slot21;
                var16 = _closure1_slot1;
                var20 = _closure1_slot2;
                var12 = 44;
                var12 = var20[var12];
                var16 = var16.bind(var4)(var12);
                var12 = {};
                var12['guild'] = var19;
                var12['channel'] = var15;
                var12['onAction'] = var13;
                var18 = var18.voiceChannelDivider;
                var12['style'] = var18;
                var11 = var17.bind(var4)(var16, var12);
 1054:
                var8[2] = var11;
                var9 = var9 != var15;
                if(!var9) { _fun0011_ip = 1117; continue _fun0011 }
 1065:
                var12 = _closure1_slot21;
                var11 = _closure1_slot0;
                var16 = _closure1_slot2;
                var10 = 46;
                var10 = var16[var10];
                var10 = var11.bind(var4)(var10);
                var11 = var10.VoiceChannelButtons;
                var10 = {};
                var10['channel'] = var15;
                var10['isInChannel'] = var14;
                var10['onAction'] = var13;
                var9 = var12.bind(var4)(var11, var10);
 1117:
                var8[3] = var9;
                var5['children'] = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var _closure1_slot29 = var1;
        var1 = function VoiceCallActivityCard(arg1) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                var1 = arg1;
                var8 = var1.user;
                var11 = var1.channel;
                var _closure2_slot0 = var11;
                var10 = var1.isInChannel;
                var7 = var1.style;
                var1 = _closure1_slot24;
                var4 = undefined;
                var30 = var1.bind(var4)();
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 56;
                var1 = var5[var1];
                var1 = var2.bind(var4)(var1);
                var15 = var1.bind(var4)(var11);
                var1 = 57;
                var1 = var5[var1];
                var1 = var2.bind(var4)(var1);
                var26 = var1.bind(var4)(var11);
                var3 = _closure1_slot0;
                var1 = 35;
                var9 = var5[var1];
                var14 = var3.bind(var4)(var9);
                var13 = var14.useStateFromStores;
                var9 = _closure1_slot9;
                var12 = new Array(1);
                var12[0] = var9;
                var9 = function() {
                    var3 = _closure1_slot9;
                    var2 = var3.getGuild;
                    var1 = _closure2_slot0;
                    var1 = var1.guild_id;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var28 = var13.bind(var14)(var12, var9);
                var _closure2_slot1 = var28;
                var1 = var5[var1];
                var12 = var3.bind(var4)(var1);
                var9 = var12.useStateFromStores;
                var1 = _closure1_slot10;
                var3 = new Array(1);
                var3[0] = var1;
                var1 = function() {
                    _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                        var3 = _closure2_slot0;
                        var1 = var3.isPrivate;
                        var1 = var1.bind(var3)();
                        if(var1) { _fun0016_ip = 53; continue _fun0016 }
 20:
                        var5 = _closure1_slot10;
                        var4 = var5.can;
                        var3 = _closure1_slot18;
                        var3 = var3.CONNECT;
                        var2 = _closure2_slot0;
                        var1 = var4.bind(var5)(var3, var2);
 53:
                        return var1;
                    }
                };
                var16 = var9.bind(var12)(var3, var1);
                var1 = 36;
                var1 = var5[var1];
                var3 = var2.bind(var4)(var1);
                var1 = 37;
                var1 = var5[var1];
                var1 = var2.bind(var4)(var1);
                var1 = var1.USER_PROFILE_VOICE_ACTIVITY_CARD;
                var1 = var3.bind(var4)(var1);
                var9 = var1.analyticsLocations;
                var1 = var1.newestAnalyticsLocation;
                var _closure2_slot2 = var1;
                var1 = 38;
                var1 = var5[var1];
                var3 = var2.bind(var4)(var1);
                var1 = {};
                var12 = 'voice';
                var1['display'] = var12;
                var12 = {};
                var13 = 'VOICE';
                var12['type'] = var13;
                var1['activity'] = var12;
                var12 = var11.id;
                var1['voiceChannelId'] = var12;
                var1['user'] = var8;
                var1['analyticsLocations'] = var9;
                var9 = var3.bind(var4)(var1);
                var _closure2_slot3 = var9;
                var1 = 39;
                var1 = var5[var1];
                var3 = var2.bind(var4)(var1);
                var1 = {};
                var8 = var8.id;
                var1['userId'] = var8;
                var1['onAction'] = var9;
                var1 = var3.bind(var4)(var1);
                var3 = _closure1_slot22;
                var1 = 40;
                var1 = var5[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var8 = var30.card;
                var5 = new Array(2);
                var5[0] = var8;
                var5[1] = var7;
                var1['style'] = var5;
                var5 = var11.isDM;
                var5 = var5.bind(var11)();
                if(var5) { _fun0015_ip = 472; continue _fun0015 }
 376:
                var5 = var11.isGroupDM;
                var5 = var5.bind(var11)();
                if(var5) { _fun0015_ip = 472; continue _fun0015 }
 389:
                var5 = var11.isGuildStageVoice;
                var5 = var5.bind(var11)();
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var7 = 22;
                var8 = var14[var7];
                var8 = var13.bind(var4)(var8);
                var12 = var8.intl;
                var8 = var12.string;
                var7 = var14[var7];
                var7 = var13.bind(var4)(var7);
                var7 = var7.t;
                if(var5) { _fun0015_ip = 459; continue _fun0015 }
 446:
                var5 = var7.msxteH;
                var5 = var8.bind(var12)(var5);
                _fun0015_ip = 470; continue _fun0015;
 459:
                var7 = var7.QygGCA;
                var5 = var8.bind(var12)(var7);
 470:
                _fun0015_ip = 527; continue _fun0015;
 472:
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var7 = 22;
                var8 = var14[var7];
                var8 = var13.bind(var4)(var8);
                var12 = var8.intl;
                var8 = var12.string;
                var7 = var14[var7];
                var7 = var13.bind(var4)(var7);
                var7 = var7.t;
                var7 = var7.9FaEzs;
                var5 = var8.bind(var12)(var7);
 527:
                var1['title'] = var5;
                var5 = var30.cardTitle;
                var1['titleStyle'] = var5;
                var8 = _closure1_slot22;
                var7 = _closure1_slot6;
                var5 = {};
                var12 = var30.body;
                var5['style'] = var12;
                var14 = _closure1_slot21;
                var13 = _closure1_slot1;
                var17 = _closure1_slot2;
                var12 = 58;
                var12 = var17[var12];
                var13 = var13.bind(var4)(var12);
                var12 = {};
                var12['users'] = var15;
                var17 = null;
                var18 = var17 == var28;
                var15 = undefined;
                if(var18) { _fun0015_ip = 608; continue _fun0015 }
 603:
                var15 = var28.id;
 608:
                var12['guildId'] = var15;
                var13 = var14.bind(var4)(var13, var12);
                var12 = new Array(2);
                var12[0] = var13;
                var15 = _closure1_slot22;
                var14 = _closure1_slot6;
                var13 = {};
                var18 = var30.voiceCallContent;
                var13['style'] = var18;
                if(var16) { _fun0015_ip = 798; continue _fun0015 }
 652:
                var19 = _closure1_slot22;
                var18 = _closure1_slot0;
                var29 = _closure1_slot2;
                var16 = 17;
                var16 = var29[var16];
                var16 = var18.bind(var4)(var16);
                var18 = var16.Text;
                var16 = {'variant': 'text-md/semibold', 'color': 'header-primary'};
                var23 = _closure1_slot21;
                var22 = _closure1_slot6;
                var20 = {};
                var24 = var30.voiceCallNameIconWrapper;
                var20['style'] = var24;
                var27 = _closure1_slot21;
                var25 = _closure1_slot1;
                var24 = 59;
                var24 = var29[var24];
                var25 = var25.bind(var4)(var24);
                var24 = {'channel': null, 'size': 'sm', 'color': 'header-primary'};
                var24['channel'] = var11;
                var24 = var27.bind(var4)(var25, var24);
                var20['children'] = var24;
                var22 = var23.bind(var4)(var22, var20);
                var20 = new Array(2);
                var20[0] = var22;
                var20[1] = var26;
                var16['children'] = var20;
                var18 = var19.bind(var4)(var18, var16);
                _fun0015_ip = 1071; continue _fun0015;
 798:
                var20 = _closure1_slot21;
                var23 = _closure1_slot0;
                var33 = _closure1_slot2;
                var16 = 60;
                var16 = var33[var16];
                var16 = var23.bind(var4)(var16);
                var19 = var16.PressableOpacity;
                var16 = {};
                var22 = 'button';
                var16['accessibilityRole'] = var22;
                var31 = _closure1_slot1;
                var22 = 61;
                var22 = var33[var22];
                var24 = var31.bind(var4)(var22);
                var22 = {};
                var22['channel'] = var11;
                var22 = var24.bind(var4)(var22);
                var16['accessibilityLabel'] = var22;
                var22 = 22;
                var24 = var33[var22];
                var24 = var23.bind(var4)(var24);
                var25 = var24.intl;
                var24 = var25.string;
                var22 = var33[var22];
                var22 = var23.bind(var4)(var22);
                var22 = var22.t;
                var22 = var22.9C444u;
                var22 = var24.bind(var25)(var22);
                var16['accessibilityHint'] = var22;
                var22 = function onPress() {
                    var4 = _closure2_slot3;
                    var3 = {};
                    var1 = 'OPEN_VOICE_CHANNEL';
                    var3['action'] = var1;
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var4 = 55;
                    var4 = var5[var4];
                    var7 = var6.bind(var1)(var4);
                    var4 = var7.hideActionSheet;
                    var4 = var4.bind(var7)();
                    var4 = 62;
                    var4 = var5[var4];
                    var6 = var6.bind(var1)(var4);
                    var4 = var6.popAll;
                    var4 = var4.bind(var6)();
                    var4 = _closure1_slot0;
                    var3 = 63;
                    var3 = var5[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.openGuildVoiceModal;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot2;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                var16['onPress'] = var22;
                var24 = _closure1_slot22;
                var22 = 17;
                var22 = var33[var22];
                var22 = var23.bind(var4)(var22);
                var23 = var22.Text;
                var22 = {'variant': 'text-md/semibold', 'color': 'header-primary'};
                var29 = _closure1_slot21;
                var27 = _closure1_slot6;
                var25 = {};
                var30 = var30.voiceCallNameIconWrapper;
                var25['style'] = var30;
                var32 = _closure1_slot21;
                var30 = 59;
                var30 = var33[var30];
                var31 = var31.bind(var4)(var30);
                var30 = {'channel': null, 'size': 'sm', 'color': 'header-primary'};
                var30['channel'] = var11;
                var30 = var32.bind(var4)(var31, var30);
                var25['children'] = var30;
                var27 = var29.bind(var4)(var27, var25);
                var25 = new Array(2);
                var25[0] = var27;
                var25[1] = var26;
                var22['children'] = var25;
                var22 = var24.bind(var4)(var23, var22);
                var16['children'] = var22;
                var18 = var20.bind(var4)(var19, var16);
 1071:
                var16 = new Array(2);
                var16[0] = var18;
                var18 = var17 == var28;
                var17 = null;
                if(var18) { _fun0015_ip = 1363; continue _fun0015 }
 1091:
                var20 = _closure1_slot21;
                var25 = _closure1_slot0;
                var29 = _closure1_slot2;
                var18 = 60;
                var18 = var29[var18];
                var18 = var25.bind(var4)(var18);
                var19 = var18.PressableOpacity;
                var18 = {};
                var22 = 'button';
                var18['accessibilityRole'] = var22;
                var24 = 22;
                var22 = var29[var24];
                var22 = var25.bind(var4)(var22);
                var26 = var22.intl;
                var23 = var26.string;
                var22 = var29[var24];
                var22 = var25.bind(var4)(var22);
                var22 = var22.t;
                var22 = var22.KLOhbG;
                var22 = var23.bind(var26)(var22);
                var18['accessibilityHint'] = var22;
                var22 = var29[var24];
                var22 = var25.bind(var4)(var22);
                var27 = var22.intl;
                var26 = var27.formatToPlainString;
                var22 = var29[var24];
                var22 = var25.bind(var4)(var22);
                var22 = var22.t;
                var23 = var22.hq/Qzc;
                var22 = {};
                var30 = var28.name;
                var22['guildName'] = var30;
                var22 = var26.bind(var27)(var23, var22);
                var18['accessibilityLabel'] = var22;
                var21 = function onPress() {
                    var4 = _closure2_slot3;
                    var2 = {};
                    var1 = 'OPEN_VOICE_GUILD';
                    var2['action'] = var1;
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var5 = 64;
                    var5 = var4[var5];
                    var6 = var6.bind(var1)(var5);
                    var5 = var6.transitionToGuild;
                    var3 = _closure2_slot1;
                    var3 = var3.id;
                    var3 = var5.bind(var6)(var3);
                    var3 = _closure1_slot1;
                    var2 = 65;
                    var2 = var4[var2];
                    var2 = var3.bind(var1)(var2);
                    var2 = var2.bind(var1)();
                    var2 = 55;
                    var2 = var4[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.hideActionSheet;
                    var2 = var2.bind(var3)();
                    return var1;
                };
                var18['onPress'] = var21;
                var23 = _closure1_slot21;
                var21 = 17;
                var21 = var29[var21];
                var21 = var25.bind(var4)(var21);
                var22 = var21.Text;
                var21 = {};
                var26 = 'text-xs/medium';
                var21['variant'] = var26;
                var26 = var29[var24];
                var26 = var25.bind(var4)(var26);
                var27 = var26.intl;
                var26 = var27.format;
                var24 = var29[var24];
                var24 = var25.bind(var4)(var24);
                var24 = var24.t;
                var25 = var24.hq/Qzc;
                var24 = {};
                var28 = var28.name;
                var24['guildName'] = var28;
                var24 = var26.bind(var27)(var25, var24);
                var21['children'] = var24;
                var21 = var23.bind(var4)(var22, var21);
                var18['children'] = var21;
                var17 = var20.bind(var4)(var19, var18);
 1363:
                var16[1] = var17;
                var13['children'] = var16;
                var13 = var15.bind(var4)(var14, var13);
                var12[1] = var13;
                var5['children'] = var12;
                var7 = var8.bind(var4)(var7, var5);
                var5 = new Array(2);
                var5[0] = var7;
                var8 = _closure1_slot21;
                var7 = _closure1_slot0;
                var12 = _closure1_slot2;
                var6 = 46;
                var6 = var12[var6];
                var6 = var7.bind(var4)(var6);
                var7 = var6.VoiceChannelButtons;
                var6 = {};
                var6['channel'] = var11;
                var6['isInChannel'] = var10;
                var6['onAction'] = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var _closure1_slot30 = var1;
        var1 = global;
        var8 = var1.Object;
        var7 = var8.defineProperty;
        var4 = {};
        var1 = true;
        var4['value'] = var1;
        var1 = '__esModule';
        var1 = var7.bind(var8)(var3, var1, var4);
        var14 = 0;
        var4 = var6[var14];
        var1 = undefined;
        var4 = var11.bind(var1)(var4);
        var _closure1_slot3 = var4;
        var15 = 1;
        var7 = var6[var15];
        var4 = metroImportAll;
        var4 = var4.bind(var1)(var7);
        var4 = 2;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var7 = var4.TouchableOpacity;
        var _closure1_slot4 = var7;
        var7 = var4.TouchableWithoutFeedback;
        var _closure1_slot5 = var7;
        var4 = var4.View;
        var _closure1_slot6 = var4;
        var4 = 3;
        var4 = var6[var4];
        var4 = var11.bind(var1)(var4);
        var _closure1_slot7 = var4;
        var4 = 4;
        var4 = var6[var4];
        var4 = var11.bind(var1)(var4);
        var _closure1_slot8 = var4;
        var4 = 5;
        var4 = var6[var4];
        var4 = var11.bind(var1)(var4);
        var _closure1_slot9 = var4;
        var4 = 6;
        var4 = var6[var4];
        var4 = var11.bind(var1)(var4);
        var _closure1_slot10 = var4;
        var4 = 7;
        var4 = var6[var4];
        var4 = var11.bind(var1)(var4);
        var _closure1_slot11 = var4;
        var4 = 8;
        var4 = var6[var4];
        var4 = var11.bind(var1)(var4);
        var _closure1_slot12 = var4;
        var4 = 9;
        var4 = var6[var4];
        var4 = var11.bind(var1)(var4);
        var _closure1_slot13 = var4;
        var4 = 10;
        var4 = var6[var4];
        var4 = var11.bind(var1)(var4);
        var _closure1_slot14 = var4;
        var4 = 11;
        var4 = var6[var4];
        var4 = var11.bind(var1)(var4);
        var _closure1_slot15 = var4;
        var13 = 12;
        var4 = var6[var13];
        var4 = var5.bind(var1)(var4);
        var7 = var4.ActivityTypes;
        var _closure1_slot16 = var7;
        var7 = var4.AnalyticEvents;
        var _closure1_slot17 = var7;
        var7 = var4.Permissions;
        var _closure1_slot18 = var7;
        var7 = var4.PlatformTypes;
        var _closure1_slot19 = var7;
        var4 = var4.StatusTypes;
        var _closure1_slot20 = var4;
        var4 = 13;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var7 = var4.jsx;
        var _closure1_slot21 = var7;
        var7 = var4.jsxs;
        var _closure1_slot22 = var7;
        var4 = var4.Fragment;
        var _closure1_slot23 = var4;
        var4 = 14;
        var4 = var6[var4];
        var8 = var5.bind(var1)(var4);
        var7 = var8.createStyles;
        var4 = {};
        var9 = {};
        var9['gap'] = var13;
        var4['card'] = var9;
        var9 = {};
        var9['marginBottom'] = var14;
        var4['cardTitle'] = var9;
        var9 = {};
        var10 = 15;
        var12 = var6[var10];
        var12 = var11.bind(var1)(var12);
        var12 = var12.colors;
        var12 = var12.HEADER_SECONDARY;
        var9['tintColor'] = var12;
        var4['cardTitleIcon'] = var9;
        var12 = 16;
        var9 = {'flexDirection': 'row', 'alignItems': 'center', 'gap': 16};
        var4['body'] = var9;
        var9 = {};
        var9['flex'] = var15;
        var4['content'] = var9;
        var9 = {};
        var15 = 'relative';
        var9['position'] = var15;
        var4['imageContainer'] = var9;
        var9 = {'width': 60, 'maxHeight': 60, 'aspectRatio': '1 / 1'};
        var4['imageAspectRatio'] = var9;
        var9 = {'width': 60, 'maxHeight': 100, 'aspectRatio': '2 / 3'};
        var4['crunchyrollImageAspectRatio'] = var9;
        var9 = {'borderRadius': null, 'width': '100%', 'height': '100%'};
        var15 = var6[var10];
        var15 = var11.bind(var1)(var15);
        var15 = var15.radii;
        var15 = var15.xs;
        var9['borderRadius'] = var15;
        var4['largeImage'] = var9;
        var9 = {'borderRadius': 16, 'position': 'absolute', 'right': 4294967292, 'bottom': 4294967292};
        var15 = var6[var10];
        var15 = var11.bind(var1)(var15);
        var15 = var15.colors;
        var15 = var15.BACKGROUND_PRIMARY;
        var9['backgroundColor'] = var15;
        var4['smallImageBackground'] = var9;
        var9 = {'width': 24, 'height': 24, 'borderRadius': 12};
        var4['smallImage'] = var9;
        var9 = {'marginTop': 4, 'flexDirection': 'row', 'flexWrap': 'wrap', 'columnGap': 8, 'rowGap': 0};
        var4['badges'] = var9;
        var9 = {};
        var9['marginTop'] = var12;
        var4['timebar'] = var9;
        var9 = {'borderTopWidth': 1, 'borderTopColor': null, 'paddingTop': 12};
        var15 = var6[var10];
        var15 = var11.bind(var1)(var15);
        var15 = var15.colors;
        var15 = var15.BACKGROUND_MODIFIER_ACCENT;
        var9['borderTopColor'] = var15;
        var4['voiceChannelDivider'] = var9;
        var9 = {'flexDirection': 'column', 'gap': 8};
        var4['customButtons'] = var9;
        var9 = {'aspectRatio': 1.7777777777777777, 'borderRadius': null, 'overflow': 'hidden'};
        var15 = var6[var10];
        var15 = var11.bind(var1)(var15);
        var15 = var15.radii;
        var15 = var15.xs;
        var9['borderRadius'] = var15;
        var4['streamPreview'] = var9;
        var9 = {'height': 16, 'paddingHorizontal': 6};
        var15 = var6[var10];
        var15 = var11.bind(var1)(var15);
        var15 = var15.colors;
        var15 = var15.STATUS_DANGER_BACKGROUND;
        var9['backgroundColor'] = var15;
        var15 = var6[var10];
        var15 = var11.bind(var1)(var15);
        var15 = var15.radii;
        var15 = var15.sm;
        var9['borderRadius'] = var15;
        var4['liveIndicator'] = var9;
        var9 = {};
        var15 = 'uppercase';
        var9['textTransform'] = var15;
        var4['liveIndicatorText'] = var9;
        var9 = {};
        var9['padding'] = var14;
        var4['voiceActivityCard'] = var9;
        var9 = {'padding': 0, 'marginBottom': 4294967280};
        var4['voiceSettings'] = var9;
        var9 = {'borderTopWidth': 1, 'borderTopColor': null, 'paddingTop': 16, 'marginTop': 4, 'marginHorizontal': 4294967268, 'paddingHorizontal': 28};
        var14 = var6[var10];
        var14 = var11.bind(var1)(var14);
        var14 = var14.colors;
        var14 = var14.BORDER_SUBTLE;
        var9['borderTopColor'] = var14;
        var4['voiceSettingsDivider'] = var9;
        var9 = {'flex': 1, 'gap': 4};
        var4['voiceCallContent'] = var9;
        var9 = {'width': 22, 'height': null, 'justifyContent': 'center'};
        var14 = var6[var12];
        var15 = var5.bind(var1)(var14);
        var14 = var15.isAndroid;
        var14 = var14.bind(var15)();
        if(!var14) { _fun0001_ip = 1067; continue _fun0001 }
 1064:
        var12 = var13;
 1067:
        var9['height'] = var12;
        var4['voiceCallNameIconWrapper'] = var9;
        var9 = {};
        var10 = var6[var10];
        var10 = var11.bind(var1)(var10);
        var10 = var10.radii;
        var10 = var10.xl;
        var9['borderRadius'] = var10;
        var4['guildIcon'] = var9;
        var4 = var7.bind(var8)(var4);
        var _closure1_slot24 = var4;
        var4 = 70;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/user_profile/native/UserProfileActivity.tsx';
        var4 = var5.bind(var6)(var4);
        var2 = function UserProfileActivity(arg1) {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                var1 = arg1;
                var11 = var1.user;
                var _closure2_slot0 = var11;
                var10 = var1.currentUser;
                var _closure2_slot1 = var10;
                var3 = var1.guildId;
                var _closure2_slot2 = var3;
                var13 = var1.style;
                var _closure2_slot3 = var13;
                var1 = _closure1_slot24;
                var4 = undefined;
                var9 = var1.bind(var4)();
                var _closure2_slot4 = var9;
                var2 = _closure1_slot1;
                var14 = _closure1_slot2;
                var1 = 66;
                var1 = var14[var1];
                var6 = var2.bind(var4)(var1);
                var1 = var11.id;
                var1 = var6.bind(var4)(var1);
                var6 = var1.live;
                var20 = var1.stream;
                var _closure2_slot5 = var20;
                var1 = 67;
                var1 = var14[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var7 = var11.id;
                var1['userId'] = var7;
                var1['guildId'] = var3;
                var1 = var2.bind(var4)(var1);
                var8 = var1.voiceChannel;
                var _closure2_slot6 = var8;
                var19 = var1.voiceActivity;
                var _closure2_slot7 = var19;
                var3 = _closure1_slot0;
                var1 = 35;
                var2 = var14[var1];
                var16 = var3.bind(var4)(var2);
                var15 = var16.useStateFromStores;
                var2 = _closure1_slot14;
                var7 = new Array(1);
                var7[0] = var2;
                var2 = function() {
                    _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                        var1 = _closure2_slot6;
                        var5 = null;
                        var1 = var5 != var1;
                        if(!var1) { _fun0018_ip = 64; continue _fun0018 }
 16:
                        var4 = _closure1_slot14;
                        var3 = var4.getCurrentClientVoiceChannelId;
                        var6 = _closure2_slot2;
                        var6 = var5 != var6;
                        var5 = null;
                        if(!var6) { _fun0018_ip = 46; continue _fun0018 }
 42:
                        var5 = _closure2_slot2;
 46:
                        var3 = var3.bind(var4)(var5);
                        var2 = _closure2_slot6;
                        var2 = var2.id;
                        var1 = var3 === var2;
 64:
                        return var1;
                    }
                };
                var7 = var15.bind(var16)(var7, var2);
                var _closure2_slot8 = var7;
                var15 = var11.id;
                var2 = var10.id;
                var2 = var15 === var2;
                var _closure2_slot9 = var2;
                var1 = var14[var1];
                var16 = var3.bind(var4)(var1);
                var15 = var16.useStateFromStores;
                var1 = _closure1_slot13;
                var2 = new Array(2);
                var2[0] = var1;
                var1 = _closure1_slot11;
                var2[1] = var1;
                var1 = function() {
                    _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                        var3 = _closure2_slot9;
                        if(var3) { _fun0019_ip = 39; continue _fun0019 }
 13:
                        var4 = _closure1_slot11;
                        var3 = var4.getStatus;
                        var1 = _closure2_slot0;
                        var1 = var1.id;
                        var3 = var3.bind(var4)(var1);
                        _fun0019_ip = 53; continue _fun0019;
 39:
                        var4 = _closure1_slot13;
                        var1 = var4.getStatus;
                        var3 = var1.bind(var4)();
 53:
                        var1 = _closure1_slot20;
                        var1 = var1.OFFLINE;
                        var1 = var3 === var1;
                        if(var1) { _fun0019_ip = 84; continue _fun0019 }
 70:
                        var2 = _closure1_slot20;
                        var2 = var2.INVISIBLE;
                        var1 = var3 === var2;
 84:
                        return var1;
                    }
                };
                var2 = var15.bind(var16)(var2, var1);
                var1 = 68;
                var1 = var14[var1];
                var14 = var3.bind(var4)(var1);
                var3 = var14.useHangStatusActivity;
                var1 = var11.id;
                var1 = var3.bind(var14)(var1);
                var _closure2_slot10 = var1;
                if(!var2) { _fun0017_ip = 319; continue _fun0017 }
 307:
                var1 = null;
                if(!(var1 != var8)) { _fun0017_ip = 319; continue _fun0017 }
 313:
                if(var7) { _fun0017_ip = 706; continue _fun0017 }
 319:
                var1 = null;
                if(var2) { _fun0017_ip = 704; continue _fun0017 }
 327:
                var15 = var6;
                if(!(var1 != var19)) { _fun0017_ip = 351; continue _fun0017 }
 334:
                var3 = var6.filter;
                var2 = function(arg1) {
                    var2 = _closure2_slot7;
                    var1 = arg1;
                    var1 = var1 !== var2;
                    return var1;
                };
                var15 = var3.bind(var6)(var2);
 351:
                var21 = function renderVoiceActivityCard(arg1) {
                    _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                        var3 = arg1;
                        var1 = _closure2_slot5;
                        var8 = null;
                        if(!(var8 != var1)) { _fun0020_ip = 37; continue _fun0020 }
 16:
                        var1 = _closure2_slot5;
                        var4 = var1.channelId;
                        var1 = var3.id;
                        if(!(var4 !== var1)) { _fun0020_ip = 193; continue _fun0020 }
 37:
                        var1 = _closure2_slot7;
                        if(!(var8 == var1)) { _fun0020_ip = 111; continue _fun0020 }
 45:
                        var1 = _closure2_slot10;
                        if(!(var8 == var1)) { _fun0020_ip = 111; continue _fun0020 }
 53:
                        var6 = _closure1_slot21;
                        var5 = _closure1_slot30;
                        var4 = {};
                        var1 = _closure2_slot0;
                        var4['user'] = var1;
                        var4['channel'] = var3;
                        var1 = _closure2_slot8;
                        var4['isInChannel'] = var1;
                        var1 = _closure2_slot4;
                        var1 = var1.voiceActivityCard;
                        var4['style'] = var1;
                        var1 = undefined;
                        var1 = var6.bind(var1)(var5, var4);
                        _fun0020_ip = 191; continue _fun0020;
 111:
                        var6 = _closure1_slot21;
                        var5 = _closure1_slot28;
                        var4 = {};
                        var7 = _closure2_slot0;
                        var4['user'] = var7;
                        var7 = _closure2_slot1;
                        var4['currentUser'] = var7;
                        var7 = _closure2_slot7;
                        if(!(var8 == var7)) { _fun0020_ip = 155; continue _fun0020 }
 149:
                        var7 = _closure2_slot10;
                        _fun0020_ip = 159; continue _fun0020;
 155:
                        var7 = _closure2_slot7;
 159:
                        var4['activity'] = var7;
                        var4['voiceChannel'] = var3;
                        var3 = _closure2_slot4;
                        var3 = var3.voiceActivityCard;
                        var4['style'] = var3;
                        var3 = undefined;
                        var1 = var6.bind(var3)(var5, var4);
 191:
                        _fun0020_ip = 254; continue _fun0020;
 193:
                        var5 = _closure1_slot21;
                        var4 = _closure1_slot29;
                        var3 = {};
                        var6 = _closure2_slot0;
                        var3['user'] = var6;
                        var6 = _closure2_slot5;
                        var3['stream'] = var6;
                        var6 = _closure2_slot7;
                        var3['activity'] = var6;
                        var2 = _closure2_slot4;
                        var2 = var2.voiceActivityCard;
                        var3['style'] = var2;
                        var2 = undefined;
                        var1 = var5.bind(var2)(var4, var3);
 254:
                        return var1;
                    }
                };
                var6 = _closure1_slot22;
                var3 = _closure1_slot23;
                var2 = {};
                var14 = var1 != var8;
                if(!var14) { _fun0017_ip = 592; continue _fun0017 }
 378:
                if(var7) { _fun0017_ip = 449; continue _fun0017 }
 381:
                var17 = _closure1_slot21;
                var16 = _closure1_slot1;
                var18 = _closure1_slot2;
                var7 = 40;
                var7 = var18[var7];
                var16 = var16.bind(var4)(var7);
                var7 = {};
                var22 = var9.card;
                var18 = new Array(2);
                var18[0] = var22;
                var18[1] = var13;
                var7['style'] = var18;
                var18 = var21.bind(var4)(var8);
                var7['children'] = var18;
                var7 = var17.bind(var4)(var16, var7);
                _fun0017_ip = 589; continue _fun0017;
 449:
                var18 = _closure1_slot22;
                var23 = _closure1_slot1;
                var25 = _closure1_slot2;
                var16 = 40;
                var16 = var25[var16];
                var17 = var23.bind(var4)(var16);
                var16 = {};
                var24 = var9.card;
                var22 = new Array(2);
                var22[0] = var24;
                var22[1] = var13;
                var16['style'] = var22;
                var22 = var21.bind(var4)(var8);
                var21 = new Array(2);
                var21[0] = var22;
                var24 = _closure1_slot21;
                var22 = 69;
                var22 = var25[var22];
                var23 = var23.bind(var4)(var22);
                var22 = {};
                var22['user'] = var11;
                var22['currentUser'] = var10;
                var22['channel'] = var8;
                var26 = var9.voiceSettings;
                var25 = new Array(2);
                var25[0] = var26;
                var26 = var9.voiceSettingsDivider;
                var25[1] = var26;
                var22['style'] = var25;
                var22 = var24.bind(var4)(var23, var22);
                var21[1] = var22;
                var16['children'] = var21;
                var7 = var18.bind(var4)(var17, var16);
 589:
                var14 = var7;
 592:
                var7 = new Array(3);
                var7[0] = var14;
                var14 = var1 != var20;
                if(!var14) { _fun0017_ip = 630; continue _fun0017 }
 607:
                var17 = var20.channelId;
                var18 = var1 == var8;
                var16 = undefined;
                if(var18) { _fun0017_ip = 626; continue _fun0017 }
 621:
                var16 = var8.id;
 626:
                var14 = var17 !== var16;
 630:
                if(!var14) { _fun0017_ip = 667; continue _fun0017 }
 633:
                var18 = _closure1_slot21;
                var17 = _closure1_slot29;
                var16 = {};
                var16['user'] = var11;
                var16['stream'] = var20;
                var16['activity'] = var19;
                var16['style'] = var13;
                var14 = var18.bind(var4)(var17, var16);
 667:
                var7[1] = var14;
                var14 = var15.map;
                var12 = function(arg1, arg2) {
                    _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                        var1 = arg1;
                        var5 = arg2;
                        var4 = _closure1_slot21;
                        var3 = _closure1_slot28;
                        var2 = {};
                        var7 = _closure2_slot0;
                        var2['user'] = var7;
                        var7 = _closure2_slot1;
                        var2['currentUser'] = var7;
                        var2['activity'] = var1;
                        var6 = _closure2_slot3;
                        var2['style'] = var6;
                        var1 = var1.application_id;
                        var6 = null;
                        if(!(var6 != var1)) { _fun0021_ip = 67; continue _fun0021 }
 64:
                        var5 = var1;
 67:
                        var1 = undefined;
                        var1 = var4.bind(var1)(var3, var2, var5);
                        return var1;
                    }
                };
                var12 = var14.bind(var15)(var12);
                var7[2] = var12;
                var2['children'] = var7;
                var2 = var6.bind(var4)(var3, var2);
                return var2;
 704:
                return var1;
 706:
                var3 = _closure1_slot21;
                var6 = _closure1_slot1;
                var12 = _closure1_slot2;
                var1 = 40;
                var1 = var12[var1];
                var2 = var6.bind(var4)(var1);
                var1 = {};
                var14 = var9.card;
                var7 = new Array(2);
                var7[0] = var14;
                var7[1] = var13;
                var1['style'] = var7;
                var7 = _closure1_slot21;
                var5 = 69;
                var5 = var12[var5];
                var6 = var6.bind(var4)(var5);
                var5 = {};
                var5['user'] = var11;
                var5['currentUser'] = var10;
                var5['channel'] = var8;
                var10 = var9.voiceSettings;
                var8 = new Array(2);
                var8[0] = var10;
                var9 = var9.voiceSettingsDivider;
                var8[1] = var9;
                var5['style'] = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var3['default'] = var2;
        return var1;
    }
})();