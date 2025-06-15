// app/modules/guilds_bar/native/GuildsBarGuild.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    golfie = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    golfie = tangon.bind(entity)(golfie);
    var _closure1_slot3 = golfie;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    verify = tangon.StyleSheet;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.useItemDragState;
    var _closure1_slot9 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    yankee = tangon.GUILD_ITEM_SIZE;
    var _closure1_slot10 = yankee;
    tangon = tangon.TRANSITION_PHYSICS;
    var _closure1_slot11 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AnalyticEvents;
    var _closure1_slot12 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.Fragment;
    var _closure1_slot13 = option;
    option = tangon.jsxs;
    var _closure1_slot14 = option;
    tangon = tangon.jsx;
    var _closure1_slot15 = tangon;
    option = verify.create;
    tangon = {};
    offset = {};
    offset['width'] = yankee;
    offset['height'] = yankee;
    tangon['guildIcon'] = offset;
    tangon = option.bind(verify)(tangon);
    var _closure1_slot16 = tangon;
    tangon = {};
    option = "function GuildsBarGuildTsx1(values){const{dragDropInProgress,sharedId,guildId,isDragTarget,withSpring,TRANSITION_PHYSICS}=this.__closure;var _guildId;const shouldAnimate=dragDropInProgress.get()&&sharedId.get()===guildId&&!isDragTarget;sharedId.set((_guildId=guildId)!==null&&_guildId!==void 0?_guildId:null);return{animations:{originY:shouldAnimate?withSpring(values.targetOriginY,TRANSITION_PHYSICS,'animate-always'):values.targetOriginY,height:shouldAnimate?withSpring(values.targetHeight,TRANSITION_PHYSICS,'animate-always'):values.targetHeight},initialValues:{originY:values.currentOriginY,height:values.currentHeight}};}";
    tangon['code'] = option;
    var _closure1_slot17 = tangon;
    tangon = golfie.memo;
    michal = function(argFoo) { // Original name: GuildsBarGuild
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            sequen = entity.guildId;
            var _closure2_slot0 = sequen;
            oscard = entity.isDragPreview;
            tangon = undefined;
            if(!(oscard === tangon)) { _fun00002_ip = 28; continue _fun00001 }
 26:
            oscard = false;
 28:
            var _closure2_slot1 = tangon;
            var _closure2_slot2 = tangon;
            var _closure2_slot3 = tangon;
            var _closure2_slot4 = tangon;
            var _closure2_slot5 = tangon;
            var _closure2_slot6 = tangon;
            var _closure2_slot7 = tangon;
            status = _closure1_slot0;
            config = _closure1_slot2;
            entity = 11;
            michal = config[entity];
            golfie = status.bind(tangon)(michal);
            report = golfie.useGuildsBarAnimatedWrapperStyles;
            michal = true;
            golfie = report.bind(golfie)(michal, michal);
            michal = 12;
            report = config[michal];
            romeon = status.bind(tangon)(report);
            yankee = romeon.useStateFromStoresObject;
            report = _closure1_slot7;
            offset = new Array(3);
            offset[0] = report;
            report = _closure1_slot4;
            offset[1] = report;
            report = _closure1_slot5;
            offset[2] = report;
            option = new Array(1);
            option[0] = sequen;
            report = function() {
                entity = {};
                tangon = _closure1_slot7;
                zuuluu = tangon.getGuildId;
                zuuluu = zuuluu.bind(tangon)();
                tangon = _closure2_slot0;
                zuuluu = zuuluu === tangon;
                entity['selected'] = zuuluu;
                report = _closure1_slot4;
                zuuluu = report.isUnavailable;
                zuuluu = zuuluu.bind(report)(tangon);
                entity['isUnavailable'] = zuuluu;
                zuuluu = _closure1_slot5;
                michal = zuuluu.hasUnread;
                michal = michal.bind(zuuluu)(tangon);
                entity['unread'] = michal;
                michal = zuuluu.getMentionCount;
                michal = michal.bind(zuuluu)(tangon);
                entity['mentionCount'] = michal;
                michal = zuuluu.getIsMentionLowImportance;
                michal = michal.bind(zuuluu)(tangon);
                entity['isMentionLowImportance'] = michal;
                return entity;
            };
            option = yankee.bind(romeon)(offset, report, option);
            yankee = option.selected;
            _closure2_slot1 = yankee;
            report = option.mentionCount;
            _closure2_slot2 = report;
            sizing = option.unread;
            _closure2_slot3 = sizing;
            romeon = option.isMentionLowImportance;
            michal = config[michal];
            output = status.bind(tangon)(michal);
            kiloes = output.useStateFromStores;
            michal = _closure1_slot6;
            backup = new Array(1);
            backup[0] = michal;
            foxtra = new Array(2);
            foxtra[0] = sequen;
            foxtra[1] = yankee;
            michal = _closure1_slot1;
            option = 15;
            option = config[option];
            sierra = michal.bind(tangon)(option);
            whisks = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    report = _closure1_slot6;
                    michal = report.getGuild;
                    entity = _closure2_slot0;
                    golfie = michal.bind(report)(entity);
                    report = null;
                    michal = report == golfie;
                    oscard = undefined;
                    entity = undefined;
                    if(michal) { _fun00004_ip = 57; continue _fun00003 }
 37:
                    verify = golfie.getIconURL;
                    option = _closure1_slot10;
                    michal = _closure2_slot1;
                    entity = verify.bind(golfie)(option, michal);
 57:
                    option = report != entity;
                    michal = undefined;
                    if(!option) { _fun00004_ip = 69; continue _fun00003 }
 66:
                    michal = entity;
 69:
                    entity = {};
                    verify = report == golfie;
                    option = undefined;
                    if(verify) { _fun00004_ip = 89; continue _fun00003 }
 80:
                    verify = golfie.toString;
                    option = verify.bind(golfie)();
 89:
                    entity['guildName'] = option;
                    entity['icon'] = michal;
                    report = report != michal;
                    michal = undefined;
                    if(!report) { _fun00004_ip = 166; continue _fun00003 }
 107:
                    option = _closure1_slot1;
                    verify = _closure1_slot2;
                    report = 13;
                    report = verify[report];
                    report = option.bind(oscard)(report);
                    option = _closure1_slot0;
                    tangon = 14;
                    tangon = verify[tangon];
                    tangon = option.bind(oscard)(tangon);
                    tangon = tangon.GuildIconSizes;
                    tangon = tangon.LARGE;
                    zuuluu = _closure2_slot1;
                    michal = report.bind(oscard)(golfie, tangon, zuuluu);
 166:
                    entity['asset'] = michal;
                    return entity;
                }
            };
            quebec = output;
            equals = backup;
            limora = foxtra;
            option = quebec[kiloes](equals, whisks, limora, sierra, status);
            output = option.asset;
            offset = option.icon;
            foxtra = option.guildName;
            _closure2_slot4 = foxtra;
            option = 16;
            option = config[option];
            option = michal.bind(tangon)(option);
            option = option.bind(tangon)(sequen, report, romeon);
            backup = option.badgeTopRight;
            romeon = option.badgeBottomRight;
            source = option.cutouts;
            cntext = _closure1_slot3;
            result = cntext.useMemo;
            kiloes = new Array(1);
            kiloes[0] = sequen;
            option = function() {
                entity = {};
                michal = function() { // Original name: onPress
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        zuuluu = _closure1_slot8;
                        michal = zuuluu.getGuildFolders;
                        tangon = michal.bind(zuuluu)();
                        zuuluu = tangon.findIndex;
                        michal = function(argFoo) {
                            entity = argFoo;
                            zuuluu = entity.guildIds;
                            michal = zuuluu.includes;
                            entity = _closure2_slot0;
                            entity = michal.bind(zuuluu)(entity);
                            return entity;
                        };
                        oscard = zuuluu.bind(tangon)(michal);
                        michal = -1;
                        if(!(oscard > michal)) { _fun00006_ip = 107; continue _fun00005 }
 47:
                        tangon = _closure1_slot1;
                        zuuluu = _closure1_slot2;
                        michal = 17;
                        zuuluu = zuuluu[michal];
                        michal = undefined;
                        report = tangon.bind(michal)(zuuluu);
                        tangon = report.track;
                        michal = _closure1_slot12;
                        zuuluu = michal.GUILD_CLICKED;
                        michal = {};
                        golfie = _closure2_slot0;
                        michal['guild_id'] = golfie;
                        michal['index'] = oscard;
                        michal = tangon.bind(report)(zuuluu, michal);
 107:
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot2;
                        entity = 18;
                        michal = michal[entity];
                        entity = undefined;
                        zuuluu = zuuluu.bind(entity)(michal);
                        michal = _closure2_slot0;
                        michal = zuuluu.bind(entity)(michal);
                        return entity;
                    }
                };
                entity['onPress'] = michal;
                return entity;
            };
            option = result.bind(cntext)(option, kiloes);
            result = cntext.useMemo;
            kiloes = new Array(3);
            kiloes[0] = foxtra;
            kiloes[1] = report;
            kiloes[2] = sizing;
            report = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    michal = _closure2_slot2;
                    entity = null;
                    if(!(entity != michal)) { _fun00008_ip = 26; continue _fun00007 }
 13:
                    michal = _closure2_slot2;
                    entity = 0;
                    if(!(!(michal > entity))) { _fun00008_ip = 193; continue _fun00007 }
 26:
                    michal = _closure2_slot3;
                    entity = true;
                    if(!(entity !== michal)) { _fun00008_ip = 119; continue _fun00007 }
 36:
                    report = _closure1_slot0;
                    golfie = _closure1_slot2;
                    entity = 19;
                    zuuluu = golfie[entity];
                    michal = undefined;
                    zuuluu = report.bind(michal)(zuuluu);
                    tangon = zuuluu.intl;
                    zuuluu = tangon.formatToPlainString;
                    entity = golfie[entity];
                    entity = report.bind(michal)(entity);
                    entity = entity.t;
                    michal = entity./uzRsr;
                    entity = {};
                    report = _closure2_slot4;
                    entity['guildName'] = report;
                    report = _closure2_slot2;
                    entity['mentions'] = report;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    _fun00008_ip = 191; continue _fun00007;
 119:
                    golfie = _closure1_slot0;
                    option = _closure1_slot2;
                    michal = 19;
                    tangon = option[michal];
                    zuuluu = undefined;
                    tangon = golfie.bind(zuuluu)(tangon);
                    report = tangon.intl;
                    tangon = report.formatToPlainString;
                    michal = option[michal];
                    michal = golfie.bind(zuuluu)(michal);
                    michal = michal.t;
                    zuuluu = michal.lzqe4+;
                    michal = {};
                    golfie = _closure2_slot4;
                    michal['guildName'] = golfie;
                    entity = tangon.bind(report)(zuuluu, michal);
 191:
                    _fun00008_ip = 274; continue _fun00007;
 193:
                    golfie = _closure1_slot0;
                    option = _closure1_slot2;
                    michal = 19;
                    tangon = option[michal];
                    zuuluu = undefined;
                    tangon = golfie.bind(zuuluu)(tangon);
                    report = tangon.intl;
                    tangon = report.formatToPlainString;
                    michal = option[michal];
                    michal = golfie.bind(zuuluu)(michal);
                    michal = michal.t;
                    zuuluu = michal./uzRsr;
                    michal = {};
                    golfie = _closure2_slot4;
                    michal['guildName'] = golfie;
                    oscard = _closure2_slot2;
                    michal['mentions'] = oscard;
                    entity = tangon.bind(report)(zuuluu, michal);
 274:
                    return entity;
                }
            };
            kiloes = result.bind(cntext)(report, kiloes);
            report = 20;
            report = config[report];
            report = michal.bind(tangon)(report);
            offset = report.bind(tangon)(sequen, offset, output);
            report = _closure1_slot9;
            report = report.bind(tangon)(sequen, oscard);
            oscard = report.isDragTarget;
            _closure2_slot5 = oscard;
            echoed = report.dragState;
            output = report.overState;
            vacuum = report.itemSize;
            papara = report.dragDropInProgress;
            _closure2_slot6 = papara;
            update = cntext.useMemo;
            result = new Array(1);
            result[0] = sequen;
            report = function() {
                zuuluu = _closure1_slot1;
                tangon = _closure1_slot2;
                entity = 21;
                entity = tangon[entity];
                tangon = undefined;
                zuuluu = zuuluu.bind(tangon)(entity);
                entity = _closure2_slot0;
                report = zuuluu.bind(tangon)(entity);
                var _closure3_slot0 = report;
                entity = {};
                tangon = report.map;
                zuuluu = function(argFoo) {
                    michal = argFoo;
                    entity = {};
                    zuuluu = michal.label;
                    entity['name'] = zuuluu;
                    michal = michal.label;
                    entity['label'] = michal;
                    return entity;
                };
                zuuluu = tangon.bind(report)(zuuluu);
                entity['accessibilityActions'] = zuuluu;
                michal = function(argFoo) { // Original name: onAccessibilityAction
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        michal = argFoo;
                        var _closure4_slot0 = michal;
                        zuuluu = _closure3_slot0;
                        michal = zuuluu.find;
                        entity = function(argFoo) {
                            entity = argFoo;
                            michal = entity.label;
                            entity = _closure4_slot0;
                            entity = entity.nativeEvent;
                            entity = entity.actionName;
                            entity = michal === entity;
                            return entity;
                        };
                        michal = michal.bind(zuuluu)(entity);
                        tangon = null;
                        entity = tangon == michal;
                        if(entity) { _fun00010_ip = 52; continue _fun00009 }
 43:
                        zuuluu = michal.action;
                        entity = tangon == zuuluu;
 52:
                        if(entity) { _fun00010_ip = 64; continue _fun00009 }
 55:
                        entity = michal.action;
                        entity = entity.bind(michal)();
 64:
                        entity = undefined;
                        return entity;
                    }
                };
                entity['onAccessibilityAction'] = michal;
                return entity;
            };
            report = update.bind(cntext)(report, result);
            ctrled = report.accessibilityActions;
            update = report.onAccessibilityAction;
            report = 22;
            report = config[report];
            result = status.bind(tangon)(report);
            report = result.useSharedValue;
            result = report.bind(result)(sequen);
            _closure2_slot7 = result;
            record = cntext.useCallback;
            report = function(argFoo) { // Original name: A
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    zuuluu = argFoo;
                    michal = _closure2_slot6;
                    entity = michal.get;
                    tangon = entity.bind(michal)();
                    if(!tangon) { _fun00012_ip = 43; continue _fun00011 }
 22:
                    michal = _closure2_slot7;
                    entity = michal.get;
                    michal = entity.bind(michal)();
                    entity = _closure2_slot0;
                    tangon = michal === entity;
 43:
                    if(!tangon) { _fun00012_ip = 53; continue _fun00011 }
 46:
                    entity = _closure2_slot5;
                    tangon = !entity;
 53:
                    report = _closure2_slot7;
                    michal = report.set;
                    golfie = _closure2_slot0;
                    entity = null;
                    golfie = entity != golfie;
                    if(!golfie) { _fun00012_ip = 79; continue _fun00011 }
 75:
                    entity = _closure2_slot0;
 79:
                    entity = michal.bind(report)(entity);
                    entity = {};
                    michal = {};
                    if(tangon) { _fun00012_ip = 99; continue _fun00011 }
 91:
                    report = zuuluu.targetOriginY;
                    _fun00012_ip = 152; continue _fun00011;
 99:
                    verify = _closure1_slot0;
                    option = _closure1_slot2;
                    golfie = 23;
                    option = option[golfie];
                    golfie = undefined;
                    offset = verify.bind(golfie)(option);
                    verify = offset.withSpring;
                    option = zuuluu.targetOriginY;
                    golfie = _closure1_slot11;
                    oscard = 'animate-always';
                    report = verify.bind(offset)(option, golfie, oscard);
 152:
                    michal['originY'] = report;
                    if(tangon) { _fun00012_ip = 168; continue _fun00011 }
 160:
                    tangon = zuuluu.targetHeight;
                    _fun00012_ip = 221; continue _fun00011;
 168:
                    option = _closure1_slot0;
                    golfie = _closure1_slot2;
                    oscard = 23;
                    golfie = golfie[oscard];
                    oscard = undefined;
                    verify = option.bind(oscard)(golfie);
                    option = verify.withSpring;
                    golfie = zuuluu.targetHeight;
                    oscard = _closure1_slot11;
                    report = 'animate-always';
                    tangon = option.bind(verify)(golfie, oscard, report);
 221:
                    michal['height'] = tangon;
                    entity['animations'] = michal;
                    michal = {};
                    tangon = zuuluu.currentOriginY;
                    michal['originY'] = tangon;
                    zuuluu = zuuluu.currentHeight;
                    michal['height'] = zuuluu;
                    entity['initialValues'] = michal;
                    return entity;
                }
            };
            zuuluu = {};
            zuuluu['dragDropInProgress'] = papara;
            zuuluu['sharedId'] = result;
            zuuluu['guildId'] = sequen;
            zuuluu['isDragTarget'] = oscard;
            target = 23;
            target = config[target];
            target = status.bind(tangon)(target);
            target = target.withSpring;
            zuuluu['withSpring'] = target;
            target = _closure1_slot11;
            zuuluu['TRANSITION_PHYSICS'] = target;
            report['__closure'] = zuuluu;
            zuuluu = 14096669603718.0;
            report['__workletHash'] = zuuluu;
            zuuluu = _closure1_slot17;
            report['__initData'] = zuuluu;
            zuuluu = new Array(4);
            zuuluu[0] = sequen;
            zuuluu[1] = result;
            zuuluu[2] = oscard;
            zuuluu[3] = papara;
            report = record.bind(cntext)(report, zuuluu);
            zuuluu = _closure1_slot15;
            entity = config[entity];
            michal = michal.bind(tangon)(entity);
            entity = {};
            entity['id'] = sequen;
            entity['draggedItemSize'] = vacuum;
            entity['accessibilityActions'] = ctrled;
            entity['onAccessibilityAction'] = update;
            update = undefined;
            if(oscard) { _fun00002_ip = 687; continue _fun00001 }
 684:
            update = source;
 687:
            entity['cutouts'] = update;
            entity['selected'] = yankee;
            entity['isDragTarget'] = oscard;
            entity['dragState'] = echoed;
            entity['sharedId'] = result;
            result = !yankee;
            entity['circle'] = result;
            entity['overState'] = output;
            entity['unread'] = sizing;
            entity['label'] = kiloes;
            entity['config'] = option;
            entity['styles'] = golfie;
            entity['isDragPreview'] = oscard;
            entity['layout'] = report;
            golfie = _closure1_slot14;
            oscard = _closure1_slot13;
            report = {};
            option = new Array(2);
            option[0] = backup;
            option[1] = romeon;
            report['children'] = option;
            report = golfie.bind(tangon)(oscard, report);
            entity['externalChildren'] = report;
            report = null;
            if(!(report == offset)) { _fun00002_ip = 873; continue _fun00001 }
 796:
            golfie = _closure1_slot15;
            oscard = _closure1_slot1;
            romeon = _closure1_slot2;
            option = 14;
            report = romeon[option];
            oscard = oscard.bind(tangon)(report);
            report = {};
            report['value'] = foxtra;
            report['selected'] = yankee;
            report['animate'] = yankee;
            yankee = _closure1_slot0;
            option = romeon[option];
            option = yankee.bind(tangon)(option);
            option = option.GuildIconSizes;
            option = option.LARGE;
            report['size'] = option;
            report = golfie.bind(tangon)(oscard, report);
            _fun00002_ip = 923; continue _fun00001;
 873:
            option = _closure1_slot15;
            golfie = _closure1_slot1;
            yankee = _closure1_slot2;
            oscard = 24;
            oscard = yankee[oscard];
            golfie = golfie.bind(tangon)(oscard);
            oscard = {};
            oscard['source'] = offset;
            verify = _closure1_slot16;
            verify = verify.guildIcon;
            oscard['style'] = verify;
            report = option.bind(tangon)(golfie, oscard);
 923:
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    michal = tangon.bind(golfie)(michal);
    tangon = 25;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guilds_bar/native/GuildsBarGuild.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();