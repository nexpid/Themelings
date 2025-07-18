// app/modules/icymi/native/ICYMIServerRecommendationRow.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function CutoutGuildBanner(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var8 = var2.guild;
            var _closure2_slot0 = var8;
            var2 = _closure1_slot18;
            var4 = undefined;
            var14 = var2.bind(var4)();
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 12;
            var2 = var5[var2];
            var6 = var3.bind(var4)(var2);
            var5 = var6.useStateFromStores;
            var2 = _closure1_slot7;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var1 = _closure1_slot7;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var9 = var5.bind(var6)(var3, var2);
            var6 = !var9;
            if(!var6) { _fun0001_ip = 109; continue _fun0001 }
 83:
            var5 = var8.features;
            var3 = var5.has;
            var2 = _closure1_slot14;
            var2 = var2.ANIMATED_BANNER;
            var6 = var3.bind(var5)(var2);
 109:
            var2 = var8.banner;
            var10 = null;
            var2 = var10 != var2;
            var16 = undefined;
            if(!var2) { _fun0001_ip = 165; continue _fun0001 }
 126:
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 13;
            var2 = var5[var2];
            var5 = var3.bind(var4)(var2);
            var3 = var5.getAnimatableSourceWithFallback;
            var2 = function(arg1) {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 13;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.getGuildBannerSource;
                var2 = {};
                var1 = _closure2_slot0;
                var5 = var1.id;
                var2['id'] = var5;
                var1 = var1.banner;
                var2['banner'] = var1;
                var1 = arg1;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var16 = var3.bind(var5)(var6, var2);
 165:
            var5 = _closure1_slot5;
            var3 = var5.useMemo;
            var2 = new Array(1);
            var2[0] = var8;
            var1 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 14;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.fromClientDiscoverableGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var13 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot16;
            var2 = _closure1_slot6;
            var1 = {};
            var5 = var14.bannerImage;
            var1['style'] = var5;
            var7 = _closure1_slot15;
            var6 = _closure1_slot1;
            var18 = _closure1_slot2;
            var12 = 15;
            var5 = var18[var12];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var15 = {'shape': null, 'x': 8, 'y': 46, 'width': 56, 'height': 56, 'cornerRadius': 20};
            var17 = _closure1_slot0;
            var12 = var18[var12];
            var12 = var17.bind(var4)(var12);
            var12 = var12.CutoutShape;
            var12 = var12.RoundedRect;
            var15['shape'] = var12;
            var12 = new Array(1);
            var12[0] = var15;
            var5['cutouts'] = var12;
            var8 = var8.banner;
            if(!(var10 == var8)) { _fun0001_ip = 355; continue _fun0001 }
 309:
            var12 = _closure1_slot15;
            var10 = _closure1_slot6;
            var8 = {};
            var17 = var14.bannerImage;
            var15 = new Array(2);
            var15[0] = var17;
            var17 = var14.emptyBanner;
            var15[1] = var17;
            var8['style'] = var15;
            var8 = var12.bind(var4)(var10, var8);
            _fun0001_ip = 410; continue _fun0001;
 355:
            var15 = _closure1_slot15;
            var12 = _closure1_slot1;
            var17 = _closure1_slot2;
            var10 = 16;
            var10 = var17[var10];
            var12 = var12.bind(var4)(var10);
            var10 = {};
            var17 = var14.bannerImage;
            var10['style'] = var17;
            var10['source'] = var16;
            var16 = 'cover';
            var10['resizeMode'] = var16;
            var8 = var15.bind(var4)(var12, var10);
 410:
            var5['children'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot15;
            var7 = _closure1_slot1;
            var12 = _closure1_slot2;
            var10 = 17;
            var6 = var12[var10];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var14 = var14.guildIcon;
            var6['style'] = var14;
            var6['guild'] = var13;
            var11 = _closure1_slot0;
            var10 = var12[var10];
            var10 = var11.bind(var4)(var10);
            var10 = var10.GuildIconSizes;
            var10 = var10.LARGE;
            var6['size'] = var10;
            var9 = !var9;
            var6['animate'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function FeaturedServer(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var20 = var1.guild;
            var _closure2_slot0 = var20;
            var4 = undefined;
            var _closure2_slot1 = var4;
            var1 = _closure1_slot18;
            var9 = var1.bind(var4)();
            var10 = _closure1_slot0;
            var16 = _closure1_slot2;
            var1 = 12;
            var1 = var16[var1];
            var6 = var10.bind(var4)(var1);
            var5 = var6.useStateFromStores;
            var1 = _closure1_slot8;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var13 = var5.bind(var6)(var3, var1);
            var6 = _closure1_slot5;
            var5 = var6.useCallback;
            var3 = _closure1_slot4;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0003_ip = 472; continue _fun0003 }
 10:
                        var3 = _closure2_slot1;
                        var4 = undefined;
                        var2 = true;
                        var2 = var3.bind(var4)(var2);
                        var7 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var6 = 18;
                        var6 = var2[var6];
                        var8 = var7.bind(var4)(var6);
                        var7 = var8.trackItemInteraction;
                        var9 = 'recommended_guilds';
                        var6 = 'press_join_guild';
                        var6 = var7.bind(var8)(var9, var9, var6);
                        var6 = _closure1_slot1;
                        var8 = 19;
                        var2 = var2[var8];
                        var7 = var6.bind(var4)(var2);
                        var6 = var7.gravityJoinGuild;
                        var2 = _closure2_slot0;
                        var10 = var2.id;
                        var2 = new Array(1);
                        var2[0] = var10;
                        var2 = var6.bind(var7)(var2, var9);
                        SaveGenerator(address=123);
 121:
                        return var2;
 123:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                        if(var6) { _fun0003_ip = 469; continue _fun0003 }
 132:
                        if(var2) { _fun0003_ip = 249; continue _fun0003 }
 135:
                        var7 = _closure2_slot1;
                        var6 = false;
                        var6 = var7.bind(var4)(var6);
                        var7 = _closure1_slot1;
                        var14 = _closure1_slot2;
                        var6 = 20;
                        var6 = var14[var6];
                        var9 = var7.bind(var4)(var6);
                        var7 = var9.open;
                        var6 = {};
                        var10 = 'RecommeendedServersRow';
                        var6['key'] = var10;
                        var13 = _closure1_slot0;
                        var10 = 21;
                        var11 = var14[var10];
                        var11 = var13.bind(var4)(var11);
                        var12 = var11.intl;
                        var11 = var12.string;
                        var10 = var14[var10];
                        var10 = var13.bind(var4)(var10);
                        var10 = var10.t;
                        var10 = var10.CG4Hkp;
                        var10 = var11.bind(var12)(var10);
                        var6['content'] = var10;
                        var6 = var7.bind(var9)(var6);
                        var6 = undefined;
                        return var6;
 249:
                        var9 = {};
                        var6 = {};
                        var7 = {};
                        var10 = _closure1_slot12;
                        var10 = var10.ICYMI;
                        var7['page'] = var10;
                        var10 = _closure1_slot13;
                        var10 = var10.ICYMI_RECOMMENDED_SERVERS;
                        var7['section'] = var10;
                        var10 = _closure1_slot11;
                        var10 = var10.LIST_ITEM;
                        var7['object'] = var10;
                        var6['analyticsSource'] = var7;
                        var9['state'] = var6;
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var10 = var7[var8];
                        var11 = var6.bind(var4)(var10);
                        var10 = var11.addedRecommendedGuild;
                        var10 = var10.bind(var11)();
                        var8 = var7[var8];
                        var11 = var6.bind(var4)(var8);
                        var10 = var11.fetchDehydrated;
                        var8 = {'isReloading': true, 'forceRefresh': true};
                        var10 = var10.bind(var11)(var8);
                        var8 = var10.then;
                        var11 = _closure1_slot4;
                        var3 = function* () {
                            var1 = function* anon_0_() {
                                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(var2) { _fun0004_ip = 125; continue _fun0004 }
 7:
                                    var3 = _closure1_slot1;
                                    var2 = _closure1_slot2;
                                    var7 = 19;
                                    var2 = var2[var7];
                                    var4 = undefined;
                                    var3 = var3.bind(var4)(var2);
                                    var2 = var3.reloadICYMITab;
                                    var2 = var2.bind(var3)();
                                    SaveGenerator(address=46);
 44:
                                    return var2;
 46:
                                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                    if(var3) { _fun0004_ip = 122; continue _fun0004 }
 52:
                                    var6 = _closure1_slot1;
                                    var3 = _closure1_slot2;
                                    var3 = var3[var7];
                                    var6 = var6.bind(var4)(var3);
                                    var3 = var6.getGuildChannelScores;
                                    var3 = var3.bind(var6)();
                                    SaveGenerator(address=83);
 81:
                                    return var3;
 83:
                                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                                    if(var6) { _fun0004_ip = 119; continue _fun0004 }
 89:
                                    var6 = _closure1_slot1;
                                    var5 = _closure1_slot2;
                                    var5 = var5[var7];
                                    var6 = var6.bind(var4)(var5);
                                    var5 = var6.getRecommendedGuilds;
                                    var5 = var5.bind(var6)();
                                    return var4;
 119:
                                    return var3;
 122:
                                    return var2;
 125:
                                    return var1;
                                }
                            };
                            return var1;
                        };
                        var3 = var11.bind(var4)(var3);
                        var3 = var8.bind(var10)(var3);
                        var3 = 22;
                        var3 = var7[var3];
                        var8 = var6.bind(var4)(var3);
                        var7 = var8.transitionToGuildSync;
                        var3 = _closure2_slot0;
                        var6 = var3.id;
                        var3 = {};
                        var17 = var3;
                        var16 = var9;
                        var9 = copyDataProperties(var17, var16);
                        var3 = var7.bind(var8)(var6, var3);
                        SaveGenerator(address=446);
 444:
                        return var3;
 446:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                        if(var6) { _fun0003_ip = 466; continue _fun0003 }
 452:
                        var6 = _closure2_slot1;
                        var5 = false;
                        var5 = var6.bind(var4)(var5);
                        return var4;
 466:
                        return var3;
 469:
                        return var2;
 472:
                        return var1;
                    }
                };
                return var1;
            };
            var3 = var3.bind(var4)(var1);
            var7 = var20.id;
            var1 = new Array(1);
            var1[0] = var7;
            var12 = var5.bind(var6)(var3, var1);
            var5 = _closure1_slot5;
            var3 = var5.useState;
            var1 = false;
            var5 = var3.bind(var5)(var1);
            var3 = _closure1_slot3;
            var1 = 2;
            var3 = var3.bind(var4)(var5, var1);
            var1 = 0;
            var15 = var3[var1];
            var1 = 1;
            var1 = var3[var1];
            _closure2_slot1 = var1;
            var3 = _closure1_slot16;
            var2 = _closure1_slot6;
            var1 = {};
            var5 = var9.featuredServerContainer;
            var1['style'] = var5;
            var7 = _closure1_slot15;
            var6 = _closure1_slot19;
            var5 = {};
            var5['guild'] = var20;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(3);
            var5[0] = var6;
            var8 = _closure1_slot16;
            var7 = _closure1_slot6;
            var6 = {};
            var11 = var9.featuredServerInnerContainer;
            var6['style'] = var11;
            var19 = _closure1_slot15;
            var17 = 23;
            var11 = var16[var17];
            var11 = var10.bind(var4)(var11);
            var18 = var11.Text;
            var11 = {'maxFontSizeMultiplier': 1, 'lineClamp': 1, 'style': null, 'variant': 'text-md/semibold', 'color': 'header-primary'};
            var21 = var9.featuredServerTitle;
            var11['style'] = var21;
            var21 = var20.name;
            var11['children'] = var21;
            var18 = var19.bind(var4)(var18, var11);
            var11 = new Array(2);
            var11[0] = var18;
            var19 = _closure1_slot15;
            var17 = var16[var17];
            var17 = var10.bind(var4)(var17);
            var18 = var17.Text;
            var17 = {'maxFontSizeMultiplier': 1, 'lineClamp': 3, 'variant': 'text-xs/normal', 'color': 'header-secondary'};
            var20 = var20.description;
            var17['children'] = var20;
            var17 = var19.bind(var4)(var18, var17);
            var11[1] = var17;
            var6['children'] = var11;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var8 = _closure1_slot15;
            var7 = _closure1_slot6;
            var6 = {};
            var9 = var9.buttonContainer;
            var6['style'] = var9;
            var11 = _closure1_slot15;
            var9 = 24;
            var9 = var16[var9];
            var9 = var10.bind(var4)(var9);
            var10 = var9.Button;
            var9 = {};
            var9['disabled'] = var13;
            var9['loading'] = var15;
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var14 = 21;
            var15 = var18[var14];
            var15 = var17.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var18[var14];
            var14 = var17.bind(var4)(var14);
            var14 = var14.t;
            if(var13) { _fun0002_ip = 487; continue _fun0002 }
 474:
            var13 = var14.VJlc0d;
            var13 = var15.bind(var16)(var13);
            _fun0002_ip = 498; continue _fun0002;
 487:
            var14 = var14.cEnaW1;
            var13 = var15.bind(var16)(var14);
 498:
            var9['text'] = var13;
            var13 = 'sm';
            var9['size'] = var13;
            var9['onPress'] = var12;
            var12 = true;
            var9['grow'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = function RecommendedGuildsRow(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var2 = arg1;
            var6 = var2.discoverableGuilds;
            var _closure2_slot0 = var6;
            var5 = _closure1_slot5;
            var4 = var5.useCallback;
            var3 = new Array(1);
            var3[0] = var6;
            var1 = function(arg1, arg2) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var2 = _closure2_slot0;
                    var1 = arg2;
                    var2 = var2[var1];
                    var1 = null;
                    var3 = var1 == var2;
                    if(var3) { _fun0006_ip = 48; continue _fun0006 }
 23:
                    var5 = _closure1_slot15;
                    var4 = _closure1_slot20;
                    var3 = {};
                    var3['guild'] = var2;
                    var2 = undefined;
                    var1 = var5.bind(var2)(var4, var3);
 48:
                    return var1;
                }
            };
            var9 = var4.bind(var5)(var1, var3);
            var4 = var6.length;
            var3 = 0;
            var1 = null;
            if(!(var3 !== var4)) { _fun0005_ip = 213; continue _fun0005 }
 64:
            var5 = _closure1_slot15;
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 25;
            var2 = var8[var2];
            var4 = undefined;
            var3 = var7.bind(var4)(var2);
            var2 = {};
            var10 = var6.length;
            var6 = new Array(1);
            var6[0] = var10;
            var2['sections'] = var6;
            var6 = 11;
            var10 = var8[var6];
            var10 = var7.bind(var4)(var10);
            var10 = var10.spacing;
            var10 = var10.PX_16;
            var2['insetStart'] = var10;
            var2['renderItem'] = var9;
            var9 = 'windowSize';
            var2['estimatedListSize'] = var9;
            var6 = var8[var6];
            var6 = var7.bind(var4)(var6);
            var6 = var6.spacing;
            var7 = var6.PX_16;
            var6 = 200;
            var6 = var6 + var7;
            var2['itemSize'] = var6;
            var6 = true;
            var2['horizontal'] = var6;
            var6 = 'recommended-servers-list';
            var2['listId'] = var6;
            var6 = false;
            var2['showsHorizontalScrollIndicator'] = var6;
            var1 = var5.bind(var4)(var3, var2);
 213:
            return var1;
        }
    };
    var _closure1_slot21 = var1;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var8 = var6[var4];
    var4 = native4;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ICYMI_MARGIN;
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticsObjects;
    var _closure1_slot11 = var7;
    var7 = var4.AnalyticsPages;
    var _closure1_slot12 = var7;
    var7 = var4.AnalyticsSections;
    var _closure1_slot13 = var7;
    var4 = var4.GuildFeatures;
    var _closure1_slot14 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot15 = var7;
    var7 = var4.jsxs;
    var _closure1_slot16 = var7;
    var4 = var4.Fragment;
    var _closure1_slot17 = var4;
    var4 = 10;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function() {
        var1 = {};
        var2 = {};
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var3 = 11;
        var8 = var6[var3];
        var4 = undefined;
        var8 = var5.bind(var4)(var8);
        var8 = var8.spacing;
        var8 = var8.PX_24;
        var2['marginVertical'] = var8;
        var1['container'] = var2;
        var2 = {};
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.spacing;
        var8 = var8.PX_8;
        var2['marginBottom'] = var8;
        var7 = _closure1_slot10;
        var2['marginHorizontal'] = var7;
        var1['title'] = var2;
        var2 = {};
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.spacing;
        var8 = var8.PX_16;
        var2['marginBottom'] = var8;
        var2['marginHorizontal'] = var7;
        var1['subtitle'] = var2;
        var2 = {'borderRadius': null, 'backgroundColor': null, 'height': 244, 'width': 200, 'overflow': 'hidden'};
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.radii;
        var7 = var7.lg;
        var2['borderRadius'] = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.colors;
        var7 = var7.CARD_PRIMARY_BG;
        var2['backgroundColor'] = var7;
        var1['featuredServerContainer'] = var2;
        var2 = {};
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_12;
        var2['marginHorizontal'] = var7;
        var7 = 36;
        var2['marginTop'] = var7;
        var1['featuredServerInnerContainer'] = var2;
        var2 = {};
        var7 = 'absolute';
        var2['position'] = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_12;
        var2['bottom'] = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_12;
        var2['left'] = var7;
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_12;
        var2['right'] = var7;
        var1['buttonContainer'] = var2;
        var2 = {};
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_8;
        var2['marginBottom'] = var7;
        var1['featuredServerTitle'] = var2;
        var2 = {'position': 'absolute', 'top': 50, 'left': 12};
        var1['guildIcon'] = var2;
        var2 = {'height': 72, 'width': 200};
        var1['bannerImage'] = var2;
        var2 = {};
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.colors;
        var3 = var3.BG_MOD_SUBTLE;
        var2['backgroundColor'] = var3;
        var1['emptyBanner'] = var2;
        return var1;
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot18 = var4;
    var4 = 26;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/icymi/native/ICYMIServerRecommendationRow.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ICYMIServerRecommendationRow() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 12;
            var1 = var3[var1];
            var5 = undefined;
            var4 = var2.bind(var5)(var1);
            var3 = var4.useStateFromStoresArray;
            var1 = _closure1_slot9;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var2 = _closure1_slot9;
                var1 = var2.getDiscoverableGuilds;
                var1 = var1.bind(var2)();
                return var1;
            };
            var15 = var3.bind(var4)(var2, var1);
            var1 = _closure1_slot18;
            var17 = var1.bind(var5)();
            var3 = var15.length;
            var2 = 0;
            var1 = null;
            if(!(var2 !== var3)) { _fun0007_ip = 419; continue _fun0007 }
 82:
            var4 = _closure1_slot16;
            var3 = _closure1_slot17;
            var2 = {};
            var9 = _closure1_slot6;
            var6 = {};
            var8 = var17.container;
            var6['style'] = var8;
            var14 = _closure1_slot15;
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var12 = 23;
            var11 = var10[var12];
            var11 = var8.bind(var5)(var11);
            var13 = var11.Text;
            var11 = {'style': null, 'variant': 'heading-lg/semibold', 'color': 'header-primary'};
            var16 = var17.title;
            var11['style'] = var16;
            var16 = 21;
            var18 = var10[var16];
            var18 = var8.bind(var5)(var18);
            var20 = var18.intl;
            var19 = var20.string;
            var18 = var10[var16];
            var18 = var8.bind(var5)(var18);
            var18 = var18.t;
            var18 = var18.lv1tcX;
            var18 = var19.bind(var20)(var18);
            var11['children'] = var18;
            var13 = var14.bind(var5)(var13, var11);
            var11 = new Array(3);
            var11[0] = var13;
            var14 = _closure1_slot15;
            var12 = var10[var12];
            var12 = var8.bind(var5)(var12);
            var13 = var12.Text;
            var12 = {'style': null, 'variant': 'heading-sm/normal', 'color': 'header-muted'};
            var17 = var17.subtitle;
            var12['style'] = var17;
            var17 = var10[var16];
            var17 = var8.bind(var5)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var16 = var10[var16];
            var16 = var8.bind(var5)(var16);
            var16 = var16.t;
            var16 = var16.x4OezM;
            var16 = var17.bind(var18)(var16);
            var12['children'] = var16;
            var12 = var14.bind(var5)(var13, var12);
            var11[1] = var12;
            var14 = _closure1_slot15;
            var13 = _closure1_slot21;
            var12 = {};
            var12['discoverableGuilds'] = var15;
            var12 = var14.bind(var5)(var13, var12);
            var11[2] = var12;
            var6['children'] = var11;
            var9 = var4.bind(var5)(var9, var6);
            var6 = new Array(2);
            var6[0] = var9;
            var9 = _closure1_slot15;
            var7 = 18;
            var7 = var10[var7];
            var7 = var8.bind(var5)(var7);
            var8 = var7.Separator;
            var7 = {};
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 419:
            return var1;
        }
    };
    var3['ICYMIServerRecommendationRow'] = var2;
    return var1;
})();