// app/modules/people/native/FriendRequestNote.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var10 = 0;
    var4 = var6[var10];
    var1 = undefined;
    var4 = var12.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.Pressable;
    var _closure1_slot4 = var7;
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.RelationshipTypes;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot8 = var7;
    var4 = var4.jsxs;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'width': '100%', 'position': 'relative', 'padding': null, 'borderRadius': null, 'minHeight': 56, 'flexDirection': 'row', 'alignItems': 'center'};
    var11 = 7;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_12;
    var9['padding'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.md;
    var9['borderRadius'] = var13;
    var4['container'] = var9;
    var9 = {'position': 'absolute', 'top': 0, 'left': 0, 'right': 0, 'bottom': 0, 'justifyContent': 'center', 'alignItems': 'center'};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.radii;
    var11 = var11.md;
    var9['borderRadius'] = var11;
    var4['spoiler'] = var9;
    var9 = {};
    var9['opacity'] = var10;
    var4['hidden'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot10 = var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/people/native/FriendRequestNote.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function FriendRequestNote(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var3 = var2.userId;
            var _closure2_slot0 = var3;
            var7 = var2.styles;
            var16 = var2.backgroundColor;
            var9 = var2.analyticsLocation;
            var _closure2_slot1 = var9;
            var2 = _closure1_slot10;
            var5 = undefined;
            var12 = var2.bind(var5)();
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 8;
            var2 = var6[var2];
            var2 = var4.bind(var5)(var2);
            var3 = var2.HideFriendRequestNotes;
            var2 = var3.useSetting;
            var2 = var2.bind(var3)();
            var3 = 9;
            var3 = var6[var3];
            var8 = var4.bind(var5)(var3);
            var6 = var8.useStateFromStoresObject;
            var3 = _closure1_slot6;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var1 = {};
                var4 = _closure1_slot6;
                var2 = var4.getNote;
                var3 = _closure2_slot0;
                var2 = var2.bind(var4)(var3);
                var1['note'] = var2;
                var2 = var4.getRelationshipType;
                var2 = var2.bind(var4)(var3);
                var1['type'] = var2;
                return var1;
            };
            var3 = var6.bind(var8)(var4, var3);
            var18 = var3.note;
            var _closure2_slot2 = var18;
            var8 = var3.type;
            var6 = _closure1_slot3;
            var4 = var6.useState;
            var3 = _closure1_slot7;
            var3 = var3.PENDING_OUTGOING;
            var3 = var8 === var3;
            var8 = var4.bind(var6)(var3);
            var4 = _closure1_slot2;
            var3 = 2;
            var4 = var4.bind(var5)(var8, var3);
            var3 = 0;
            var8 = var4[var3];
            var3 = 1;
            var3 = var4[var3];
            var _closure2_slot3 = var3;
            var4 = var6.useCallback;
            var3 = new Array(2);
            var3[0] = var9;
            var3[1] = var18;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot3;
                    var1 = undefined;
                    var2 = true;
                    var2 = var3.bind(var1)(var2);
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var2 = 10;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.trackViewFriendRequestNote;
                    var2 = {};
                    var5 = _closure2_slot1;
                    var2['analyticsLocation'] = var5;
                    var6 = _closure2_slot2;
                    var5 = null;
                    var8 = var5 == var6;
                    var6 = undefined;
                    if(var8) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var7 = _closure2_slot2;
                    var6 = var7.length;
case 2:
                    var7 = var5 != var6;
                    var5 = 0;
                    if(!var7) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var5 = var6;
case 4:
                    var2['noteLength'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var14 = var4.bind(var6)(var1, var3);
            var13 = null;
            var1 = null;
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = var13 == var18;
            var1 = null;
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var19 = '';
            var1 = null;
            if(!(var19 !== var18)) { _fun0001_ip = 6; continue _fun0001 }
case 9:
            var4 = _closure1_slot9;
            var3 = _closure1_slot4;
            var2 = {};
            var9 = var12.container;
            var6 = new Array(2);
            var6[0] = var9;
            var6[1] = var7;
            var2['style'] = var6;
            var2['onPress'] = var14;
            var9 = _closure1_slot8;
            var7 = _closure1_slot5;
            var6 = {};
            var10 = undefined;
            if(var8) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var10 = var12.hidden;
case 10:
            var6['style'] = var10;
            var17 = _closure1_slot8;
            var15 = _closure1_slot0;
            var20 = _closure1_slot1;
            var10 = 11;
            var10 = var20[var10];
            var10 = var15.bind(var5)(var10);
            var15 = var10.Text;
            var10 = {};
            var10['accessible'] = var8;
            var20 = !var8;
            var10['accessibilityElementsHidden'] = var20;
            if(!var8) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var19 = undefined;
case 12:
            var10['accessibilityLabel'] = var19;
            var19 = 'redesign/message-preview/normal';
            var10['variant'] = var19;
            var10['children'] = var18;
            var10 = var17.bind(var5)(var15, var10);
            var6['children'] = var10;
            var7 = var9.bind(var5)(var7, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var7 = null;
            if(var8) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var10 = _closure1_slot8;
            var9 = _closure1_slot5;
            var8 = {};
            var15 = var12.spoiler;
            var12 = new Array(2);
            var12[0] = var15;
            var15 = var13 != var16;
            var13 = undefined;
            if(!var15) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var15 = {};
            var15['backgroundColor'] = var16;
            var13 = var15;
case 16:
            var12[1] = var13;
            var8['style'] = var12;
            var13 = _closure1_slot8;
            var17 = _closure1_slot0;
            var18 = _closure1_slot1;
            var11 = 12;
            var11 = var18[var11];
            var11 = var17.bind(var5)(var11);
            var12 = var11.Button;
            var11 = {'icon': null, 'variant': 'secondary', 'size': 'sm'};
            var15 = 13;
            var15 = var18[var15];
            var15 = var17.bind(var5)(var15);
            var16 = var15.EyeIcon;
            var15 = {};
            var19 = 'sm';
            var15['size'] = var19;
            var15 = var13.bind(var5)(var16, var15);
            var11['icon'] = var15;
            var11['onPress'] = var14;
            var14 = 14;
            var15 = var18[var14];
            var15 = var17.bind(var5)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var18[var14];
            var14 = var17.bind(var5)(var14);
            var14 = var14.t;
            var14 = var14.sB0q4C;
            var14 = var15.bind(var16)(var14);
            var11['text'] = var14;
            var11 = var13.bind(var5)(var12, var11);
            var8['children'] = var11;
            var7 = var10.bind(var5)(var9, var8);
case 14:
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 6:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();