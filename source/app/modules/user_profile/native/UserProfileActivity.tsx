// app/modules/user_profile/native/UserProfileActivity.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var5 = require;
        var13 = metroImportDefault;
        var3 = exports;
        var6 = dependencyMap;
        var _closure1_slot0 = var5;
        var _closure1_slot1 = var13;
        var _closure1_slot2 = var6;
        var1 = function ActivityCardText(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
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
                if(!(var4 === var1)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                var1 = var2.trim;
                var7 = var1.bind(var2)();
case 2:
                var2 = var3 == var7;
                var1 = null;
                if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var2 = '';
                var1 = null;
                if(!(var2 !== var7)) { _fun0002_ip = 4; continue _fun0002 }
case 6:
                var5 = _closure1_slot22;
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
case 4:
                return var1;
            }
        };
        var _closure1_slot26 = var1;
        var1 = function MaybeLink(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var1 = arg1;
                var4 = var1.href;
                var _closure2_slot0 = var4;
                var2 = var1.children;
                var3 = null;
                var1 = var2;
                if(!(var3 != var4)) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                var5 = _closure1_slot22;
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
case 7:
                return var1;
            }
        };
        var _closure1_slot27 = var1;
        var1 = function ActivityCardBody(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var1 = arg1;
                var10 = var1.user;
                var _closure2_slot0 = var10;
                var14 = var1.activity;
                var _closure2_slot1 = var14;
                var6 = var1.application;
                var1 = var1.onAction;
                var _closure2_slot2 = var1;
                var1 = _closure1_slot25;
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
                var1 = _closure1_slot17;
                var1 = var1.HANG_STATUS;
                var9 = var2 === var1;
                var _closure2_slot3 = var9;
                var3 = _closure1_slot23;
                var2 = _closure1_slot6;
                var1 = {};
                var5 = var15.body;
                var1['style'] = var5;
                var5 = var10.bot;
                var6 = !var5;
                if(!var6) { _fun0004_ip = 9; continue _fun0004 }
case 10:
                var26 = null;
                if(!(var26 != var22)) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var5 = 21;
                var5 = var8[var5];
                var5 = var7.bind(var4)(var5);
                var5 = var5.bind(var4)(var14);
                if(var5) { _fun0004_ip = 13; continue _fun0004 }
case 11:
                if(!(var26 == var22)) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                var13 = _closure1_slot22;
                if(var9) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                var7 = _closure1_slot6;
                var5 = {};
                var16 = var15.imageContainer;
                var8 = new Array(2);
                var8[0] = var16;
                var16 = var15.imageAspectRatio;
                var8[1] = var16;
                var5['style'] = var8;
                var17 = _closure1_slot22;
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
                if(var18) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                var18 = var19.BLACK;
                _fun0004_ip = 20; continue _fun0004;
case 18:
                var18 = var19.WHITE;
case 20:
                var8['color'] = var18;
                var8 = var17.bind(var4)(var16, var8);
                var5['children'] = var8;
                var5 = var13.bind(var4)(var7, var5);
                _fun0004_ip = 21; continue _fun0004;
case 16:
                var8 = _closure1_slot1;
                var16 = _closure1_slot2;
                var7 = 27;
                var7 = var16[var7];
                var8 = var8.bind(var4)(var7);
                var7 = {};
                var16 = var10.id;
                var7['userId'] = var16;
                var16 = 24;
                var7['size'] = var16;
                var16 = var15.smallImage;
                var7['emojiStyle'] = var16;
                var7['hangStatusActivity'] = var14;
                var5 = var13.bind(var4)(var8, var7);
case 21:
                _fun0004_ip = 22; continue _fun0004;
case 14:
                var13 = _closure1_slot23;
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
                if(var17) { _fun0004_ip = 23; continue _fun0004 }
case 24:
                var17 = var15.imageAspectRatio;
                _fun0004_ip = 25; continue _fun0004;
case 23:
                var17 = var15.crunchyrollImageAspectRatio;
case 25:
                var16[1] = var17;
                var7['style'] = var16;
                var18 = _closure1_slot22;
                var17 = _closure1_slot27;
                var16 = {};
                var20 = var14.assets;
                var21 = var26 == var20;
                var19 = undefined;
                if(var21) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                var19 = var20.large_url;
case 26:
                var16['href'] = var19;
                var21 = _closure1_slot22;
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
                if(!var17) { _fun0004_ip = 28; continue _fun0004 }
case 29:
                var20 = _closure1_slot22;
                var19 = _closure1_slot6;
                var18 = {};
                var21 = var15.smallImageBackground;
                var18['style'] = var21;
                var24 = _closure1_slot22;
                var23 = _closure1_slot27;
                var21 = {};
                var27 = var14.assets;
                var29 = var26 == var27;
                var26 = undefined;
                if(var29) { _fun0004_ip = 30; continue _fun0004 }
case 31:
                var26 = var27.small_url;
case 30:
                var21['href'] = var26;
                var27 = _closure1_slot22;
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
case 28:
                var16[1] = var17;
                var7['children'] = var16;
                var5 = var13.bind(var4)(var8, var7);
case 22:
                _fun0004_ip = 32; continue _fun0004;
case 13:
                var13 = _closure1_slot22;
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
                var16 = var16.sjjOk2;
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
                var18 = _closure1_slot22;
                var17 = _closure1_slot6;
                var16 = {};
                var20 = var15.imageContainer;
                var19 = new Array(2);
                var19[0] = var20;
                var20 = var15.imageAspectRatio;
                var19[1] = var20;
                var16['style'] = var19;
                var21 = _closure1_slot22;
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
case 32:
                var6 = var5;
case 9:
                var5 = new Array(2);
                var5[0] = var6;
                var8 = _closure1_slot23;
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
                if(var13) { _fun0004_ip = 33; continue _fun0004 }
case 34:
                if(!var9) { _fun0004_ip = 35; continue _fun0004 }
case 36:
                var13 = _closure1_slot1;
                var17 = _closure1_slot2;
                var9 = 30;
                var9 = var17[var9];
                var9 = var13.bind(var4)(var9);
                var9 = var9.bind(var4)(var14);
                if(var9) { _fun0004_ip = 35; continue _fun0004 }
case 37:
                var17 = _closure1_slot22;
                var13 = _closure1_slot27;
                var9 = {};
                var18 = var14.details_url;
                var9['href'] = var18;
                var20 = _closure1_slot22;
                var19 = _closure1_slot26;
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
                var21 = var21.74vS/x;
                var21 = var22.bind(var23)(var21);
                var18['children'] = var21;
                var18 = var20.bind(var4)(var19, var18);
                var9['children'] = var18;
                var13 = var17.bind(var4)(var13, var9);
                _fun0004_ip = 38; continue _fun0004;
case 35:
                var18 = _closure1_slot22;
                var17 = _closure1_slot27;
                var9 = {};
                var19 = var14.details_url;
                var9['href'] = var19;
                var21 = _closure1_slot22;
                var20 = _closure1_slot26;
                var19 = {};
                var22 = 'text-md/semibold';
                var19['variant'] = var22;
                var23 = _closure1_slot1;
                var24 = _closure1_slot2;
                var22 = 30;
                var22 = var24[var22];
                var22 = var23.bind(var4)(var22);
                var22 = var22.bind(var4)(var14);
                if(var22) { _fun0004_ip = 39; continue _fun0004 }
case 40:
                var22 = var14.details;
                var23 = null;
                if(!(var23 == var22)) { _fun0004_ip = 41; continue _fun0004 }
case 42:
                var22 = var14.name;
case 41:
                _fun0004_ip = 43; continue _fun0004;
case 39:
                var22 = var14.name;
case 43:
                var19['children'] = var22;
                var19 = var21.bind(var4)(var20, var19);
                var9['children'] = var19;
                var13 = var18.bind(var4)(var17, var9);
case 38:
                _fun0004_ip = 44; continue _fun0004;
case 33:
                var18 = _closure1_slot22;
                var17 = _closure1_slot26;
                var9 = {};
                var19 = 'text-md/semibold';
                var9['variant'] = var19;
                var21 = _closure1_slot22;
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
case 44:
                var9 = new Array(4);
                var9[0] = var13;
                var12 = function() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 21;
                        var1 = var3[var1];
                        var5 = undefined;
                        var2 = var2.bind(var5)(var1);
                        var1 = _closure2_slot1;
                        var2 = var2.bind(var5)(var1);
                        var1 = _closure2_slot1;
                        if(var2) { _fun0005_ip = 45; continue _fun0005 }
case 46:
                        var3 = var1.details;
                        var2 = _closure2_slot3;
                        if(!var2) { _fun0005_ip = 47; continue _fun0005 }
case 48:
                        var4 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var2 = 30;
                        var2 = var7[var2];
                        var4 = var4.bind(var5)(var2);
                        var2 = _closure2_slot1;
                        var2 = var4.bind(var5)(var2);
                        if(var2) { _fun0005_ip = 47; continue _fun0005 }
case 49:
                        var4 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var2 = 31;
                        var2 = var7[var2];
                        var8 = var4.bind(var5)(var2);
                        var7 = var8.getHangStatusText;
                        var2 = _closure2_slot0;
                        var4 = var2.id;
                        var2 = _closure2_slot1;
                        var11 = var7.bind(var8)(var4, var2);
                        _fun0005_ip = 50; continue _fun0005;
case 47:
                        var4 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var2 = 30;
                        var2 = var7[var2];
                        var4 = var4.bind(var5)(var2);
                        var2 = _closure2_slot1;
                        var2 = var4.bind(var5)(var2);
                        if(var2) { _fun0005_ip = 51; continue _fun0005 }
case 52:
                        var4 = _closure2_slot1;
                        var7 = var4.state;
                        var4 = null;
                        var2 = var4 == var7;
case 51:
                        var11 = var3;
                        if(var2) { _fun0005_ip = 50; continue _fun0005 }
case 53:
                        var2 = _closure2_slot1;
                        var11 = var2.state;
case 50:
                        var4 = _closure1_slot22;
                        var3 = _closure1_slot27;
                        var2 = {};
                        var7 = _closure2_slot1;
                        var7 = var7.state_url;
                        var2['href'] = var7;
                        var10 = _closure1_slot22;
                        var8 = _closure1_slot26;
                        var7 = {'variant': 'text-xs/medium', 'lineClamp': 1};
                        var7['children'] = var11;
                        var7 = var10.bind(var5)(var8, var7);
                        var2['children'] = var7;
                        var2 = var4.bind(var5)(var3, var2);
                        return var2;
case 45:
                        var2 = var1.state;
                        var3 = null;
                        var1 = var3 == var2;
                        var10 = undefined;
                        if(var1) { _fun0005_ip = 54; continue _fun0005 }
case 55:
                        var1 = var2.trim;
                        var10 = var1.bind(var2)();
case 54:
                        var2 = var3 == var10;
                        var1 = null;
                        if(var2) { _fun0005_ip = 56; continue _fun0005 }
case 57:
                        var2 = '';
                        var1 = null;
                        if(!(var2 !== var10)) { _fun0005_ip = 56; continue _fun0005 }
case 58:
                        var4 = _closure1_slot22;
                        var3 = _closure1_slot26;
                        var2 = {'variant': 'text-xs/medium', 'lineClamp': 1};
                        var8 = _closure1_slot22;
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
case 56:
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
                if(var13) { _fun0004_ip = 59; continue _fun0004 }
case 60:
                var17 = var14.type;
                var13 = _closure1_slot17;
                var13 = var13.WATCHING;
                var12 = null;
                if(!(var17 !== var13)) { _fun0004_ip = 59; continue _fun0004 }
case 61:
                var17 = _closure1_slot1;
                var13 = _closure1_slot2;
                var18 = 30;
                var13 = var13[var18];
                var13 = var17.bind(var4)(var13);
                var13 = var13.bind(var4)(var14);
                if(!var13) { _fun0004_ip = 62; continue _fun0004 }
case 63:
                var17 = _closure1_slot1;
                var19 = _closure1_slot2;
                var13 = 32;
                var13 = var19[var13];
                var13 = var17.bind(var4)(var13);
                var13 = var13.bind(var4)(var14);
                if(var13) { _fun0004_ip = 62; continue _fun0004 }
case 64:
                var13 = var14.party;
                var13 = var16 != var13;
                var12 = null;
                if(var13) { _fun0004_ip = 59; continue _fun0004 }
case 62:
                var17 = _closure1_slot1;
                var13 = _closure1_slot2;
                var13 = var13[var18];
                var13 = var17.bind(var4)(var13);
                var13 = var13.bind(var4)(var14);
                if(var13) { _fun0004_ip = 65; continue _fun0004 }
case 66:
                var18 = _closure1_slot22;
                var17 = _closure1_slot27;
                var13 = {};
                var20 = var14.assets;
                var21 = var16 == var20;
                var19 = undefined;
                if(var21) { _fun0004_ip = 67; continue _fun0004 }
case 68:
                var19 = var20.large_url;
case 67:
                var13['href'] = var19;
                var21 = _closure1_slot22;
                var20 = _closure1_slot26;
                var19 = {'variant': 'text-xs/medium', 'lineClamp': 1};
                var23 = var14.assets;
                var24 = var16 == var23;
                var22 = undefined;
                if(var24) { _fun0004_ip = 69; continue _fun0004 }
case 70:
                var22 = var23.large_text;
case 69:
                var19['children'] = var22;
                var19 = var21.bind(var4)(var20, var19);
                var13['children'] = var19;
                var12 = var18.bind(var4)(var17, var13);
                _fun0004_ip = 59; continue _fun0004;
case 65:
                var17 = var14.party;
                var18 = var16 == var17;
                var13 = undefined;
                if(var18) { _fun0004_ip = 71; continue _fun0004 }
case 72:
                var13 = var17.size;
case 71:
                var13 = var16 != var13;
                if(!var13) { _fun0004_ip = 73; continue _fun0004 }
case 74:
                var16 = var14.party;
                var16 = var16.size;
                var17 = var16.length;
                var16 = 2;
                var13 = var17 >= var16;
case 73:
                var18 = '';
                if(!var13) { _fun0004_ip = 75; continue _fun0004 }
case 76:
                var13 = var14.party;
                var13 = var13.size;
                var21 = 1;
                var13 = var13[var21];
                var22 = 0;
                if(!(var22 !== var13)) { _fun0004_ip = 77; continue _fun0004 }
case 78:
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
                var16 = var13.u//9By;
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
                _fun0004_ip = 79; continue _fun0004;
case 77:
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
case 79:
                var18 = var13;
case 75:
                var17 = _closure1_slot22;
                var16 = _closure1_slot26;
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
case 59:
                var9[2] = var12;
                var10 = var10.bot;
                var10 = !var10;
                if(!var10) { _fun0004_ip = 80; continue _fun0004 }
case 81:
                var13 = _closure1_slot22;
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
case 80:
                var9[3] = var10;
                var6['children'] = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var _closure1_slot28 = var1;
        var1 = function ActivityCard(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var1 = arg1;
                var21 = var1.user;
                var _closure2_slot0 = var21;
                var2 = var1.currentUser;
                var _closure2_slot1 = var2;
                var13 = var1.activity;
                var _closure2_slot2 = var13;
                var17 = var1.voiceChannel;
                var _closure2_slot3 = var17;
                var11 = var1.style;
                var5 = undefined;
                var _closure2_slot7 = var5;
                var _closure2_slot8 = var5;
                var1 = _closure1_slot25;
                var15 = var1.bind(var5)();
                var _closure2_slot4 = var15;
                var3 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 34;
                var1 = var7[var1];
                var1 = var3.bind(var5)(var1);
                var23 = var1.bind(var5)(var13);
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
case 0:
                        var3 = _closure1_slot14;
                        var2 = var3.isInChannel;
                        var5 = _closure2_slot3;
                        var1 = null;
                        var5 = var1 == var5;
                        var1 = undefined;
                        if(var5) { _fun0007_ip = 82; continue _fun0007 }
case 83:
                        var4 = _closure2_slot3;
                        var1 = var4.id;
case 82:
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    }
                };
                var1 = var6.bind(var8)(var2, var1);
                var _closure2_slot5 = var1;
                var2 = var13.type;
                var1 = _closure1_slot17;
                var1 = var1.HANG_STATUS;
                var1 = var2 === var1;
                var _closure2_slot6 = var1;
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
                var14 = null;
                var8 = var14 == var17;
                var7 = undefined;
                if(var8) { _fun0006_ip = 84; continue _fun0006 }
case 85:
                var7 = var17.id;
case 84:
                var1['voiceChannelId'] = var7;
                var1['user'] = var21;
                var1['activity'] = var13;
                var1['analyticsLocations'] = var6;
                var16 = var3.bind(var5)(var1);
                _closure2_slot7 = var16;
                var7 = _closure1_slot1;
                var1 = _closure1_slot2;
                var3 = 39;
                var3 = var1[var3];
                var7 = var7.bind(var5)(var3);
                var3 = {};
                var8 = var21.id;
                var3['userId'] = var8;
                var3['onAction'] = var16;
                var3 = var7.bind(var5)(var3);
                var3 = _closure1_slot0;
                var7 = var1[var4];
                var18 = var3.bind(var5)(var7);
                var9 = var18.useStateFromStores;
                var7 = _closure1_slot10;
                var8 = new Array(3);
                var8[0] = var7;
                var7 = _closure1_slot14;
                var8[1] = var7;
                var7 = _closure1_slot9;
                var8[2] = var7;
                var7 = function() {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 32;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = _closure2_slot2;
                        var2 = var3.bind(var1)(var2);
                        if(var2) { _fun0008_ip = 86; continue _fun0008 }
case 82:
                        var3 = _closure2_slot6;
                        var7 = null;
                        var2 = null;
                        if(!var3) { _fun0008_ip = 87; continue _fun0008 }
case 88:
                        var6 = _closure1_slot10;
                        var4 = var6.getGuild;
                        var3 = _closure2_slot3;
                        var7 = var7 == var3;
                        var3 = undefined;
                        if(var7) { _fun0008_ip = 89; continue _fun0008 }
case 7:
                        var7 = _closure2_slot3;
                        var3 = var7.guild_id;
case 89:
                        var2 = var4.bind(var6)(var3);
case 87:
                        return var2;
case 86:
                        var7 = _closure1_slot14;
                        var6 = var7.getVoiceStateForSession;
                        var2 = _closure2_slot0;
                        var3 = var2.id;
                        var2 = _closure2_slot2;
                        var4 = null;
                        var9 = var4 == var2;
                        var2 = undefined;
                        if(var9) { _fun0008_ip = 90; continue _fun0008 }
case 91:
                        var8 = _closure2_slot2;
                        var2 = var8.session_id;
case 90:
                        var2 = var6.bind(var7)(var3, var2);
                        var3 = var4 == var2;
                        var7 = undefined;
                        if(var3) { _fun0008_ip = 92; continue _fun0008 }
case 93:
                        var7 = var2.channelId;
case 92:
                        var3 = _closure1_slot10;
                        var2 = var3.getGuild;
                        var6 = _closure1_slot9;
                        var5 = var6.getChannel;
                        var5 = var5.bind(var6)(var7);
                        var4 = var4 == var5;
                        var1 = undefined;
                        if(var4) { _fun0008_ip = 94; continue _fun0008 }
case 95:
                        var4 = var5.getGuildId;
                        var1 = var4.bind(var5)();
case 94:
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    }
                };
                var18 = var9.bind(var18)(var8, var7);
                var1 = var1[var4];
                var7 = var3.bind(var5)(var1);
                var4 = var7.useStateFromStores;
                var1 = _closure1_slot7;
                var3 = new Array(1);
                var3[0] = var1;
                var1 = function() {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var1 = _closure2_slot2;
                        var3 = var1.application_id;
                        var1 = null;
                        if(!(var1 == var3)) { _fun0009_ip = 96; continue _fun0009 }
case 97:
                        var3 = _closure2_slot2;
                        var3 = var3.name;
                        var3 = var1 != var3;
                        var1 = null;
                        if(!var3) { _fun0009_ip = 5; continue _fun0009 }
case 98:
                        var5 = _closure1_slot7;
                        var4 = var5.getApplicationByName;
                        var3 = _closure2_slot2;
                        var3 = var3.name;
                        var1 = var4.bind(var5)(var3);
case 5:
                        _fun0009_ip = 99; continue _fun0009;
case 96:
                        var4 = _closure1_slot7;
                        var3 = var4.getApplication;
                        var2 = _closure2_slot2;
                        var2 = var2.application_id;
                        var1 = var3.bind(var4)(var2);
case 99:
                        return var1;
                    }
                };
                var20 = var4.bind(var7)(var3, var1);
                _closure2_slot8 = var20;
                var4 = var13.type;
                var1 = _closure1_slot17;
                var3 = var1.CUSTOM_STATUS;
                var1 = null;
                if(!(var4 !== var3)) { _fun0006_ip = 100; continue _fun0006 }
case 101:
                var4 = var13.type;
                var3 = _closure1_slot17;
                var3 = var3.HANG_STATUS;
                if(!(var4 === var3)) { _fun0006_ip = 102; continue _fun0006 }
case 103:
                var3 = var14 == var17;
                var1 = null;
                if(var3) { _fun0006_ip = 100; continue _fun0006 }
case 102:
                var4 = _closure1_slot22;
                var3 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = var9[var2];
                var2 = var3.bind(var5)(var2);
                var3 = var2.AnalyticsLocationProvider;
                var2 = {};
                var2['value'] = var6;
                var8 = _closure1_slot23;
                var7 = _closure1_slot1;
                var6 = 40;
                var6 = var9[var6];
                var7 = var7.bind(var5)(var6);
                var6 = {};
                var19 = var15.card;
                var9 = new Array(2);
                var9[0] = var19;
                var9[1] = var11;
                var6['style'] = var9;
                var9 = var23.text;
                var6['title'] = var9;
                var9 = var15.cardTitle;
                var6['titleStyle'] = var9;
                var9 = var23.platformIcon;
                var9 = var14 != var9;
                if(!var9) { _fun0006_ip = 104; continue _fun0006 }
case 105:
                var22 = _closure1_slot22;
                var19 = _closure1_slot1;
                var27 = _closure1_slot2;
                var25 = 41;
                var11 = var27[var25];
                var19 = var19.bind(var5)(var11);
                var11 = {};
                var24 = var15.cardTitleIcon;
                var11['style'] = var24;
                var26 = _closure1_slot0;
                var24 = 25;
                var24 = var27[var24];
                var26 = var26.bind(var5)(var24);
                var24 = var26.makeSource;
                var27 = var23.platformIcon;
                var28 = var14 == var27;
                var23 = undefined;
                if(var28) { _fun0006_ip = 106; continue _fun0006 }
case 107:
                var23 = var27.whitePNG;
case 106:
                var23 = var24.bind(var26)(var23);
                var11['source'] = var23;
                var24 = _closure1_slot0;
                var23 = _closure1_slot2;
                var23 = var23[var25];
                var23 = var24.bind(var5)(var23);
                var23 = var23.IconSizes;
                var23 = var23.SMALL_14;
                var11['size'] = var23;
                var23 = true;
                var11['disableColor'] = var23;
                var9 = var22.bind(var5)(var19, var11);
case 104:
                var6['titleIcon'] = var9;
                var19 = _closure1_slot22;
                var11 = _closure1_slot28;
                var9 = {};
                var9['user'] = var21;
                var9['activity'] = var13;
                var9['application'] = var20;
                var9['onAction'] = var16;
                var11 = var19.bind(var5)(var11, var9);
                var9 = new Array(4);
                var9[0] = var11;
                var19 = _closure1_slot1;
                var20 = _closure1_slot2;
                var11 = 42;
                var11 = var20[var11];
                var11 = var19.bind(var5)(var11);
                var19 = var11.bind(var5)(var13);
                var11 = null;
                if(!var19) { _fun0006_ip = 108; continue _fun0006 }
case 109:
                var13 = var13.timestamps;
                var22 = var13.start;
                var21 = var13.end;
                var20 = _closure1_slot22;
                var19 = _closure1_slot1;
                var23 = _closure1_slot2;
                var13 = 43;
                var13 = var23[var13];
                var19 = var19.bind(var5)(var13);
                var13 = {};
                var13['start'] = var22;
                var13['end'] = var21;
                var11 = var20.bind(var5)(var19, var13);
case 108:
                var9[1] = var11;
                var13 = var14 == var17;
                var11 = null;
                if(var13) { _fun0006_ip = 110; continue _fun0006 }
case 111:
                var13 = var14 == var18;
                var11 = null;
                if(var13) { _fun0006_ip = 110; continue _fun0006 }
case 112:
                var14 = _closure1_slot22;
                var13 = _closure1_slot1;
                var19 = _closure1_slot2;
                var12 = 44;
                var12 = var19[var12];
                var13 = var13.bind(var5)(var12);
                var12 = {};
                var12['guild'] = var18;
                var12['channel'] = var17;
                var12['onAction'] = var16;
                var15 = var15.voiceChannelDivider;
                var12['style'] = var15;
                var11 = var14.bind(var5)(var13, var12);
case 110:
                var9[2] = var11;
                var10 = function() {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 45;
                        var1 = var3[var1];
                        var4 = undefined;
                        var2 = var2.bind(var4)(var1);
                        var1 = _closure2_slot2;
                        var1 = var2.bind(var4)(var1);
                        if(var1) { _fun0010_ip = 113; continue _fun0010 }
case 3:
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 47;
                        var1 = var3[var1];
                        var2 = var2.bind(var4)(var1);
                        var1 = _closure2_slot2;
                        var1 = var2.bind(var4)(var1);
                        if(var1) { _fun0010_ip = 114; continue _fun0010 }
case 115:
                        var1 = _closure2_slot0;
                        var2 = var1.id;
                        var1 = _closure2_slot1;
                        var1 = var1.id;
                        if(!(var2 !== var1)) { _fun0010_ip = 116; continue _fun0010 }
case 117:
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 21;
                        var1 = var3[var1];
                        var2 = var2.bind(var4)(var1);
                        var1 = _closure2_slot2;
                        var1 = var2.bind(var4)(var1);
                        if(var1) { _fun0010_ip = 118; continue _fun0010 }
case 119:
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 32;
                        var1 = var3[var1];
                        var2 = var2.bind(var4)(var1);
                        var1 = _closure2_slot2;
                        var1 = var2.bind(var4)(var1);
                        if(var1) { _fun0010_ip = 120; continue _fun0010 }
case 121:
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 30;
                        var1 = var3[var1];
                        var2 = var2.bind(var4)(var1);
                        var1 = _closure2_slot2;
                        var1 = var2.bind(var4)(var1);
                        if(!var1) { _fun0010_ip = 122; continue _fun0010 }
case 123:
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 16;
                        var1 = var3[var1];
                        var2 = var2.bind(var4)(var1);
                        var1 = var2.isIOS;
                        var2 = var1.bind(var2)();
                        var1 = _closure1_slot16;
                        if(var2) { _fun0010_ip = 124; continue _fun0010 }
case 125:
                        var7 = var1.ANDROID;
                        _fun0010_ip = 126; continue _fun0010;
case 124:
                        var7 = var1.IOS;
case 126:
                        var1 = global;
                        var9 = var1.Set;
                        var1 = _closure2_slot2;
                        var1 = var1.supported_platforms;
                        var2 = null;
                        if(!(var2 == var1)) { _fun0010_ip = 127; continue _fun0010 }
case 128:
                        var1 = new Array(0);
case 127:
                        var3 = var9.prototype;
                        var3 = Object.create(var3, {constructor: {value: var9}});
                        var14 = var3;
                        var13 = var1;
                        var1 = new var14[var9](var13, var12);
                        var3 = var1 instanceof Object ? var1 : var3;
                        var1 = var3.has;
                        var7 = var1.bind(var3)(var7);
                        var1 = _closure2_slot2;
                        var1 = var1.party;
                        var3 = var2 != var1;
                        var1 = _closure2_slot8;
                        var9 = var2 == var1;
                        var1 = undefined;
                        if(var9) { _fun0010_ip = 129; continue _fun0010 }
case 130:
                        var9 = _closure2_slot8;
                        var1 = var9.deepLinkUri;
case 129:
                        var1 = var2 != var1;
                        if(!var7) { _fun0010_ip = 122; continue _fun0010 }
case 131:
                        if(!var3) { _fun0010_ip = 122; continue _fun0010 }
case 132:
                        if(!var1) { _fun0010_ip = 122; continue _fun0010 }
case 133:
                        var1 = _closure2_slot2;
                        var1 = var1.session_id;
                        if(!(var2 != var1)) { _fun0010_ip = 122; continue _fun0010 }
case 134:
                        var1 = _closure2_slot8;
                        if(!(var2 == var1)) { _fun0010_ip = 135; continue _fun0010 }
case 122:
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 48;
                        var1 = var3[var1];
                        var2 = var2.bind(var4)(var1);
                        var1 = _closure2_slot2;
                        var1 = var2.bind(var4)(var1);
                        if(var1) { _fun0010_ip = 136; continue _fun0010 }
case 137:
                        var1 = _closure2_slot6;
                        if(!var1) { _fun0010_ip = 138; continue _fun0010 }
case 139:
                        var2 = _closure2_slot3;
                        var1 = null;
                        if(!(var1 == var2)) { _fun0010_ip = 140; continue _fun0010 }
case 138:
                        var1 = _closure2_slot2;
                        var1 = var1.buttons;
                        var3 = null;
                        var2 = var3 != var1;
                        var1 = null;
                        if(!var2) { _fun0010_ip = 141; continue _fun0010 }
case 142:
                        var2 = _closure2_slot2;
                        var2 = var2.buttons;
                        var7 = var2.length;
                        var2 = 0;
                        var2 = var7 > var2;
                        var1 = null;
                        if(!var2) { _fun0010_ip = 141; continue _fun0010 }
case 143:
                        var7 = _closure1_slot22;
                        var3 = _closure1_slot6;
                        var2 = {};
                        var9 = _closure2_slot4;
                        var9 = var9.customButtons;
                        var2['style'] = var9;
                        var9 = _closure2_slot2;
                        var11 = var9.buttons;
                        var10 = var11.map;
                        var9 = function(arg1, arg2) {
                            var5 = arg2;
                            var4 = _closure1_slot22;
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
                            var7 = _closure2_slot2;
                            var1['activity'] = var7;
                            var6 = _closure2_slot7;
                            var1['onAction'] = var6;
                            var1 = var4.bind(var3)(var2, var1, var5);
                            return var1;
                        };
                        var9 = var10.bind(var11)(var9);
                        var2['children'] = var9;
                        var1 = var7.bind(var4)(var3, var2);
case 141:
                        _fun0010_ip = 144; continue _fun0010;
case 140:
                        var7 = _closure1_slot22;
                        var3 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var2 = 46;
                        var2 = var9[var2];
                        var2 = var3.bind(var4)(var2);
                        var3 = var2.VoiceChannelButtons;
                        var2 = {};
                        var9 = _closure2_slot3;
                        var2['channel'] = var9;
                        var9 = _closure2_slot5;
                        var2['isInChannel'] = var9;
                        var8 = function onAction(arg1) {
                            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                                var3 = _closure2_slot7;
                                var1 = undefined;
                                var2 = arg1;
                                var2 = var3.bind(var1)(var2);
                                var8 = _closure1_slot1;
                                var9 = _closure1_slot2;
                                var3 = 49;
                                var3 = var9[var3];
                                var5 = var8.bind(var1)(var3);
                                var4 = var5.track;
                                var2 = _closure1_slot18;
                                var3 = var2.HANG_STATUS_CTA_CLICKED;
                                var2 = {};
                                var7 = 'UserProfilePopout';
                                var2['source'] = var7;
                                var7 = 50;
                                var7 = var9[var7];
                                var8 = var8.bind(var1)(var7);
                                var7 = _closure2_slot3;
                                var7 = var7.id;
                                var10 = var8.bind(var1)(var7);
                                var11 = var2;
                                var7 = copyDataProperties(var11, var10);
                                var7 = _closure2_slot0;
                                var8 = var7.id;
                                var7 = 'other_user_id';
                                var2[var7] = var8;
                                var6 = _closure2_slot5;
                                var7 = 'join';
                                if(!var6) { _fun0011_ip = 90; continue _fun0011 }
case 145:
                                var7 = 'open';
case 90:
                                var6 = 'cta_type';
                                var2[var6] = var7;
                                var2 = var4.bind(var5)(var3, var2);
                                return var1;
                            }
                        };
                        var2['onAction'] = var8;
                        var1 = var7.bind(var4)(var3, var2);
case 144:
                        _fun0010_ip = 146; continue _fun0010;
case 136:
                        var7 = _closure1_slot22;
                        var3 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var2 = 46;
                        var2 = var8[var2];
                        var2 = var3.bind(var4)(var2);
                        var3 = var2.WatchActivityButton;
                        var2 = {};
                        var8 = _closure2_slot2;
                        var2['activity'] = var8;
                        var8 = _closure2_slot7;
                        var2['onAction'] = var8;
                        var1 = var7.bind(var4)(var3, var2);
case 146:
                        return var1;
case 135:
                        var3 = _closure1_slot22;
                        var2 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var1 = 46;
                        var1 = var7[var1];
                        var1 = var2.bind(var4)(var1);
                        var2 = var1.JoinGameActivityButton;
                        var1 = {};
                        var7 = _closure2_slot0;
                        var1['user'] = var7;
                        var7 = _closure2_slot2;
                        var1['activity'] = var7;
                        var7 = _closure2_slot8;
                        var1['application'] = var7;
                        var7 = _closure2_slot7;
                        var1['onAction'] = var7;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
case 120:
                        var3 = _closure1_slot22;
                        var2 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var1 = 46;
                        var1 = var7[var1];
                        var1 = var2.bind(var4)(var1);
                        var2 = var1.JoinActivityButton;
                        var1 = {};
                        var7 = _closure2_slot0;
                        var1['user'] = var7;
                        var7 = _closure2_slot1;
                        var1['currentUser'] = var7;
                        var7 = _closure2_slot2;
                        var1['activity'] = var7;
                        var7 = _closure2_slot8;
                        var1['application'] = var7;
                        var7 = _closure2_slot7;
                        var1['onAction'] = var7;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
case 118:
                        var3 = _closure1_slot22;
                        var2 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var1 = 46;
                        var1 = var7[var1];
                        var1 = var2.bind(var4)(var1);
                        var2 = var1.PlayOnSpotifyButton;
                        var1 = {};
                        var7 = _closure2_slot2;
                        var1['activity'] = var7;
                        var7 = _closure2_slot7;
                        var1['onAction'] = var7;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
case 116:
                        var1 = null;
                        return var1;
case 114:
                        var3 = _closure1_slot22;
                        var2 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var1 = 46;
                        var1 = var7[var1];
                        var1 = var2.bind(var4)(var1);
                        var2 = var1.ConnectPlatformButton;
                        var1 = {};
                        var7 = _closure1_slot20;
                        var7 = var7.PLAYSTATION;
                        var1['type'] = var7;
                        var7 = _closure2_slot7;
                        var1['onAction'] = var7;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
case 113:
                        var3 = _closure1_slot22;
                        var2 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var1 = 46;
                        var1 = var7[var1];
                        var1 = var2.bind(var4)(var1);
                        var2 = var1.ConnectPlatformButton;
                        var1 = {};
                        var6 = _closure1_slot20;
                        var6 = var6.XBOX;
                        var1['type'] = var6;
                        var5 = _closure2_slot7;
                        var1['onAction'] = var5;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    }
                };
                var10 = var10.bind(var5)();
                var9[3] = var10;
                var6['children'] = var9;
                var6 = var8.bind(var5)(var7, var6);
                var2['children'] = var6;
                var1 = var4.bind(var5)(var3, var2);
case 100:
                return var1;
            }
        };
        var _closure1_slot29 = var1;
        var1 = function StreamActivityCard(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var1 = arg1;
                var22 = var1.user;
                var _closure2_slot0 = var22;
                var30 = var1.stream;
                var _closure2_slot1 = var30;
                var21 = var1.activity;
                var _closure2_slot2 = var21;
                var17 = var1.style;
                var4 = undefined;
                var _closure2_slot4 = var4;
                var1 = _closure1_slot25;
                var18 = var1.bind(var4)();
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 35;
                var2 = var5[var1];
                var8 = var3.bind(var4)(var2);
                var7 = var8.useStateFromStores;
                var2 = _closure1_slot9;
                var6 = new Array(1);
                var6[0] = var2;
                var2 = function() {
                    var3 = _closure1_slot9;
                    var2 = var3.getChannel;
                    var1 = _closure2_slot1;
                    var1 = var1.channelId;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var15 = var7.bind(var8)(var6, var2);
                var _closure2_slot3 = var15;
                var2 = var5[var1];
                var8 = var3.bind(var4)(var2);
                var7 = var8.useStateFromStores;
                var2 = _closure1_slot14;
                var6 = new Array(1);
                var6[0] = var2;
                var2 = function() {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                        var3 = _closure1_slot14;
                        var2 = var3.isInChannel;
                        var5 = _closure2_slot3;
                        var1 = null;
                        var5 = var1 == var5;
                        var1 = undefined;
                        if(var5) { _fun0013_ip = 82; continue _fun0013 }
case 83:
                        var4 = _closure2_slot3;
                        var1 = var4.id;
case 82:
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    }
                };
                var14 = var7.bind(var8)(var6, var2);
                var2 = var5[var1];
                var8 = var3.bind(var4)(var2);
                var7 = var8.useStateFromStores;
                var2 = _closure1_slot10;
                var6 = new Array(1);
                var6[0] = var2;
                var2 = function() {
                    var3 = _closure1_slot10;
                    var2 = var3.getGuild;
                    var1 = _closure2_slot1;
                    var1 = var1.guildId;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var19 = var7.bind(var8)(var6, var2);
                var2 = var5[var1];
                var8 = var3.bind(var4)(var2);
                var7 = var8.useStateFromStores;
                var2 = _closure1_slot12;
                var6 = new Array(1);
                var6[0] = var2;
                var2 = function() {
                    var4 = _closure1_slot12;
                    var3 = var4.findActivity;
                    var1 = _closure2_slot0;
                    var2 = var1.id;
                    var1 = function(arg1) {
                        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                            var4 = arg1;
                            var5 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 30;
                            var1 = var3[var1];
                            var3 = undefined;
                            var1 = var5.bind(var3)(var1);
                            var1 = var1.bind(var3)(var4);
                            if(!var1) { _fun0014_ip = 5; continue _fun0014 }
case 147:
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var2 = 51;
                            var2 = var6[var2];
                            var2 = var5.bind(var3)(var2);
                            var2 = var2.bind(var3)(var4);
                            var1 = !var2;
case 5:
                            return var1;
                        }
                    };
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var27 = var7.bind(var8)(var6, var2);
                var2 = var5[var1];
                var7 = var3.bind(var4)(var2);
                var6 = var7.useStateFromStores;
                var2 = _closure1_slot8;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() {
                    var4 = _closure1_slot8;
                    var3 = var4.getActiveStreamForUser;
                    var1 = _closure2_slot0;
                    var2 = var1.id;
                    var1 = undefined;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var11 = var6.bind(var7)(var3, var2);
                var3 = _closure1_slot1;
                var2 = 52;
                var2 = var5[var2];
                var7 = var3.bind(var4)(var2);
                var9 = null;
                var2 = var9 == var11;
                var5 = undefined;
                if(var2) { _fun0012_ip = 148; continue _fun0012 }
case 149:
                var5 = var11.ownerId;
case 148:
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 53;
                var3 = var6[var3];
                var3 = var2.bind(var4)(var3);
                var3 = var3.MediaEngineContextTypes;
                var3 = var3.STREAM;
                var3 = var7.bind(var4)(var5, var3);
                var24 = var3.effectiveVolume;
                var12 = var3.handleVolumeChange;
                var1 = var6[var1];
                var7 = var2.bind(var4)(var1);
                var5 = var7.useStateFromStores;
                var1 = _closure1_slot7;
                var3 = new Array(1);
                var3[0] = var1;
                var1 = function() {
                    _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                        var3 = _closure2_slot2;
                        var1 = null;
                        var5 = var1 == var3;
                        var4 = undefined;
                        if(var5) { _fun0015_ip = 150; continue _fun0015 }
case 151:
                        var5 = _closure2_slot2;
                        var4 = var5.application_id;
case 150:
                        if(!(var1 == var4)) { _fun0015_ip = 49; continue _fun0015 }
case 152:
                        var4 = _closure2_slot2;
                        var4 = var1 == var4;
                        var3 = undefined;
                        if(var4) { _fun0015_ip = 153; continue _fun0015 }
case 3:
                        var4 = _closure2_slot2;
                        var3 = var4.name;
case 153:
                        var3 = var1 != var3;
                        var1 = null;
                        if(!var3) { _fun0015_ip = 154; continue _fun0015 }
case 155:
                        var5 = _closure1_slot7;
                        var4 = var5.getApplicationByName;
                        var3 = _closure2_slot2;
                        var3 = var3.name;
                        var1 = var4.bind(var5)(var3);
case 154:
                        _fun0015_ip = 156; continue _fun0015;
case 49:
                        var4 = _closure1_slot7;
                        var3 = var4.getApplication;
                        var2 = _closure2_slot2;
                        var2 = var2.application_id;
                        var1 = var3.bind(var4)(var2);
case 156:
                        return var1;
                    }
                };
                var20 = var5.bind(var7)(var3, var1);
                var1 = 54;
                var1 = var6[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.useCanWatchStream;
                var3 = var1.bind(var2)(var15);
                var2 = _closure1_slot3;
                var1 = 1;
                var2 = var2.bind(var4)(var3, var1);
                var1 = 0;
                var29 = var2[var1];
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
                var7 = var9 == var15;
                var6 = undefined;
                if(var7) { _fun0012_ip = 157; continue _fun0012 }
case 158:
                var6 = var15.id;
case 157:
                var2['voiceChannelId'] = var6;
                var2['user'] = var22;
                var2['stream'] = var30;
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
                var2 = 55;
                var2 = var8[var2];
                var7 = var6.bind(var4)(var2);
                var3 = var7.useConfig;
                var2 = {};
                var16 = 'UserProfileVoiceSettings';
                var2['location'] = var16;
                var2 = var3.bind(var7)(var2);
                var16 = var2.nonContextualStreamOutputPresent;
                var3 = _closure1_slot22;
                var2 = _closure1_slot0;
                var1 = var8[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.AnalyticsLocationProvider;
                var1 = {};
                var1['value'] = var5;
                var7 = _closure1_slot23;
                var5 = 40;
                var5 = var8[var5];
                var6 = var6.bind(var4)(var5);
                var5 = {};
                var23 = var18.card;
                var8 = new Array(2);
                var8[0] = var23;
                var8[1] = var17;
                var5['style'] = var8;
                if(!(var9 == var27)) { _fun0012_ip = 159; continue _fun0012 }
case 160:
                var25 = _closure1_slot0;
                var26 = _closure1_slot2;
                var8 = 22;
                var17 = var26[var8];
                var17 = var25.bind(var4)(var17);
                var23 = var17.intl;
                var17 = var23.string;
                var8 = var26[var8];
                var8 = var25.bind(var4)(var8);
                var8 = var8.t;
                var8 = var8.Jpkr/q;
                var8 = var17.bind(var23)(var8);
                _fun0012_ip = 161; continue _fun0012;
case 159:
                var23 = _closure1_slot0;
                var31 = _closure1_slot2;
                var17 = 22;
                var25 = var31[var17];
                var25 = var23.bind(var4)(var25);
                var26 = var25.intl;
                var25 = var26.formatToPlainString;
                var17 = var31[var17];
                var17 = var23.bind(var4)(var17);
                var17 = var17.t;
                var23 = var17.4CQq9Q;
                var17 = {};
                var27 = var27.name;
                var17['name'] = var27;
                var8 = var25.bind(var26)(var23, var17);
case 161:
                var5['title'] = var8;
                var8 = var18.cardTitle;
                var5['titleStyle'] = var8;
                var23 = _closure1_slot22;
                var17 = _closure1_slot6;
                var8 = {};
                var25 = var18.liveIndicator;
                var8['style'] = var25;
                var32 = _closure1_slot22;
                var26 = _closure1_slot0;
                var31 = _closure1_slot2;
                var25 = 17;
                var25 = var31[var25];
                var25 = var26.bind(var4)(var25);
                var27 = var25.Text;
                var25 = {'variant': 'eyebrow', 'color': 'always-white'};
                var33 = var18.liveIndicatorText;
                var25['style'] = var33;
                var33 = 22;
                var34 = var31[var33];
                var34 = var26.bind(var4)(var34);
                var35 = var34.intl;
                var34 = var35.string;
                var33 = var31[var33];
                var33 = var26.bind(var4)(var33);
                var33 = var33.t;
                var33 = var33.dI3q4h;
                var33 = var34.bind(var35)(var33);
                var25['children'] = var33;
                var25 = var32.bind(var4)(var27, var25);
                var8['children'] = var25;
                var8 = var23.bind(var4)(var17, var8);
                var5['titleIcon'] = var8;
                var23 = _closure1_slot22;
                var17 = _closure1_slot6;
                var8 = {};
                var25 = var18.streamPreview;
                var8['style'] = var25;
                var27 = _closure1_slot22;
                var25 = 56;
                var25 = var31[var25];
                var25 = var26.bind(var4)(var25);
                var26 = var25.VoicePanelStreamPreview;
                var25 = {};
                var25['mode'] = var4;
                var25['stream'] = var30;
                var29 = !var29;
                var25['disabled'] = var29;
                var28 = function onPress() {
                    var3 = _closure2_slot4;
                    var2 = {};
                    var1 = 'PRESS_IMAGE';
                    var2['action'] = var1;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var6 = 57;
                    var6 = var4[var6];
                    var8 = var3.bind(var1)(var6);
                    var7 = var8.selectVoiceChannel;
                    var6 = _closure2_slot1;
                    var5 = var6.channelId;
                    var5 = var7.bind(var8)(var5);
                    var5 = _closure1_slot0;
                    var2 = 58;
                    var2 = var4[var2];
                    var5 = var5.bind(var1)(var2);
                    var2 = var5.watchStreamAndTransitionToStream;
                    var2 = var2.bind(var5)(var6);
                    var2 = 59;
                    var2 = var4[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.hideActionSheet;
                    var2 = var2.bind(var3)();
                    return var1;
                };
                var25['onPress'] = var28;
                var25 = var27.bind(var4)(var26, var25);
                var8['children'] = var25;
                var17 = var23.bind(var4)(var17, var8);
                var8 = new Array(5);
                var8[0] = var17;
                var11 = var9 != var11;
                if(!var11) { _fun0012_ip = 162; continue _fun0012 }
case 163:
                var11 = !var16;
case 162:
                if(!var11) { _fun0012_ip = 164; continue _fun0012 }
case 165:
                var23 = _closure1_slot22;
                var17 = _closure1_slot1;
                var25 = _closure1_slot2;
                var16 = 60;
                var16 = var25[var16];
                var17 = var17.bind(var4)(var16);
                var16 = {};
                var16['value'] = var24;
                var16['onValueChange'] = var12;
                var12 = 'set-stream-volume';
                var11 = var23.bind(var4)(var17, var16, var12);
case 164:
                var8[1] = var11;
                var11 = var9 != var21;
                if(!var11) { _fun0012_ip = 166; continue _fun0012 }
case 167:
                var16 = _closure1_slot1;
                var17 = _closure1_slot2;
                var12 = 32;
                var12 = var17[var12];
                var12 = var16.bind(var4)(var12);
                var11 = var12.bind(var4)(var21);
case 166:
                if(!var11) { _fun0012_ip = 168; continue _fun0012 }
case 169:
                var17 = _closure1_slot22;
                var16 = _closure1_slot28;
                var12 = {};
                var12['user'] = var22;
                var12['activity'] = var21;
                var12['application'] = var20;
                var12['onAction'] = var13;
                var11 = var17.bind(var4)(var16, var12);
case 168:
                var8[2] = var11;
                var11 = var9 != var19;
                if(!var11) { _fun0012_ip = 170; continue _fun0012 }
case 171:
                var11 = var9 != var15;
case 170:
                if(!var11) { _fun0012_ip = 172; continue _fun0012 }
case 173:
                var17 = _closure1_slot22;
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
case 172:
                var8[3] = var11;
                var9 = var9 != var15;
                if(!var9) { _fun0012_ip = 174; continue _fun0012 }
case 175:
                var12 = _closure1_slot22;
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
case 174:
                var8[4] = var9;
                var5['children'] = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var _closure1_slot30 = var1;
        var1 = function VoiceCallActivityCard(arg1) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var1 = arg1;
                var8 = var1.user;
                var11 = var1.channel;
                var _closure2_slot0 = var11;
                var10 = var1.isInChannel;
                var7 = var1.style;
                var1 = _closure1_slot25;
                var4 = undefined;
                var30 = var1.bind(var4)();
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 61;
                var1 = var5[var1];
                var1 = var2.bind(var4)(var1);
                var15 = var1.bind(var4)(var11);
                var1 = 62;
                var1 = var5[var1];
                var1 = var2.bind(var4)(var1);
                var26 = var1.bind(var4)(var11);
                var3 = _closure1_slot0;
                var1 = 35;
                var9 = var5[var1];
                var14 = var3.bind(var4)(var9);
                var13 = var14.useStateFromStores;
                var9 = _closure1_slot10;
                var12 = new Array(1);
                var12[0] = var9;
                var9 = function() {
                    var3 = _closure1_slot10;
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
                var1 = _closure1_slot11;
                var3 = new Array(1);
                var3[0] = var1;
                var1 = function() {
                    _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                        var3 = _closure2_slot0;
                        var1 = var3.isPrivate;
                        var1 = var1.bind(var3)();
                        if(var1) { _fun0017_ip = 176; continue _fun0017 }
case 177:
                        var5 = _closure1_slot11;
                        var4 = var5.can;
                        var3 = _closure1_slot19;
                        var3 = var3.CONNECT;
                        var2 = _closure2_slot0;
                        var1 = var4.bind(var5)(var3, var2);
case 176:
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
                var3 = _closure1_slot23;
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
                if(var5) { _fun0016_ip = 178; continue _fun0016 }
case 179:
                var5 = var11.isGroupDM;
                var5 = var5.bind(var11)();
                if(var5) { _fun0016_ip = 178; continue _fun0016 }
case 180:
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
                if(var5) { _fun0016_ip = 181; continue _fun0016 }
case 101:
                var5 = var7.msxteM;
                var5 = var8.bind(var12)(var5);
                _fun0016_ip = 142; continue _fun0016;
case 181:
                var7 = var7.QygGCN;
                var5 = var8.bind(var12)(var7);
case 142:
                _fun0016_ip = 182; continue _fun0016;
case 178:
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
                var7 = var7.9FaEzi;
                var5 = var8.bind(var12)(var7);
case 182:
                var1['title'] = var5;
                var5 = var30.cardTitle;
                var1['titleStyle'] = var5;
                var8 = _closure1_slot23;
                var7 = _closure1_slot6;
                var5 = {};
                var12 = var30.body;
                var5['style'] = var12;
                var14 = _closure1_slot22;
                var13 = _closure1_slot1;
                var17 = _closure1_slot2;
                var12 = 63;
                var12 = var17[var12];
                var13 = var13.bind(var4)(var12);
                var12 = {};
                var12['users'] = var15;
                var17 = null;
                var18 = var17 == var28;
                var15 = undefined;
                if(var18) { _fun0016_ip = 183; continue _fun0016 }
case 184:
                var15 = var28.id;
case 183:
                var12['guildId'] = var15;
                var13 = var14.bind(var4)(var13, var12);
                var12 = new Array(2);
                var12[0] = var13;
                var15 = _closure1_slot23;
                var14 = _closure1_slot6;
                var13 = {};
                var18 = var30.voiceCallContent;
                var13['style'] = var18;
                if(var16) { _fun0016_ip = 185; continue _fun0016 }
case 186:
                var19 = _closure1_slot23;
                var18 = _closure1_slot0;
                var29 = _closure1_slot2;
                var16 = 17;
                var16 = var29[var16];
                var16 = var18.bind(var4)(var16);
                var18 = var16.Text;
                var16 = {'variant': 'text-md/semibold', 'color': 'mobile-text-heading-primary'};
                var23 = _closure1_slot22;
                var22 = _closure1_slot6;
                var20 = {};
                var24 = var30.voiceCallNameIconWrapper;
                var20['style'] = var24;
                var27 = _closure1_slot22;
                var25 = _closure1_slot1;
                var24 = 64;
                var24 = var29[var24];
                var25 = var25.bind(var4)(var24);
                var24 = {'channel': null, 'size': 'sm', 'color': 'mobile-text-heading-primary'};
                var24['channel'] = var11;
                var24 = var27.bind(var4)(var25, var24);
                var20['children'] = var24;
                var22 = var23.bind(var4)(var22, var20);
                var20 = new Array(2);
                var20[0] = var22;
                var20[1] = var26;
                var16['children'] = var20;
                var18 = var19.bind(var4)(var18, var16);
                _fun0016_ip = 187; continue _fun0016;
case 185:
                var20 = _closure1_slot22;
                var23 = _closure1_slot0;
                var33 = _closure1_slot2;
                var16 = 65;
                var16 = var33[var16];
                var16 = var23.bind(var4)(var16);
                var19 = var16.PressableOpacity;
                var16 = {};
                var22 = 'button';
                var16['accessibilityRole'] = var22;
                var31 = _closure1_slot1;
                var22 = 66;
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
                var22 = var22.9C444m;
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
                    var4 = 59;
                    var4 = var5[var4];
                    var7 = var6.bind(var1)(var4);
                    var4 = var7.hideActionSheet;
                    var4 = var4.bind(var7)();
                    var4 = 67;
                    var4 = var5[var4];
                    var6 = var6.bind(var1)(var4);
                    var4 = var6.popAll;
                    var4 = var4.bind(var6)();
                    var4 = _closure1_slot0;
                    var3 = 68;
                    var3 = var5[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.openGuildVoiceModal;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot2;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                var16['onPress'] = var22;
                var24 = _closure1_slot23;
                var22 = 17;
                var22 = var33[var22];
                var22 = var23.bind(var4)(var22);
                var23 = var22.Text;
                var22 = {'variant': 'text-md/semibold', 'color': 'mobile-text-heading-primary'};
                var29 = _closure1_slot22;
                var27 = _closure1_slot6;
                var25 = {};
                var30 = var30.voiceCallNameIconWrapper;
                var25['style'] = var30;
                var32 = _closure1_slot22;
                var30 = 64;
                var30 = var33[var30];
                var31 = var31.bind(var4)(var30);
                var30 = {'channel': null, 'size': 'sm', 'color': 'mobile-text-heading-primary'};
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
case 187:
                var16 = new Array(2);
                var16[0] = var18;
                var18 = var17 == var28;
                var17 = null;
                if(var18) { _fun0016_ip = 188; continue _fun0016 }
case 189:
                var20 = _closure1_slot22;
                var25 = _closure1_slot0;
                var29 = _closure1_slot2;
                var18 = 65;
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
                var22 = var22.KLOhbO;
                var22 = var23.bind(var26)(var22);
                var18['accessibilityHint'] = var22;
                var22 = var29[var24];
                var22 = var25.bind(var4)(var22);
                var27 = var22.intl;
                var26 = var27.formatToPlainString;
                var22 = var29[var24];
                var22 = var25.bind(var4)(var22);
                var22 = var22.t;
                var23 = var22.hq/Qze;
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
                    var5 = 69;
                    var5 = var4[var5];
                    var6 = var6.bind(var1)(var5);
                    var5 = var6.transitionToGuild;
                    var3 = _closure2_slot1;
                    var3 = var3.id;
                    var3 = var5.bind(var6)(var3);
                    var3 = _closure1_slot1;
                    var2 = 70;
                    var2 = var4[var2];
                    var2 = var3.bind(var1)(var2);
                    var2 = var2.bind(var1)();
                    var2 = 59;
                    var2 = var4[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.hideActionSheet;
                    var2 = var2.bind(var3)();
                    return var1;
                };
                var18['onPress'] = var21;
                var23 = _closure1_slot22;
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
                var25 = var24.hq/Qze;
                var24 = {};
                var28 = var28.name;
                var24['guildName'] = var28;
                var24 = var26.bind(var27)(var25, var24);
                var21['children'] = var24;
                var21 = var23.bind(var4)(var22, var21);
                var18['children'] = var21;
                var17 = var20.bind(var4)(var19, var18);
case 188:
                var16[1] = var17;
                var13['children'] = var16;
                var13 = var15.bind(var4)(var14, var13);
                var12[1] = var13;
                var5['children'] = var12;
                var7 = var8.bind(var4)(var7, var5);
                var5 = new Array(2);
                var5[0] = var7;
                var8 = _closure1_slot22;
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
        var _closure1_slot31 = var1;
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
        var4 = var13.bind(var1)(var4);
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
        var4 = var13.bind(var1)(var4);
        var _closure1_slot7 = var4;
        var4 = 4;
        var4 = var6[var4];
        var4 = var13.bind(var1)(var4);
        var _closure1_slot8 = var4;
        var4 = 5;
        var4 = var6[var4];
        var4 = var13.bind(var1)(var4);
        var _closure1_slot9 = var4;
        var4 = 6;
        var4 = var6[var4];
        var4 = var13.bind(var1)(var4);
        var _closure1_slot10 = var4;
        var4 = 7;
        var4 = var6[var4];
        var4 = var13.bind(var1)(var4);
        var _closure1_slot11 = var4;
        var4 = 8;
        var4 = var6[var4];
        var4 = var13.bind(var1)(var4);
        var _closure1_slot12 = var4;
        var4 = 9;
        var4 = var6[var4];
        var4 = var13.bind(var1)(var4);
        var _closure1_slot13 = var4;
        var4 = 10;
        var4 = var6[var4];
        var4 = var13.bind(var1)(var4);
        var _closure1_slot14 = var4;
        var4 = 11;
        var4 = var6[var4];
        var4 = var13.bind(var1)(var4);
        var _closure1_slot15 = var4;
        var11 = 12;
        var4 = var6[var11];
        var4 = var5.bind(var1)(var4);
        var7 = var4.ActivityGamePlatforms;
        var _closure1_slot16 = var7;
        var7 = var4.ActivityTypes;
        var _closure1_slot17 = var7;
        var7 = var4.AnalyticEvents;
        var _closure1_slot18 = var7;
        var7 = var4.Permissions;
        var _closure1_slot19 = var7;
        var7 = var4.PlatformTypes;
        var _closure1_slot20 = var7;
        var4 = var4.StatusTypes;
        var _closure1_slot21 = var4;
        var4 = 13;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var7 = var4.jsx;
        var _closure1_slot22 = var7;
        var7 = var4.jsxs;
        var _closure1_slot23 = var7;
        var4 = var4.Fragment;
        var _closure1_slot24 = var4;
        var4 = 14;
        var4 = var6[var4];
        var8 = var5.bind(var1)(var4);
        var7 = var8.createStyles;
        var4 = {};
        var9 = {};
        var9['gap'] = var11;
        var4['card'] = var9;
        var9 = {};
        var9['marginBottom'] = var14;
        var4['cardTitle'] = var9;
        var9 = {};
        var12 = 15;
        var10 = var6[var12];
        var10 = var13.bind(var1)(var10);
        var10 = var10.colors;
        var10 = var10.TEXT_SUBTLE;
        var9['tintColor'] = var10;
        var4['cardTitleIcon'] = var9;
        var10 = 16;
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
        var15 = var6[var12];
        var15 = var13.bind(var1)(var15);
        var15 = var15.radii;
        var15 = var15.xs;
        var9['borderRadius'] = var15;
        var4['largeImage'] = var9;
        var9 = {'borderRadius': 16, 'position': 'absolute', 'right': 4294967292, 'bottom': 4294967292};
        var15 = var6[var12];
        var15 = var13.bind(var1)(var15);
        var15 = var15.colors;
        var15 = var15.BACKGROUND_BASE_LOW;
        var9['backgroundColor'] = var15;
        var4['smallImageBackground'] = var9;
        var9 = {'width': 24, 'height': 24, 'borderRadius': 12};
        var4['smallImage'] = var9;
        var9 = {'marginTop': 4, 'flexDirection': 'row', 'flexWrap': 'wrap', 'columnGap': 8, 'rowGap': 0};
        var4['badges'] = var9;
        var9 = {'borderTopWidth': 1, 'borderTopColor': null, 'paddingTop': 12};
        var15 = var6[var12];
        var15 = var13.bind(var1)(var15);
        var15 = var15.colors;
        var15 = var15.BORDER_SUBTLE;
        var9['borderTopColor'] = var15;
        var4['voiceChannelDivider'] = var9;
        var9 = {'flexDirection': 'column', 'gap': 8};
        var4['customButtons'] = var9;
        var9 = {'aspectRatio': 1.7777777777777777, 'borderRadius': null, 'overflow': 'hidden'};
        var15 = var6[var12];
        var15 = var13.bind(var1)(var15);
        var15 = var15.radii;
        var15 = var15.xs;
        var9['borderRadius'] = var15;
        var4['streamPreview'] = var9;
        var9 = {'height': 16, 'paddingHorizontal': 6};
        var15 = var6[var12];
        var15 = var13.bind(var1)(var15);
        var15 = var15.colors;
        var15 = var15.BACKGROUND_FEEDBACK_CRITICAL;
        var9['backgroundColor'] = var15;
        var15 = var6[var12];
        var15 = var13.bind(var1)(var15);
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
        var12 = var6[var12];
        var12 = var13.bind(var1)(var12);
        var12 = var12.colors;
        var12 = var12.BORDER_SUBTLE;
        var9['borderTopColor'] = var12;
        var4['voiceSettingsDivider'] = var9;
        var9 = {'flex': 1, 'gap': 4};
        var4['voiceCallContent'] = var9;
        var9 = {'width': 22, 'height': null, 'justifyContent': 'center'};
        var12 = var6[var10];
        var13 = var5.bind(var1)(var12);
        var12 = var13.isAndroid;
        var12 = var12.bind(var13)();
        if(!var12) { _fun0001_ip = 190; continue _fun0001 }
case 191:
        var10 = var11;
case 190:
        var9['height'] = var10;
        var4['voiceCallNameIconWrapper'] = var9;
        var4 = var7.bind(var8)(var4);
        var _closure1_slot25 = var4;
        var4 = 75;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/user_profile/native/UserProfileActivity.tsx';
        var4 = var5.bind(var6)(var4);
        var2 = function UserProfileActivity(arg1) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                var1 = arg1;
                var11 = var1.user;
                var _closure2_slot0 = var11;
                var10 = var1.currentUser;
                var _closure2_slot1 = var10;
                var3 = var1.guildId;
                var _closure2_slot2 = var3;
                var13 = var1.style;
                var _closure2_slot3 = var13;
                var1 = _closure1_slot25;
                var4 = undefined;
                var9 = var1.bind(var4)();
                var _closure2_slot4 = var9;
                var2 = _closure1_slot1;
                var15 = _closure1_slot2;
                var1 = 71;
                var1 = var15[var1];
                var6 = var2.bind(var4)(var1);
                var1 = var11.id;
                var1 = var6.bind(var4)(var1);
                var6 = var1.live;
                var20 = var1.stream;
                var _closure2_slot5 = var20;
                var1 = 72;
                var1 = var15[var1];
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
                var2 = var15[var1];
                var16 = var3.bind(var4)(var2);
                var14 = var16.useStateFromStores;
                var2 = _closure1_slot14;
                var7 = new Array(1);
                var7[0] = var2;
                var2 = function() {
                    _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                        var1 = _closure2_slot6;
                        var5 = null;
                        var1 = var5 != var1;
                        if(!var1) { _fun0019_ip = 5; continue _fun0019 }
case 192:
                        var4 = _closure1_slot14;
                        var3 = var4.getCurrentClientVoiceChannelId;
                        var6 = _closure2_slot2;
                        var6 = var5 != var6;
                        var5 = null;
                        if(!var6) { _fun0019_ip = 193; continue _fun0019 }
case 194:
                        var5 = _closure2_slot2;
case 193:
                        var3 = var3.bind(var4)(var5);
                        var2 = _closure2_slot6;
                        var2 = var2.id;
                        var1 = var3 === var2;
case 5:
                        return var1;
                    }
                };
                var7 = var14.bind(var16)(var7, var2);
                var _closure2_slot8 = var7;
                var14 = var11.id;
                var2 = var10.id;
                var2 = var14 === var2;
                var _closure2_slot9 = var2;
                var2 = var15[var1];
                var17 = var3.bind(var4)(var2);
                var16 = var17.useStateFromStores;
                var2 = _closure1_slot13;
                var14 = new Array(2);
                var14[0] = var2;
                var2 = _closure1_slot12;
                var14[1] = var2;
                var2 = function() {
                    _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                        var3 = _closure2_slot9;
                        if(var3) { _fun0020_ip = 195; continue _fun0020 }
case 196:
                        var4 = _closure1_slot12;
                        var3 = var4.getStatus;
                        var1 = _closure2_slot0;
                        var1 = var1.id;
                        var3 = var3.bind(var4)(var1);
                        _fun0020_ip = 176; continue _fun0020;
case 195:
                        var4 = _closure1_slot13;
                        var1 = var4.getStatus;
                        var3 = var1.bind(var4)();
case 176:
                        var1 = _closure1_slot21;
                        var1 = var1.OFFLINE;
                        var1 = var3 === var1;
                        if(var1) { _fun0020_ip = 197; continue _fun0020 }
case 198:
                        var2 = _closure1_slot21;
                        var2 = var2.INVISIBLE;
                        var1 = var3 === var2;
case 197:
                        return var1;
                    }
                };
                var2 = var16.bind(var17)(var14, var2);
                var1 = var15[var1];
                var17 = var3.bind(var4)(var1);
                var16 = var17.useStateFromStores;
                var1 = _closure1_slot15;
                var14 = new Array(1);
                var14[0] = var1;
                var1 = function() {
                    _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                        var3 = _closure1_slot15;
                        var2 = var3.getUserProfile;
                        var1 = _closure2_slot0;
                        var1 = var1.id;
                        var1 = var2.bind(var3)(var1);
                        var2 = null;
                        var3 = var2 == var1;
                        var2 = undefined;
                        if(var3) { _fun0021_ip = 46; continue _fun0021 }
case 199:
                        var2 = var1.private;
case 46:
                        var1 = true;
                        var1 = var1 === var2;
                        return var1;
                    }
                };
                var14 = var16.bind(var17)(var14, var1);
                var1 = 73;
                var1 = var15[var1];
                var15 = var3.bind(var4)(var1);
                var3 = var15.useHangStatusActivity;
                var1 = var11.id;
                var1 = var3.bind(var15)(var1);
                var _closure2_slot10 = var1;
                if(var2) { _fun0018_ip = 130; continue _fun0018 }
case 200:
                if(!var14) { _fun0018_ip = 201; continue _fun0018 }
case 130:
                var1 = null;
                if(!(var1 != var8)) { _fun0018_ip = 201; continue _fun0018 }
case 202:
                if(var7) { _fun0018_ip = 120; continue _fun0018 }
case 201:
                var1 = null;
                if(var2) { _fun0018_ip = 203; continue _fun0018 }
case 132:
                var15 = var6;
                if(!(var1 != var19)) { _fun0018_ip = 204; continue _fun0018 }
case 179:
                var3 = var6.filter;
                var2 = function(arg1) {
                    var2 = _closure2_slot7;
                    var1 = arg1;
                    var1 = var1 !== var2;
                    return var1;
                };
                var15 = var3.bind(var6)(var2);
case 204:
                var22 = function renderVoiceActivityCard(arg1) {
                    _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                        var3 = arg1;
                        var1 = _closure2_slot5;
                        var8 = null;
                        if(!(var8 != var1)) { _fun0022_ip = 98; continue _fun0022 }
case 192:
                        var1 = _closure2_slot5;
                        var4 = var1.channelId;
                        var1 = var3.id;
                        if(!(var4 !== var1)) { _fun0022_ip = 205; continue _fun0022 }
case 98:
                        var1 = _closure2_slot7;
                        if(!(var8 == var1)) { _fun0022_ip = 206; continue _fun0022 }
case 3:
                        var1 = _closure2_slot10;
                        if(!(var8 == var1)) { _fun0022_ip = 206; continue _fun0022 }
case 176:
                        var6 = _closure1_slot22;
                        var5 = _closure1_slot31;
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
                        _fun0022_ip = 207; continue _fun0022;
case 206:
                        var6 = _closure1_slot22;
                        var5 = _closure1_slot29;
                        var4 = {};
                        var7 = _closure2_slot0;
                        var4['user'] = var7;
                        var7 = _closure2_slot1;
                        var4['currentUser'] = var7;
                        var7 = _closure2_slot7;
                        if(!(var8 == var7)) { _fun0022_ip = 208; continue _fun0022 }
case 209:
                        var7 = _closure2_slot10;
                        _fun0022_ip = 210; continue _fun0022;
case 208:
                        var7 = _closure2_slot7;
case 210:
                        var4['activity'] = var7;
                        var4['voiceChannel'] = var3;
                        var3 = _closure2_slot4;
                        var3 = var3.voiceActivityCard;
                        var4['style'] = var3;
                        var3 = undefined;
                        var1 = var6.bind(var3)(var5, var4);
case 207:
                        _fun0022_ip = 211; continue _fun0022;
case 205:
                        var5 = _closure1_slot22;
                        var4 = _closure1_slot30;
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
case 211:
                        return var1;
                    }
                };
                var6 = _closure1_slot23;
                var3 = _closure1_slot24;
                var2 = {};
                var16 = !var14;
                if(!var16) { _fun0018_ip = 212; continue _fun0018 }
case 213:
                var16 = var1 != var8;
case 212:
                if(!var16) { _fun0018_ip = 214; continue _fun0018 }
case 215:
                if(var7) { _fun0018_ip = 216; continue _fun0018 }
case 217:
                var18 = _closure1_slot22;
                var17 = _closure1_slot1;
                var21 = _closure1_slot2;
                var7 = 40;
                var7 = var21[var7];
                var17 = var17.bind(var4)(var7);
                var7 = {};
                var23 = var9.card;
                var21 = new Array(2);
                var21[0] = var23;
                var21[1] = var13;
                var7['style'] = var21;
                var21 = var22.bind(var4)(var8);
                var7['children'] = var21;
                var7 = var18.bind(var4)(var17, var7);
                _fun0018_ip = 218; continue _fun0018;
case 216:
                var21 = _closure1_slot23;
                var24 = _closure1_slot1;
                var26 = _closure1_slot2;
                var17 = 40;
                var17 = var26[var17];
                var18 = var24.bind(var4)(var17);
                var17 = {};
                var25 = var9.card;
                var23 = new Array(2);
                var23[0] = var25;
                var23[1] = var13;
                var17['style'] = var23;
                var23 = var22.bind(var4)(var8);
                var22 = new Array(2);
                var22[0] = var23;
                var25 = _closure1_slot22;
                var23 = 74;
                var23 = var26[var23];
                var24 = var24.bind(var4)(var23);
                var23 = {};
                var23['user'] = var11;
                var23['currentUser'] = var10;
                var23['channel'] = var8;
                var27 = var9.voiceSettings;
                var26 = new Array(2);
                var26[0] = var27;
                var27 = var9.voiceSettingsDivider;
                var26[1] = var27;
                var23['style'] = var26;
                var23 = var25.bind(var4)(var24, var23);
                var22[1] = var23;
                var17['children'] = var22;
                var7 = var21.bind(var4)(var18, var17);
case 218:
                var16 = var7;
case 214:
                var7 = new Array(3);
                var7[0] = var16;
                var14 = !var14;
                if(!var14) { _fun0018_ip = 219; continue _fun0018 }
case 220:
                var14 = var1 != var20;
case 219:
                if(!var14) { _fun0018_ip = 146; continue _fun0018 }
case 221:
                var17 = var20.channelId;
                var18 = var1 == var8;
                var16 = undefined;
                if(var18) { _fun0018_ip = 222; continue _fun0018 }
case 223:
                var16 = var8.id;
case 222:
                var14 = var17 !== var16;
case 146:
                if(!var14) { _fun0018_ip = 224; continue _fun0018 }
case 225:
                var18 = _closure1_slot22;
                var17 = _closure1_slot30;
                var16 = {};
                var16['user'] = var11;
                var16['stream'] = var20;
                var16['activity'] = var19;
                var16['style'] = var13;
                var14 = var18.bind(var4)(var17, var16);
case 224:
                var7[1] = var14;
                var14 = var15.map;
                var12 = function(arg1, arg2) {
                    _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                        var1 = arg1;
                        var5 = arg2;
                        var4 = _closure1_slot22;
                        var3 = _closure1_slot29;
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
                        if(!(var6 != var1)) { _fun0023_ip = 226; continue _fun0023 }
case 5:
                        var5 = var1;
case 226:
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
case 203:
                return var1;
case 120:
                var3 = _closure1_slot22;
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
                var7 = _closure1_slot22;
                var5 = 74;
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