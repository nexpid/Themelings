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
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.RelationshipTypes;
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
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
    var _closure1_slot9 = var4;
    var4 = 14;
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
            var8 = var2.styles;
            var19 = var2.backgroundColor;
            var2 = _closure1_slot9;
            var5 = undefined;
            var14 = var2.bind(var5)();
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
            var9 = var4.bind(var5)(var3);
            var6 = var9.useStateFromStoresObject;
            var3 = _closure1_slot5;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var1 = {};
                var4 = _closure1_slot5;
                var2 = var4.getNote;
                var3 = _closure2_slot0;
                var2 = var2.bind(var4)(var3);
                var1['note'] = var2;
                var2 = var4.getRelationshipType;
                var2 = var2.bind(var4)(var3);
                var1['type'] = var2;
                return var1;
            };
            var3 = var6.bind(var9)(var4, var3);
            var10 = var3.note;
            var9 = var3.type;
            var6 = _closure1_slot3;
            var4 = var6.useState;
            var3 = _closure1_slot6;
            var3 = var3.PENDING_OUTGOING;
            var3 = var9 === var3;
            var9 = var4.bind(var6)(var3);
            var4 = _closure1_slot2;
            var3 = 2;
            var4 = var4.bind(var5)(var9, var3);
            var3 = 0;
            var12 = var4[var3];
            var3 = 1;
            var3 = var4[var3];
            var _closure2_slot1 = var3;
            var4 = var6.useCallback;
            var3 = function() {
                var3 = _closure2_slot1;
                var1 = undefined;
                var2 = true;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = new Array(0);
            var18 = var4.bind(var6)(var3, var1);
            var16 = null;
            var1 = null;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var16 == var10;
            var1 = null;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var11 = '';
            var1 = null;
            if(!(var11 !== var10)) { _fun0001_ip = 2; continue _fun0001 }
case 5:
            var4 = _closure1_slot8;
            var3 = _closure1_slot4;
            var2 = {};
            var9 = var14.container;
            var6 = new Array(2);
            var6[0] = var9;
            var6[1] = var8;
            var2['style'] = var6;
            var8 = null;
            if(var12) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var13 = _closure1_slot7;
            var9 = _closure1_slot4;
            var6 = {};
            var17 = var14.spoiler;
            var15 = new Array(2);
            var15[0] = var17;
            var17 = var16 != var19;
            var16 = undefined;
            if(!var17) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var17 = {};
            var17['backgroundColor'] = var19;
            var16 = var17;
case 8:
            var15[1] = var16;
            var6['style'] = var15;
            var17 = _closure1_slot7;
            var21 = _closure1_slot0;
            var22 = _closure1_slot1;
            var15 = 10;
            var15 = var22[var15];
            var15 = var21.bind(var5)(var15);
            var16 = var15.Button;
            var15 = {'icon': null, 'variant': 'secondary', 'size': 'sm'};
            var19 = 11;
            var19 = var22[var19];
            var19 = var21.bind(var5)(var19);
            var20 = var19.EyeIcon;
            var19 = {};
            var23 = 'sm';
            var19['size'] = var23;
            var19 = var17.bind(var5)(var20, var19);
            var15['icon'] = var19;
            var15['onPress'] = var18;
            var18 = 12;
            var19 = var22[var18];
            var19 = var21.bind(var5)(var19);
            var20 = var19.intl;
            var19 = var20.string;
            var18 = var22[var18];
            var18 = var21.bind(var5)(var18);
            var18 = var18.t;
            var18 = var18.sB0q4C;
            var18 = var19.bind(var20)(var18);
            var15['text'] = var18;
            var15 = var17.bind(var5)(var16, var15);
            var6['children'] = var15;
            var8 = var13.bind(var5)(var9, var6);
case 6:
            var6 = new Array(2);
            var6[0] = var8;
            var9 = _closure1_slot7;
            var8 = _closure1_slot0;
            var13 = _closure1_slot1;
            var7 = 13;
            var7 = var13[var7];
            var7 = var8.bind(var5)(var7);
            var8 = var7.Text;
            var7 = {};
            var13 = undefined;
            if(var12) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var13 = var14.hidden;
case 10:
            var7['style'] = var13;
            var7['accessible'] = var12;
            var13 = !var12;
            var7['accessibilityElementsHidden'] = var13;
            if(!var12) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var11 = undefined;
case 12:
            var7['accessibilityLabel'] = var11;
            var11 = 'redesign/message-preview/normal';
            var7['variant'] = var11;
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 2:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();