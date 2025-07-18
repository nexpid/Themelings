// app/modules/forums/native/posts/ForumPostUsername.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function ForumPostUsername(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var1 = var2.thread;
            var17 = var2.authorId;
            var12 = var2.authorName;
            var22 = var2.authorColor;
            var21 = var2.authorColors;
            var10 = var2.containerStyle;
            var19 = var2.roleDotStyle;
            var14 = var2.textStyle;
            var11 = var2.suffix;
            var2 = var2.hasUnreads;
            var3 = _closure1_slot8;
            var5 = undefined;
            var13 = var3.bind(var5)();
            var3 = {};
            var3['thread'] = var1;
            var3 = var3.thread;
            var4 = _closure1_slot5;
            var3 = var3.parent_id;
            var3 = var4.bind(var5)(var3);
            var4 = var3.layoutType;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 7;
            var3 = var8[var3];
            var3 = var6.bind(var5)(var3);
            var3 = var3.ForumLayout;
            var3 = var3.GRID;
            var8 = 158;
            if(!(var4 === var3)) { _fun0001_ip = 152; continue _fun0001 }
 149:
            var8 = 72;
 152:
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 8;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var9 = var3.bind(var5)();
            var4 = _closure1_slot0;
            var3 = 9;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.GRID_HORIZONTAL_PADDING;
            var3 = var9 - var3;
            var8 = var3 - var8;
            var3 = 10;
            var3 = var6[var3];
            var9 = var4.bind(var5)(var3);
            var6 = var9.useStateFromStores;
            var3 = _closure1_slot4;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var1 = _closure1_slot4;
                var1 = var1.roleStyle;
                return var1;
            };
            var9 = var6.bind(var9)(var4, var3);
            var3 = 'username';
            if(!(var3 === var9)) { _fun0001_ip = 264; continue _fun0001 }
 258:
            var3 = null;
            if(!(var3 == var22)) { _fun0001_ip = 268; continue _fun0001 }
 264:
            var15 = {};
            _fun0001_ip = 277; continue _fun0001;
 268:
            var3 = {};
            var3['color'] = var22;
            var15 = var3;
 277:
            if(var2) { _fun0001_ip = 298; continue _fun0001 }
 280:
            var18 = {};
            var2 = 0.8;
            var18['opacity'] = var2;
            _fun0001_ip = 300; continue _fun0001;
 298:
            var18 = {};
 300:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 11;
            var6 = var4[var2];
            var16 = var3.bind(var5)(var6);
            var6 = var16.useProcessColorStringsArray;
            var16 = var6.bind(var16)(var21);
            var2 = var4[var2];
            var4 = var3.bind(var5)(var2);
            var3 = var4.useIsRoleStyleAndRoleColorsEligibleForERC;
            var2 = var1.guild_id;
            var6 = null;
            var20 = var6 != var17;
            var1 = undefined;
            if(!var20) { _fun0001_ip = 365; continue _fun0001 }
 362:
            var1 = var17;
 365:
            var28 = var4;
            var27 = var2;
            var26 = var1;
            var25 = var9;
            var24 = var16;
            var17 = var28[var3](var27, var26, var25, var24, var23);
            var2 = var6 == var12;
            var1 = null;
            if(var2) { _fun0001_ip = 695; continue _fun0001 }
 396:
            var4 = _closure1_slot7;
            var3 = _closure1_slot3;
            var2 = {};
            var20 = {};
            var20['maxWidth'] = var8;
            var26 = var13.authorContainer;
            var27 = var20;
            var8 = copyDataProperties(var27, var26);
            var8 = new Array(3);
            var8[0] = var20;
            var8[1] = var18;
            var8[2] = var10;
            var2['style'] = var8;
            var8 = 'button';
            var2['accessibilityRole'] = var8;
            var8 = 'dot';
            var8 = var8 === var9;
            if(!var8) { _fun0001_ip = 469; continue _fun0001 }
 465:
            var8 = var6 != var22;
 469:
            if(!var8) { _fun0001_ip = 568; continue _fun0001 }
 472:
            var10 = _closure1_slot6;
            var9 = _closure1_slot3;
            var6 = {};
            var20 = var13.roleDotContainer;
            var18 = new Array(2);
            var18[0] = var20;
            var18[1] = var19;
            var6['style'] = var18;
            var20 = _closure1_slot6;
            var19 = _closure1_slot0;
            var23 = _closure1_slot2;
            var18 = 12;
            var18 = var23[var18];
            var18 = var19.bind(var5)(var18);
            var19 = var18.RoleDot;
            var18 = {};
            var23 = 'small';
            var18['size'] = var23;
            var18['color'] = var22;
            var18['colors'] = var21;
            var18 = var20.bind(var5)(var19, var18);
            var6['children'] = var18;
            var8 = var10.bind(var5)(var9, var6);
 568:
            var6 = new Array(2);
            var6[0] = var8;
            var9 = _closure1_slot7;
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 13;
            var7 = var10[var7];
            var7 = var8.bind(var5)(var7);
            var8 = var7.Text;
            var7 = {'variant': 'text-sm/semibold', 'color': 'header-primary', 'gradientColors': null, 'lineClamp': 1};
            var10 = undefined;
            if(!var17) { _fun0001_ip = 627; continue _fun0001 }
 624:
            var10 = var16;
 627:
            var7['gradientColors'] = var10;
            var10 = new Array(3);
            var10[0] = var15;
            var10[1] = var14;
            var13 = var13.authorName;
            var10[2] = var13;
            var7['style'] = var10;
            var10 = new Array(2);
            var10[0] = var12;
            var10[1] = var11;
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 695:
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useForumChannelStore;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center', 'marginEnd': 8};
    var4['authorContainer'] = var9;
    var9 = {'alignItems': 'center', 'justifyContent': 'center', 'marginEnd': 2, 'marginBottom': 4};
    var4['roleDotContainer'] = var9;
    var9 = {'overflow': 'hidden', 'flexWrap': 'nowrap'};
    var4['authorName'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/forums/native/posts/ForumPostUsername.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function ForumPostAuthor(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var16 = var1.thread;
            var6 = var1.hasUnreads;
            var10 = var1.suffix;
            var9 = var1.containerStyle;
            var8 = var1.roleDotStyle;
            var7 = var1.textStyle;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 6;
            var1 = var4[var1];
            var5 = undefined;
            var3 = var3.bind(var5)(var1);
            var1 = var3.useForumPostAuthor;
            var1 = var1.bind(var3)(var16);
            var15 = var1.user;
            var1 = var1.author;
            var14 = null;
            var3 = var14 == var1;
            var13 = undefined;
            if(var3) { _fun0002_ip = 103; continue _fun0002 }
 97:
            var13 = var1.nick;
 103:
            if(!(var14 == var13)) { _fun0002_ip = 124; continue _fun0002 }
 107:
            var4 = var14 == var15;
            var3 = undefined;
            if(var4) { _fun0002_ip = 121; continue _fun0002 }
 116:
            var3 = var15.username;
 121:
            var13 = var3;
 124:
            var3 = var14 == var1;
            var12 = undefined;
            if(var3) { _fun0002_ip = 139; continue _fun0002 }
 133:
            var12 = var1.colorString;
 139:
            var3 = var14 == var1;
            var11 = undefined;
            if(var3) { _fun0002_ip = 154; continue _fun0002 }
 148:
            var11 = var1.colorStrings;
 154:
            var3 = var14 == var15;
            var1 = null;
            if(var3) { _fun0002_ip = 243; continue _fun0002 }
 163:
            var4 = _closure1_slot6;
            var3 = _closure1_slot9;
            var2 = {};
            var2['thread'] = var16;
            var16 = var14 == var15;
            var14 = undefined;
            if(var16) { _fun0002_ip = 192; continue _fun0002 }
 187:
            var14 = var15.id;
 192:
            var2['authorId'] = var14;
            var2['authorName'] = var13;
            var2['authorColor'] = var12;
            var2['authorColors'] = var11;
            var2['suffix'] = var10;
            var2['containerStyle'] = var9;
            var2['roleDotStyle'] = var8;
            var2['textStyle'] = var7;
            var2['hasUnreads'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 243:
            return var1;
        }
    };
    var3['ForumPostAuthor'] = var4;
    var2 = function ForumPostMessageAuthor(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var13 = var1.thread;
            var10 = var1.message;
            var5 = var1.hasUnreads;
            var9 = var1.suffix;
            var8 = var1.containerStyle;
            var7 = var1.roleDotStyle;
            var6 = var1.textStyle;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 6;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = var3.useForumPostMessageAuthor;
            var2 = var2.bind(var3)(var10, var13);
            var12 = var2.authorName;
            var11 = var2.authorColor;
            var10 = var2.authorColors;
            var14 = var2.user;
            var3 = _closure1_slot6;
            var2 = _closure1_slot9;
            var1 = {};
            var1['thread'] = var13;
            var13 = null;
            var15 = var13 == var14;
            var13 = undefined;
            if(var15) { _fun0003_ip = 135; continue _fun0003 }
 130:
            var13 = var14.id;
 135:
            var1['authorId'] = var13;
            var1['authorName'] = var12;
            var1['authorColor'] = var11;
            var1['authorColors'] = var10;
            var1['suffix'] = var9;
            var1['containerStyle'] = var8;
            var1['roleDotStyle'] = var7;
            var1['textStyle'] = var6;
            var1['hasUnreads'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['ForumPostMessageAuthor'] = var2;
    return var1;
})();