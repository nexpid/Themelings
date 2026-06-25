// app/modules/message_request/native/MessageRequestRowSenderDetails.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var14 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var10 = 1;
    var4 = var6[var10];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var11 = 2;
    var4 = var6[var11];
    var4 = var14.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot5 = var7;
    var7 = var4.jsxs;
    var _closure1_slot6 = var7;
    var4 = var4.Fragment;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var12 = 5;
    var13 = var6[var12];
    var13 = var5.bind(var1)(var13);
    var13 = var13.AVATAR_SIZE_MAP;
    var12 = var6[var12];
    var12 = var5.bind(var1)(var12);
    var12 = var12.AvatarSizes;
    var12 = var12.NORMAL;
    var12 = var13[var12];
    var12 = var12 / var11;
    var9['borderRadius'] = var12;
    var12 = 6;
    var13 = var6[var12];
    var13 = var14.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_SURFACE_HIGH;
    var9['backgroundColor'] = var13;
    var4['avatar'] = var9;
    var9 = {'marginRight': 16, 'alignItems': 'flex-start', 'height': '100%'};
    var4['avatarContainer'] = var9;
    var9 = {'marginRight': 8, 'justifyContent': 'flex-start', 'alignItems': 'flex-start', 'flex': 1};
    var4['detailsContainer'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center'};
    var4['messageDetails'] = var9;
    var9 = {};
    var9['flexShrink'] = var10;
    var13 = var6[var12];
    var13 = var14.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.MOBILE_TEXT_HEADING_PRIMARY;
    var9['color'] = var13;
    var4['username'] = var9;
    var9 = {};
    var9['marginHorizontal'] = var12;
    var4['timestampSeparator'] = var9;
    var9 = {};
    var9['marginTop'] = var11;
    var4['messagePreview'] = var9;
    var9 = {};
    var9['flexShrink'] = var10;
    var4['usernameTextContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/message_request/native/MessageRequestRowSenderDetails.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function MessageRequestRowSenderDetails(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var19 = var2.channel;
            var15 = var2.otherUser;
            var _closure2_slot0 = var15;
            var10 = var2.isRestricted;
            var4 = undefined;
            if(!(var10 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var10 = false;
case 2:
            var2 = _closure1_slot8;
            var16 = var2.bind(var4)();
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 7;
            var2 = var11[var2];
            var5 = var9.bind(var4)(var2);
            var3 = var5.useStateFromStores;
            var6 = _closure1_slot4;
            var2 = new Array(1);
            var2[0] = var6;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var6 = _closure1_slot4;
                    var5 = var6.getNickname;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var2 = var5.bind(var6)(var2);
                    if(!(var1 == var2)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var4 = 8;
                    var5 = var5[var4];
                    var4 = undefined;
                    var5 = var6.bind(var4)(var5);
                    var4 = var5.getGlobalName;
                    var3 = _closure2_slot0;
                    var2 = var4.bind(var5)(var3);
case 6:
                    return var2;
case 4:
                    return var1;
                }
            };
            var18 = var3.bind(var5)(var2, var1);
            var1 = 9;
            var1 = var11[var1];
            var2 = var9.bind(var4)(var1);
            var1 = var2.useMessageRequestRelativeTimestampText;
            var20 = var1.bind(var2)(var19);
            var1 = global;
            var6 = var1.Math;
            var5 = var6.floor;
            var2 = var1.Math;
            var1 = var2.random;
            var7 = var1.bind(var2)();
            var3 = _closure1_slot1;
            var1 = 10;
            var2 = var11[var1];
            var2 = var3.bind(var4)(var2);
            var2 = var2.DEFAULT_AVATARS;
            var2 = var2.length;
            var2 = var7 * var2;
            var2 = var5.bind(var6)(var2);
            var1 = var11[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.DEFAULT_AVATARS;
            var12 = var1[var2];
            var3 = _closure1_slot6;
            var2 = _closure1_slot7;
            var1 = {};
            var7 = _closure1_slot5;
            var6 = _closure1_slot3;
            var5 = {};
            var8 = var16.avatarContainer;
            var5['style'] = var8;
            var8 = 5;
            var8 = var11[var8];
            var8 = var9.bind(var4)(var8);
            var9 = var8.Avatar;
            var11 = null;
            if(!(var11 == var15)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = {};
            var13 = var16.avatar;
            var8['avatarStyle'] = var13;
            var8['source'] = var12;
            _fun0001_ip = 10; continue _fun0001;
case 8:
            var12 = {};
            var13 = var16.avatar;
            var12['avatarStyle'] = var13;
            var12['user'] = var15;
            var12['guildId'] = var4;
            var13 = true;
            var12['disablePlaceholder'] = var13;
            var17 = var11 == var15;
            var13 = undefined;
            if(var17) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var13 = var15.avatarDecoration;
case 11:
            var12['avatarDecoration'] = var13;
            var8 = var12;
case 10:
            var8 = var7.bind(var4)(var9, var8);
            var5['children'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot6;
            var7 = _closure1_slot3;
            var6 = {};
            var9 = var16.detailsContainer;
            var6['style'] = var9;
            var9 = {};
            var12 = var16.messageDetails;
            var9['style'] = var12;
            var22 = _closure1_slot0;
            var17 = _closure1_slot2;
            var21 = 11;
            var12 = var17[var21];
            var12 = var22.bind(var4)(var12);
            var13 = var12.Text;
            var12 = {'lineClamp': 1, 'variant': 'text-md/semibold', 'color': 'mobile-text-heading-primary'};
            var23 = var16.usernameTextContainer;
            var12['style'] = var23;
            var23 = _closure1_slot5;
            var17 = var17[var21];
            var17 = var22.bind(var4)(var17);
            var22 = var17.Text;
            var17 = {'variant': 'text-md/semibold', 'color': 'mobile-text-heading-primary'};
            var24 = var16.username;
            var17['style'] = var24;
            var24 = var18;
            if(!(var11 == var24)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var26 = var11 == var15;
            var25 = undefined;
            if(var26) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var25 = var15.username;
case 15:
            var24 = var25;
case 13:
            if(!(var11 == var24)) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var28 = _closure1_slot0;
            var29 = _closure1_slot2;
            var25 = 12;
            var26 = var29[var25];
            var26 = var28.bind(var4)(var26);
            var27 = var26.intl;
            var26 = var27.string;
            var25 = var29[var25];
            var25 = var28.bind(var4)(var25);
            var25 = var25.t;
            var25 = var25["30mdIx"];
            var24 = var26.bind(var27)(var25);
case 17:
            var17['children'] = var24;
            var22 = var23.bind(var4)(var22, var17);
            var17 = new Array(2);
            var17[0] = var22;
            var18 = var11 != var18;
            if(!var18) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var24 = _closure1_slot6;
            var26 = _closure1_slot0;
            var27 = _closure1_slot2;
            var22 = var27[var21];
            var22 = var26.bind(var4)(var22);
            var23 = var22.Text;
            var22 = {'variant': 'text-md/medium', 'color': 'text-muted'};
            var25 = 8;
            var25 = var27[var25];
            var26 = var26.bind(var4)(var25);
            var25 = var26.getUserTag;
            var26 = var25.bind(var26)(var15);
            var25 = [' '];
            var25[1] = var26;
            var22['children'] = var25;
            var18 = var24.bind(var4)(var23, var22);
case 19:
            var17[1] = var18;
            var12['children'] = var17;
            var13 = var8.bind(var4)(var13, var12);
            var12 = new Array(3);
            var12[0] = var13;
            var18 = _closure1_slot5;
            var17 = _closure1_slot0;
            var13 = _closure1_slot2;
            var22 = var13[var21];
            var22 = var17.bind(var4)(var22);
            var23 = var22.Text;
            var22 = {'style': null, 'variant': 'text-xs/medium', 'color': 'text-muted', 'children': '·'};
            var24 = var16.timestampSeparator;
            var22['style'] = var24;
            var22 = var18.bind(var4)(var23, var22);
            var12[1] = var22;
            var13 = var13[var21];
            var13 = var17.bind(var4)(var13);
            var17 = var13.Text;
            var13 = {'variant': 'text-xs/semibold', 'color': 'text-muted'};
            var13['children'] = var20;
            var13 = var18.bind(var4)(var17, var13);
            var12[2] = var13;
            var9['children'] = var12;
            var12 = var8.bind(var4)(var7, var9);
            var9 = new Array(3);
            var9[0] = var12;
            var12 = !var10;
            if(!var12) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var18 = _closure1_slot5;
            var17 = _closure1_slot1;
            var20 = _closure1_slot2;
            var13 = 13;
            var13 = var20[var13];
            var17 = var17.bind(var4)(var13);
            var13 = {};
            var20 = var16.messagePreview;
            var13['style'] = var20;
            var13['channel'] = var19;
            var12 = var18.bind(var4)(var17, var13);
case 21:
            var9[1] = var12;
            if(!var10) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var10 = var11 != var15;
case 23:
            if(!var10) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var13 = _closure1_slot5;
            var12 = _closure1_slot1;
            var18 = _closure1_slot2;
            var11 = 14;
            var11 = var18[var11];
            var12 = var12.bind(var4)(var11);
            var11 = {};
            var16 = var16.messagePreview;
            var11['style'] = var16;
            var15 = var15.id;
            var11['userId'] = var15;
            var17 = _closure1_slot0;
            var14 = 12;
            var15 = var18[var14];
            var15 = var17.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var18[var14];
            var14 = var17.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.hTltPn;
            var14 = var15.bind(var16)(var14);
            var11['suffix'] = var14;
            var10 = var13.bind(var4)(var12, var11);
case 25:
            var9[2] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();