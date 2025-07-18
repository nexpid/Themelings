// app/modules/main_tabs_v2/native/settings/screens/appearance/components/SettingsAppearanceChannelRowItem.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var5 = native2;
        var14 = native3;
        var3 = native6;
        var6 = native7;
        var _closure1_slot0 = var5;
        var _closure1_slot1 = var14;
        var _closure1_slot2 = var6;
        var1 = global;
        var8 = var1.Object;
        var7 = var8.defineProperty;
        var4 = {};
        var1 = true;
        var4['value'] = var1;
        var1 = '__esModule';
        var1 = var7.bind(var8)(var3, var1, var4);
        var10 = 0;
        var7 = var6[var10];
        var4 = native4;
        var1 = undefined;
        var4 = var4.bind(var1)(var7);
        var4 = 1;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.View;
        var _closure1_slot3 = var4;
        var8 = 2;
        var4 = var6[var8];
        var4 = var5.bind(var1)(var4);
        var4 = var4.StatusTypes;
        var _closure1_slot4 = var4;
        var4 = 3;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var7 = var4.jsx;
        var _closure1_slot5 = var7;
        var4 = var4.jsxs;
        var _closure1_slot6 = var4;
        var9 = 4;
        var4 = var6[var9];
        var11 = var5.bind(var1)(var4);
        var7 = var11.createStyles;
        var4 = {};
        var12 = {};
        var13 = 'row';
        var12['flexDirection'] = var13;
        var13 = 5;
        var15 = var6[var13];
        var15 = var14.bind(var1)(var15);
        var15 = var15.spacing;
        var15 = var15.PX_4;
        var12['gap'] = var15;
        var15 = var6[var13];
        var15 = var14.bind(var1)(var15);
        var15 = var15.radii;
        var15 = var15.sm;
        var12['borderRadius'] = var15;
        var15 = var6[var13];
        var15 = var14.bind(var1)(var15);
        var15 = var15.spacing;
        var15 = var15.PX_8;
        var12['paddingVertical'] = var15;
        var15 = var6[var13];
        var15 = var14.bind(var1)(var15);
        var15 = var15.spacing;
        var15 = var15.PX_16;
        var12['paddingRight'] = var15;
        var15 = var6[var13];
        var15 = var14.bind(var1)(var15);
        var15 = var15.spacing;
        var15 = var15.PX_8;
        var12['paddingLeft'] = var15;
        var4['channelItemContainer'] = var12;
        var12 = {'alignItems': 'center', 'justifyContent': 'center'};
        var4['channelItemLeft'] = var12;
        var12 = {'backgroundColor': null, 'height': 8, 'width': 8};
        var15 = var6[var13];
        var15 = var14.bind(var1)(var15);
        var15 = var15.colors;
        var15 = var15.BG_BRAND;
        var12['backgroundColor'] = var15;
        var15 = var6[var13];
        var15 = var14.bind(var1)(var15);
        var15 = var15.radii;
        var15 = var15.round;
        var12['borderRadius'] = var15;
        var15 = var6[var13];
        var15 = var14.bind(var1)(var15);
        var15 = var15.spacing;
        var15 = var15.PX_8;
        var12['margin'] = var15;
        var4['channelItemUnreadIndicator'] = var12;
        var12 = {'marginRight': null, 'justifyContent': 'center', 'alignItems': 'center'};
        var15 = var6[var13];
        var15 = var14.bind(var1)(var15);
        var15 = var15.spacing;
        var15 = var15.PX_8;
        var12['marginRight'] = var15;
        var4['channelItemAvatar'] = var12;
        var12 = {'flexDirection': 'column', 'flex': 1, 'justifyContent': 'center'};
        var4['channelItemContent'] = var12;
        var12 = {'flexDirection': 'row', 'gap': null, 'justifyContent': 'space-between', 'alignItems': 'center'};
        var15 = var6[var13];
        var15 = var14.bind(var1)(var15);
        var15 = var15.spacing;
        var15 = var15.PX_4;
        var12['gap'] = var15;
        var4['channelItemTop'] = var12;
        var12 = {};
        var15 = 'flex-end';
        var12['alignSelf'] = var15;
        var4['channelItemMentionsBadge'] = var12;
        var12 = {};
        var13 = var6[var13];
        var13 = var14.bind(var1)(var13);
        var13 = var13.spacing;
        var13 = var13.PX_16;
        var12['marginTop'] = var13;
        var4['themeSelector'] = var12;
        var4 = var7.bind(var11)(var4);
        var _closure1_slot7 = var4;
        var4 = {};
        var7 = 6;
        var11 = var6[var7];
        var11 = var5.bind(var1)(var11);
        var11 = var11.CutoutDirection;
        var11 = var11.BOTTOM_RIGHT;
        var4['direction'] = var11;
        var11 = 7;
        var11 = var6[var11];
        var13 = var5.bind(var1)(var11);
        var12 = var13.getStatusSize;
        var11 = var6[var7];
        var11 = var5.bind(var1)(var11);
        var11 = var11.AvatarSizes;
        var11 = var11.LARGE_48;
        var11 = var12.bind(var13)(var11);
        var12 = null;
        var12 = var12 != var11;
        if(!var12) { _fun0001_ip = 670; continue _fun0001 }
 667:
        var10 = var11;
 670:
        var8 = var10 / var8;
        var8 = var8 + var9;
        var4['radius'] = var8;
        var7 = var6[var7];
        var7 = var5.bind(var1)(var7);
        var7 = var7.CutoutType;
        var7 = var7.CIRCULAR;
        var4['imageType'] = var7;
        var7 = -4;
        var4['inset'] = var7;
        var _closure1_slot8 = var4;
        var4 = 10;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/main_tabs_v2/native/settings/screens/appearance/components/SettingsAppearanceChannelRowItem.tsx';
        var4 = var5.bind(var6)(var4);
        var2 = function ChannelRowItem(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var1 = arg1;
                var16 = var1.animatedStyles;
                var19 = var1.title;
                var20 = var1.timestamp;
                var14 = var1.preview;
                var25 = var1.avatar1;
                var24 = var1.avatar2;
                var18 = var1.status;
                var4 = undefined;
                if(!(var18 === var4)) { _fun0002_ip = 62; continue _fun0002 }
 49:
                var2 = _closure1_slot4;
                var18 = var2.ONLINE;
 62:
                var15 = var1.isUnread;
                if(!(var15 === var4)) { _fun0002_ip = 74; continue _fun0002 }
 72:
                var15 = false;
 74:
                var1 = _closure1_slot7;
                var12 = var1.bind(var4)();
                var3 = _closure1_slot6;
                var2 = _closure1_slot3;
                var1 = {};
                var5 = var12.channelItemContainer;
                var1['style'] = var5;
                var6 = _closure1_slot5;
                var5 = {};
                var7 = var12.channelItemLeft;
                var5['style'] = var7;
                var7 = {};
                var9 = var12.channelItemUnreadIndicator;
                var8 = new Array(2);
                var8[0] = var9;
                var9 = {};
                var10 = 0;
                if(!var15) { _fun0002_ip = 147; continue _fun0002 }
 144:
                var10 = 1;
 147:
                var9['opacity'] = var10;
                var8[1] = var9;
                var7['style'] = var8;
                var7 = var6.bind(var4)(var2, var7);
                var5['children'] = var7;
                var6 = var6.bind(var4)(var2, var5);
                var5 = new Array(3);
                var5[0] = var6;
                var8 = _closure1_slot5;
                var7 = _closure1_slot3;
                var6 = {};
                var9 = var12.channelItemAvatar;
                var6['style'] = var9;
                var10 = null;
                if(!(var10 == var24)) { _fun0002_ip = 292; continue _fun0002 }
 209:
                var17 = _closure1_slot5;
                var13 = _closure1_slot1;
                var22 = _closure1_slot2;
                var9 = 7;
                var9 = var22[var9];
                var13 = var13.bind(var4)(var9);
                var9 = {};
                var9['status'] = var18;
                var9['source'] = var25;
                var18 = _closure1_slot8;
                var9['cutout'] = var18;
                var21 = _closure1_slot0;
                var18 = 6;
                var18 = var22[var18];
                var18 = var21.bind(var4)(var18);
                var18 = var18.AvatarSizes;
                var18 = var18.LARGE_48;
                var9['size'] = var18;
                var9 = var17.bind(var4)(var13, var9);
                _fun0002_ip = 375; continue _fun0002;
 292:
                var18 = _closure1_slot5;
                var22 = _closure1_slot0;
                var23 = _closure1_slot2;
                var13 = 8;
                var13 = var23[var13];
                var13 = var22.bind(var4)(var13);
                var17 = var13.FacepileGroupDMAvatar;
                var13 = {};
                var21 = new Array(2);
                var21[0] = var25;
                var21[1] = var24;
                var13['sources'] = var21;
                var21 = 6;
                var21 = var23[var21];
                var21 = var22.bind(var4)(var21);
                var21 = var21.AvatarSizes;
                var21 = var21.LARGE_48;
                var13['size'] = var21;
                var9 = var18.bind(var4)(var17, var13);
 375:
                var6['children'] = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var8 = _closure1_slot6;
                var7 = _closure1_slot3;
                var6 = {};
                var9 = var12.channelItemContent;
                var6['style'] = var9;
                var9 = {};
                var12 = var12.channelItemTop;
                var9['style'] = var12;
                var18 = _closure1_slot5;
                var13 = _closure1_slot0;
                var12 = _closure1_slot2;
                var17 = 9;
                var12 = var12[var17];
                var12 = var13.bind(var4)(var12);
                var13 = var12.Text;
                var12 = {'animated': true, 'style': null, 'variant': 'redesign/channel-title/semibold'};
                if(var15) { _fun0002_ip = 475; continue _fun0002 }
 467:
                var21 = var16.textMuted;
                _fun0002_ip = 481; continue _fun0002;
 475:
                var21 = var16.textNormal;
 481:
                var12['style'] = var21;
                var12['children'] = var19;
                var13 = var18.bind(var4)(var13, var12);
                var12 = new Array(2);
                var12[0] = var13;
                var19 = _closure1_slot5;
                var18 = _closure1_slot0;
                var13 = _closure1_slot2;
                var13 = var13[var17];
                var13 = var18.bind(var4)(var13);
                var18 = var13.Text;
                var13 = {'animated': true, 'style': null, 'variant': 'text-xs/medium'};
                var21 = var16.textMuted;
                var13['style'] = var21;
                var13['children'] = var20;
                var13 = var19.bind(var4)(var18, var13);
                var12[1] = var13;
                var9['children'] = var12;
                var12 = var8.bind(var4)(var7, var9);
                var9 = new Array(2);
                var9[0] = var12;
                var12 = var10 != var14;
                var10 = null;
                if(!var12) { _fun0002_ip = 671; continue _fun0002 }
 598:
                var13 = _closure1_slot5;
                var12 = _closure1_slot0;
                var11 = _closure1_slot2;
                var11 = var11[var17];
                var11 = var12.bind(var4)(var11);
                var12 = var11.Text;
                var11 = {'animated': true, 'style': null, 'variant': 'redesign/message-preview/medium', 'lineClamp': 1};
                if(var15) { _fun0002_ip = 649; continue _fun0002 }
 641:
                var15 = var16.textMuted;
                _fun0002_ip = 655; continue _fun0002;
 649:
                var15 = var16.textNormal;
 655:
                var11['style'] = var15;
                var11['children'] = var14;
                var10 = var13.bind(var4)(var12, var11);
 671:
                var9[1] = var10;
                var6['children'] = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[2] = var6;
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var3['default'] = var2;
        return var1;
    }
})();