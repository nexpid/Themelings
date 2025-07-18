// app/modules/icymi/native/GamingServerActionSheet.tsx
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
            var13 = var2.guild;
            var _closure2_slot0 = var13;
            var2 = _closure1_slot16;
            var4 = undefined;
            var14 = var2.bind(var4)();
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 11;
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
            var5 = !var9;
            if(!var5) { _fun0001_ip = 109; continue _fun0001 }
 83:
            var6 = var13.features;
            var3 = var6.has;
            var2 = _closure1_slot11;
            var2 = var2.ANIMATED_BANNER;
            var5 = var3.bind(var6)(var2);
 109:
            var2 = var13.banner;
            var10 = null;
            var2 = var10 != var2;
            var16 = undefined;
            if(!var2) { _fun0001_ip = 165; continue _fun0001 }
 126:
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 12;
            var2 = var6[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.getAnimatableSourceWithFallback;
            var1 = function(arg1) {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 12;
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
            var16 = var2.bind(var3)(var5, var1);
 165:
            var3 = _closure1_slot13;
            var2 = _closure1_slot6;
            var1 = {};
            var5 = var14.bannerImage;
            var1['style'] = var5;
            var7 = _closure1_slot12;
            var6 = _closure1_slot1;
            var17 = _closure1_slot2;
            var8 = 13;
            var5 = var17[var8];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var12 = {'shape': null, 'x': 8, 'y': 46, 'width': 56, 'height': 56, 'cornerRadius': 20};
            var15 = _closure1_slot0;
            var8 = var17[var8];
            var8 = var15.bind(var4)(var8);
            var8 = var8.CutoutShape;
            var8 = var8.RoundedRect;
            var12['shape'] = var8;
            var8 = new Array(1);
            var8[0] = var12;
            var5['cutouts'] = var8;
            var8 = var13.banner;
            if(!(var10 == var8)) { _fun0001_ip = 325; continue _fun0001 }
 279:
            var12 = _closure1_slot12;
            var10 = _closure1_slot6;
            var8 = {};
            var17 = var14.bannerImage;
            var15 = new Array(2);
            var15[0] = var17;
            var17 = var14.emptyBanner;
            var15[1] = var17;
            var8['style'] = var15;
            var8 = var12.bind(var4)(var10, var8);
            _fun0001_ip = 380; continue _fun0001;
 325:
            var15 = _closure1_slot12;
            var12 = _closure1_slot1;
            var17 = _closure1_slot2;
            var10 = 14;
            var10 = var17[var10];
            var12 = var12.bind(var4)(var10);
            var10 = {};
            var17 = var14.bannerImage;
            var10['style'] = var17;
            var10['source'] = var16;
            var16 = 'cover';
            var10['resizeMode'] = var16;
            var8 = var15.bind(var4)(var12, var10);
 380:
            var5['children'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot12;
            var7 = _closure1_slot1;
            var12 = _closure1_slot2;
            var10 = 15;
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
    var _closure1_slot17 = var1;
    var1 = function FeaturedServer(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var28 = var2.guild;
            var _closure2_slot0 = var28;
            var7 = var2.onJoinGuild;
            var _closure2_slot1 = var7;
            var4 = undefined;
            var _closure2_slot4 = var4;
            var2 = _closure1_slot16;
            var9 = var2.bind(var4)();
            var8 = var28.id;
            var _closure2_slot2 = var8;
            var24 = _closure1_slot0;
            var23 = _closure1_slot2;
            var2 = 11;
            var2 = var23[var2];
            var6 = var24.bind(var4)(var2);
            var5 = var6.useStateFromStores;
            var2 = _closure1_slot8;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getGuild;
                var1 = _closure2_slot2;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var13 = var5.bind(var6)(var3, var2);
            var _closure2_slot3 = var13;
            var6 = _closure1_slot5;
            var5 = var6.useCallback;
            var3 = _closure1_slot4;
            var2 = function* () {
                var1 = function* anon_0_() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0003_ip = 246; continue _fun0003 }
 10:
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 16;
                        var2 = var3[var2];
                        var3 = undefined;
                        var9 = var5.bind(var3)(var2);
                        var8 = var9.trackItemInteraction;
                        var7 = _closure2_slot2;
                        var6 = 'game_content_server';
                        var2 = 'press_join';
                        var2 = var8.bind(var9)(var7, var6, var2);
                        var6 = _closure2_slot4;
                        var2 = true;
                        var2 = var6.bind(var3)(var2);
                        var2 = _closure2_slot3;
                        if(var2) { _fun0003_ip = 154; continue _fun0003 }
 85:
                        var6 = _closure2_slot1;
                        var2 = _closure2_slot2;
                        var2 = var6.bind(var3)(var2);
                        SaveGenerator(address=102);
 100:
                        return var2;
 102:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                        if(var6) { _fun0003_ip = 151; continue _fun0003 }
 108:
                        var7 = _closure2_slot4;
                        var6 = false;
                        var6 = var7.bind(var3)(var6);
                        var7 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var6 = 18;
                        var6 = var8[var6];
                        var7 = var7.bind(var3)(var6);
                        var6 = var7.hideActionSheet;
                        var6 = var6.bind(var7)();
                        _fun0003_ip = 240; continue _fun0003;
 151:
                        return var2;
 154:
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var2 = 17;
                        var2 = var7[var2];
                        var7 = var6.bind(var3)(var2);
                        var6 = var7.transitionToGuildSync;
                        var2 = _closure2_slot2;
                        var2 = var6.bind(var7)(var2);
                        SaveGenerator(address=193);
 191:
                        return var2;
 193:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                        if(var6) { _fun0003_ip = 243; continue _fun0003 }
 199:
                        var6 = _closure2_slot4;
                        var5 = false;
                        var5 = var6.bind(var3)(var5);
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var4 = 18;
                        var4 = var6[var4];
                        var5 = var5.bind(var3)(var4);
                        var4 = var5.hideActionSheet;
                        var4 = var4.bind(var5)();
 240:
                        return var3;
 243:
                        return var2;
 246:
                        return var1;
                    }
                };
                return var1;
            };
            var3 = var3.bind(var4)(var2);
            var2 = new Array(3);
            var2[0] = var13;
            var2[1] = var8;
            var2[2] = var7;
            var12 = var5.bind(var6)(var3, var2);
            var5 = _closure1_slot5;
            var3 = var5.useState;
            var2 = false;
            var5 = var3.bind(var5)(var2);
            var3 = _closure1_slot3;
            var2 = 2;
            var3 = var3.bind(var4)(var5, var2);
            var27 = 0;
            var15 = var3[var27];
            var2 = 1;
            var2 = var3[var2];
            _closure2_slot4 = var2;
            var5 = _closure1_slot5;
            var3 = var5.useMemo;
            var2 = new Array(1);
            var2[0] = var28;
            var1 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 19;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.fromClientDiscoverableGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot13;
            var2 = _closure1_slot6;
            var1 = {};
            var5 = var9.featuredServerContainer;
            var1['style'] = var5;
            var7 = _closure1_slot12;
            var6 = _closure1_slot17;
            var5 = {};
            var5['guild'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(4);
            var5[0] = var6;
            var8 = _closure1_slot13;
            var7 = _closure1_slot6;
            var6 = {};
            var10 = var9.featuredServerInnerContainer;
            var6['style'] = var10;
            var16 = _closure1_slot12;
            var20 = 20;
            var10 = var23[var20];
            var10 = var24.bind(var4)(var10);
            var11 = var10.Text;
            var10 = {'maxFontSizeMultiplier': 1, 'style': null, 'variant': 'text-md/semibold', 'color': 'header-primary'};
            var17 = var9.featuredServerTitle;
            var10['style'] = var17;
            var17 = var28.name;
            var10['children'] = var17;
            var11 = var16.bind(var4)(var11, var10);
            var10 = new Array(2);
            var10[0] = var11;
            var17 = _closure1_slot12;
            var11 = var23[var20];
            var11 = var24.bind(var4)(var11);
            var16 = var11.Text;
            var11 = {'maxFontSizeMultiplier': 1, 'variant': 'text-sm/normal', 'color': 'header-secondary'};
            var18 = var28.description;
            var11['children'] = var18;
            var11 = var17.bind(var4)(var16, var11);
            var10[1] = var11;
            var6['children'] = var10;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var8 = _closure1_slot13;
            var7 = _closure1_slot6;
            var6 = {};
            var10 = var9.guildCard;
            var6['style'] = var10;
            var16 = _closure1_slot13;
            var11 = _closure1_slot6;
            var10 = {};
            var17 = var9.guildMemberCount;
            var10['style'] = var17;
            var19 = _closure1_slot12;
            var18 = _closure1_slot6;
            var17 = {};
            var21 = var9.greenDot;
            var17['style'] = var21;
            var18 = var19.bind(var4)(var18, var17);
            var17 = new Array(2);
            var17[0] = var18;
            var22 = _closure1_slot12;
            var18 = var23[var20];
            var18 = var24.bind(var4)(var18);
            var21 = var18.Text;
            var19 = {'variant': 'text-xs/normal', 'color': 'header-secondary'};
            var18 = 21;
            var25 = var23[var18];
            var25 = var24.bind(var4)(var25);
            var26 = var25.intl;
            var25 = var26.format;
            var23 = var23[var18];
            var23 = var24.bind(var4)(var23);
            var23 = var23.t;
            var24 = var23.LC+S+v;
            var23 = {};
            var31 = var28.presenceCount;
            var29 = null;
            var32 = var29 != var31;
            var30 = 0;
            if(!var32) { _fun0002_ip = 600; continue _fun0002 }
 597:
            var30 = var31;
 600:
            var23['membersOnline'] = var30;
            var23 = var25.bind(var26)(var24, var23);
            var19['children'] = var23;
            var19 = var22.bind(var4)(var21, var19);
            var17[1] = var19;
            var10['children'] = var17;
            var11 = var16.bind(var4)(var11, var10);
            var10 = new Array(2);
            var10[0] = var11;
            var17 = _closure1_slot13;
            var16 = _closure1_slot6;
            var11 = {};
            var19 = var9.guildMemberCount;
            var11['style'] = var19;
            var22 = _closure1_slot12;
            var21 = _closure1_slot6;
            var19 = {};
            var23 = var9.greyDot;
            var19['style'] = var23;
            var21 = var22.bind(var4)(var21, var19);
            var19 = new Array(2);
            var19[0] = var21;
            var22 = _closure1_slot12;
            var24 = _closure1_slot0;
            var23 = _closure1_slot2;
            var20 = var23[var20];
            var20 = var24.bind(var4)(var20);
            var21 = var20.Text;
            var20 = {'variant': 'text-xs/normal', 'color': 'header-secondary'};
            var25 = var23[var18];
            var25 = var24.bind(var4)(var25);
            var26 = var25.intl;
            var25 = var26.format;
            var23 = var23[var18];
            var23 = var24.bind(var4)(var23);
            var23 = var23.t;
            var24 = var23.zRl6XV;
            var23 = {};
            var28 = var28.memberCount;
            var29 = var29 != var28;
            var27 = 0;
            if(!var29) { _fun0002_ip = 796; continue _fun0002 }
 793:
            var27 = var28;
 796:
            var23['count'] = var27;
            var23 = var25.bind(var26)(var24, var23);
            var20['children'] = var23;
            var20 = var22.bind(var4)(var21, var20);
            var19[1] = var20;
            var11['children'] = var19;
            var11 = var17.bind(var4)(var16, var11);
            var10[1] = var11;
            var6['children'] = var10;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var8 = _closure1_slot12;
            var7 = _closure1_slot6;
            var6 = {};
            var9 = var9.buttonContainer;
            var6['style'] = var9;
            var11 = _closure1_slot12;
            var10 = _closure1_slot0;
            var16 = _closure1_slot2;
            var9 = 22;
            var9 = var16[var9];
            var9 = var10.bind(var4)(var9);
            var10 = var9.Button;
            var9 = {};
            var9['loading'] = var15;
            var17 = _closure1_slot0;
            var14 = _closure1_slot2;
            var15 = var14[var18];
            var15 = var17.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var14[var18];
            var14 = var17.bind(var4)(var14);
            var14 = var14.t;
            if(var13) { _fun0002_ip = 962; continue _fun0002 }
 949:
            var13 = var14.VJlc0d;
            var13 = var15.bind(var16)(var13);
            _fun0002_ip = 973; continue _fun0002;
 962:
            var14 = var14.KLOhbG;
            var13 = var15.bind(var16)(var14);
 973:
            var9['text'] = var13;
            var13 = 'sm';
            var9['size'] = var13;
            var9['onPress'] = var12;
            var12 = true;
            var9['grow'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[3] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot18 = var1;
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
    var7 = var4.Endpoints;
    var _closure1_slot10 = var7;
    var4 = var4.GuildFeatures;
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot12 = var7;
    var4 = var4.jsxs;
    var _closure1_slot13 = var4;
    var4 = {'363445589247131668': '150074202727251969', '356869127241072640': '417825368062558219', '432980957394370572': '322850917248663552', '700136079562375258': '679875946597056683', '356875570916753438': '302094807046684672', '1158877933042143272': '574217343635554305', '356876176465199104': '224565836277481473', '356875221078245376': '94882524378968064', '1149118246826561609': '136986169563938816', '762434991303950386': '522681957373575168', '1205090671527071784': '1102970375731691612', '1276737795012165766': '1243977533133820045'};
    var _closure1_slot14 = var4;
    var4 = {'1288243612668264480': 'theastronauts', '1209665818464358430': 'balatro'};
    var _closure1_slot15 = var4;
    var4 = 9;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function() {
        var1 = {};
        var2 = {};
        var3 = 12;
        var2['paddingTop'] = var3;
        var1['title'] = var2;
        var2 = {'marginTop': 4, 'marginBottom': 16};
        var1['subtitle'] = var2;
        var2 = {};
        var6 = _closure1_slot1;
        var7 = _closure1_slot2;
        var4 = 10;
        var3 = var7[var4];
        var5 = undefined;
        var3 = var6.bind(var5)(var3);
        var3 = var3.radii;
        var3 = var3.lg;
        var2['borderRadius'] = var3;
        var3 = var7[var4];
        var3 = var6.bind(var5)(var3);
        var3 = var3.colors;
        var3 = var3.CARD_PRIMARY_BG;
        var2['backgroundColor'] = var3;
        var3 = 'hidden';
        var2['overflow'] = var3;
        var1['featuredServerContainer'] = var2;
        var2 = {};
        var3 = var7[var4];
        var3 = var6.bind(var5)(var3);
        var3 = var3.spacing;
        var3 = var3.PX_12;
        var2['marginHorizontal'] = var3;
        var3 = 36;
        var2['marginTop'] = var3;
        var1['featuredServerInnerContainer'] = var2;
        var2 = {};
        var3 = var7[var4];
        var3 = var6.bind(var5)(var3);
        var3 = var3.spacing;
        var3 = var3.PX_12;
        var2['marginHorizontal'] = var3;
        var3 = var7[var4];
        var3 = var6.bind(var5)(var3);
        var3 = var3.spacing;
        var3 = var3.PX_16;
        var2['marginTop'] = var3;
        var3 = var7[var4];
        var3 = var6.bind(var5)(var3);
        var3 = var3.spacing;
        var3 = var3.PX_12;
        var2['marginBottom'] = var3;
        var1['buttonContainer'] = var2;
        var2 = {};
        var3 = var7[var4];
        var3 = var6.bind(var5)(var3);
        var3 = var3.spacing;
        var3 = var3.PX_8;
        var2['marginBottom'] = var3;
        var1['featuredServerTitle'] = var2;
        var2 = {'flexDirection': 'row', 'gap': 24};
        var3 = var7[var4];
        var3 = var6.bind(var5)(var3);
        var3 = var3.spacing;
        var3 = var3.PX_12;
        var2['paddingHorizontal'] = var3;
        var3 = var7[var4];
        var3 = var6.bind(var5)(var3);
        var3 = var3.spacing;
        var3 = var3.PX_12;
        var2['marginTop'] = var3;
        var1['guildCard'] = var2;
        var2 = {'flexDirection': 'row', 'gap': 4, 'alignItems': 'center'};
        var1['guildMemberCount'] = var2;
        var2 = {'position': 'absolute', 'top': 50, 'left': 12};
        var1['guildIcon'] = var2;
        var2 = {};
        var3 = 72;
        var2['height'] = var3;
        var1['bannerImage'] = var2;
        var2 = {};
        var3 = var7[var4];
        var3 = var6.bind(var5)(var3);
        var3 = var3.colors;
        var3 = var3.BG_MOD_SUBTLE;
        var2['backgroundColor'] = var3;
        var1['emptyBanner'] = var2;
        var2 = {};
        var3 = var7[var4];
        var3 = var6.bind(var5)(var3);
        var3 = var3.radii;
        var3 = var3.round;
        var2['borderRadius'] = var3;
        var3 = var7[var4];
        var3 = var6.bind(var5)(var3);
        var3 = var3.colors;
        var3 = var3.STATUS_POSITIVE_BACKGROUND;
        var2['backgroundColor'] = var3;
        var3 = 8;
        var2['width'] = var3;
        var2['height'] = var3;
        var1['greenDot'] = var2;
        var2 = {};
        var8 = var7[var4];
        var8 = var6.bind(var5)(var8);
        var8 = var8.radii;
        var8 = var8.round;
        var2['borderRadius'] = var8;
        var4 = var7[var4];
        var4 = var6.bind(var5)(var4);
        var4 = var4.colors;
        var4 = var4.HEADER_SECONDARY;
        var2['backgroundColor'] = var4;
        var2['width'] = var3;
        var2['height'] = var3;
        var1['greyDot'] = var2;
        return var1;
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot16 = var4;
    var4 = 32;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/icymi/native/GamingServerActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function OfficialGuildActionSheet(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = arg1;
            var6 = var2.applicationId;
            var2 = _closure1_slot16;
            var5 = undefined;
            var20 = var2.bind(var5)();
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 23;
            var2 = var7[var2];
            var3 = var4.bind(var5)(var2);
            var2 = var3.useGetOrFetchApplication;
            var27 = var2.bind(var3)(var6);
            var _closure2_slot0 = var27;
            var2 = _closure1_slot14;
            var2 = var2[var6];
            var _closure2_slot1 = var2;
            var3 = _closure1_slot15;
            var6 = var3[var6];
            var _closure2_slot2 = var6;
            var8 = _closure1_slot5;
            var3 = var8.useState;
            var10 = null;
            var9 = var3.bind(var8)(var10);
            var8 = _closure1_slot3;
            var3 = 2;
            var8 = var8.bind(var5)(var9, var3);
            var3 = 0;
            var15 = var8[var3];
            var3 = 1;
            var3 = var8[var3];
            var _closure2_slot3 = var3;
            var12 = _closure1_slot5;
            var9 = var12.useEffect;
            var8 = new Array(1);
            var8[0] = var6;
            var3 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0005_ip = 66; continue _fun0005 }
 13:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 24;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var4.bind(var3)(var2);
                    var1 = _closure2_slot2;
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.then;
                    var1 = function(arg1) {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                            var1 = arg1;
                            var2 = var1.invite;
                            var4 = null;
                            var2 = var4 != var2;
                            if(!var2) { _fun0006_ip = 33; continue _fun0006 }
 18:
                            var3 = var1.invite;
                            var3 = var3.guild;
                            var2 = var4 != var3;
 33:
                            if(!var2) { _fun0006_ip = 226; continue _fun0006 }
 39:
                            var3 = _closure2_slot3;
                            var2 = {};
                            var4 = var1.invite;
                            var7 = var4.guild;
                            var8 = var2;
                            var4 = copyDataProperties(var8, var7);
                            var4 = global;
                            var6 = var4.Set;
                            var4 = var1.invite;
                            var4 = var4.guild;
                            var8 = var4.features;
                            var5 = var6.prototype;
                            var5 = Object.create(var5, {constructor: {value: var6}});
                            var9 = var5;
                            var4 = new var9[var6](var8, var7);
                            var5 = var4 instanceof Object ? var4 : var5;
                            var4 = 'features';
                            var2[var4] = var5;
                            var4 = var1.invite;
                            var5 = var4.approximate_presence_count;
                            var4 = 'presenceCount';
                            var2[var4] = var5;
                            var4 = var1.invite;
                            var5 = var4.approximate_member_count;
                            var4 = 'memberCount';
                            var2[var4] = var5;
                            var1 = var1.invite;
                            var1 = var1.guild;
                            var4 = var1.premium_subscription_count;
                            var1 = 'premiumSubscriptionCount';
                            var2[var1] = var4;
                            var1 = undefined;
                            var4 = 'discoverySplash';
                            var2[var4] = var1;
                            var4 = 'emojis';
                            var2[var4] = var1;
                            var5 = 'en';
                            var4 = 'preferredLocale';
                            var2[var4] = var5;
                            var1 = var3.bind(var1)(var2);
 226:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
 66:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var9.bind(var12)(var3, var8);
            var3 = 11;
            var3 = var7[var3];
            var9 = var4.bind(var5)(var3);
            var8 = var9.useStateFromStores;
            var3 = _closure1_slot9;
            var7 = new Array(1);
            var7[0] = var3;
            var4 = new Array(1);
            var4[0] = var2;
            var3 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var2 = _closure1_slot9;
                    var1 = var2.getDiscoverableGuilds;
                    var3 = var1.bind(var2)();
                    var2 = var3.find;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.id;
                        var1 = _closure2_slot1;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    var3 = var1 != var2;
                    if(!var3) { _fun0007_ip = 48; continue _fun0007 }
 45:
                    var1 = var2;
 48:
                    return var1;
                }
            };
            var19 = var8.bind(var9)(var7, var3, var4);
            var7 = _closure1_slot5;
            var4 = var7.useEffect;
            var3 = var10 == var27;
            var8 = undefined;
            if(var3) { _fun0004_ip = 232; continue _fun0004 }
 227:
            var8 = var27.id;
 232:
            var3 = new Array(2);
            var3[0] = var8;
            var3[1] = var2;
            var2 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var1 = _closure2_slot0;
                    var4 = null;
                    var5 = var4 == var1;
                    var1 = undefined;
                    var3 = undefined;
                    if(var5) { _fun0008_ip = 31; continue _fun0008 }
 22:
                    var5 = _closure2_slot0;
                    var3 = var5.id;
 31:
                    if(!(var4 != var3)) { _fun0008_ip = 72; continue _fun0008 }
 35:
                    var5 = _closure1_slot14;
                    var3 = _closure2_slot0;
                    var7 = var4 == var3;
                    var3 = undefined;
                    if(var7) { _fun0008_ip = 64; continue _fun0008 }
 55:
                    var6 = _closure2_slot0;
                    var3 = var6.id;
 64:
                    var3 = var5[var3];
                    if(!(var4 != var3)) { _fun0008_ip = 125; continue _fun0008 }
 72:
                    var4 = _closure1_slot9;
                    var3 = var4.getDiscoverableGuilds;
                    var5 = var3.bind(var4)();
                    var4 = var5.some;
                    var3 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.id;
                        var1 = _closure2_slot1;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var3 = var4.bind(var5)(var3);
                    if(var3) { _fun0008_ip = 125; continue _fun0008 }
 110:
                    var2 = function() {
                        var4 = _closure1_slot4;
                        var3 = undefined;
                        var2 = function* () {
                            var1 = function* anon_0_() {
                                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(var2) { _fun0009_ip = 223; continue _fun0009 }
 10:
                                    var5 = _closure1_slot0;
                                    var9 = _closure1_slot2;
                                    var2 = 25;
                                    var2 = var9[var2];
                                    var3 = undefined;
                                    var2 = var5.bind(var3)(var2);
                                    var6 = var2.HTTP;
                                    var5 = var6.get;
                                    var2 = {};
                                    var7 = _closure1_slot10;
                                    var7 = var7.GUILD_DISCOVERY;
                                    var2['url'] = var7;
                                    var8 = _closure1_slot1;
                                    var7 = 26;
                                    var7 = var9[var7];
                                    var9 = var8.bind(var3)(var7);
                                    var8 = var9.stringify;
                                    var7 = {};
                                    var11 = _closure2_slot1;
                                    var10 = new Array(1);
                                    var10[0] = var11;
                                    var7['guild_ids'] = var10;
                                    var7 = var8.bind(var9)(var7);
                                    var2['query'] = var7;
                                    var7 = true;
                                    var2['oldFormErrors'] = var7;
                                    var2['rejectWithError'] = var7;
                                    var2 = var5.bind(var6)(var2);
                                    SaveGenerator(address=134);
 132:
                                    return var2;
 134:
                                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                                    if(var5) { _fun0009_ip = 220; continue _fun0009 }
 140:
                                    var5 = var2.body;
                                    var9 = var5.guilds;
                                    var5 = _closure1_slot1;
                                    var6 = _closure1_slot2;
                                    var4 = 27;
                                    var4 = var6[var4];
                                    var6 = var5.bind(var3)(var4);
                                    var5 = var6.dispatch;
                                    var4 = {};
                                    var7 = 'LOAD_ICYMI_RECOMMENDED_GUILDS';
                                    var4['type'] = var7;
                                    var8 = var9.map;
                                    var7 = function(arg1) {
                                        var1 = {};
                                        var2 = 0;
                                        var1['rank'] = var2;
                                        var2 = arg1;
                                        var1['guild'] = var2;
                                        return var1;
                                    };
                                    var7 = var8.bind(var9)(var7);
                                    var4['guilds'] = var7;
                                    var4 = var5.bind(var6)(var4);
                                    return var3;
 220:
                                    return var2;
 223:
                                    return var1;
                                }
                            };
                            return var1;
                        };
                        var2 = var4.bind(var3)(var2);
                        var _closure4_slot0 = var2;
                        var1 = function() {
                            var1 = undefined;
                            var4 = _closure4_slot0;
                            var3 = var4.apply;
                            var1 = arguments;
                            var2 = var1;
                            var1 = this;
                            var1 = var3.bind(var4)(var1, var2);
                            return var1;
                        };
                        return var1;
                    };
                    var2 = var2.bind(var1)();
                    var2 = var2.bind(var1)();
 125:
                    return var1;
                }
            };
            var2 = var4.bind(var7)(var2, var3);
            var7 = _closure1_slot5;
            var4 = var7.useCallback;
            var2 = function() {
                var4 = _closure1_slot4;
                var3 = undefined;
                var2 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                            StartGenerator();
                            var6 = arg1;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0010_ip = 303; continue _fun0010 }
 13:
                            var5 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var8 = 28;
                            var2 = var2[var8];
                            var4 = undefined;
                            var9 = var5.bind(var4)(var2);
                            var7 = var9.gravityJoinGuild;
                            var5 = new Array(1);
                            var5[0] = var6;
                            var2 = 'recommended_guilds';
                            var2 = var7.bind(var9)(var5, var2);
                            SaveGenerator(address=68);
 66:
                            return var2;
 68:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                            if(var5) { _fun0010_ip = 300; continue _fun0010 }
 77:
                            var5 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            if(var2) { _fun0010_ip = 180; continue _fun0010 }
 88:
                            var9 = 29;
                            var9 = var7[var9];
                            var11 = var5.bind(var4)(var9);
                            var10 = var11.open;
                            var9 = {};
                            var12 = 'RecommendedServersRow';
                            var9['key'] = var12;
                            var15 = _closure1_slot0;
                            var12 = 21;
                            var13 = var7[var12];
                            var13 = var15.bind(var4)(var13);
                            var14 = var13.intl;
                            var13 = var14.string;
                            var12 = var7[var12];
                            var12 = var15.bind(var4)(var12);
                            var12 = var12.t;
                            var12 = var12.CG4Hkp;
                            var12 = var13.bind(var14)(var12);
                            var9['content'] = var12;
                            var9 = var10.bind(var11)(var9);
                            _fun0010_ip = 294; continue _fun0010;
 180:
                            var9 = var7[var8];
                            var10 = var5.bind(var4)(var9);
                            var9 = var10.addedRecommendedGuild;
                            var9 = var9.bind(var10)();
                            var8 = var7[var8];
                            var10 = var5.bind(var4)(var8);
                            var9 = var10.fetchDehydrated;
                            var8 = {'isReloading': true, 'forceRefresh': true};
                            var9 = var9.bind(var10)(var8);
                            var8 = var9.then;
                            var10 = _closure1_slot4;
                            var3 = function* () {
                                var1 = function* anon_0_() {
                                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                                        StartGenerator();
                                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                        if(var2) { _fun0011_ip = 125; continue _fun0011 }
 7:
                                        var3 = _closure1_slot1;
                                        var2 = _closure1_slot2;
                                        var7 = 28;
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
                                        if(var3) { _fun0011_ip = 122; continue _fun0011 }
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
                                        if(var6) { _fun0011_ip = 119; continue _fun0011 }
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
                            var3 = var10.bind(var4)(var3);
                            var3 = var8.bind(var9)(var3);
                            var3 = 17;
                            var3 = var7[var3];
                            var5 = var5.bind(var4)(var3);
                            var3 = var5.transitionToGuildSync;
                            var3 = var3.bind(var5)(var6);
                            SaveGenerator(address=288);
 286:
                            return var3;
 288:
                            ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                            if(var5) { _fun0010_ip = 297; continue _fun0010 }
 294:
                            return var4;
 297:
                            return var3;
 300:
                            return var2;
 303:
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
            var3 = var2.bind(var5)();
            var2 = new Array(0);
            var18 = var4.bind(var7)(var3, var2);
            var4 = _closure1_slot5;
            var3 = var4.useCallback;
            var2 = _closure1_slot4;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0012_ip = 99; continue _fun0012 }
 7:
                        var3 = _closure2_slot2;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0012_ip = 91; continue _fun0012 }
 20:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 30;
                        var3 = var3[var2];
                        var2 = undefined;
                        var4 = var4.bind(var2)(var3);
                        var3 = var4.acceptInviteAndTransitionToInviteChannel;
                        var2 = {};
                        var5 = _closure2_slot2;
                        var2['inviteKey'] = var5;
                        var5 = {};
                        var6 = 'icymi';
                        var5['location'] = var6;
                        var2['context'] = var5;
                        var2 = var3.bind(var4)(var2);
                        SaveGenerator(address=85);
 83:
                        return var2;
 85:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0012_ip = 96; continue _fun0012 }
 91:
                        var3 = undefined;
                        return var3;
 96:
                        return var2;
 99:
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var2.bind(var5)(var1);
            var1 = new Array(1);
            var1[0] = var6;
            var14 = var3.bind(var4)(var2, var1);
            var2 = var10 == var27;
            var1 = null;
            if(var2) { _fun0004_ip = 707; continue _fun0004 }
 338:
            var4 = _closure1_slot12;
            var22 = _closure1_slot0;
            var23 = _closure1_slot2;
            var2 = 31;
            var2 = var23[var2];
            var2 = var22.bind(var5)(var2);
            var3 = var2.ActionSheet;
            var2 = {};
            var6 = true;
            var2['startExpanded'] = var6;
            var8 = _closure1_slot13;
            var7 = _closure1_slot6;
            var6 = {};
            var9 = var20.title;
            var6['style'] = var9;
            var16 = _closure1_slot12;
            var12 = 20;
            var9 = var23[var12];
            var9 = var22.bind(var5)(var9);
            var13 = var9.Text;
            var9 = {};
            var17 = 'heading-lg/bold';
            var9['variant'] = var17;
            var17 = 21;
            var21 = var23[var17];
            var21 = var22.bind(var5)(var21);
            var26 = var21.intl;
            var25 = var26.format;
            var21 = var23[var17];
            var21 = var22.bind(var5)(var21);
            var21 = var21.t;
            var24 = var21.BSSkgI;
            var21 = {};
            var27 = var27.name;
            var21['applicationName'] = var27;
            var21 = var25.bind(var26)(var24, var21);
            var9['children'] = var21;
            var13 = var16.bind(var5)(var13, var9);
            var9 = new Array(4);
            var9[0] = var13;
            var16 = _closure1_slot12;
            var12 = var23[var12];
            var12 = var22.bind(var5)(var12);
            var13 = var12.Text;
            var12 = {'variant': 'text-md/normal', 'color': 'text-normal'};
            var20 = var20.subtitle;
            var12['style'] = var20;
            var20 = var23[var17];
            var20 = var22.bind(var5)(var20);
            var21 = var20.intl;
            var20 = var21.string;
            var17 = var23[var17];
            var17 = var22.bind(var5)(var17);
            var17 = var17.t;
            var17 = var17.MOA2xs;
            var17 = var20.bind(var21)(var17);
            var12['children'] = var17;
            var12 = var16.bind(var5)(var13, var12);
            var9[1] = var12;
            var13 = var10 != var19;
            var12 = null;
            if(!var13) { _fun0004_ip = 645; continue _fun0004 }
 620:
            var17 = _closure1_slot12;
            var16 = _closure1_slot18;
            var13 = {};
            var13['guild'] = var19;
            var13['onJoinGuild'] = var18;
            var12 = var17.bind(var5)(var16, var13);
 645:
            var9[2] = var12;
            var12 = var10 != var15;
            var10 = null;
            if(!var12) { _fun0004_ip = 683; continue _fun0004 }
 658:
            var13 = _closure1_slot12;
            var12 = _closure1_slot18;
            var11 = {};
            var11['guild'] = var15;
            var11['onJoinGuild'] = var14;
            var10 = var13.bind(var5)(var12, var11);
 683:
            var9[3] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 707:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();