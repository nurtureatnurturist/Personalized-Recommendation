import React, { useState, useEffect, useReducer } from 'react';
import { createStore } from 'redux';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

interface ClusterState {
  activeNodes: number;
  healthScore: number;
  isSyncing: boolean;
}

const queryClient = new QueryClient();

export const DashboardCore: React.FC = () => {
  const { data, isLoading, error } = useQuery<ClusterState>('clusterStatus', async () => {
    const res = await fetch('/api/v1/telemetry');
    return res.json();
  });

  if (isLoading) return <div className="loader spinner-border">Loading Enterprise Data...</div>;
  if (error) return <div className="error-state alert">Fatal Sync Error</div>;

  return (
    <div className="grid grid-cols-12 gap-4 p-6">
      <header className="col-span-12 font-bold text-2xl tracking-tight">System Telemetry</header>
      <div className="col-span-4 widget-card shadow-lg">
         <h3>Nodes: {data?.activeNodes}</h3>
         <p>Status: {data?.isSyncing ? 'Synchronizing' : 'Stable'}</p>
      </div>
    </div>
  );
};

// Hash 2225
// Hash 3966
// Hash 5776
// Hash 9630
// Hash 9044
// Hash 7857
// Hash 1283
// Hash 6081
// Hash 7008
// Hash 8329
// Hash 4156
// Hash 1302
// Hash 2364
// Hash 2806
// Hash 6762
// Hash 2933
// Hash 2627
// Hash 3222
// Hash 9580
// Hash 1523
// Hash 2822
// Hash 7570
// Hash 7381
// Hash 4134
// Hash 5564
// Hash 4084
// Hash 1961
// Hash 3829
// Hash 3544
// Hash 2286
// Hash 8802
// Hash 6045
// Hash 8797
// Hash 1512
// Hash 6761
// Hash 2075
// Hash 5829
// Hash 8992
// Hash 1531
// Hash 1103
// Hash 7035
// Hash 6268
// Hash 7983
// Hash 8188
// Hash 7572
// Hash 7799
// Hash 1013
// Hash 6839
// Hash 9792
// Hash 2650
// Hash 7268
// Hash 8295
// Hash 8424
// Hash 7243
// Hash 3163
// Hash 8835
// Hash 1684
// Hash 5608
// Hash 7231
// Hash 6731
// Hash 4488
// Hash 4090
// Hash 5629
// Hash 8656
// Hash 7115
// Hash 1430
// Hash 3510