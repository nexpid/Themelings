// app/uikit-native/modals/InviteError.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var11 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function InviteErrorBase(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var1 = var2.invite;
            var3 = var2.onPressClose;
            var _closure2_slot0 = var3;
            var7 = var2.inviteError;
            var2 = _closure1_slot11;
            var4 = undefined;
            var12 = var2.bind(var4)();
            var3 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 6;
            var2 = var10[var2];
            var8 = var3.bind(var4)(var2);
            var5 = var8.isThemeDark;
            var3 = _closure1_slot1;
            var2 = 7;
            var2 = var10[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var2 = var5.bind(var8)(var2);
            var8 = _closure1_slot2;
            if(var2) { _fun0001_ip = 107; continue _fun0001 }
 98:
            var2 = 9;
            var2 = var8[var2];
            _fun0001_ip = 114; continue _fun0001;
 107:
            var5 = 8;
            var2 = var8[var5];
 114:
            var10 = var3.bind(var4)(var2);
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 10;
            var2 = var5[var2];
            var5 = var3.bind(var4)(var2);
            var3 = var5.getDescriptiveInviteError;
            var15 = null;
            var8 = var15 == var7;
            var2 = undefined;
            if(var8) { _fun0001_ip = 161; continue _fun0001 }
 156:
            var2 = var7.code;
 161:
            var16 = var3.bind(var5)(var2);
            var2 = var1.state;
            var1 = _closure1_slot7;
            var1 = var1.BANNED;
            if(!(var2 !== var1)) { _fun0001_ip = 262; continue _fun0001 }
 185:
            var1 = var15 == var16;
            var11 = undefined;
            if(var1) { _fun0001_ip = 199; continue _fun0001 }
 194:
            var11 = var16.description;
 199:
            if(!(var15 == var11)) { _fun0001_ip = 260; continue _fun0001 }
 203:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 11;
            var2 = var7[var1];
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var7[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.FWkU6O;
            var11 = var2.bind(var3)(var1);
 260:
            _fun0001_ip = 319; continue _fun0001;
 262:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 11;
            var2 = var7[var1];
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var7[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.GzD/aW;
            var11 = var2.bind(var3)(var1);
 319:
            var3 = _closure1_slot10;
            var2 = _closure1_slot9;
            var1 = {};
            var8 = _closure1_slot8;
            var7 = _closure1_slot3;
            var5 = {};
            var13 = var12.expiredImage;
            var5['style'] = var13;
            var5['source'] = var10;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(4);
            var5[0] = var7;
            var13 = _closure1_slot8;
            var10 = _closure1_slot0;
            var8 = _closure1_slot2;
            var7 = 12;
            var8 = var8[var7];
            var8 = var10.bind(var4)(var8);
            var10 = var8.Text;
            var8 = {'style': null, 'variant': 'heading-xl/extrabold', 'color': 'header-primary'};
            var14 = var12.expiredTitle;
            var8['style'] = var14;
            var17 = var15 == var16;
            var14 = undefined;
            if(var17) { _fun0001_ip = 436; continue _fun0001 }
 431:
            var14 = var16.title;
 436:
            if(!(var15 == var14)) { _fun0001_ip = 497; continue _fun0001 }
 440:
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var15 = 11;
            var16 = var19[var15];
            var16 = var18.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var15 = var19[var15];
            var15 = var18.bind(var4)(var15);
            var15 = var15.t;
            var15 = var15.u9zxnZ;
            var14 = var16.bind(var17)(var15);
 497:
            var8['children'] = var14;
            var8 = var13.bind(var4)(var10, var8);
            var5[1] = var8;
            var10 = _closure1_slot8;
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var7 = var14[var7];
            var7 = var13.bind(var4)(var7);
            var8 = var7.Text;
            var7 = {'style': null, 'variant': 'text-sm/medium', 'color': 'header-secondary'};
            var12 = var12.expiredBody;
            var7['style'] = var12;
            var7['children'] = var11;
            var7 = var10.bind(var4)(var8, var7);
            var5[2] = var7;
            var8 = _closure1_slot8;
            var6 = 13;
            var6 = var14[var6];
            var6 = var13.bind(var4)(var6);
            var7 = var6.Button;
            var6 = {'variant': 'primary', 'size': 'lg'};
            var10 = 11;
            var11 = var14[var10];
            var11 = var13.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var14[var10];
            var10 = var13.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10.wcqOoK;
            var10 = var11.bind(var12)(var10);
            var6['text'] = var10;
            var9 = function handlePressClose() {
                var2 = _closure2_slot0;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            };
            var6['onPress'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[3] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function InviteDisabledError(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var1 = var2.invite;
            var2 = var2.onPressClose;
            var _closure2_slot0 = var2;
            var2 = _closure1_slot11;
            var5 = undefined;
            var13 = var2.bind(var5)();
            var6 = var1.guild;
            var1 = null;
            if(!(var1 != var6)) { _fun0002_ip = 662; continue _fun0002 }
 48:
            var20 = _closure1_slot1;
            var15 = _closure1_slot2;
            var2 = 14;
            var2 = var15[var2];
            var4 = var20.bind(var5)(var2);
            var3 = var4.getGuildIconURL;
            var2 = {};
            var8 = var6.id;
            var2['id'] = var8;
            var6 = var6.icon;
            var2['icon'] = var6;
            var6 = 64;
            var2['size'] = var6;
            var6 = false;
            var2['canAnimate'] = var6;
            var14 = var3.bind(var4)(var2);
            var4 = _closure1_slot10;
            var3 = _closure1_slot9;
            var2 = {};
            var8 = _closure1_slot4;
            var6 = {};
            var9 = var13.disabledView;
            var6['style'] = var9;
            var12 = _closure1_slot8;
            var9 = 15;
            var9 = var15[var9];
            var11 = var20.bind(var5)(var9);
            var9 = {};
            var16 = var13.disabledPauseIcon;
            var9['style'] = var16;
            var16 = 16;
            var16 = var15[var16];
            var16 = var20.bind(var5)(var16);
            var9['source'] = var16;
            var11 = var12.bind(var5)(var11, var9);
            var9 = new Array(2);
            var9[0] = var11;
            var16 = _closure1_slot8;
            var17 = 17;
            var11 = var15[var17];
            var12 = var20.bind(var5)(var11);
            var11 = {};
            var18 = var13.guildIcon;
            var11['style'] = var18;
            var11['icon'] = var14;
            var14 = _closure1_slot0;
            var17 = var15[var17];
            var17 = var14.bind(var5)(var17);
            var17 = var17.GuildIconSizes;
            var17 = var17.XLARGE;
            var11['size'] = var17;
            var11 = var16.bind(var5)(var12, var11);
            var9[1] = var11;
            var6['children'] = var9;
            var8 = var4.bind(var5)(var8, var6);
            var6 = new Array(4);
            var6[0] = var8;
            var12 = _closure1_slot8;
            var8 = 12;
            var8 = var15[var8];
            var8 = var14.bind(var5)(var8);
            var9 = var8.Text;
            var8 = {'style': null, 'variant': 'heading-xl/semibold', 'color': 'text-danger'};
            var11 = var13.disabledTitle;
            var8['style'] = var11;
            var11 = 11;
            var16 = var15[var11];
            var16 = var14.bind(var5)(var16);
            var18 = var16.intl;
            var17 = var18.string;
            var16 = var15[var11];
            var16 = var14.bind(var5)(var16);
            var16 = var16.t;
            var16 = var16.jlLX2d;
            var16 = var17.bind(var18)(var16);
            var8['children'] = var16;
            var8 = var12.bind(var5)(var9, var8);
            var6[1] = var8;
            var12 = _closure1_slot8;
            var8 = 18;
            var8 = var15[var8];
            var8 = var14.bind(var5)(var8);
            var9 = var8.TextWithIOSLinkWorkaround;
            var8 = {'style': null, 'variant': 'text-md/normal', 'color': 'header-secondary'};
            var13 = var13.disabledBody;
            var8['style'] = var13;
            var13 = var15[var11];
            var13 = var14.bind(var5)(var13);
            var18 = var13.intl;
            var17 = var18.format;
            var13 = var15[var11];
            var13 = var14.bind(var5)(var13);
            var13 = var13.t;
            var16 = var13.RXSeLi;
            var13 = {};
            var19 = 19;
            var19 = var15[var19];
            var21 = var20.bind(var5)(var19);
            var20 = var21.getArticleURL;
            var19 = _closure1_slot6;
            var19 = var19.INVITE_DISABLED;
            var19 = var20.bind(var21)(var19);
            var13['articleLink'] = var19;
            var13 = var17.bind(var18)(var16, var13);
            var8['children'] = var13;
            var8 = var12.bind(var5)(var9, var8);
            var6[2] = var8;
            var9 = _closure1_slot8;
            var7 = 13;
            var7 = var15[var7];
            var7 = var14.bind(var5)(var7);
            var8 = var7.Button;
            var7 = {'variant': 'primary', 'size': 'lg'};
            var12 = var15[var11];
            var12 = var14.bind(var5)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var15[var11];
            var11 = var14.bind(var5)(var11);
            var11 = var11.t;
            var11 = var11.yD/zkp;
            var11 = var12.bind(var13)(var11);
            var7['text'] = var11;
            var10 = function handlePressClose() {
                var2 = _closure2_slot0;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            };
            var7['onPress'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[3] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 662:
            return var1;
        }
    };
    var _closure1_slot13 = var1;
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
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.Image;
    var _closure1_slot3 = var7;
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AbortCodes;
    var _closure1_slot5 = var7;
    var7 = var4.HelpdeskArticles;
    var _closure1_slot6 = var7;
    var4 = var4.InviteStates;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot8 = var7;
    var7 = var4.Fragment;
    var _closure1_slot9 = var7;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'marginTop': 32, 'marginBottom': 32};
    var4['expiredImage'] = var9;
    var9 = {'marginBottom': 8, 'backgroundColor': 'transparent', 'textAlign': 'center'};
    var4['expiredTitle'] = var9;
    var9 = {'backgroundColor': 'transparent', 'marginBottom': 24};
    var4['expiredBody'] = var9;
    var9 = {'flex': 1, 'width': '100%', 'flexGrow': 0, 'paddingHorizontal': 8, 'marginVertical': 8};
    var4['button'] = var9;
    var9 = {'justifyContent': 'center', 'alignItems': 'center'};
    var4['disabledView'] = var9;
    var9 = {'position': 'absolute', 'alignSelf': 'center', 'tintColor': null, 'width': 42, 'height': 42};
    var10 = 5;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.WHITE;
    var9['tintColor'] = var12;
    var4['disabledPauseIcon'] = var9;
    var9 = {'borderRadius': null, 'opacity': 0.2, 'zIndex': 4294966297};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.radii;
    var10 = var10.lg;
    var9['borderRadius'] = var10;
    var4['guildIcon'] = var9;
    var9 = {'marginTop': 16, 'marginBottom': 8, 'textAlign': 'center'};
    var4['disabledTitle'] = var9;
    var9 = {'textAlign': 'center', 'marginBottom': 16};
    var4['disabledBody'] = var9;
    var9 = {'flex': 1, 'width': '100%', 'marginVertical': 0};
    var4['disabledButton'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'uikit-native/modals/InviteError.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function InviteError(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var1 = var2.inviteError;
            var3 = null;
            if(!(var3 != var1)) { _fun0003_ip = 97; continue _fun0003 }
 15:
            var4 = var1.code;
            var1 = _closure1_slot5;
            var1 = var1.INVITES_DISABLED;
            if(!(var4 !== var1)) { _fun0003_ip = 67; continue _fun0003 }
 37:
            var6 = _closure1_slot8;
            var5 = _closure1_slot12;
            var4 = {};
            var8 = var4;
            var7 = var2;
            var1 = copyDataProperties(var8, var7);
            var1 = undefined;
            var1 = var6.bind(var1)(var5, var4);
            _fun0003_ip = 95; continue _fun0003;
 67:
            var6 = _closure1_slot8;
            var5 = _closure1_slot13;
            var4 = {};
            var8 = var4;
            var7 = var2;
            var3 = copyDataProperties(var8, var7);
            var3 = undefined;
            var1 = var6.bind(var3)(var5, var4);
 95:
            _fun0003_ip = 128; continue _fun0003;
 97:
            var5 = _closure1_slot8;
            var4 = _closure1_slot12;
            var3 = {};
            var8 = var3;
            var7 = var2;
            var2 = copyDataProperties(var8, var7);
            var2 = undefined;
            var1 = var5.bind(var2)(var4, var3);
 128:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();