// @flow

import React, { Fragment } from 'react';
import { View } from 'react-native';

import styled from 'styled-components';

import { Alert, TYPES } from '~/components/common/alert';
import CustomTab from '~/components/common/CustomTab';
import Loading from '~/components/common/Loading';
import appStyles from '~/styles';

import RestaurantsList from './restaurants-list';
import Map from './map';

import restaurantsList from '../../../../json-models/restaurants.json';

const Container = styled(View)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

const ContentContainer = styled(View)`
  flex: 1;
  justify-content: flex-end;
  align-items: flex-end;
`;

const CustomTabWrapper = styled(View)`
  position: absolute;
`;

type Props = {
  turnOffMoveRestaurantList: Function,
  shouldMoveRestaurantList: boolean,

  indexRestaurantSelected: number,
  onDishesTypeChange: Function,
  restaurants: Array<Object>,
  onSelectMarker: Function,
  userLocation: Object,
  hasSomeData: boolean,
  error: boolean,
};

const NearYou = ({
  turnOffMoveRestaurantList,
  shouldMoveRestaurantList,
  indexRestaurantSelected,
  onDishesTypeChange,

  onSelectMarker,
  userLocation,
  hasSomeData,
  restaurants,
  error,
}: Props): Object => (
  <Container>
    {hasSomeData && (
      <Fragment>
        <ContentContainer>
          <Map
            indexLocationSelected={indexRestaurantSelected}
            onSelectMarker={onSelectMarker}
            userLocation={userLocation}
            restaurants={restaurants}
          />
          {restaurantsList.length > 0 && (
            <RestaurantsList
              turnOffMoveRestaurantList={turnOffMoveRestaurantList}
              shouldMoveRestaurantList={shouldMoveRestaurantList}
              indexRestaurantSelected={indexRestaurantSelected}
              onSelectMarker={onSelectMarker}
              restaurants={restaurants}
            />
          )}
        </ContentContainer>
      </Fragment>
    )}
  </Container>
);

export default NearYou;
