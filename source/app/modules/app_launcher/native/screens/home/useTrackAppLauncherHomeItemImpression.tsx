// app/modules/app_launcher/native/screens/home/useTrackAppLauncherHomeItemImpression.tsx
export default (function(argFoo, argBar, _, argCor, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot2 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/app_launcher/native/screens/home/useTrackAppLauncherHomeItemImpression.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: useTrackAppLauncherHomeItemImpression
        report = _closure1_slot0;
        tangon = _closure1_slot1;
        entity = 1;
        tangon = tangon[entity];
        entity = undefined;
        tangon = report.bind(entity)(tangon);
        entity = tangon.useTrackAppLauncherItemImpressionOnFirstView;
        entity = entity.bind(tangon)();
        oscard = entity.trackAppLauncherItemImpressionOnFirstView;
        var _closure2_slot0 = oscard;
        entity = {};
        report = _closure1_slot2;
        tangon = report.useCallback;
        zuuluu = new Array(1);
        zuuluu[0] = oscard;
        michal = function(argFoo) {
            entity = argFoo;
            zuuluu = entity.viewableItems;
            michal = zuuluu.forEach;
            entity = function(argFoo) {
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    entity = argFoo;
                    oscard = entity.item;
                    tangon = oscard.type;
                    golfie = _closure1_slot0;
                    entity = _closure1_slot1;
                    report = 2;
                    zuuluu = entity[report];
                    entity = undefined;
                    zuuluu = golfie.bind(entity)(zuuluu);
                    zuuluu = zuuluu.AppLauncherHomeListItemType;
                    zuuluu = zuuluu.RECOMMENDATION_APP;
                    if(!(tangon !== zuuluu)) { _fun00002_ip = 355; continue _fun00001 }
 57:
                    tangon = oscard.type;
                    golfie = _closure1_slot0;
                    zuuluu = _closure1_slot1;
                    zuuluu = zuuluu[report];
                    zuuluu = golfie.bind(entity)(zuuluu);
                    zuuluu = zuuluu.AppLauncherHomeListItemType;
                    zuuluu = zuuluu.RECOMMENDATION_BANNER_CARD;
                    if(!(tangon !== zuuluu)) { _fun00002_ip = 311; continue _fun00001 }
 98:
                    tangon = oscard.type;
                    golfie = _closure1_slot0;
                    zuuluu = _closure1_slot1;
                    zuuluu = zuuluu[report];
                    zuuluu = golfie.bind(entity)(zuuluu);
                    zuuluu = zuuluu.AppLauncherHomeListItemType;
                    zuuluu = zuuluu.SHELF_ITEM;
                    if(!(tangon !== zuuluu)) { _fun00002_ip = 277; continue _fun00001 }
 139:
                    zuuluu = oscard.type;
                    tangon = _closure1_slot0;
                    michal = _closure1_slot1;
                    michal = michal[report];
                    michal = tangon.bind(entity)(michal);
                    michal = michal.AppLauncherHomeListItemType;
                    michal = michal.SHELF_ITEM_TUPLE;
                    if(!(zuuluu === michal)) { _fun00002_ip = 275; continue _fun00001 }
 177:
                    backup = oscard.shelfItem1SectionPosition;
                    golfie = oscard.shelfItem2SectionPosition;
                    michal = oscard.shelfItem1;
                    michal = michal.application;
                    foxtra = michal.id;
                    michal = oscard.shelfItem2;
                    zuuluu = null;
                    tangon = zuuluu == michal;
                    report = undefined;
                    if(tangon) { _fun00002_ip = 232; continue _fun00001 }
 222:
                    michal = michal.application;
                    report = michal.id;
 232:
                    michal = oscard.shelfItem1;
                    michal = michal.application;
                    romeon = michal.flags;
                    michal = oscard.shelfItem2;
                    zuuluu = zuuluu == michal;
                    tangon = undefined;
                    if(zuuluu) { _fun00002_ip = 273; continue _fun00001 }
 263:
                    michal = michal.application;
                    tangon = michal.flags;
 273:
                    _fun00002_ip = 387; continue _fun00001;
 275:
                    return entity;
 277:
                    backup = oscard.sectionPosition;
                    foxtra = oscard.applicationId;
                    michal = oscard.section;
                    michal = michal.application;
                    romeon = michal.flags;
                    report = undefined;
                    golfie = undefined;
                    tangon = undefined;
                    _fun00002_ip = 387; continue _fun00001;
 311:
                    backup = oscard.sectionPosition;
                    michal = oscard.item;
                    michal = michal.application;
                    foxtra = michal.id;
                    michal = oscard.item;
                    michal = michal.application;
                    romeon = michal.flags;
                    report = undefined;
                    golfie = undefined;
                    tangon = undefined;
                    _fun00002_ip = 387; continue _fun00001;
 355:
                    backup = oscard.sectionPosition;
                    michal = oscard.application;
                    foxtra = michal.id;
                    michal = oscard.application;
                    romeon = michal.flags;
                    report = undefined;
                    golfie = undefined;
                    tangon = undefined;
 387:
                    verify = _closure2_slot0;
                    zuuluu = {};
                    sizing = oscard.sectionName;
                    option = global;
                    offset = option.HermesInternal;
                    kiloes = offset.concat;
                    yankee = 'sectionName:';
                    offset = ' applicationId:';
                    kiloes = kiloes.bind(yankee)(sizing, offset, foxtra);
                    zuuluu['itemKey'] = kiloes;
                    kiloes = oscard.sectionName;
                    zuuluu['sectionName'] = kiloes;
                    zuuluu['sectionPosition'] = backup;
                    backup = oscard.sectionOverallPosition;
                    zuuluu['sectionOverallPosition'] = backup;
                    zuuluu['applicationId'] = foxtra;
                    zuuluu['applicationFlags'] = romeon;
                    zuuluu = verify.bind(entity)(zuuluu);
                    verify = null;
                    zuuluu = verify != report;
                    if(!zuuluu) { _fun00002_ip = 493; continue _fun00001 }
 489:
                    zuuluu = verify != golfie;
 493:
                    if(!zuuluu) { _fun00002_ip = 572; continue _fun00001 }
 496:
                    zuuluu = _closure2_slot0;
                    michal = {};
                    verify = oscard.sectionName;
                    option = option.HermesInternal;
                    option = option.concat;
                    option = option.bind(yankee)(verify, offset, report);
                    michal['itemKey'] = option;
                    option = oscard.sectionName;
                    michal['sectionName'] = option;
                    michal['sectionPosition'] = golfie;
                    oscard = oscard.sectionOverallPosition;
                    michal['sectionOverallPosition'] = oscard;
                    michal['applicationId'] = report;
                    michal['applicationFlags'] = tangon;
                    michal = zuuluu.bind(entity)(michal);
 572:
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        michal = tangon.bind(report)(michal, zuuluu);
        entity['trackAppLauncherHomeItemImpression'] = michal;
        return entity;
    };
    zuuluu['useTrackAppLauncherHomeItemImpression'] = michal;
    return entity;
})();