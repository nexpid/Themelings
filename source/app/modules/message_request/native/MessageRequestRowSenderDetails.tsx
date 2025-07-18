// app/modules/message_request/native/MessageRequestRowSenderDetails.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
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
    var1 = 0;
    var7 = var6[var1];
    var4 = native4;
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
    var12 = var6[var12];
    var12 = var5.bind(var1)(var12);
    var15 = var12.AVATAR_SIZE_MAP;
    var12 = 6;
    var13 = var6[var12];
    var13 = var5.bind(var1)(var13);
    var13 = var13.AvatarSizes;
    var13 = var13.NORMAL;
    var13 = var15[var13];
    var13 = var13 / var11;
    var9['borderRadius'] = var13;
    var13 = 7;
    var15 = var6[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_SECONDARY;
    var9['backgroundColor'] = var15;
    var4['avatar'] = var9;
    var9 = {'marginRight': 16, 'alignItems': 'flex-start', 'height': '100%'};
    var4['avatarContainer'] = var9;
    var9 = {'marginRight': 8, 'justifyContent': 'flex-start', 'alignItems': 'flex-start', 'flex': 1};
    var4['detailsContainer'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center'};
    var4['messageDetails'] = var9;
    var9 = {};
    var9['flexShrink'] = var10;
    var13 = var6[var13];
    var13 = var14.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.HEADER_PRIMARY;
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
 0:
            var2 = arg1;
            var13 = var2.channel;
            var24 = var2.otherUser;
            var _closure2_slot0 = var24;
            var2 = _closure1_slot8;
            var4 = undefined;
            var14 = var2.bind(var4)();
            var2 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 8;
            var3 = var12[var3];
            var6 = var2.bind(var4)(var3);
            var5 = var6.useStateFromStores;
            var7 = _closure1_slot4;
            var3 = new Array(1);
            var3[0] = var7;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0002_ip = 83; continue _fun0002 }
 13:
                    var6 = _closure1_slot4;
                    var5 = var6.getNickname;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var2 = var5.bind(var6)(var2);
                    if(!(var1 == var2)) { _fun0002_ip = 81; continue _fun0002 }
 44:
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var4 = 9;
                    var5 = var5[var4];
                    var4 = undefined;
                    var5 = var6.bind(var4)(var5);
                    var4 = var5.getGlobalName;
                    var3 = _closure2_slot0;
                    var2 = var4.bind(var5)(var3);
 81:
                    return var2;
 83:
                    return var1;
                }
            };
            var19 = var5.bind(var6)(var3, var1);
            var1 = 10;
            var1 = var12[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.useMessageRequestRelativeTimestampText;
            var18 = var1.bind(var2)(var13);
            var1 = global;
            var5 = var1.Math;
            var3 = var5.floor;
            var2 = var1.Math;
            var1 = var2.random;
            var6 = var1.bind(var2)();
            var9 = _closure1_slot1;
            var1 = 11;
            var2 = var12[var1];
            var2 = var9.bind(var4)(var2);
            var2 = var2.DEFAULT_AVATARS;
            var2 = var2.length;
            var2 = var6 * var2;
            var2 = var3.bind(var5)(var2);
            var1 = var12[var1];
            var1 = var9.bind(var4)(var1);
            var1 = var1.DEFAULT_AVATARS;
            var11 = var1[var2];
            var3 = _closure1_slot6;
            var2 = _closure1_slot7;
            var1 = {};
            var7 = _closure1_slot5;
            var6 = _closure1_slot3;
            var5 = {};
            var8 = var14.avatarContainer;
            var5['style'] = var8;
            var8 = 6;
            var8 = var12[var8];
            var9 = var9.bind(var4)(var8);
            var17 = null;
            if(!(var17 == var24)) { _fun0001_ip = 258; continue _fun0001 }
 239:
            var8 = {};
            var12 = var14.avatar;
            var8['avatarStyle'] = var12;
            var8['source'] = var11;
            _fun0001_ip = 309; continue _fun0001;
 258:
            var11 = {};
            var12 = var14.avatar;
            var11['avatarStyle'] = var12;
            var11['user'] = var24;
            var11['guildId'] = var4;
            var12 = true;
            var11['disablePlaceholder'] = var12;
            var15 = var17 == var24;
            var12 = undefined;
            if(var15) { _fun0001_ip = 301; continue _fun0001 }
 295:
            var12 = var24.avatarDecoration;
 301:
            var11['avatarDecoration'] = var12;
            var8 = var11;
 309:
            var8 = var7.bind(var4)(var9, var8);
            var5['children'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot6;
            var7 = _closure1_slot3;
            var6 = {};
            var9 = var14.detailsContainer;
            var6['style'] = var9;
            var9 = {};
            var11 = var14.messageDetails;
            var9['style'] = var11;
            var20 = _closure1_slot0;
            var15 = _closure1_slot2;
            var16 = 12;
            var11 = var15[var16];
            var11 = var20.bind(var4)(var11);
            var12 = var11.Text;
            var11 = {'lineClamp': 1, 'variant': 'text-md/semibold', 'color': 'header-primary'};
            var21 = var14.usernameTextContainer;
            var11['style'] = var21;
            var21 = _closure1_slot5;
            var15 = var15[var16];
            var15 = var20.bind(var4)(var15);
            var20 = var15.Text;
            var15 = {'variant': 'text-md/semibold', 'color': 'header-primary'};
            var22 = var14.username;
            var15['style'] = var22;
            var22 = var19;
            if(!(var17 == var22)) { _fun0001_ip = 479; continue _fun0001 }
 462:
            var25 = var17 == var24;
            var23 = undefined;
            if(var25) { _fun0001_ip = 476; continue _fun0001 }
 471:
            var23 = var24.username;
 476:
            var22 = var23;
 479:
            if(!(var17 == var22)) { _fun0001_ip = 538; continue _fun0001 }
 483:
            var27 = _closure1_slot0;
            var28 = _closure1_slot2;
            var23 = 13;
            var25 = var28[var23];
            var25 = var27.bind(var4)(var25);
            var26 = var25.intl;
            var25 = var26.string;
            var23 = var28[var23];
            var23 = var27.bind(var4)(var23);
            var23 = var23.t;
            var23 = var23.30mdIy;
            var22 = var25.bind(var26)(var23);
 538:
            var15['children'] = var22;
            var20 = var21.bind(var4)(var20, var15);
            var15 = new Array(2);
            var15[0] = var20;
            var17 = var17 != var19;
            if(!var17) { _fun0001_ip = 650; continue _fun0001 }
 563:
            var21 = _closure1_slot6;
            var23 = _closure1_slot0;
            var25 = _closure1_slot2;
            var19 = var25[var16];
            var19 = var23.bind(var4)(var19);
            var20 = var19.Text;
            var19 = {'variant': 'text-md/medium', 'color': 'text-muted'};
            var22 = 9;
            var22 = var25[var22];
            var23 = var23.bind(var4)(var22);
            var22 = var23.getUserTag;
            var23 = var22.bind(var23)(var24);
            var22 = [' '];
            var22[1] = var23;
            var19['children'] = var22;
            var17 = var21.bind(var4)(var20, var19);
 650:
            var15[1] = var17;
            var11['children'] = var15;
            var12 = var8.bind(var4)(var12, var11);
            var11 = new Array(3);
            var11[0] = var12;
            var12 = _closure1_slot5;
            var17 = _closure1_slot0;
            var15 = _closure1_slot2;
            var19 = var15[var16];
            var19 = var17.bind(var4)(var19);
            var20 = var19.Text;
            var19 = {'style': null, 'variant': 'text-xs/medium', 'color': 'text-muted', 'children': '·'};
            var21 = var14.timestampSeparator;
            var19['style'] = var21;
            var19 = var12.bind(var4)(var20, var19);
            var11[1] = var19;
            var16 = var15[var16];
            var16 = var17.bind(var4)(var16);
            var17 = var16.Text;
            var16 = {'variant': 'text-xs/semibold', 'color': 'text-muted'};
            var16['children'] = var18;
            var16 = var12.bind(var4)(var17, var16);
            var11[2] = var16;
            var9['children'] = var11;
            var11 = var8.bind(var4)(var7, var9);
            var9 = new Array(2);
            var9[0] = var11;
            var11 = _closure1_slot1;
            var10 = 14;
            var10 = var15[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var14 = var14.messagePreview;
            var10['style'] = var14;
            var10['channel'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var9[1] = var10;
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